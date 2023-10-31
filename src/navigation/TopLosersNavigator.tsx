import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopLosersScreen from '../Screens/TopLosersScreen';
export type TopLosersStackParamList = {
  TopLosers: undefined;
};

const Losers = createNativeStackNavigator<TopLosersStackParamList>();

const TopLosersNavigator = () => {
  return (
    <Losers.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Losers.Screen name="TopLosers" component={TopLosersScreen} />
    </Losers.Navigator>
  );
};

export default TopLosersNavigator;
