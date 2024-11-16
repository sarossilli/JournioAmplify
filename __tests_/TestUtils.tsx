// __tests__/test-utils.ts
export const mockAuthenticator = {
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
  
  export const mockRouter = {
    replace: jest.fn(),
    push: jest.fn(),
    back: jest.fn(),
  };
  
  export const setupAuthMock = (authState = mockAuthenticator.unauthenticated) => {
    const { useAuthenticator } = require('@aws-amplify/ui-react-native');
    (useAuthenticator as jest.Mock).mockReturnValue(authState);
  };
  
  export const setupRouterMock = () => {
    const { useRouter } = require('expo-router');
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
  };