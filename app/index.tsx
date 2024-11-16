import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Redirect, Href } from 'expo-router';
import { getCurrentUser } from 'aws-amplify/auth';

interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
}

// Define your app routes
type AppRoutes = {
  '/(app)/home': undefined;
  '/(auth)/landing': undefined;
};

export default function App() {
  const [authState, setAuthState] = useState<AuthState>({
    isLoggedIn: false,
    isLoading: true,
  });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const user = await getCurrentUser();
      setAuthState({ isLoggedIn: !!user, isLoading: false });
    } catch (error) {
      setAuthState({ isLoggedIn: false, isLoading: false });
    }
  };

  if (authState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' }}>
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  // If user is authenticated, redirect to the main app home screen
  if (authState.isLoggedIn) {
    return <Redirect href={'/(app)/home' as Href<keyof AppRoutes>} />;
  }

  // If user is not authenticated, redirect to the landing page
  return <Redirect href={'/(auth)/landing' as Href<keyof AppRoutes>} />;
}