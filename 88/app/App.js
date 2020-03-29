import React from 'react';
import { StatusBar } from 'react-native';
import Main from './src/index';

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
      <Main/>
    </>
  );
};

export default App;