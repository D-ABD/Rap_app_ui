import React, { createContext, useContext, useEffect, useState } from 'react';
import { storeTokens, getTokens, clearTokens } from '@/src/api/storage';
import { login as loginAPI, getUserProfile } from '@/src/services/auth_service';
import { User } from '@/src/types/user';
import Toast from 'react-native-toast-message'; // ✅ Ajout du toast

// Définition du type du contexte
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// Création du contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider à englober autour de l'app
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Connexion de l'utilisateur
   * - Appelle l'API /token/
   * - Stocke les tokens
   * - Récupère les infos du profil
   */
  const login = async (email: string, password: string) => {
    const { access, refresh } = await loginAPI(email, password);
    await storeTokens(access, refresh);
    const userData = await getUserProfile();
    setUser(userData);
  };

  /**
   * Déconnexion de l'utilisateur
   * - Supprime les tokens
   * - Réinitialise l'état `user`
   * - Affiche une notification
   */
  const logout = async () => {
    await clearTokens();
    setUser(null);
    Toast.show({
      type: 'info',
      text1: 'Déconnexion réussie',
    });
  };

  /**
   * Tentative de restauration de session au démarrage
   * - Vérifie si des tokens sont présents
   * - Récupère le profil utilisateur
   */
  const restoreSession = async () => {
    try {
      const { access, refresh } = await getTokens();
      if (access && refresh) {
        const userData = await getUserProfile();
        setUser(userData);
      }
    } catch (e) {
      console.warn('Erreur lors de la restauration de session :', e);
      await clearTokens();
      setUser(null);
    } finally {
      setIsLoading(false); // Qu'on ait réussi ou non, on a fini
    }
  };

  // Appelé une seule fois quand l'app démarre
  useEffect(() => {
    restoreSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook personnalisé pour accéder au contexte Auth
 * À utiliser dans n'importe quel composant avec `useAuth()`
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
