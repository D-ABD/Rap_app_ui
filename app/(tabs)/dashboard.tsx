// app/(tabs)/index.tsx ou autre écran
import { ScrollView } from 'react-native';
import { Box, Text } from '@/src/theme';
import DashboardCard from '@/src/components/cards/DashboardCard';

export default function DashboardScreen() {
  return (
    <ScrollView>
      <Box flex={1} backgroundColor="mainBackground" padding="l" gap="l">
        <Text variant="subheader" marginBottom="s">APERÇU EN TEMPS RÉEL</Text>

        {/* 🧱 Grille responsive */}
        <Box
          flexDirection={{ phone: 'column', tablet: 'row' }}
          gap="m"
          flexWrap="wrap"
        >
          <DashboardCard title="Formations Actives" value="78%" />
          <DashboardCard title="Saturation Moyenne" value="65%" />
        </Box>

        <Box
          flexDirection={{ phone: 'column', tablet: 'row' }}
          gap="m"
          flexWrap="wrap"
        >
          <DashboardCard title="Transformation" value="12%" />
          <DashboardCard title="Prépa Comp / VAE" value="34 / 50" />
          <DashboardCard title="Jurys Réalisés (2024)" value="22" />
        </Box>
      </Box>
    </ScrollView>
  );
}
