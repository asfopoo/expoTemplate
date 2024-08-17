export const PUBLIC_ROUTES = {
  LOGIN_SCREEN: 'Login',
  REGISTRATION_SCREEN: 'Registration',
  ORGANIZATION_REGISTRATION_SCREEN: 'Organization Registration',
} as const;

export const PRIVATE_ROUTES = {
  CHAT_SCREEN: 'Chat',
  COUNT_SCREEN: 'Count',
  SCANNER_SCREEN: 'Scanner',
  SETTINGS_SCREEN: 'Settings',
  PROFILE_SCREEN: 'Profile',
  HOME_SCREEN: 'Home',
  ABOUT_SCREEN: 'About',
  SCANNER_SETTINGS_SCREEN: 'Scanner Settings',
  APPEARANCE_SETTINGS_SCREEN: 'Appearance Settings',
} as const;

export const TAB_ROUTES = {
  CHAT_TAB: 'Chat Tab',
  COUNT_TAB: 'Count Tab',
  SCANNER_TAB: 'Scanner Tab',
  SETTINGS_TAB: 'Settings Tab',
  PROFILE_TAB: 'Profile Tab',
  HOME_TAB: 'Home Tab',
} as const;
