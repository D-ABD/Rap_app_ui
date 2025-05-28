// app/(screen)/screen/parametres/objectifs_prepa.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function ObjectifsPrepa() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des objectifs prépa...');
    // Appel API ou logique métier ici
  };

  return (
    <ScreenWrapper title="Objectifs Prépa" onRefresh={handleRefresh}>
      <Text variant="body">
        Suivre et ajuster les objectifs pédagogiques des préparations.
      </Text>
    </ScreenWrapper>
  );
}
