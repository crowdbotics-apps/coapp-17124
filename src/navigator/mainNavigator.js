import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile47679Navigator from '../features/UserProfile47679/navigator';
import Tutorial47678Navigator from '../features/Tutorial47678/navigator';
import NotificationList47650Navigator from '../features/NotificationList47650/navigator';
import Settings47649Navigator from '../features/Settings47649/navigator';
import Settings47641Navigator from '../features/Settings47641/navigator';
import UserProfile47639Navigator from '../features/UserProfile47639/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile47679: { screen: UserProfile47679Navigator },
Tutorial47678: { screen: Tutorial47678Navigator },
NotificationList47650: { screen: NotificationList47650Navigator },
Settings47649: { screen: Settings47649Navigator },
Settings47641: { screen: Settings47641Navigator },
UserProfile47639: { screen: UserProfile47639Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
