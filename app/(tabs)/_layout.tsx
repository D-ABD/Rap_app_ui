import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useAuth } from '@/src/contexts/AuthContext';
import { Tabs, useRouter } from 'expo-router';
import Header from '@/src/components/Header';
import { Box, themes } from '@/src/theme';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabsLayout() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const colorScheme = useColorScheme();

  const isDark = colorScheme === 'dark';
  const currentTheme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/welcome');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) return null;

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <Header />

      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: currentTheme.colors.primary,
          tabBarInactiveTintColor: currentTheme.colors.grayDark,
          tabBarStyle: {
            backgroundColor: currentTheme.colors.mainBackground,
            borderTopWidth: 1,
            borderTopColor: currentTheme.colors.grayLight,
            height: 60,
            paddingBottom: 6,
            paddingTop: 4,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'circle'; // fallback

            switch (route.name) {
              case 'dashboard':
                iconName = 'home';
                break;
              case 'centre':
                iconName = 'building';
                break;
              case 'user':
                iconName = 'user';
                break;
              case 'parametres':
                iconName = 'cog';
                break;
              default:
                iconName = 'circle';
            }

            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
      />
    </Box>
  );
}
