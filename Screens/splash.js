import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay for demonstration purposes
    const timeout = setTimeout(() => {
      // Navigate to the main screen after the splash screen has been displayed
      navigation.replace('Main');
    }, 3000); // 3 seconds

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundcolor:'FFFAFA',
  },

  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
