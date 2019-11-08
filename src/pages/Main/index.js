import React from 'react';
import {withNavigationFocus} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/Header';
import Context from '../../components/Context';
import {ContainerImage, Image} from './styles';
import ImageFeatured from '../../assets/images/featured.jpg';
import CourseScrollView from '../../components/Courses/ScrollView';

const Main = () => {
  return (
    <>
      <Header />
      <Context>
        <>
          <ContainerImage>
            <Image source={ImageFeatured} />
          </ContainerImage>
          <CourseScrollView title="Students are viewing" />
          <CourseScrollView title="Students are viewing" />
          <CourseScrollView title="Students are viewing" />
        </>
      </Context>
    </>
  );
};

Main.navigationOptions = {
  tabBarLabel: 'Featured',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={20} color={tintColor} />,
};

export default withNavigationFocus(Main);
