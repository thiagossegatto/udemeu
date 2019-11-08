import React from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

const Search = () => {
  return <Header search={true} />;
};

Search.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({tintColor}) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Search);
