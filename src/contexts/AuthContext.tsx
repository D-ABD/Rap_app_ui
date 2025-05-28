/**
 * AuthContext.tsx
 *
 * 💡 Fournit le contexte global d'authentification à toute l'application.
 * Ce fichier centralise :
 * - la connexion et la déconnexion
 * - la restauration de session au lancement
 * - le stockage et la récupération des tokens
 * - les informations utilisateur (`User`)
 *
 * Fournit un `AuthProvider` à englober autour de l'app, et un hook `useAuth()`.
 *
 * ✅ Fonctionnalités :
 * - `login(email, password)` : appelle `/token/`, stocke les tokens, récupère le profil
 * - `logout()` : supprime les tokens + reset `user`
 * - `restoreSession()` : au démarrage, tente de restaurer la session depuis les tokens stockés
 *
 * 📦 Utilise :
 * - `auth_service.ts` pour les appels API `/token/` et `/users/me/`
 * - `storage.ts` pour stocker/effacer les tokens avec `AsyncStorage`
 * - `Toast` pour informer l'utilisateur des actions importantes
 *
 * Exposition :
 * ```ts
 * const { user, isAuthenticated, login, logout, isLoading } = useAuth();
 * ```
 */

import React, { createContext, useContext, useEffect, useState } from 'react';
import { storeTokens, getTokens, clearTokens } from '@/src/api/storage';
import { login as loginAPI, getUserProfile } from '@/src/services/auth_service';
import { User } from '@/src/types/user';
import Toast from 'react-native-toast-message';

// 🔒 Définition du type du contexte
type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

// 🧠 Création du contexte
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 🧩 Provider à englober autour de l'app dans le layout racine
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Connexion de l'utilisateur :
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
   * Déconnexion de l'utilisateur :
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
   * Tentative de restauration de session au démarrage :
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
      setIsLoading(false);
    }
  };

  // 🔄 Restauration de session au premier render
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
 * Hook personnalisé `useAuth()` :
 * Permet d'accéder au contexte Auth dans n'importe quel composant.
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
