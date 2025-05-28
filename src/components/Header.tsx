import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Box, Text, useTheme } from '@/src/theme';
import LogoutButton from './Boutons/LogoutButton';

type HeaderProps = {
  title?: string;
};

export default function Header({ title = 'RAP App' }: HeaderProps) {
  const router = useRouter();
  const theme = useTheme();

  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="mainBackground"
      paddingVertical="s"
      paddingHorizontal={{ phone: 'm', tablet: 'xl', desktop: 'xxl' }}
      borderBottomWidth={1}
      borderColor="grayLight"
    >
      {/* 🔗 Titre cliquable : retour à l'accueil */}
      <Pressable onPress={() => router.replace('/')}>
        <Text variant="header">{title}</Text>
      </Pressable>

      <Box flexDirection="row" alignItems="center" gap="s">
        {/* Profil */}
        <Pressable onPress={() => router.push('/user')}>
          <FontAwesome5 name="user" size={20} color={theme.colors.primary} />
        </Pressable>

        {/* Logout visible uniquement à partir de tablette */}
        <Box
          width={{ phone: 0, tablet: 'auto' }}
          overflow="hidden"
        >
          <LogoutButton />
        </Box>
      </Box>
    </Box>
  );
}
