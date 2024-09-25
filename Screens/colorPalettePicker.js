import React from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ColorPalettePicker = ({ selectedColors, setSelectedColors, showPalette, setShowPalette, onConfirm }) => {
  const navigation = useNavigation(); // Fix for useNavigation error

  const allColors = [
    '#FFC0CB', '#FFB6C1', '#FF69B4', '#FFA07A', '#FFD700',
    '#ADFF2F', '#7FFFD4', '#00FFFF', '#000080', '#8A2BE2',
    '#FF1493', '#000000', '#808080', '#FFFFFF', '#800000',
    '#FF0000', '#800080', '#4B0082', '#8B4513', '#2E8B57',
    '#008000', '#4682B4', '#0000FF', '#D2691E', '#A52A2A',
    '#F0E68C', '#FFDAB9', '#FF8C00', '#808000', '#F5DEB3'
  ];

  const handleColorPress = (color) => {
    if (selectedColors && (selectedColors.length < 2 || selectedColors.includes(color))) {
      setSelectedColors(selectedColors.includes(color) 
        ? selectedColors.filter((c) => c !== color)
        : [...selectedColors, color]
      );
    }
  };

  const removeSelection = () => {
    setSelectedColors([]); // Remove all selected colors
  };

  const confirmSelection = () => {
    onConfirm(selectedColors); // Pass selected colors to the parent component
    setShowPalette(false);
  };

  return (
    <Modal visible={showPalette} animationType="slide">
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setShowPalette(false)} style={styles.closeButton}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>

        <FlatList
          data={allColors}
          numColumns={5}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleColorPress(item)}
              style={[
                styles.colorOption,
                { backgroundColor: item },
                selectedColors && selectedColors.includes(item) && styles.selectedColor,
              ]}
            />
          )}
        />

        <TouchableOpacity onPress={confirmSelection} style={styles.confirmButton}>
          <Text>Confirm Selection</Text>
        </TouchableOpacity>

        {/* Remove Selection button */}
        {selectedColors && selectedColors.length > 0 && (
          <TouchableOpacity onPress={removeSelection} style={styles.removeButton}>
            <Text>Remove Selection</Text>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA', // Creamy background color
    justifyContent: 'center',
    alignItems: 'center',
    padding:30,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 5,
    marginTop: 20,
  },
  selectedColor: {
    width: 40,
    height: 40,
    borderRadius: 25,
    margin: 5,
  },
  confirmButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C89DCC', // White background color for the button
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C89DCC', // White background color for the button
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 90,
  },
});

export default ColorPalettePicker;
