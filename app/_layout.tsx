/**
 * RootLayout (global)
 *
 * 💡 Ce layout est utilisé comme "layout racine" de toute l'application.
 * Il englobe tous les écrans grâce à `<Slot />` (Expo Router).
 *
 * Il gère :
 * - Le contexte de thème (clair/sombre) via `ThemeProviderWrapper`
 * - Le contexte d’authentification via `AuthProvider`
 * - L’application du thème avec `ThemeProvider` (Restyle)
 * - Un conteneur principal avec `SafeAreaView`
 * - L’affichage global des toasts via `react-native-toast-message`
 *
 * Structure :
 * <ThemeProviderWrapper>
 *   <AuthProvider>
 *     <ThemeProvider>
 *       <SafeAreaView>
 *         <Slot />  ← rendu dynamique selon la route
 *         <Toast />
 *       </SafeAreaView>
 *     </ThemeProvider>
 *   </AuthProvider>
 * </ThemeProviderWrapper>
 *
 * ⚠️ Ne pas oublier que `<Slot />` injecte la page en cours.
 */

import { Slot } from 'expo-router';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { AuthProvider } from '@/src/contexts/AuthContext';
import { Box } from '@/src/theme';
import { ThemeProviderWrapper, useThemeMode } from '@/src/contexts/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProviderWrapper>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </ThemeProviderWrapper>
  );
}

// Séparé pour pouvoir utiliser le hook `useThemeMode`
function AppLayout() {
  const { theme } = useThemeMode();

  return (
    <ThemeProvider theme={theme}>
      <Box flex={1} backgroundColor="mainBackground">
        <SafeAreaView style={{ flex: 1 }}>
          <Slot />
          <Toast />
        </SafeAreaView>
      </Box>
    </ThemeProvider>
  );
}
