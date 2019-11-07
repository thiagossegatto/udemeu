import React, {useState, useEffect} from 'react';
import {Animated, Dimensions, Easing} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchInput, SearchView, DarkView} from './styles';

const widthScreen = Dimensions.get('window').width - 65;

const Search = props => {
  const translateX = new Animated.Value(500);
  const widthSearch = new Animated.Value(widthScreen);
  const [active, setActive] = useState(false);
  const [opacityDark] = useState(new Animated.Value(0));

  const animations = valor => {
    Animated.timing(opacityDark, {
      toValue: valor,
      duration: 500,
    }).start();
  };

  const animateBar = value => {
    //widthSearch.setValue(50); // initialize the animated value
    // Animated.timing(widthSearch, {
    //   toValue: value,
    //   duration: 500,
    //   delay: 1000,
    // }).start();
  };

  useEffect(() => {
    if (!active) {
      Animated.timing(translateX, {
        toValue: 10,
        duration: 300,
      }).start();
    }
  }, [translateX, active, widthSearch]);

  const onFocus = () => {
    setActive(true);
    // widthSearch.interpolate({
    //   inputRange: [widthScreen, widthScreen + 45],
    //   outputRange: [widthScreen + 45, widthScreen],
    //   extrapolate: 'clamp',
    // });
    // .setValue(widthScreen + 45);
    // widthSearch.interpolate({
    //   inputRange: [0, 600],
    //   outputRange: [600, 0],
    //   extrapolate: 'clamp',
    // });
    Animated.timing(widthSearch, {
      toValue: 200,
      duration: 500,
      delay: 1000,
    }).start();
    //animations(1);
  };

  const onBlur = () => {
    setActive(false);
    animations(0);
  };

  return (
    <>
      <DarkView
        style={{
          opacity: opacityDark,
          transform: [
            {
              translateY: opacityDark.interpolate({
                inputRange: [0, 1],
                outputRange: [150, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      />
      <SearchView
        style={[
          {
            transform: [{translateX}],
          },
          {
            width: widthSearch,
          },
        ]}>
        {!active ? (
          <Icon name="magnify" size={25} />
        ) : (
          <Icon name="arrow-left" size={25} />
        )}
        <SearchInput onFocus={() => onFocus()} onBlur={() => onBlur()} />
      </SearchView>
    </>
  );
};

export default Search;
