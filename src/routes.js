import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Main from './page/Main';
import Search from './page/Search';
import Courses from './page/Courses';
import Wishlist from './page/Wishlist';
import Account from './page/Account';
const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Main,
      Search,
      Courses,
      Wishlist,
      Account,
    },
    {
      resetOnBlur: true,
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#fff',
        inactiveTintColor: 'rgba(255,255,255, 0.6)',
        style: {
          borderTopColor: '#333',
          backgroundColor: '#333',
        },
      },
    },
    // {
    //   headerLayoutPreset: 'center',
    //   headerBackTitleVisible: false,
    //   defaultNavigationOptions: {
    //     headerStyle: {
    //       backgroundColor: '#7159c1',
    //     },
    //     headerTintColor: '#FFF',
    //   },
    // },
  ),
);
export default Routes;
