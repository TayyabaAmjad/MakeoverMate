import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomNavigationBar from './bottomNavigationBar';

export default function TopStylists({ navigation }) {
   React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Top Stylists',
    });
  }, [navigation]);
  const renderTopStylistCard = (name, rating, imageSource, details) => (
    <View style={styles.cardContainer}>
      <View pointerEvents="none">
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('StylistDetails')}>
          <View style={styles.card}>
            <Image source={imageSource} style={styles.cardImage} />
            <Text style={styles.stylistName}>{name}</Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={12} color="#E66885" style={styles.starIcon} />
              <Text style={styles.rating}>{rating}</Text>
            </View>
            <Text style={styles.details}>{details}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sectionContainer}>
          {renderTopStylistCard("Sara", 4.9, require('../assets/sara.png'), "With an innate talent for enhancing natural beauty, Sara specializes in creating effortless and radiant makeup looks. Her signature style focuses on soft, earthy tones and subtle enhancements that highlight her clients' features while maintaining a fresh, natural allure.")}

          {renderTopStylistCard("Hamna", 4.8, require('../assets/hamna.png'), " Hamna is a master of eye makeup, with a keen eye for detail and precision. From sultry smoky eyes to bold graphic liners, she specializes in creating mesmerizing eye looks that captivate and command attention. Hamna's clients leave her chair feeling like they're ready to take on the world with their stunning gaze.")}

          {renderTopStylistCard("Alizy", 4.7, require('../assets/alizy.png'), "Alizy knows how to turn up the glam for any occasion. Specializing in party makeup, she excels at creating bold and glamorous looks that are guaranteed to make a statement. Whether it's a night out on the town or a special event, Alizy's clients shine bright under the spotlight with her dazzling makeup artistry.")}

          {renderTopStylistCard("Arwa", 4.7, require('../assets/arwa.png'), "Arwa is a true visionary in the world of makeup. With his avant-garde creativity and artistic prowess, he excels at creating bold and innovative makeup looks that push the boundaries of conventional beauty. From high-fashion editorial shoots to runway shows, Arwa's makeup artistry is always bold, daring, and utterly unforgettable.")}

          {renderTopStylistCard("Farwa", 4.6, require('../assets/farwa.png'), "Farwa is a versatile makeup artist with a knack for creating flawless nude makeup looks. Whether it's a natural everyday look or a sophisticated nude glam, he knows how to tailor his artistry to suit his clients' preferences and style. With Farwa, you can trust that your natural beauty will be effortlessly enhanced with a touch of elegance")}

          {renderTopStylistCard("Aisha", 4.6, require('../assets/aisha.png'), "Aisha is a true artist when it comes to pastel makeup. With her creative flair and attention to detail, she excels at crafting dreamy and ethereal looks that are perfect for any occasion. From soft, romantic pastel hues to whimsical shimmering accents, Aisha's makeup artistry transports her clients to a world of beauty and enchantment.")}

          {renderTopStylistCard("Mahar", 4.5, require('../assets/mahar.png'), " Mahar's passion lies in creating mesmerizing eye makeup looks that leave a lasting impression. His signature style is characterized by intricate detailing, bold color choices, and impeccable blending techniques. From dramatic smoky eyes to vibrant statement looks, Mahar's eye makeup artistry showcases his creativity and skill, making his clients' eyes the focal point of their beauty.")}

          {renderTopStylistCard("Hira", 4.5, require('../assets/hira.png'), "Hira is a bridal makeup specialist with a passion for making her clients feel like the most beautiful version of themselves on their special day. With her gentle touch and meticulous attention to detail, she creates timeless and elegant bridal looks that enhance her clients' natural radiance and leave them feeling confident and radiant as they walk down the aisle.")}

          {renderTopStylistCard("Huma", 4.5, require('../assets/huma.png'), "Huma is renowned for her expertise in nude makeup. With a delicate touch and an eye for detail, she specializes in creating flawless and natural looks that accentuate her clients' features. Whether it's a soft, everyday look or a sophisticated nude glam, Huma's mastery of nude makeup ensures her clients radiate confidence and elegance wherever they go.")}
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
  sectionContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  card: {
    alignItems: 'center',
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  stylistName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starIcon: {
    marginRight: 5,
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
  details: {
    textAlign: 'center',
  },
  
});
