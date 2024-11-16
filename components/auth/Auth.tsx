import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Redirect } from 'expo-router';
import { fetchAuthSession } from 'aws-amplify/auth';
import { Auth } from '@/components/Auth';
import { useColorScheme } from 'react-native';

export default function SignIn() {
  const [authState, setAuthState] = React.useState({
    isLoading: true,
    isAuthenticated: false,
    error: null as string | null,
  });
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { tokens } = await fetchAuthSession();
      setAuthState({
        isLoading: false,
        isAuthenticated: !!tokens?.accessToken,
        error: null,
      });
    } catch (error) {
      // If the error is about user not authenticated, this is expected for new users
      if (error instanceof Error && 
          error.message.includes('User needs to be authenticated')) {
        setAuthState({
          isLoading: false,
          isAuthenticated: false,
          error: null,
        });
      } else {
        setAuthState({
          isLoading: false,
          isAuthenticated: false,
          error: error instanceof Error ? error.message : 'An error occurred',
        });
      }
    }
  };

  if (authState.isLoading) {
    return (
      <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
        </View>
      </SafeAreaView>
    );
  }

  if (authState.error) {
    return (
      <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
        <View style={styles.errorContainer}>
          <Text style={[styles.errorText, isDark && styles.textLight]}>
            {authState.error}
          </Text>
          <Text 
            style={[styles.retryText, isDark && styles.textLight]}
            onPress={checkAuth}
          >
            Tap to retry
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  if (authState.isAuthenticated) {
    return <Redirect href="/(app)/home" />;
  }

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <View style={styles.content}>
        <Auth />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: '#DC2626',
    textAlign: 'center',
    marginBottom: 12,
  },
  retryText: {
    fontSize: 16,
    color: '#4A90E2',
    textDecorationLine: 'underline',
  },
  textLight: {
    color: '#FFFFFF',
  },
});