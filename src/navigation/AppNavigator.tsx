import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabsNavigator from './TabsNavigator';
import {Platform} from 'react-native';
// const resolveURL = Federated.createURLResolver({
//   containers: {
//     host: `http://localhost:8083/[name][ext]`,
//   },
// });

// ScriptManager.shared.addResolver(async (scriptId, caller) => {
//   console.log('came here')
//   let url;
//   if (caller === 'main') {
//     url = Script.getDevServerURL(scriptId);
//   } else {
//     url = resolveURL(scriptId, caller);
//   }

//   if (!url) {
//     return undefined;
//   }

//   return {
//     url,
//     cache: false, // For development
//     query: {
//       platform: Platform.OS,
//     },
//   };
// });
export type MainStackList = {
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<MainStackList>();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackVisible: true,
      }}>
      <Stack.Screen name="Tabs" component={TabsNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
