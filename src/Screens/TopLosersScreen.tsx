import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Federated} from '@callstack/repack/client';

const QRScanner = React.lazy(() =>
  Federated.importModule('host', './QRScanner'),
);



const TopLosersScreen = () => {

  return (
    <View style={styles.container}>
      <QRScanner />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
  qrIcon: {
    marginTop: 20,
  },
});

export default TopLosersScreen;
