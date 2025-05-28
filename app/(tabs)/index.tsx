import { ScrollView, Image } from 'react-native';
import { Box, Text } from '@/src/theme';

export default function Index() {
  return (
    <ScrollView>
      <Box flex={1} backgroundColor="mainBackground" padding="l">
        {/* ✅ Logo */}
        <Box alignItems="center" marginBottom="l">
          <Image
            source={require('@/assets/images/logo2.png')}
            style={{ width: 120, height: 120, resizeMode: 'contain' }}
          />
        </Box>

        {/* ✅ Intro */}
        <Text variant="hero" textAlign="center" marginBottom="m">
          Bienvenue sur Rap_App
        </Text>
        <Text variant="body" textAlign="center" marginBottom="xl">
          Centralisez et optimisez votre suivi des formations, partenaires, prospections
          et performances en temps réel 📊
        </Text>

        {/* ✅ Aperçu */}
        <Text variant="subheader" marginBottom="m">APERÇU EN TEMPS RÉEL</Text>
        <Text variant="body" marginBottom="s">Vos statistiques clés</Text>
        <Box marginBottom="xl">
          <Text variant="body">Formations Actives : </Text>
          <Text variant="body">Saturation Moyenne : </Text>
          <Text variant="body">Transformation : </Text>
          <Text variant="body">Prépa Comp :  / Total VAE : </Text>
          <Text variant="body">Jurys réalisés cette année : </Text>
        </Box>

        {/* ✅ Modules */}
        <Text variant="subheader" marginBottom="m">FONCTIONNALITÉS</Text>
        <Text variant="body" marginBottom="l">Modules Disponibles</Text>

        <Box marginBottom="m">
          <Text variant="body">• Formations — suivi des sessions & indicateurs</Text>
          <Text variant="body">• Partenaires — gestion des conventions</Text>
          <Text variant="body">• Rapports — statistiques en temps réel</Text>
          <Text variant="body">• Prospections — actions de terrain et ciblage</Text>
          <Text variant="body">• Entreprises — base de données partenaires</Text>
          <Text variant="body">• Prépa Comp — objectifs hebdo/annuels</Text>
          <Text variant="body">• VAE — suivi par centre et par statut</Text>
          <Text variant="body">• Suivi des Jurys — planification et objectifs</Text>
        </Box>

        {/* ✅ Présentation finale */}
        <Text variant="subheader" marginTop="xl" marginBottom="m">
          Qu&apos;est-ce que Rap App ?
        </Text>
        <Text variant="body">
          Un outil complet de pilotage pour vos formations, statistiques, plans d&apos;action
          et suivi partenaires. Visualisez, filtrez, exportez et analysez vos données en toute simplicité.
        </Text>
      </Box>
    </ScrollView>
  );
}
