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
