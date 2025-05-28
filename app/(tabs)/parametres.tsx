import React from 'react';
import { ScrollView, Pressable } from 'react-native';
import { Box, Text } from '@/src/theme';
import LogoutButton from '@/src/components/Boutons/LogoutButton';
import { useRouter } from 'expo-router';
import { useThemeMode } from '@/src/contexts/ThemeContext';

export default function ParametresScreen() {
  const { mode, toggleMode } = useThemeMode();
  const router = useRouter();

  const liens = [
    { label: 'Admin', path: 'admin' },
    { label: 'Bilans Prépa', path: 'bilans_prepa' },
    { label: 'Centre', path: 'centre' },
    { label: 'Commentaires', path: 'commentaires' },
    { label: 'Evenements', path: 'evenements' },
    { label: 'Historique formations', path: 'historique_formations' },
    { label: 'Historique prospections', path: 'historique_prospections' },
    { label: 'Objectifs jury VAE', path: 'objectifs_jury_vae' },
    { label: 'Objectifs Prépa', path: 'objectifs_prepa' },
    { label: 'Statuts', path: 'statuts' },
    { label: 'Test', path: 'test' },
    { label: 'Type offres', path: 'type_offres' },
    { label: 'User param', path: 'user_param' },
  ];

  return (
    <Box flex={1} backgroundColor="mainBackground">
      <ScrollView contentContainerStyle={{ padding: 16 }}>
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

        {/* 🔗 Liens vers les autres paramètres */}
        {liens.map(({ label, path }) => (
          <Box key={path} marginBottom="m">
            <Pressable onPress={() => router.push(`/screen/parametres/${path}` as any)}>
              <Box backgroundColor="primaryLight" padding="m" borderRadius="m" alignItems="center">
                <Text variant="button">{label}</Text>
              </Box>
            </Pressable>
          </Box>
        ))}

        {/* 🔓 Déconnexion */}
        <LogoutButton />
      </ScrollView>
    </Box>
  );
}
