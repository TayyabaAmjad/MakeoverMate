import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Administration({ navigation }) {
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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Manage Looks */}
        <TouchableOpacity style={styles.menuItem} onPress={() => {/* Handle onPress action */}}>
          <Icon name="brush-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Manage Looks</Text>
        </TouchableOpacity>

        {/* Manage Stylists */}
        <TouchableOpacity style={styles.menuItem} onPress={() => {/* Handle onPress action */}}>
          <Icon name="people-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Manage Stylists</Text>
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Login')}>
          <Icon name="log-out-outline" size={24} color="black" />
          <Text style={styles.menuItemText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 18,
  },
});
