import React, { useState, useEffect } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';



const TopLosersScreen = () => {
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    if (!scanned) {
      setScanned(true);
      setScannedData(data);
    }
  };

  useEffect(() => {
    setScanned(false);
    setScannedData('');
  }, []);

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        onBarCodeRead={handleBarCodeScanned}
        captureAudio={false}
      />
      <Text style={styles.text}>
        {scanned ? `Scanned Data: ${scannedData}` : 'Scan a QR code'}
      </Text>
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
