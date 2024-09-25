import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import BottomNavigationBar from './bottomNavigationBar';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Makeover({ navigation }) {
  
  const renderTopLookCard = (title, description, imageSource, navigate) => (
    <TouchableOpacity onPress={navigate}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.favoriteIconContainer}>
          </TouchableOpacity>
          <Image source={imageSource} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sectionContainer}>
          {/* <Image source={require('../assets/logo.png')} style={styles.logo} /> */}
          <TouchableOpacity >
            {/* <Text style={styles.sectionTitle}>Makeover</Text> */}
          </TouchableOpacity>
          <View style={styles.cardRow}>
            <View style={[styles.cardColumn, {marginRight: 10}]}>
              {renderTopLookCard("", "Natural Makeup", require('../assets/naturalMakeup.png'), () => navigation.navigate('NaturalMakeup'))}
              {renderTopLookCard("", "Party Makeup", require('../assets/partyMakeup1.png'), () => navigation.navigate('PartyMakeup'))}
              {renderTopLookCard("", "Pastel Makeup", require('../assets/pastelMakeup.png'), () => navigation.navigate('PastelMakeup'))}
            </View>
            <View style={styles.cardColumn}>
              {renderTopLookCard("", "Eye Makeup ", require('../assets/eyeMakeup1.png'), () => navigation.navigate('EyeMakeup'))}
              {renderTopLookCard("", "Nude Makeup ", require('../assets/nudeMakeup.png'), () => navigation.navigate('NudeMakeup'))}
              {renderTopLookCard("", "Bridal Makeup ", require('../assets/bridalMakeup1.png'), () => navigation.navigate('BridalMakeup'))}
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
  greeting: {
    fontSize: 18,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
 
  cardRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardColumn: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    position: 'relative', // Ensure positioning context for absolute positioning of favorite icon
    height:159,
    width:149,
  },
  card: {
    marginBottom: 10,
    flex: 1,
    height: 97,
    position: 'relative', // Ensure positioning context for absolute positioning of favorite icon
  },
  cardImage: {
    width: '100%',
    height: 122,
    marginBottom: 9,
     borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});