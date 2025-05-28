// app/(screen)/screen/parametres/objectifs_jury_vae.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function ObjectifsJuryVae() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des objectifs jury & VAE...');
    // Tu peux ici déclencher un appel API si besoin
  };

  return (
    <ScreenWrapper title="Objectifs jury & VAE" onRefresh={handleRefresh}>
      <Text variant="body">
        Définir et suivre les objectifs associés aux jurys et aux démarches VAE.
      </Text>
    </ScreenWrapper>
  );
}
