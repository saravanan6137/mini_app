import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/Home';

export type MainStackList = {
  Home: undefined;
}

const Stack = createNativeStackNavigator<MainStackList>();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
  }
  
  export default AppNavigator;