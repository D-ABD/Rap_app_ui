// app/(screen)/screen/parametres/type_offres.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function TypeOffres() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des types d’offres...');
    // Ajoute ici un appel API si nécessaire
  };

  return (
    <ScreenWrapper title="Types d'offres" onRefresh={handleRefresh}>
      <Text variant="body">
        Gestion des types d&apos;offres proposés dans le cadre du programme.
      </Text>
    </ScreenWrapper>
  );
}
