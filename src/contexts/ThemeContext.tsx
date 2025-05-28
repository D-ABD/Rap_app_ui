/**
 * ThemeContext.tsx
 *
 * 🎨 Fournit un contexte global pour gérer le thème (clair ou sombre) dans l'application.
 *
 * ✅ Fonctionnalités :
 * - Utilise le thème système (light/dark) comme valeur initiale
 * - Permet à l’utilisateur de basculer manuellement entre les deux modes (`toggleMode`)
 * - Expose le thème actif (`theme`) à injecter dans le `ThemeProvider` de Restyle
 *
 * 🔁 Exposition :
 * - `ThemeProviderWrapper` : à englober autour de l’app (dans le layout racine)
 * - `useThemeMode()` : hook personnalisé pour accéder à `mode`, `toggleMode`, `theme`
 *
 * Exemple :
 * ```tsx
 * const { mode, toggleMode, theme } = useThemeMode();
 * ```
 *
 * 📦 Dépendances :
 * - `useColorScheme()` pour détecter le thème système
 * - `themes` défini dans `theme.ts` (structure `light` / `dark`)
 */

import React, { createContext, useContext, useState, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { themes } from '@/src/theme';

// 📌 Type possible du thème
type ThemeMode = 'light' | 'dark';

// 📌 Structure exposée par le contexte
type ThemeContextType = {
  mode: ThemeMode;
  toggleMode: () => void;
  theme: typeof themes.light;
};

// Création du contexte
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Fournisseur de thème à englober autour de l'application (dans `RootLayout`)
 */
export const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  // Utilise le thème du système (dark ou light)
  const systemScheme = useColorScheme();

  const [mode, setMode] = useState<ThemeMode>(
    systemScheme === 'dark' ? 'dark' : 'light'
  );

  // Permet de basculer manuellement entre clair et sombre
  const toggleMode = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Valeur mémorisée pour éviter les re-renders inutiles
  const value = useMemo(
    () => ({
      mode,
      toggleMode,
      theme: mode === 'dark' ? themes.dark : themes.light,
    }),
    [mode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

/**
 * Hook personnalisé pour accéder au contexte de thème :
 * - `mode` (light/dark)
 * - `toggleMode()` pour changer
 * - `theme` à passer dans le ThemeProvider de Restyle
 */
export const useThemeMode = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeProviderWrapper');
  }
  return context;
};
