import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const TopLosersScreen: React.FC = () => {
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState<string | null>(null);
  const [cameraPermission, setCameraPermission] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    async function requestCameraPermission() {
      const permission = Platform.select({
        ios: PERMISSIONS.IOS.CAMERA,
        android: PERMISSIONS.ANDROID.CAMERA,
      });
      if (!permission) {
        // Handle unsupported platform or other issues
        return;
      }
      try {
        const status = await check(permission);

        if (status === RESULTS.GRANTED) {
          setCameraPermission(true);
        } else {
          const requestStatus = await request(permission);
          if (requestStatus === RESULTS.GRANTED) {
            setCameraPermission(true);
          } else {
            setCameraPermission(false);
          }
        }
      } catch (error) {
        console.warn(error);
        setCameraPermission(false);
      }
    }

    requestCameraPermission();
  }, []);

  const handleBarCodeScanned = ({data}: {data: string}) => {
    if (!scanned) {
      setScanned(true);
      setScannedData(data);
    }
  };

  if (cameraPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Requesting Camera Permission...</Text>
      </View>
    );
  } else if (cameraPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Camera permission denied. Please enable it in settings.
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.camera}
          onBarCodeRead={handleBarCodeScanned}
          captureAudio={false}
        />
        <Text style={styles.text}>
          {scannedData ? `Scanned Data: ${scannedData}` : 'Scan a QR code'}
        </Text>
      </View>
    );
  }
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
