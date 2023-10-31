import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopGainersScreen from '../Screens/TopGainersScreen';
export type TopGainersStackParamList = {
  TopGainers: undefined;
};

const Gainers = createNativeStackNavigator<TopGainersStackParamList>();

const TopGainersNavigator = () => {
  return (
    <Gainers.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Gainers.Screen name="TopGainers" component={TopGainersScreen} />
    </Gainers.Navigator>
  );
};

export default TopGainersNavigator;
