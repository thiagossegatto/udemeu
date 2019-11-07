import React from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

const Main = () => {
  return <Header />;
};

Main.navigationOptions = {
  tabBarLabel: 'Featured',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};

export default withNavigationFocus(Main);
