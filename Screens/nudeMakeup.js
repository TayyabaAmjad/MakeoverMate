import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigationBar from './bottomNavigationBar';

export default function NudeMakeup({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Nude Makeup',
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
          <ScrollView>
      {/* Container */}
      <View style={styles.containerBox}>
        <Image source={require('../assets/nudeMakeup.png')} style={styles.image} />
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
          <Text style={styles.description}>"Embrace authenticity with our Nude Makeup Look, delicately crafted to enhance your innate beauty. Our adept makeup artists expertly blend soft, earthy tones to create a radiant canvas that exudes simplicity and grace. Whether you prefer a subtle enhancement or a more pronounced definition, we specialize in crafting looks that celebrate your unique features. From softly sculpted features to a hint of luminous glow, our Nude Makeup Look is designed to accentuate your natural allure while maintaining a fresh, effortless elegance. Embrace your true self and radiate confidence with our Nude Makeup Look."</Text>
          <View style={styles.buttonContainer}>
            {/* Add onPress event to navigate to OurStylists page */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OurStylists')}>
              <Text style={styles.buttonText}>Choose Stylist</Text>
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
    marginTop: 5,
    marginBottom: 10,
    backgroundColor: '#A464AA57',
    borderRadius: 6,
  },
  image: {
    width: 270,
    height: 250,
    marginTop: 20,
    marginBottom: 20, // Move margin to bottom to create space between image and text
    marginLeft: 38,
    marginRight: 40,
    borderRadius: 3,
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
    textAlign: 'left',
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  description: {
    marginBottom: 10,
    textAlign: 'justify',
    marginLeft: 15,
    marginRight: 15,
    color: 'black',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
