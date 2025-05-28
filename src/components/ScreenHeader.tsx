import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Box, Text, useTheme } from '@/src/theme';

interface ScreenHeaderProps {
  title: string;
  onRefresh?: () => void;
}

export default function ScreenHeader({ title, onRefresh }: ScreenHeaderProps) {
  const navigation = useNavigation();
  const theme = useTheme();

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
      {/* 🔙 Bouton retour */}
      <Pressable onPress={() => navigation.goBack()}>
        <Box flexDirection="row" alignItems="center">
          <FontAwesome5 name="arrow-left" size={16} color={theme.colors.primary} />
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
        <Box width={60} /> // Espace réservé si pas de bouton
      )}
    </Box>
  );
}
