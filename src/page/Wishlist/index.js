import React from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

const Wishlist = () => {
  return <Header title="Whishlist" />;
};

Wishlist.navigationOptions = {
  tabBarLabel: 'Wishlist',
  tabBarIcon: ({tintColor}) => (
    <Icon name="favorite" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Wishlist);
