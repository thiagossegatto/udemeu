import React from 'react';
import {Container} from './styles';

const Context = props => {
  return <Container>{props.children}</Container>;
};

export default Context;
