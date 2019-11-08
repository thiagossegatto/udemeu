import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import {ContainerSafeAreaView} from './styles';

const App = () => {
  return (
    <ContainerSafeAreaView>
      <Routes />
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
    </ContainerSafeAreaView>
  );
};

export default App;
