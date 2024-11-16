// components/__tests__/Auth.test.tsx
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { useRouter } from 'expo-router';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { useColorScheme } from 'react-native';
import { Auth, AuthContent } from '../auth/Auth';

// Mock the external dependencies
jest.mock('expo-router', () => ({
    useRouter: jest.fn()
}));

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
    default: jest.fn()
}));

// Test data
const mockAuthStates = {
    unauthenticated: {
        authStatus: 'unauthenticated',
        user: null,
    },
    authenticated: {
        authStatus: 'authenticated',
        user: { username: 'testuser' },
    },
    loading: {
        authStatus: 'configuring',
        user: null,
    },
};

describe('AuthContent', () => {
    const mockRouter = {
        replace: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (useRouter as jest.Mock).mockReturnValue(mockRouter);
        (useAuthenticator as jest.Mock).mockReturnValue(mockAuthStates.unauthenticated);
    });

    it('renders without crashing', () => {
        const { toJSON } = render(<AuthContent />);
        expect(toJSON()).toBeTruthy();
    });

    it('redirects to home when authenticated', async () => {
        (useAuthenticator as jest.Mock).mockReturnValue(mockAuthStates.authenticated);

        render(<AuthContent />);

        await waitFor(() => {
            expect(mockRouter.replace).toHaveBeenCalledWith('/(app)/home');
        });
    });

    it('does not redirect when unauthenticated', () => {
        render(<AuthContent />);
        expect(mockRouter.replace).not.toHaveBeenCalled();
    });

    it('does not redirect when in loading state', () => {
        (useAuthenticator as jest.Mock).mockReturnValue(mockAuthStates.loading);

        render(<AuthContent />);
        expect(mockRouter.replace).not.toHaveBeenCalled();
    });

    it('matches snapshot', () => {
        const { toJSON } = render(<AuthContent />);
        expect(toJSON()).toMatchSnapshot();
    });
});

describe('Auth', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        (useColorScheme as jest.Mock).mockReturnValue('light');
        (useAuthenticator as jest.Mock).mockReturnValue(mockAuthStates.unauthenticated);
    });

    it('renders without crashing', () => {
        const { toJSON } = render(<Auth />);
        expect(toJSON()).toBeTruthy();
    });

    it('matches light theme snapshot', () => {
        (useColorScheme as jest.Mock).mockReturnValue('light');
        const { toJSON } = render(<Auth />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('matches dark theme snapshot', () => {
        (useColorScheme as jest.Mock).mockReturnValue('dark');
        const { toJSON } = render(<Auth />);
        expect(toJSON()).toMatchSnapshot();
    });
});