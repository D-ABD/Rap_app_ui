import { Box, Text } from '@/src/theme';
import LogoutButton from '@/src/components/Boutons/LogoutButton';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useThemeMode } from '@/src/contexts/ThemeContext';

export default function ParametresScreen() {
  const { mode, toggleMode } = useThemeMode();
  const router = useRouter();

  return (
    <Box flex={1} backgroundColor="mainBackground" padding="l">
      <Text variant="header" marginBottom="xl">Paramètres</Text>

      {/* 🔁 Changer de thème */}
      <Box marginBottom="m">
        <Pressable onPress={toggleMode}>
          <Box backgroundColor="primary" padding="m" borderRadius="m" alignItems="center">
            <Text variant="button">
              Passer en mode {mode === 'light' ? 'sombre 🌙' : 'clair ☀️'}
            </Text>
          </Box>
        </Pressable>
      </Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/admin')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Admin</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/bilans_prepa')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Bilans Prépa</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/CentreScreen')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Centre</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/commentaires')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Commentaires</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/evenements')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Evenements</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/historique_formations')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Historique formations</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/historique_prospections')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Historique prospections</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/objectifs_jury_vae')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Objectifs jury VAE</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/objectifs_prepa')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Objectifs Prépa</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/statuts')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Statuts</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/test')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Test</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/type_offres')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">Type offres</Text>
    </Box>
  </Pressable>
</Box>

<Box marginBottom="m">
  <Pressable onPress={() => router.push('/screen/parametres/user_param')}>
    <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
      <Text variant="button">User param</Text>
    </Box>
  </Pressable>
</Box>


      {/* 🧪 Tester le JWT */}
      <Box marginBottom="m">
        <Pressable onPress={() => router.push('/screen/parametres/test')}>
          <Box backgroundColor="success" padding="m" borderRadius="m" alignItems="center">
            <Text variant="button">Tester le JWT</Text>
          </Box>
        </Pressable>
      </Box>

      <LogoutButton />
    </Box>
  );
}
