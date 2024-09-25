import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';

export default function ForgotPassword({ navigation }) {
  const [email, setEmail] = useState('');
   React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Forgot Password',
    });
  }, [navigation]);

  const handleContinue = () => {
    // Implement logic to send reset password instructions
    // Navigate to the ResetPassword screen
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Enter your email and we will send you instructions on how to reset your password.</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align items at the top
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
    paddingTop: 50, // Adjusted top padding
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginLeft:50,
    marginRight:50,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '70%',
    height: 40,
    backgroundColor: '#A464AA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    borderRadius: 20,
    marginLeft:50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
