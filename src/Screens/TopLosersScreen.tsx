import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';


const TopLosersScreen = () => {
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

export default TopLosersScreen;
