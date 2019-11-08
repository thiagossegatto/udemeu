import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Main from './pages/Main';
import Search from './pages/Search';
import Courses from './pages/Courses';
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';
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
