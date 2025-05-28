import { Box, Text } from '@/src/theme';

export default function AboutScreen() {
  return (
    <Box flex={1} backgroundColor="mainBackground" justifyContent="center" alignItems="center">
      <Text variant="header">À propos</Text>
    </Box>
  );
}
