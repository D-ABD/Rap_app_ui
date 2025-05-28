import { Box, Text } from '@/src/theme';

export default function PrepaCompScreen() {
  return (
    <Box
      flex={1}
      backgroundColor="mainBackground"
      justifyContent="center"
      alignItems="center"
      padding="l"
    >
      <Text variant="header">Prépa Compétences</Text>
    </Box>
  );
}
