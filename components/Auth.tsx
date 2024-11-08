import { Authenticator, AuthenticatorProps, ThemeProvider, useAuthenticator } from "@aws-amplify/ui-react-native";
import React from "react";
import { Button, View, StyleSheet, useColorScheme } from "react-native";
import { LightAuthAmplifyTheme, DarkAuthAmplifyTheme } from '@/constants/Theme';

export type AuthProps = AuthenticatorProps & {
    lightColor?: string;
    darkColor?: string;
};

export function Auth() {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? DarkAuthAmplifyTheme : LightAuthAmplifyTheme;

    return (
        <ThemeProvider theme={theme}>
            <View style={styles.container}>
                <Authenticator loginMechanisms={['email']} components={{}} />
            </View>
        </ThemeProvider>
    );
}

// Define styles to center and limit the width of the container
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        maxWidth: 400,
        width: '100%',
    },
});

