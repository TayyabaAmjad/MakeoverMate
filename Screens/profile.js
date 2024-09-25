import React, { useState, useEffect } from 'react';
import BottomNavigationBar from './bottomNavigationBar';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Alert, Modal,  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library


export default function EditProfilePicture({ navigation }) {
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstName, setFirstName] = useState('Tayyaba');
  const [lastName, setLastName] = useState('Amjad');
  const [email, setEmail] = useState('tayyaba@gmail.com');
  const [phoneNumber, setPhoneNumber] = useState('03341156448');
  const [uploadEnabled, setUploadEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Please grant permission to access photos');
      }
    })();
  }, []);

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
      setUploadEnabled(true);
      setModalVisible(false); // Close the modal after selecting an image
    }
  };

  const takePhotoFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePicture(result.uri);
      setUploadEnabled(true);
      setModalVisible(false); // Close the modal after taking a photo
    }
  };

  const removeProfilePicture = () => {
    setProfilePicture(null);
    setUploadEnabled(false);
    setModalVisible(false); // Close the modal after removing the picture
  };

  const uploadProfilePicture = () => {
    if (profilePicture) {
      // Logic to upload profile picture to server
      Alert.alert('Success', 'Profile picture uploaded successfully.');
    } else {
      Alert.alert('No Picture Selected', 'Please select a picture before uploading.');
    }
  };

  const saveProfileInfo = () => {
    // Logic to save the profile information
    Alert.alert('Success', 'Profile information saved successfully.');
  };

  return (
    <View style={styles.container}>
    {/* <ScrollView> */}
      <View style={styles.profileContainer}>
        <Image
          source={profilePicture ? { uri: profilePicture } : require('../assets/logo.png')}
          style={styles.accountImage}
        />
        <TouchableOpacity style={styles.editIcon} onPress={() => setModalVisible(true)}>
          <Icon name="edit" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.newContainer}>
        <Text style={styles.accountName}>Tayyaba Amjad</Text>

        <View style={styles.accountInfoContainer}>
          <View style={styles.infoSection}>
            <Text style={styles.label}>First Name</Text>
            <View style={styles.infoBox}>
              <Text style={styles.Text}>{firstName}</Text>
            </View>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>Last Name</Text>
            <View style={styles.infoBox}>
              <Text style={styles.Text}>{lastName}</Text>
            </View>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.infoBox}>
              <Text style={styles.Text}>{email}</Text>
            </View>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.infoBox}>
              <Text style={styles.Text}>{phoneNumber}</Text>
            </View>
          </View>
        </View>  
      </View>
        {/* Logout Icon and Text */}
      <TouchableOpacity style={styles.logoutContainer} onPress={() => navigation.navigate('Login')}>
        <Icon name="sign-out" size={20} color="#E66885" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    {/* </ScrollView> */}
        <BottomNavigationBar navigation={navigation} />
     <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      setModalVisible(false);
    }}
  >
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <TouchableOpacity style={styles.modalButton} onPress={pickImageFromGallery}>
          <View style={styles.changeBox}>
            <Icon name="image" size={17} color="#E66885" style={styles.icons} />
            <Text style={styles.BoxText}>Select from Gallery</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={takePhotoFromCamera}>
          <View style={styles.changeBox}>
            <Icon name="camera" size={17} color="#E66885" style={styles.icons} />
            <Text style={styles.BoxText}>Take Photo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalButton} onPress={removeProfilePicture}>
          <View style={styles.changeBox}>
            <Icon name="trash" size={17} color="#E66885" style={styles.icons} />
            <Text style={styles.BoxText}>Remove Profile Picture</Text>
          </View>
        </TouchableOpacity>
       
      </View>
    </View>
  </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
    
  },

  profileContainer: {
    position: 'relative',
    marginTop: 10,
  },
  accountImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth:2,
    borderColor:'#D0A7D3',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#E66885',
    borderRadius: 15,
    padding: 5,
  },
 newContainer: {
  width: 300,
  height: 410,
  backgroundColor: '#D0A7D3',
  borderRadius: 20,
  padding: 10,
  justifyContent: 'center', // Align items horizontally in the center
  alignItems: 'center', // Align items vertically in the center
},

  accountInfoContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 5,
    marginTop: 8,
    width:280,
  },
  accountName: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
        marginBottom: 10,
      //  marginTop:0,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
  },
  modalContent: {
    backgroundColor: '#D0A7D3',
    padding: 10,
    borderRadius: 10,
    elevation: 5,
    paddingBottom:20,
  },
  modalButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  changeBox: {
    flexDirection: 'row',
  },
  icons: {
    width: 20,
    height: 20,
  },
  BoxText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    marginLeft: 10,
  },
   Text: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    
  },
  infoBox: {
     width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  infoSection: {
    width: '100%',
    marginVertical: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#D0A7D3',
    marginBottom: 10,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: '#E66885',
    marginLeft: 10,
  },
 
});


