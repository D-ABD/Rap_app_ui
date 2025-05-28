import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { Box, Text } from '@/src/theme';
import { Pressable, ActivityIndicator } from 'react-native';

export default function WelcomeScreen() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center" backgroundColor="mainBackground">
        <ActivityIndicator size="large" color="#5A31F4" />
        <Text variant="body" marginTop="m">Chargement en cours...</Text>
      </Box>
    );
  }

  return (
    <Box flex={1} justifyContent="center" alignItems="center" backgroundColor="mainBackground" padding="l">
      <Text variant="hero" marginBottom="m">Bienvenue 👋</Text>
      <Text variant="body" marginBottom="xl">Veuillez vous connecter pour continuer</Text>

      <Pressable onPress={() => router.push('/login')}>
        <Box
          backgroundColor="primary"
          padding="m"
          borderRadius="m"
          alignItems="center"
          width={200}
        >
          <Text variant="button">Se connecter</Text>
        </Box>
      </Pressable>
    </Box>
  );
}
