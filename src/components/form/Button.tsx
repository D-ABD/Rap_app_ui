import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';
import { Box, Text, useTheme } from '@/src/theme';

import type { Theme } from '@/src/theme';

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary';
  marginTop?: keyof Theme['spacing'];
};

const Button: React.FC<Props> = ({
  label,
  onPress,
  loading = false,
  variant = 'primary',
  marginTop,
}) => {
  const theme = useTheme();

  const backgroundColor =
    variant === 'secondary'
      ? theme.colors.grayLight
      : theme.colors.primary;

  const textColor =
    variant === 'secondary'
      ? theme.colors.text
      : theme.colors.textInverse;

  return (
    <Box marginTop={marginTop}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor,
          borderRadius: theme.borderRadii.m,
          paddingVertical: theme.spacing.s,
          alignItems: 'center',
        }}
      >
        {loading ? (
          <ActivityIndicator color={textColor} />
        ) : (
          <Text variant="button" style={{ color: textColor }}>
            {label}
          </Text>
        )}
      </TouchableOpacity>
    </Box>
  );
};

export default Button;
