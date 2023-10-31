import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import TopGainersNavigator from './TopGainersNavigator';
import TopLosersNavigator from './TopLosersNavigator';
import TopvolumeNavigator from './TopVolumeNavigator';
import WatchlistNavigator from './Watchlist';

export type TabsParamList = {
  TopGainersNav: undefined,
  TopLosersNav: undefined,
  TopVolumeNav: undefined,
  WatchlistNav: undefined,
};

const Tabs = createMaterialBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="TopGainersNav"
        component={TopGainersNavigator}
        options={{
          title: 'Top Gainers',
          tabBarIcon: 'home',
        }}
      />
      <Tabs.Screen
        name="TopLosersNav"
        component={TopLosersNavigator}
        options={{
          title: 'Top Losers',
          tabBarIcon: 'apps',
        }}
      />
      <Tabs.Screen
        name="TopVolumeNav"
        component={TopvolumeNavigator}
        options={{
          title: 'Top Volume',
          tabBarIcon: 'apps',
        }}
      />
      <Tabs.Screen
        name="WatchlistNav"
        component={WatchlistNavigator}
        options={{
          title: 'Watchlist',
          tabBarIcon: 'apps',
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigator;
