import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { PRIVATE_ROUTES } from '../../navigation/routes';

type Options = {
  title: string;
  icon: () => JSX.Element;
  route: string;
};

type Props = {
  iconColor: string;
};

export function getSettingOptions({ iconColor }: Props): Options[] {
  return [
    {
      title: 'Scan Settings',
      icon: () => <Feather name="settings" size={24} color={iconColor} />,
      route: PRIVATE_ROUTES.SCANNER_SETTINGS_SCREEN,
    },
    {
      title: 'Appearance',
      icon: () => (
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={24}
          color={iconColor}
        />
      ),
      route: PRIVATE_ROUTES.APPEARANCE_SETTINGS_SCREEN,
    },
    {
      title: 'About',
      icon: () => <AntDesign name="infocirlceo" size={24} color={iconColor} />,
      route: PRIVATE_ROUTES.ABOUT_SCREEN,
    },
    {
      title: 'Sign Out',
      icon: () => <Ionicons name="exit-outline" size={24} color={iconColor} />,
      route: 'SignOut',
    },
  ];
}
