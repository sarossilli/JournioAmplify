import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";
import { Authenticator } from '@aws-amplify/ui-react-native';
import { Stack } from 'expo-router';

// Prevent splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

// Configure Amplify
Amplify.configure(outputs);

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Authenticator.Provider>
        <Stack
          screenOptions={{
            headerShown: false,
            animation: 'fade',
            contentStyle: {
              backgroundColor: colorScheme === 'dark' ? '#121212' : '#FFFFFF',
            },
          }}
        >
          <Stack.Screen 
            name="index" 
            options={{
              headerShown: false,
              animation: 'fade',
            }}
          />
          <Stack.Screen 
            name="(auth)" 
            options={{
              headerShown: false,
              animation: 'fade',
            }}
          />
          <Stack.Screen 
            name="(app)" 
            options={{
              headerShown: false,
              animation: 'fade',
              // Prevent going back to auth screens
              gestureEnabled: false,
            }}
          />
        </Stack>
      </Authenticator.Provider>
    </ThemeProvider>
  );
}

// Prevent import errors in development
export {
  // Catch any errors
  ErrorBoundary,
} from 'expo-router';