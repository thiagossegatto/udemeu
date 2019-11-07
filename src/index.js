import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {Container} from './styles';

const App = () => {
  return (
    <Container>
      <Routes />
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
    </Container>
  );
};

export default App;
