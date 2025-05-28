import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { Box, Text } from '@/src/theme';
import Toast from 'react-native-toast-message';

export default function LogoutButton() {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    Toast.show({ type: 'info', text1: 'Déconnecté avec succès' });
    router.replace('/welcome');
  };

  return (
    <Pressable onPress={handleLogout}>
      <Box
        flexDirection="row"
        alignItems="center"
        backgroundColor="error"
        paddingHorizontal="m"
        paddingVertical="s"
        borderRadius="m"
      >
        <FontAwesome5 name="sign-out-alt" size={16} color="#fff" />
        <Text variant="button" marginLeft="s">Se déconnecter</Text>
      </Box>
    </Pressable>
  );
}
