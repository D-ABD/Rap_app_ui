// app/(screen)/screen/prepa_comp/suivi_hebdo.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function SuiviHebdoPrepa() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement du suivi hebdomadaire prépa...');
    // Tu peux ici recharger les données de suivi
  };

  return (
    <ScreenWrapper title="Suivi hebdomadaire Prépa" onRefresh={handleRefresh}>
      <Text variant="body">
        Suivi des activités hebdomadaires dans le cadre de la préparation.
      </Text>
    </ScreenWrapper>
  );
}
