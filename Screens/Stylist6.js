import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigationBar from './bottomNavigationBar';

export default function Hira({ navigation }) {
  
  return (
    <View style={styles.container}>
      <ScrollView>
      {/* Container */}
      <View style={styles.containerBox}>
        <Image source={require('../assets/hira.png')} style={styles.image} />
        <View style={styles.contentContainer}>
          <View style={styles.textAndRatingsContainer}>
            <Text style={styles.textLabel}>Description</Text>
            {/* Ratings */}
            <View style={styles.ratingContainer}>
              <Icon name="star" size={20} color="#E66885" />
              <Icon name="star" size={20} color="#E66885" />
              <Icon name="star" size={20} color="#E66885" />
              <Icon name="star-outline" size={20} color="#E66885" />
            </View>
          </View>
          <Text style={styles.description}> Hira is a bridal makeup specialist with a passion for making her clients feel like the most beautiful version of themselves on their special day. With her gentle touch and meticulous attention to detail, she creates timeless and elegant bridal looks that enhance her clients' natural radiance and leave them feeling confident and radiant as they walk down the aisle.</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Booking')}>
              <Text style={styles.buttonText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
        <BottomNavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
    padding: 20,
  },
 
  containerBox: {
    flexDirection: 'column', // Change flexDirection to column
    alignItems: 'center', // Center items horizontally
     marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#A464AA57',
    borderRadius: 6
  },
  image: {
    width: 270,
    height: 250,
    marginTop: 20,
    marginBottom: 20, // Move margin to bottom to create space between image and text
    marginLeft: 38,
    marginRight: 40,
    borderRadius: 3
  },
  
  textAndRatingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  textLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  ratingContainer: {
    flexDirection: 'row',

  },
  description: {
    marginBottom: 10,
    textAlign:'justify',
    marginLeft:15,
    marginRight:15,
    color: 'black'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#A464AA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '70%',
    height: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});