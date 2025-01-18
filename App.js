import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Make sure you have this import
import MainStack from './src/navigation/MainStack'; // Import your main stack navigation

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
