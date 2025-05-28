/**
 * LoginScreen
 *
 * 💡 Écran de connexion (authentification) pour l’utilisateur.
 *
 * Fonctionnalités :
 * - Affiche un formulaire avec email + mot de passe
 * - Gère l’état local (email, mot de passe, chargement, erreurs)
 * - Appelle `login()` depuis `AuthContext` pour authentifier l’utilisateur
 * - Redirige vers `/dashboard` si la connexion est réussie
 * - Affiche un toast de confirmation ou une erreur si échec
 *
 * Technologies utilisées :
 * - React Native : TextInput, Pressable, ActivityIndicator
 * - Expo Router : `useRouter()` pour la redirection
 * - AuthContext : `useAuth()` pour déclencher le login
 * - Restyle : `Box`, `Text` pour le design cohérent
 * - Toasts : `react-native-toast-message` pour les retours utilisateur
 *
 * 📌 Fichier à placer dans `app/(auth)/login.tsx`
 */

import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/src/contexts/AuthContext';
import { Box, Text } from '@/src/theme';
import { TextInput, Pressable, ActivityIndicator } from 'react-native';
import Toast from 'react-native-toast-message';

export default function LoginScreen() {
  const { login } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setIsSubmitting(true);
    setError('');
    try {
      await login(email, password);
      Toast.show({
        type: 'success',
        text1: 'Connexion réussie',
      });
      router.replace('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (
        typeof err === 'object' &&
        err !== null &&
        'response' in err &&
        typeof (err as any).response?.data === 'object'
      ) {
        const data = (err as any).response.data;
        const messages = Object.values(data).flat().join('\n');
        setError(messages || 'Une erreur inconnue est survenue.');
      } else {
        setError('Une erreur inconnue est survenue.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box flex={1} justifyContent="center" backgroundColor="mainBackground" padding="l">
      <Text variant="hero" marginBottom="xl">Connexion</Text>

      <Text variant="body" marginBottom="s">Email</Text>
      <Box
        borderWidth={1}
        borderColor="grayLight"
        borderRadius="m"
        marginBottom="m"
        paddingHorizontal="m"
        paddingVertical="s"
      >
        <TextInput
          placeholder="email@example.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholderTextColor="#999"
          style={{ fontSize: 16 }}
        />
      </Box>

      <Text variant="body" marginBottom="s">Mot de passe</Text>
      <Box
        borderWidth={1}
        borderColor="grayLight"
        borderRadius="m"
        marginBottom="m"
        paddingHorizontal="m"
        paddingVertical="s"
      >
        <TextInput
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#999"
          style={{ fontSize: 16 }}
        />
      </Box>

      {error.length > 0 && (
        <Text variant="error" marginBottom="m">{error}</Text>
      )}

      <Pressable
        onPress={handleLogin}
        disabled={isSubmitting}
        style={({ pressed }) => ({
          opacity: pressed || isSubmitting ? 0.6 : 1,
        })}
      >
        <Box
          backgroundColor="primary"
          padding="m"
          borderRadius="m"
          alignItems="center"
        >
          {isSubmitting ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text variant="button">Se connecter</Text>
          )}
        </Box>
      </Pressable>
    </Box>
  );
}
