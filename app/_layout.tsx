import { Slot } from 'expo-router';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { AuthProvider } from '@/src/contexts/AuthContext';
import { Box } from '@/src/theme';
import { ThemeProviderWrapper, useThemeMode } from '@/src/contexts/ThemeContext';

export default function RootLayout() {
  return (
    // ✅ Le context de thème doit être au-dessus de tout
    <ThemeProviderWrapper>
      <AuthProvider>
        <AppLayout />
      </AuthProvider>
    </ThemeProviderWrapper>
  );
}

// Séparé pour permettre le hook useThemeMode()
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
