// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AuthLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack />
    </SafeAreaView>
  );
}
