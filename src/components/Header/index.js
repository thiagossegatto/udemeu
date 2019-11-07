import React from 'react';
import {Container, Title, IconHeader, SearchInput} from './styles';
import Search from './Search';

const Header = props => {
  return (
    <Container>
      {props.title && <Title>{props.title}</Title>}
      {props.search && <Search />}
      <IconHeader />
    </Container>
  );
};

export default Header;
