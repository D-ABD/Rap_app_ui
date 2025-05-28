// app/(screen)/screen/vae_jury/suivi_jurys.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function SuiviJury() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement du suivi des jurys...');
    // Appel API ou rechargement des données ici
  };

  return (
    <ScreenWrapper title="Suivi Jury" onRefresh={handleRefresh}>
      <Text variant="body">
        Suivi des activités, convocations et résultats des jurys VAE.
      </Text>
    </ScreenWrapper>
  );
}
