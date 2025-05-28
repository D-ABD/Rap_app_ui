// app/(screen)/screen/vae_jury/ajouter_jury.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function AjouterJury() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement de l’écran Ajouter Jury...');
    // Tu peux ici réinitialiser un formulaire ou recharger des options
  };

  return (
    <ScreenWrapper title="Ajouter Jury" onRefresh={handleRefresh}>
      <Text variant="body">
        Ajoutez un nouveau jury pour l&apos;évaluation VAE.
      </Text>
    </ScreenWrapper>
  );
}
