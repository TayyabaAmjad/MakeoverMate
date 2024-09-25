import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import BottomNavigationBar from './bottomNavigationBar';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation }) {
  const userName = "Tayyaba";

  useEffect(() => {
    const handleBackPress = () => {
      if (navigation.isFocused()) {
        return true;
      }
      return false;
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [navigation]);

  const renderTopLookCard = (title, description, imageSource, rating, navigate) => (
    <TouchableOpacity onPress={navigate}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={imageSource} style={styles.cardImage} />
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.cardDescription}>{description}</Text>
          <Icon name="star" size={12} color="#E66885" style={styles.starIcon} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.greeting}>Hello {userName}!</Text>
        <Text style={styles.title}>Welcome to Makeover Mate</Text>
         
        <View style={styles.searchContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="search" size={20} color="#E66885" style={styles.searchIcon} />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search here"
            onFocus={() => navigation.navigate('Search')}
          /> 
        </View>
        <View style={styles.banner}>
          <Image source={require('../assets/banner.png')} style={{ width: '100%', height: '100%' }} />
        </View>
        
        <View style={styles.sectionContainer}>
          <View style={styles.arrowContainer}>
            <Text style={styles.sectionTitle}>Top Looks</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Makeover')}>
              <Icon name="arrow-forward" size={25} color="black" style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.cardRow}>
            {renderTopLookCard("", "Natural", require('../assets/naturalMakeup.png'), 4.5, () => navigation.navigate('NaturalMakeup'))}
            {renderTopLookCard("", "Party ", require('../assets/partyMakeup1.png'), 4.2, () => navigation.navigate('PartyMakeup'))}
            {renderTopLookCard("", "Bridal ", require('../assets/bridalMakeup1.png'), 4.8, () => navigation.navigate('BridalMakeup'))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <View style={styles.arrowContainer}>
            <Text style={styles.sectionTitle}>Top Stylist</Text>
            <TouchableOpacity onPress={() => navigation.navigate('TopStylists')}>
              <Icon name="arrow-forward" size={25} color="black" style={styles.arrowIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.cardRow}>
            {renderTopLookCard(" ", "Sara", require('../assets/sara.png'), 4.7, () => navigation.navigate('TopStylist1'))}
            {renderTopLookCard(" ", "Hamna", require('../assets/hamna.png'), 4.4, () => navigation.navigate('TopStylist2'))}
            {renderTopLookCard(" ", "Alizy", require('../assets/alizy.png'), 4.9, () => navigation.navigate('TopStylist3'))}
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
    paddingBottom: 30,
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
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#E66885',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
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
    justifyContent: 'space-between',
  },
  cardContainer: {
    flex: 1,
    position: 'relative',
  },
  card: {
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    width: 97,
    height: 97,
    position: 'relative',
  },
  cardImage: {
    width: 97,
    height: 97,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardDescription: {
    marginBottom: 0,
    fontSize: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  arrowIcon: {
    marginLeft: 210,
  },
  searchIcon: {
    position: 'absolute',
    left: 290,
    top: 10,
  },
});
