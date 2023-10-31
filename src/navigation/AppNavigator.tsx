import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
export type MainStackList = {
  Tabs: undefined;
}

const Stack = createNativeStackNavigator<MainStackList>();

function AppNavigator() {
    return (
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Tabs" component={TabsNavigator} />
        </Stack.Navigator>
    );
  }
  
  export default AppNavigator;