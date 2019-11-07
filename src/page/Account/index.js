import React from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

const Account = () => {
  return <Header title="Account" />;
};

Account.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({tintColor}) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Account);
