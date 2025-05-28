import { Box, Text } from '@/src/theme';

export default function Dashboard() {
  return (
    <Box flex={1} backgroundColor="mainBackground" padding="l">
      <Text variant="header">Bienvenue sur le dashboard</Text>
    </Box>
  );
}
