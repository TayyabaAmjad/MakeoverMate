import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';

export default function AdminLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Admin Login',
    });
  }, [navigation]);

  const handleAdminLogin = async () => {
    if (!email || !password) {
      Alert.alert('All Fields Required', 'Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://10.10.45.118:8081/api/auth/admin', { email, password });
      if (response.data.token) {
        setEmail('');
        setPassword('');
        navigation.navigate('Administration');
      }
    } catch (error) {
      Alert.alert('Invalid Credentials', 'Please check your email and password.');
      setEmail('');
      setPassword('');
    }
  };

  const navigateToForgotPassword = () => {
    setEmail('');
    setPassword('');
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>
{/* 
      <TouchableOpacity style={styles.forgotPassword} onPress={navigateToForgotPassword}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.button} onPress={handleAdminLogin}>
        <Text style={styles.buttonText}>Login as Admin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start', // Align items at the top
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 0,
  },
  inputContainer: {
    marginBottom: 40,
    marginLeft: 30,
    width: '90%',
    height: 40,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingBottom: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
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
    marginTop:20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // link: {
  //   marginTop: 10,
  //   color: '#D0A7D3',
  //   textDecorationLine: 'underline',
  // },
});
