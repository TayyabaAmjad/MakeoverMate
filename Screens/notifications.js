// Favourite.js
import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler'; // Use TouchableOpacity for touchable components
import BottomNavigationBar from './bottomNavigationBar';
//import Icon from 'react-native-vector-icons/Ionicons';


export default function Notification({ navigation }) {

  // Dummy saved looks data
  const savedLooks = [
    { id: 1, name: 'Notification 1' },
    { id: 2, name: 'Notification 2' },
    // Add more saved looks as needed
  ];

  return (
    <View style={styles.container}>
    <ScrollView>      
      {/* Display saved looks */}
      {savedLooks.map((look) => (
        <View key={look.id} style={styles.lookItem}>
          <Text>{look.name}</Text>
        </View>
      ))}
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
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  lookItem: {
    // borderWidth: 1,
    // borderColor: 'black',
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});
