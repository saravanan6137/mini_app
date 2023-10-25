import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {MD3Colors, ProgressBar, Text} from 'react-native-paper';
const LaunchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>
        Dynamo application is loading. Please wait...
      </Text>
      <ProgressBar
        style={styles.progress}
        indeterminate
        color={MD3Colors.primary50}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  text: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontSize: 24,
    color: MD3Colors.primary20,
    textAlign: 'center',
  },
  progress: {
    marginVertical: 16,
    marginHorizontal: 32,
  },
});

export default LaunchScreen;
