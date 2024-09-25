import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import ColorPalettePicker from './colorPalettePicker';

const Photo = ({ route }) => {
  const { capturedPhotoUri } = route.params;
  const [showPalette, setShowPalette] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);
  const navigation = useNavigation(); // Initialize useNavigation hook
    React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Photo',
    });
  }, [navigation]);
  const handleColorSelection = (colors) => {
    setSelectedColors(colors);
    setShowPalette(false);
  };

  const handleNext = () => {
    // Navigate to the MakeupScreen
  
  if (capturedPhotoUri) {
    navigation.navigate('MakeupTryon', { capturedPhotoUri });
  }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: capturedPhotoUri }} style={styles.image} />
      <View style={styles.setShowPalette}>
        <TouchableOpacity onPress={() => setShowPalette(true)}>
          <Text>Choose dress color</Text>
        </TouchableOpacity>
      </View>
      <ColorPalettePicker
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        showPalette={showPalette}
        setShowPalette={setShowPalette}
        onConfirm={handleColorSelection}
      />
      <View style={styles.selectedColorsContainer}>
        {selectedColors.map((color, index) => (
          <View key={index} style={[styles.selectedColor, { backgroundColor: color }]} />
        ))}
      </View>
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFAFA',
    alignItems: 'center',
    flex: 1,
    //justifyContent: 'center',
  },
  image: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  selectedColorsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  setShowPalette: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C89DCC', // White background color for the button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nextButton: {
    backgroundColor: '#C89DCC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Photo;