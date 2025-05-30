import React from 'react';
import { TextInput as RNTextInput, TextInputProps } from 'react-native';
import { Box, Text, useTheme } from '@/src/theme';

type Props = TextInputProps & {
  label?: string;
  error?: string;
};

const TextInput: React.FC<Props> = ({ label, error, ...rest }) => {
  const theme = useTheme();

  return (
    <Box marginBottom="m">
      {label && (
        <Text variant="body" marginBottom="xs">
          {label}
        </Text>
      )}
      <Box
        borderWidth={1}
        borderColor={error ? 'error' : 'grayLight'}
        borderRadius="m"
        paddingHorizontal="s"
        paddingVertical="xs"
        backgroundColor="mainBackground"
      >
        <RNTextInput
          style={{
            height: 40,
            fontSize: 16,
            color: theme.colors.text,
          }}
          placeholderTextColor={theme.colors.grayDark}
          {...rest}
        />
      </Box>
      {error && (
        <Text variant="error" marginTop="xs">
          {error}
        </Text>
      )}
    </Box>
  );
};

export default TextInput;
