// app/(screen)/screen/parametres/user_param.tsx
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { Text } from '@/src/theme';

export default function UsersParam() {
  const handleRefresh = () => {
    console.log('⟳ Rafraîchissement des utilisateurs...');
    // Appel API ou mise à jour des données ici
  };

  return (
    <ScreenWrapper title="Utilisateurs" onRefresh={handleRefresh}>
      <Text variant="body">
        Gérer les comptes utilisateurs et leurs paramètres.
      </Text>
    </ScreenWrapper>
  );
}
