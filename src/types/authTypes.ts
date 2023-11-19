import { User } from './userTypes';

export type AuthState = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

export type AuthAction =
  | { type: 'RESTORE_TOKEN'; authToken: string | null }
  | { type: 'SIGN_IN'; authToken: string; refreshToken: string }
  | { type: 'SIGN_OUT' };

export type AuthContextType = {
  dispatchAuth: (action: AuthAction) => void;
  authState: AuthState;
  signIn: (authToken: string, refreshToken: string) => void;
  signOut: () => void;
};
