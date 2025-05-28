import { Box, Text } from '@/src/theme';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <Box flex={1} backgroundColor="mainBackground" alignItems="center" justifyContent="center" padding="l">
      <Text variant="header" marginBottom="l">
        Accueil
      </Text>

      <Link href="/about" asChild>
        <Box>
          <Text variant="link">Aller à l&apos;écran About</Text>
        </Box>
      </Link>
    </Box>
  );
}
