import { Authenticator, AuthenticatorProps, ThemeProvider, useAuthenticator } from "@aws-amplify/ui-react-native";
import React, { useEffect } from "react";
import { View, StyleSheet, useColorScheme } from "react-native";
import { useRouter } from 'expo-router';
import { LightAuthAmplifyTheme, DarkAuthAmplifyTheme } from '@/constants/Theme';

export type AuthProps = AuthenticatorProps & {
    lightColor?: string;
    darkColor?: string;
};

export function AuthContent() {
    const { authStatus } = useAuthenticator();
    const router = useRouter();

    useEffect(() => {
        if (authStatus === 'authenticated') {
            router.replace('/(app)/home');
        }
    }, [authStatus]);

    return <View style={styles.container} />;
}

export function Auth() {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? DarkAuthAmplifyTheme : LightAuthAmplifyTheme;

    return (
        <ThemeProvider theme={theme}>
            <Authenticator
                loginMechanisms={['email']}
                initialState="signUp"
            >
                <AuthContent />
            </Authenticator>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});