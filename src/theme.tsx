import {
  createTheme,
  createBox,
  createText,
  ThemeProvider,
  useTheme,
} from '@shopify/restyle';

// 🎨 Palette de couleurs centralisée
const palette = {
  purple: '#5A31F4',
  purpleLight: '#8C6FF7',
  purpleDark: '#3F22AB',

  green: '#0ECD9D',
  greenLight: '#56DCBA',
  greenDark: '#0A906E',

  red: '#FF3B30',
  yellow: '#FFD60A',

  white: '#F0F2F3',
  black: '#0B0B0B',
  grayLight: '#D9DBE1',
  grayDark: '#4B4B4B',
};

// === Thème clair ===
const lightTheme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purple,
    text: palette.black,
    textInverse: palette.white,
    primary: palette.purple,
    primaryLight: palette.purpleLight,
    primaryDark: palette.purpleDark,
    success: palette.green,
    successLight: palette.greenLight,
    successDark: palette.greenDark,
    error: palette.red,
    warning: palette.yellow,
    grayLight: palette.grayLight,
    grayDark: palette.grayDark,
  },
  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
    xxl: 64,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
    full: 9999,
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      color: 'text',
    },
    header: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'text',
    },
    subheader: {
      fontSize: 22,
      fontWeight: '600',
      color: 'text',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
    button: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'textInverse',
      textAlign: 'center',
    },
    hero: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'primary',
    },
    error: {
      fontSize: 14,
      color: 'error',
    },
    link: {
      fontSize: 16,
      color: 'primary',
      textDecorationLine: 'underline',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    desktop: 1024,
  },
});

// === Thème sombre ===
const darkTheme: typeof lightTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    mainBackground: palette.black,
    cardPrimaryBackground: palette.grayDark,
    text: palette.white,
    textInverse: palette.black,
    grayLight: palette.grayDark,
    grayDark: palette.grayLight,
  },
};

// ✅ Export des thèmes
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

// ✅ Types & composants stylés
export type Theme = typeof lightTheme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();

// ✅ Hooks utiles
export { ThemeProvider, useTheme };
