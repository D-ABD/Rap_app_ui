 import { useEffect } from 'react';
import { useRouter, Slot } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import Header from '@/src/components/Header';
import { Box } from '@/src/theme';

export default function ScreenLayout() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/welcome');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) return null;

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Header />
      <Slot />
    </Box>
  );
}
