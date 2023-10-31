import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WatchlistScreen from '../Screens/WatchlistScreen';
export type WatchlistStackParamList = {
  Watchlist: undefined;
};

const Watch = createNativeStackNavigator<WatchlistStackParamList>();

const WatchlistNavigator = () => {
  return (
    <Watch.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Watch.Screen name="Watchlist" component={WatchlistScreen} />
    </Watch.Navigator>
  );
};

export default WatchlistNavigator;
