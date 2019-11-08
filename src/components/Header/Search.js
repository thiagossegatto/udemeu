import React, {useState, useEffect} from 'react';
import {Animated, Dimensions} from 'react-native';
import {SearchInput, SearchIcon, SearchView, DarkView} from './styles';

const widthScreen = Dimensions.get('window').width - 65;

const Search = props => {
  const translateX = new Animated.Value(500);
  const _rotationX = new Animated.Value(0);
  const _animatedWidth = new Animated.Value(widthScreen);
  const [active, setActive] = useState(false);
  const [opacityDark] = useState(new Animated.Value(0));
  var searchTextInput;

  const spin = _rotationX.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '0deg'],
  });

  const animations = valor => {
    Animated.timing(opacityDark, {
      toValue: valor,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (!active) {
      Animated.timing(translateX, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }, [translateX, active]);

  useEffect(() => {
    if (active) {
      Animated.timing(_rotationX, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    }
  }, [_rotationX, active]);

  useEffect(() => {
    let w = widthScreen + 45;
    if (!active) {
      w = widthScreen;
    }
    Animated.timing(_animatedWidth, {
      toValue: w,
    }).start();
  }, [_animatedWidth, active]);

  const handleOnFocus = () => {
    setActive(true);
    animations(1);
  };

  const handleOnBlur = () => {
    setActive(false);
    animations(0);
  };

  const handleOnClick = () => {
    if (!active) {
      searchTextInput.focus();
    } else {
      searchTextInput.blur();
    }
  };

  return (
    <>
      <DarkView
        style={{
          opacity: opacityDark,
          transform: [
            {
              translateX: opacityDark,
            },
          ],
        }}
      />
      <SearchView
        style={[
          !active && {
            transform: [{translateX}],
          },
          {
            width: _animatedWidth,
          },
        ]}>
        <SearchIcon
          active={active}
          onPress={handleOnClick}
          style={
            active && {
              transform: [
                {
                  rotate: spin,
                },
              ],
            }
          }
        />
        <SearchInput
          onFocus={() => handleOnFocus()}
          onBlur={() => handleOnBlur()}
          ref={input => {
            searchTextInput = input;
          }}
        />
      </SearchView>
    </>
  );
};

export default Search;
