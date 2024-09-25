import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigationBar from './bottomNavigationBar';

export default function PartyMakeup({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Party Makeup',
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
          <ScrollView>
      {/* Container */}
      <View style={styles.containerBox}>
        <Image source={require('../assets/partyMakeup1.png')} style={styles.image} />
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
          <Text style={styles.description}>"Transform for the night with our Party Makeup Look, meticulously crafted to exude glamour and confidence. Our skilled makeup artists expertly combine bold hues and striking techniques to ensure you stand out from the crowd. Whether you desire a dramatic smoky eye or shimmering metallic lids, we specialize in creating looks that dazzle under the spotlight. From flawless complexion to bold, defined eyes and statement lips, our Party Makeup Look is tailored to make you the star of any occasion. Embrace the allure of the night and unleash your inner party queen with our Party Makeup Look."</Text>
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
