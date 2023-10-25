import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackList} from '../Navigation/AppNavigator';
import {WebView} from 'react-native-webview';
import {Federated} from '@callstack/repack/client';

type Props = NativeStackScreenProps<MainStackList, 'Home'>;

const News = React.lazy(() => Federated.importModule('news', './App'));


const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: 'https://zerobase-dev.maybanksandbox.com/maeTaskRewards',
        }}
        style={{flex: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
