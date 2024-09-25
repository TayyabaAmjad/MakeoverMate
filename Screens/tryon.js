import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { useState } from 'react';
const [selectedImage, setSelectedImage] = useState(null);
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import BottomNavigationBar from './bottomNavigationBar';

const TryOn = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Try on',
    });
  }, [navigation]);

  const handleCapturePhoto = async (screen) => {
    if (screen === 'Cam') {
      navigation.navigate('Cam');
    } else if (screen === 'Upload') {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
          return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          // Upload the selected image to the backend
          await uploadImageToServer(result.uri);
        }
      }
    }
  };

  const uploadImageToServer = async (photoUri) => {
    const formData = new FormData();
    formData.append('image', {
      uri: photoUri,
      name: 'photo.jpg',
      type: 'image/jpeg',
    });

    try {
      const response = await fetch('http://10.10.44.246:8080/upload', {
        method: 'POST',
        body: formData,
      });

      const responseJson = await response.json();
      if (response.ok) {
        console.log('Image uploaded successfully:', responseJson.file);
        alert('Image uploaded successfully!');
      } else {
        console.error('Upload failed:', responseJson.message);
        alert('Upload failed: ' + responseJson.message);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.VirtualTryonContainer}>
          <Text style={styles.text}>Virtual Try on</Text>
          <Image source={require('../assets/virtualtryon3.png')} style={styles.image} />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleCapturePhoto('Cam')}>
              <Text style={styles.buttonLabel}>Capture Photo</Text>
              <Icon name="camera" size={25} color="purple" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => handleCapturePhoto('Upload')}>
              <Text style={styles.buttonLabel}>Upload Photo</Text>
              <Icon name="cloud-upload" size={25} color="purple" style={styles.icon} />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>See how the make-up products will appear on faces like an actual mirror.</Text>
        </View>
      </View>
      <BottomNavigationBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
  },
  content: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  image: {
    width: 190,
    height: 190,
    marginTop: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonLabel: {
    fontSize: 15,
  },
  description: {
    textAlign: 'center',
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  VirtualTryonContainer: {
    marginTop: 30,
    width: 300,
    height: 540,
    backgroundColor: '#E0BFDD',
    borderRadius: 15,
    alignItems: 'center',
  },
  icon: {
    marginLeft: 50,
  },
});

export default TryOn;
