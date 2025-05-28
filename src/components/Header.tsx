/**
 * Header
 *
 * 💡 En-tête global de l'application (affiché en haut de l'écran).
 * Affiche :
 * - Le logo de l'app + le titre (cliquable pour retourner à l'accueil)
 * - Une icône profil (accès à la page utilisateur)
 * - Un bouton de déconnexion (affiché uniquement à partir de la taille tablette)
 *
 * Props :
 * @param title (optionnel) Titre affiché à côté du logo. Par défaut : "RAP App"
 *
 * Utilisation typique :
 * <Header title="Tableau de bord" />
 */

import { Pressable, Image } from 'react-native';
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
      {/* 🔗 Logo + Titre cliquable */}
      <Pressable onPress={() => router.replace('/')}>
        <Box flexDirection="row" alignItems="center">
          <Image
            source={require('@/assets/images/logo.png')}
            style={{ width: 28, height: 28, marginRight: 8, resizeMode: 'contain' }}
          />
          <Text variant="header">{title}</Text>
        </Box>
      </Pressable>

      {/* 👤 Profil + 🔓 Logout */}
      <Box flexDirection="row" alignItems="center" gap="s">
        {/* Profil */}
        <Pressable onPress={() => router.push('/user')}>
          <FontAwesome5 name="user" size={20} color={theme.colors.primary} />
        </Pressable>

        {/* Logout visible uniquement à partir de tablette */}
        <Box width={{ phone: 0, tablet: 'auto' }} overflow="hidden">
          <LogoutButton />
        </Box>
      </Box>
    </Box>
  );
}
