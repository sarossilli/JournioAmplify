/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from 'react-native';
import { DarkAuthAmplifyTheme, DarkTheme, LightAuthAmplifyTheme, LightTheme } from '@/constants/Theme';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? DarkTheme : LightTheme;
};

export const getAmplifyTheme = () => {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? DarkAuthAmplifyTheme : LightAuthAmplifyTheme;
};
