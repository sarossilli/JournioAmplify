import '@testing-library/jest-native';

// Mock the Amplify UI Components
jest.mock('@aws-amplify/ui-react-native', () => ({
  useAuthenticator: jest.fn(() => ({
    authStatus: 'unauthenticated',
    user: null,
  })),
  Authenticator: ({ children }) => children,
  ThemeProvider: ({ children }) => children,
}));

// Mock expo-router
jest.mock('expo-router', () => ({
  useRouter: () => ({
    replace: jest.fn(),
    push: jest.fn(),
    back: jest.fn(),
  }),
}));

// Mock useColorScheme
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  default: jest.fn(() => 'light'),
}));

// Mock Amplify Auth
jest.mock('aws-amplify/auth', () => ({
  signIn: jest.fn(),
  signOut: jest.fn(),
  getCurrentUser: jest.fn(),
  fetchAuthSession: jest.fn(),
}));