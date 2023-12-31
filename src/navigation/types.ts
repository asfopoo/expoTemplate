import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  NavigatorScreenParams,
  CompositeScreenProps,
} from '@react-navigation/native';
import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

import { PRIVATE_ROUTES, PUBLIC_ROUTES, TAB_ROUTES } from './routes';

export type AuthStackParamList = {
  [PUBLIC_ROUTES.LOGIN_SCREEN]: undefined;
  [PUBLIC_ROUTES.REGISTRATION_SCREEN]: undefined;
  [PUBLIC_ROUTES.ORGANIZATION_REGISTRATION_SCREEN]: undefined;
};

export type RegistrationScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Registration'
>;

export type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Login'
>;

export type OrganizationRegistrationScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'Organization Registration'
>;

export type RootStackParamList = {
  [TAB_ROUTES.CHAT_TAB]: NavigatorScreenParams<ChatTabParamList>;
  [TAB_ROUTES.COUNT_TAB]: NavigatorScreenParams<CountTabParamList>;
  [TAB_ROUTES.SCANNER_TAB]: NavigatorScreenParams<ScannerTabParamList>;
  [TAB_ROUTES.SETTINGS_TAB]: NavigatorScreenParams<SettingsTabParamList>;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;

export type ChatTabScreenProps<T extends keyof ChatTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ChatTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type CountTabScreenProps<T extends keyof CountTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<CountTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type ScannerTabScreenProps<T extends keyof ScannerTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ScannerTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type SettingsTabScreenProps<T extends keyof SettingsTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<SettingsTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type ChatTabParamList = {
  [PRIVATE_ROUTES.CHAT_SCREEN]: undefined;
};

export type CountTabParamList = {
  [PRIVATE_ROUTES.COUNT_SCREEN]: undefined;
};

export type ScannerTabParamList = {
  [PRIVATE_ROUTES.SCANNER_SCREEN]: undefined;
};

export type SettingsTabParamList = {
  [PRIVATE_ROUTES.SETTINGS_SCREEN]: undefined;
};

export type TabNavigatorParamList = {
  [TAB_ROUTES.CHAT_TAB]: undefined;
  [TAB_ROUTES.COUNT_TAB]: undefined;
  [TAB_ROUTES.SCANNER_TAB]: undefined;
  [TAB_ROUTES.SETTINGS_TAB]: undefined;
};
