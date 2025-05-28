// app/(screen)/screen/crm/partenaires.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function Partenaires() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des partenaires...');
    // Ici tu peux lancer une requête API si besoin
  };

  return (
    <ScreenWrapper title="Partenaires" onRefresh={handleRefresh}>
      <Text variant="body">
        Liste des partenaires référencés dans l&apos;application.
      </Text>
    </ScreenWrapper>
  );
}
