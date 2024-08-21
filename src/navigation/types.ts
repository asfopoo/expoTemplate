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

/** Public Routes  **/

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

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type AuthStackScreenProps<T extends keyof AuthStackParamList> =
  StackScreenProps<AuthStackParamList, T>;

/** Private routes **/

export type RootStackParamList = {
  [TAB_ROUTES.METRICS_TAB]: NavigatorScreenParams<MetricsTabParamList>;
  [TAB_ROUTES.MONEY_TAB]: NavigatorScreenParams<MoneyTabParamList>;
  [TAB_ROUTES.SETTINGS_TAB]: NavigatorScreenParams<SettingsTabParamList>;
  [TAB_ROUTES.WAITLIST_TAB]: NavigatorScreenParams<WaitlistTabParamList>;
  [TAB_ROUTES.HOME_TAB]: NavigatorScreenParams<HomeTabParamList>;
};

export type MetricsTabScreenProps<T extends keyof MetricsTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MetricsTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type MoneyTabScreenProps<T extends keyof MoneyTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MoneyTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type SettingsTabScreenProps<T extends keyof SettingsTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<SettingsTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type ProfileTabScreenProps<T extends keyof ProfileTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<ProfileTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type WaitlistTabScreenProps<T extends keyof WaitlistTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<WaitlistTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type MetricsTabParamList = {
  [PRIVATE_ROUTES.METRICS_SCREEN]: undefined;
};

export type MoneyTabParamList = {
  [PRIVATE_ROUTES.MONEY_SCREEN]: undefined;
};

export type SettingsTabParamList = {
  [PRIVATE_ROUTES.SETTINGS_SCREEN]: undefined;
  [PRIVATE_ROUTES.ABOUT_SCREEN]: undefined;
  [PRIVATE_ROUTES.APPEARANCE_SETTINGS_SCREEN]: undefined;
};

export type ProfileTabParamList = {
  [PRIVATE_ROUTES.PROFILE_SCREEN]: undefined;
};

export type WaitlistTabParamList = {
  [PRIVATE_ROUTES.WAITLIST_SCREEN]: undefined;
};

export type HomeTabParamList = {
  [PRIVATE_ROUTES.HOME_SCREEN]: undefined;
};

export type TabNavigatorParamList = {
  [TAB_ROUTES.METRICS_TAB]: undefined;
  [TAB_ROUTES.MONEY_TAB]: undefined;
  [TAB_ROUTES.SETTINGS_TAB]: undefined;
  [TAB_ROUTES.PROFILE_TAB]: undefined;
  [TAB_ROUTES.HOME_TAB]: undefined;
};
