import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions, Animated} from 'react-native';

export const Container = styled.View`
  height: 70px;
  padding: 10px;
  align-items: center;
  flex-direction: row;
  position: relative;
`;

export const Title = styled.Text`
  color: #666;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
  margin-left: 5px;
`;

export const IconHeader = styled(Icon).attrs({name: 'cart-outline'})`
  color: #666;
  font-size: 28px;
  position: absolute;
  right: 10px;
  z-index: 1;
`;

export const SearchView = styled(Animated.View)`
  position: absolute;
  border: 1px solid #f5f5f5;
  flex-direction: row;
  background: #fff;
  align-items: center;
  top: 5px;
  left: 0;
  z-index: 100;
  width: 100%;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Search all courses',
})`
  flex: 1;
  padding: 10px 20px 10px 20px;
  color: #666;
  font-size: 16px;
  border-radius: 5px;
  position: relative;
  width: 100%;
`;

export const DarkView = styled(Animated.View)`
  position: absolute;
  left: 0;
  top: 0;
  width: ${Dimensions.get('window').width};
  height: ${Dimensions.get('window').height};
  background-color: rgba(0, 0, 0, 0.4);
`;
