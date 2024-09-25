import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera, CameraType } from 'expo-camera/legacy';
//import { Camera } from 'expo-camera';

import Icon from 'react-native-vector-icons/Ionicons';

const Cam = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [capturedPhotoUri, setCapturedPhotoUri] = useState(null);
  const cameraRef = useRef(null);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Camera',
    });
  }, [navigation]);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log(photo);
        setCapturedPhotoUri(photo.uri); // Set the captured photo URI
      } catch (error) {
        console.error('Error taking picture:', error);
      }
    }
  };

  const toggleCameraType = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const handleNext = () => {
    if (capturedPhotoUri) {
      navigation.navigate('Photo', { capturedPhotoUri });
    }
  };

  return (
    <View style={styles.container}>
      {hasPermission === false && <Text>No access to camera</Text>}
      {hasPermission && (
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={cameraType} ref={cameraRef} />

          {capturedPhotoUri && (
            <Image source={{ uri: capturedPhotoUri }} style={styles.capturedPhoto} />
          )}

          {!capturedPhotoUri && ( // Render the capture button only if no photo is captured
            <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
              <Icon name="camera" size={30} color="white" />
            </TouchableOpacity>
          )}

          {!capturedPhotoUri && ( // Render the flip button only if no photo is captured
            <TouchableOpacity style={styles.flipButton} onPress={toggleCameraType}>
              <Icon name="camera-reverse-outline" size={30} color="white" />
            </TouchableOpacity>
          )}

          {capturedPhotoUri && ( // Render the checkmark button only if a photo is captured
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNext}
            >
              <Icon name="checkmark-circle-outline" size={30} color="white" />
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  cameraContainer: {
    flex: 1,
    position: 'relative',
  },
  camera: {
    flex: 1,
  },
  capturedPhoto: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  flipButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  nextButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default Cam;
