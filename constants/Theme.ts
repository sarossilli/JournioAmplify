
// theme.ts
import { Colors } from '@/constants/Colors'

export const LightAuthAmplifyTheme = {
    name: 'light-theme',
    tokens: {
        colors: {
            background: {
                primary: Colors.light.background,
            },
            font: {
                primary: Colors.light.text,
                secondary: '#555555', // Optional: customize as a secondary text color if needed
            },
            border: {
                primary: Colors.light.border || '#dcdcdc', // Using border color if available, otherwise fallback
            },
            brand: {
                primary: {
                    '10': '#3498db', // Optional: a distinct brand color for primary action elements like buttons
                },
            },
            button: {
                primary: {
                    background: '#3498db', // Optional: button color for the light theme
                    color: '#ffffff', // Button text color
                },
            },
            input: {
                background: '#f0f0f0', // Light background for input fields
                border: Colors.light.border || '#dcdcdc',
                font: Colors.light.text,
            },
        },
        components: {
        },
    },
};

export const DarkAuthAmplifyTheme = {
    name: 'dark-theme',
    tokens: {
        colors: {
            background: {
                primary: Colors.dark.background,
            },
            font: {
                primary: Colors.dark.text,
                secondary: '#aaaaaa', // Optional: secondary text color for contrast
            },
            border: {
                primary: Colors.dark.border || '#3b3b3b', // Darker border for dark theme
            },
            brand: {
                primary: {
                    '10': '#9b59b6', // Optional: distinct brand color for dark theme
                },
            },
            button: {
                primary: {
                    background: '#9b59b6', // Optional: button color for dark theme
                    color: '#ffffff', // Button text color
                },
            },
            input: {
                background: '#1a1a1a', // Darker background for input fields
                border: Colors.dark.border || '#3b3b3b',
                font: Colors.dark.text,
            },
        },
        components: {
        },
    },
};
