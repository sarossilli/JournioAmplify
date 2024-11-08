import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function AccountScreen() {
    const { user, signOut } = useAuthenticator();

    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
            headerImage={
                <Image
                    source={require('@/assets/images/partial-react-logo.png')}
                    style={styles.reactLogo}
                />
            }>
            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }} // Placeholder profile image
                    style={styles.profileImage}
                />
                <Text style={styles.username}>{user?.signInDetails?.loginId || "User's Email"}</Text>
            </View>

            {/* Settings Section */}
            <View style={styles.settingsContainer}>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingItem}>
                    <Text style={styles.settingText}>Change Password</Text>
                </TouchableOpacity>
            </View>

            {/* Sign Out Button */}
            <Button title="Sign Out" onPress={signOut} color="#e74c3c" />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },
    profileContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    settingsContainer: {
        width: '100%',
        marginVertical: 20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    settingItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    settingText: {
        fontSize: 16,
        color: '#007AFF',
        textAlign: 'center',
    },
});
