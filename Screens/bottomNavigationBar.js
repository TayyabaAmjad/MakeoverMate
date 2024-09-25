import React from 'react';
import { View, TouchableOpacity } from 'react-native';
//import { Icon } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BottomNavigationBar({ navigation }) {
  return (
    <View style={styles.bottomNavContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favourite')}>
        <Icon name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TryOn')}>
        <Icon name="camera-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <Icon name="notifications-outline" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Icon name="person-outline" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
    bottomNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#D0A7D3',
    backgroundColor:'#D0A7D3',
  },
};
