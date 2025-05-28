/**
 * ScreenHeader
 *
 * 💡 En-tête standard pour les écrans de l'application.
 * Affiche :
 * - Un bouton retour intelligent (goBack ou redirection fallback)
 * - Un titre centré
 * - Un bouton de rafraîchissement (optionnel)
 *
 * Props :
 * @param title      Le titre affiché au centre de l’en-tête.
 * @param onRefresh  (optionnel) Fonction déclenchée lors du clic sur ⟳ (refresh).
 * @param fallbackTo (optionnel) Route utilisée si le retour arrière n’est pas possible.
 *                   Par défaut : "/"
 *
 * Utilisation typique :
 * <ScreenHeader title="Centres" onRefresh={handleRefresh} fallbackTo="/dashboard" />
 */

import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter, type Router } from 'expo-router';
import { Box, Text, useTheme } from '@/src/theme';

interface ScreenHeaderProps {
  title: string;
  onRefresh?: () => void;
  fallbackTo?: Parameters<Router['replace']>[0];
}

export default function ScreenHeader({ title, onRefresh, fallbackTo = '/' }: ScreenHeaderProps) {
  const navigation = useNavigation();
  const router = useRouter();
  const theme = useTheme();

  const handleReturn = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace(fallbackTo);
    }
  };

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="l"
      paddingVertical="m"
      borderBottomWidth={1}
      borderColor="grayLight"
      backgroundColor="mainBackground"
    >
      {/* 🔙 Bouton retour intelligent */}
      <Pressable onPress={handleReturn}>
        <Box flexDirection="row" alignItems="center">
          <FontAwesome5
            name={navigation.canGoBack() ? 'arrow-left' : 'home'}
            size={16}
            color={theme.colors.primary}
          />
          <Text variant="button" marginLeft="s">Retour</Text>
        </Box>
      </Pressable>

      {/* 🏷️ Titre */}
      <Text variant="subheader">{title}</Text>

      {/* 🔁 Bouton rafraîchir */}
      {onRefresh ? (
        <Pressable onPress={onRefresh}>
          <Text variant="button" color="text">⟳ Rafraîchir</Text>
        </Pressable>
      ) : (
        <Box width={60} />
      )}
    </Box>
  );
}
