import React from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';

const Courses = () => {
  return <Header title="Courses" />;
};

Courses.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({tintColor}) => (
    <Icon name="play-circle-filled" size={20} color={tintColor} />
  ),
};

export default withNavigationFocus(Courses);
