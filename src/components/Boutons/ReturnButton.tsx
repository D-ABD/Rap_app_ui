/**
 * ReturnButton.tsx
 *
 * 🔙 Bouton de retour intelligent, utilisé dans les écrans personnalisés.
 *
 * ✅ Fonctionnalité principale :
 * - Si l'on peut revenir à l'écran précédent (`navigation.canGoBack()`), on revient en arrière
 * - Sinon, on redirige vers une route de secours (`fallbackTo`, par défaut `/`)
 *
 * Ce composant peut être utilisé dans des layouts ou des headers personnalisés,
 * en dehors de la logique native de stack navigation.
 *
 * Exemple d'utilisation :
 * ```tsx
 * <ReturnButton fallbackTo="/dashboard" />
 * ```
 *
 * Props :
 * - `fallbackTo?: string` : route à utiliser si aucun retour possible (par défaut `/`)
 */

import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { Box, Text, useTheme } from '@/src/theme';

// ✅ Typage strict du fallback
type RoutePath = Parameters<typeof router.replace>[0];

type ReturnButtonProps = {
  fallbackTo?: RoutePath;
};

export default function ReturnButton({ fallbackTo = '/' }: ReturnButtonProps) {
  const navigation = useNavigation();
  const theme = useTheme();

  const handleReturn = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      router.replace(fallbackTo);
    }
  };

  return (
    <Pressable onPress={handleReturn}>
      <Box
        flexDirection="row"
        alignItems="center"
        borderWidth={1}
        borderColor="primary"
        borderRadius="m"
        paddingVertical="s"
        paddingHorizontal="m"
        alignSelf="flex-start"
      >
        <FontAwesome5 name="arrow-left" size={16} color={theme.colors.primary} />
        <Text variant="button" marginLeft="s">Retour</Text>
      </Box>
    </Pressable>
  );
}
