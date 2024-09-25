import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import BottomNavigationBar from './bottomNavigationBar';
import Icon from 'react-native-vector-icons/Ionicons';


export default function OurStylists({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Our Stylists',
    });
  }, [navigation]);
  const stylists = [
    { id: 1, name: 'Sara', image: require('../assets/sara.png'), screen: 'Sara' },
    { id: 2, name: 'Hamna', image: require('../assets/hamna.png'), screen: 'Hamna'  },
    { id: 3, name: 'Alizy', image: require('../assets/alizy.png'), screen: 'Alizy'  },
    { id: 4, name: 'Farwa', image: require('../assets/farwa.png'), screen: 'Farwa'  },
    { id: 5, name: 'Aisha', image: require('../assets/aisha.png'), screen: 'Aisha'  },
    { id: 6, name: 'Hira', image: require('../assets/hira.png'), screen: 'Hira' },
    { id: 7, name: 'Arwa', image: require('../assets/arwa.png'), screen: 'Arwa'  },
    { id: 8, name: 'Huma', image: require('../assets/huma.png'), screen: 'Huma'  },
    { id: 9, name: 'Mahar', image: require('../assets/mahar.png'), screen: 'Mahar'  },
  ];

  const renderStylistCard = (id, name, image, screen) => (
    <TouchableOpacity key={id} onPress={() => navigation.navigate(screen)}>
      <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.cardRow}>
        {stylists.slice(0, 3).map(stylist => renderStylistCard(stylist.id, stylist.name, stylist.image, stylist.screen))}
      </View>
      <View style={styles.cardRow}>
        {stylists.slice(3, 6).map(stylist => renderStylistCard(stylist.id, stylist.name, stylist.image, stylist.screen))}
      </View>
      <View style={styles.cardRow}>
        {stylists.slice(6, 9).map(stylist => renderStylistCard(stylist.id, stylist.name, stylist.image, stylist.screen))}
      </View>
           <BottomNavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFAFA'
  },
 
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: 100,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 3,
    alignItems: 'center',
    height: 150,
    backgroundColor: 'white'
  },
  cardImage: {
    width: 90,
    height: 100,
    marginBottom: 10,
    borderRadius: 6,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'right',
  },

});
