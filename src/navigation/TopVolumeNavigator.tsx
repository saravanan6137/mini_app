import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopVolumeScreen from '../Screens/TopVolumeScreen';
export type TopVolumeStackParamList = {
    TopVolume: undefined;
};

const Volume = createNativeStackNavigator<TopVolumeStackParamList>();

const TopvolumeNavigator = () => {
  return (
    <Volume.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Volume.Screen name="TopVolume" component={TopVolumeScreen} />
    </Volume.Navigator>
  );
};

export default TopvolumeNavigator;
