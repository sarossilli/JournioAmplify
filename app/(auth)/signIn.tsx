import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Redirect } from 'expo-router';
import { fetchAuthSession } from 'aws-amplify/auth';
import { Auth } from '@/components/Auth';

export default function SignIn() {
  const [authState, setAuthState] = React.useState({
    isLoading: true,
    isAuthenticated: false,
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const { tokens } = await fetchAuthSession();
      setAuthState({
        isLoading: false,
        isAuthenticated: !!tokens?.accessToken,
      });
    } catch (error) {
      setAuthState({
        isLoading: false,
        isAuthenticated: false,
      });
    }
  };

  if (authState.isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
        </View>
      </SafeAreaView>
    );
  }

  if (authState.isAuthenticated) {
    return <Redirect href="/(app)/home" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Auth />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});