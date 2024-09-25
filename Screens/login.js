import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      // Clear input fields when the screen is focused
      setEmail('');
      setPassword('');
    }, [])
  );

  const handleLogin = () => {
     if (!email || !password) {
      Alert.alert('All Fields Required', 'Please fill in all fields.', [
        { text: 'OK' }
      ]);
      return;
    }
    // Call API to authenticate user
    fetch('http://10.10.44.246:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        console.log("====", response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.token) {
          // Successful login, navigate to the home screen
          navigation.navigate('Home');
        } else {
          // Invalid credentials, show error message and clear input fields
          Alert.alert('Invalid Credentials', 'Please check your email and password.', [
            {
              text: 'OK', onPress: () => {
                setEmail('');
                setPassword('');
              }
            }
          ]);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle other errors, e.g., network error
        Alert.alert('Error', 'An error occurred while logging in. Please try again later.', [
          {
            text: 'OK', onPress: () => {
              setEmail('');
              setPassword('');
            }
          }
        ]);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email Address"
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

      <TouchableOpacity style={styles.forgotPassword} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('AdminLogin')}>
        <Text style={styles.link}>Login as Admin</Text>
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
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    color: '#D0A7D3',
    textDecorationLine: 'underline',
  },
});

export default Login;
