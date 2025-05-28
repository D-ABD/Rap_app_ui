/**
 * ReturnButton.tsx
 *
 * 🔙 Bouton de retour basique.
 * Utilise `navigation.goBack()` pour revenir à l’écran précédent dans la pile de navigation.
 *
 * ✅ Fonctionne uniquement si la pile contient un écran précédent.
 * À utiliser dans les écrans où un retour est toujours possible.
 *
 * Exemple d'utilisation :
 * ```tsx
 * <ReturnButton />
 * ```
 *
 * 📝 Remarque :
 * Pour une version plus robuste avec un `fallbackTo` (en cas de pile vide),
 * utilise la version améliorée de ce bouton dans les écrans accessibles depuis des tabs ou liens directs.
 */

import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, Text, useTheme } from '@/src/theme';

export default function ReturnButton() {
  const navigation = useNavigation();
  const theme = useTheme();

  return (
    <Pressable onPress={() => navigation.goBack()}>
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
