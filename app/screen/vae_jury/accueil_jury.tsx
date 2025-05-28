// app/(screen)/screen/vae_jury/accueil_jury.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function JuryHome() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de l’accueil jury...');
    // Rechargement éventuel des données liées aux jurys
  };

  return (
    <ScreenWrapper title="Accueil Jury" onRefresh={handleRefresh}>
      <Text variant="body">
        Page d&apos;accueil dédiée à la gestion des jurys.
      </Text>
    </ScreenWrapper>
  );
}
