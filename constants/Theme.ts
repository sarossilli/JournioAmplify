// theme.js
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';

// Amplify Light Theme
export const LightAuthAmplifyTheme = {
    name: 'light-theme',
    tokens: {
        colors: {
            background: {
                primary: Colors.light.background,
            },
            font: {
                primary: Colors.light.text,
                secondary: '#555555',
            },
            border: {
                primary: Colors.light.border || '#dcdcdc',
            },
            brand: {
                primary: {
                    '10': '#3498db',
                },
            },
            button: {
                primary: {
                    background: '#3498db',
                    color: '#ffffff',
                },
            },
            input: {
                background: '#f0f0f0',
                border: Colors.light.border || '#dcdcdc',
                font: Colors.light.text,
            },
        },
        components: {
            // Additional Amplify components styling if needed
        },
    },
};

// Amplify Dark Theme
export const DarkAuthAmplifyTheme = {
    name: 'dark-theme',
    tokens: {
        colors: {
            background: {
                primary: Colors.dark.background,
            },
            font: {
                primary: Colors.dark.text,
                secondary: '#aaaaaa',
            },
            border: {
                primary: Colors.dark.border || '#3b3b3b',
            },
            brand: {
                primary: {
                    '10': '#9b59b6',
                },
            },
            button: {
                primary: {
                    background: '#9b59b6',
                    color: '#ffffff',
                },
            },
            input: {
                background: '#1a1a1a',
                border: Colors.dark.border || '#3b3b3b',
                font: Colors.dark.text,
            },
        },
        components: {
            // Additional Amplify components styling if needed
        },
    },
};

// Combined Theme Configuration
export const LightTheme = {
    ...LightAuthAmplifyTheme,
    colors: {
        background: Colors.light.background,
        text: Colors.light.text,
        border: Colors.light.border,
        buttonBackground: '#3498db',
        buttonText: '#ffffff',
        inputBackground: '#f0f0f0',
        inputBorder: Colors.light.border,
        inputText: Colors.light.text,
    },
};

export const DarkTheme = {
    ...DarkAuthAmplifyTheme,
    colors: {
        background: Colors.dark.background,
        text: Colors.dark.text,
        border: Colors.dark.border,
        buttonBackground: '#9b59b6',
        buttonText: '#ffffff',
        inputBackground: '#1a1a1a',
        inputBorder: Colors.dark.border,
        inputText: Colors.dark.text,
    },
};

