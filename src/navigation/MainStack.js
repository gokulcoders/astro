import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeroScreen from '../screens/Hero/Hero';
import DetailsScreen from '../screens/Details/DetailsScreen';
import AstroScreen from '../screens/Astro/AstroScreen';
import HomeScreen from '../screens/Home/Home';
import Shopping from '../screens/shopping/shopping';
import Updates from '../screens/Cards/cards';
import Onlineastro from '../screens/onlineastro/onlineastro';
import Order from'../screens/Order/Order';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Details">
    <Stack.Screen name="Hero" component={HeroScreen} options={{ headerShown: false, }} />
      <Stack.Screen name="Details" component={DetailsScreen} options={{ headerShown: false, }} />
      <Stack.Screen name="Astro" component={AstroScreen} options={{headerShown: false, }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, }} />
      <Stack.Screen name="Shopping" component={Shopping} options={{headerShown: false, }} />
      <Stack.Screen name="Updates" component={Updates} options={{headerShown: false, }} />
      <Stack.Screen name="Onlineastro" component={Onlineastro} options={{headerShown: false, }} />
      <Stack.Screen name="Order" component={Order} options={{headerShown: false, }} />
    </Stack.Navigator>
  );
};

export default MainStack;
