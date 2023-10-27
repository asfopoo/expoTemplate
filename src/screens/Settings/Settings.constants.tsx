import { MaterialIcons } from '@expo/vector-icons';

type Icon = keyof typeof MaterialIcons.glyphMap;

type Options = {
  title: string;
  icon: Icon;
  route: string;
};

export const settingsOptions: Options[] = [
  {
    title: 'Subscription',
    icon: 'subscriptions',
    route: 'Subscription',
  },
  {
    title: 'Theme',
    icon: 'style',
    route: 'theme',
  },
  {
    title: 'Notifications',
    icon: 'notifications',
    route: 'Notifications',
  },
  {
    title: 'Support',
    icon: 'support',
    route: 'Support',
  },
  {
    title: 'Scan Settings',
    icon: 'settings',
    route: 'ScanSettings',
    // time reset for history, does scanner increment the count
  },
  {
    title: 'About',
    icon: 'info',
    route: 'About',
  },
  {
    title: 'Sign Out',
    icon: 'logout',
    route: 'SignOut',
  },
];
