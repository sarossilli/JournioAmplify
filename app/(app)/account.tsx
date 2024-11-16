import React from 'react';
import { View, Text, Pressable, StyleSheet, useColorScheme } from 'react-native';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'expo-router';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome } from '@expo/vector-icons';

export default function AccountScreen() {
  const router = useRouter();
  const { user } = useAuthenticator();
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleSignOut = async () => {
    try {
      await signOut();
      router.replace('/(auth)/landing');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <View style={styles.header}>
        <FontAwesome 
          name="user-circle" 
          size={80} 
          color={isDark ? '#FFFFFF' : '#000000'} 
        />
        <Text style={[styles.username, isDark && styles.textLight]}>
          {user?.username || user?.username || 'User'}
        </Text>
        <Text style={[styles.email, isDark && styles.textLightSecondary]}>
          {user?.username || ''}
        </Text>
      </View>

      <View style={styles.content}>
        <Pressable
          style={styles.menuItem}
          onPress={() => console.log('Edit Profile')}
        >
          <FontAwesome 
            name="edit" 
            size={24} 
            color={isDark ? '#FFFFFF' : '#000000'} 
          />
          <Text style={[styles.menuText, isDark && styles.textLight]}>
            Edit Profile
          </Text>
          <FontAwesome 
            name="chevron-right" 
            size={16} 
            color={isDark ? '#666666' : '#999999'} 
          />
        </Pressable>

        <Pressable
          style={styles.menuItem}
          onPress={() => console.log('Settings')}
        >
          <FontAwesome 
            name="cog" 
            size={24} 
            color={isDark ? '#FFFFFF' : '#000000'} 
          />
          <Text style={[styles.menuText, isDark && styles.textLight]}>
            Settings
          </Text>
          <FontAwesome 
            name="chevron-right" 
            size={16} 
            color={isDark ? '#666666' : '#999999'} 
          />
        </Pressable>

        <Pressable
          style={[styles.signOutButton, isDark && styles.signOutButtonDark]}
          onPress={handleSignOut}
        >
          <FontAwesome name="sign-out" size={20} color="#FFFFFF" />
          <Text style={styles.signOutText}>Sign Out</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.version, isDark && styles.textLightSecondary]}>
          Version 1.0.0
        </Text>
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
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#000000',
  },
  email: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 16,
    color: '#000000',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DC2626',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 40,
    gap: 8,
  },
  signOutButtonDark: {
    backgroundColor: '#991B1B',
  },
  signOutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  version: {
    fontSize: 14,
    color: '#666666',
  },
  textLight: {
    color: '#FFFFFF',
  },
  textLightSecondary: {
    color: '#A0A0A0',
  },
});