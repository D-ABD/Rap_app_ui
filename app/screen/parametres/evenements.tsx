// app/(screen)/screen/parametres/evenements.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function Evenements() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des évènements...');
    // Lancer une requête API si besoin
  };

  return (
    <ScreenWrapper title="Évènements" onRefresh={handleRefresh}>
      <Text variant="body">
        Gestion et suivi des évènements liés à l&apos;application.
      </Text>
    </ScreenWrapper>
  );
}
