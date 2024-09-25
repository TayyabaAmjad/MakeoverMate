import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import axios from 'axios';

const SignUp = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
    if (!passwordPattern.test(password)) {
      return ['Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character.'];
    }
    return [];
  };

  const validateForm = () => {
    let isValid = true;
    setFirstNameError('');
    setLastNameError('');
    setEmailError('');
    setPasswordError('');
    setPhoneNumberError('');

    if (!firstName) {
      setFirstNameError('First name is required.');
      isValid = false;
    }
    if (!lastName) {
      setLastNameError('Last name is required.');
      isValid = false;
    }
    if (!email) {
      setEmailError('Email is required.');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid.');
      isValid = false;
    }
    if (!phoneNumber) {
      setPhoneNumberError('Phone number is required.');
      isValid = false;
    } else if (!/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError('Phone number is invalid.');
      isValid = false;
    }
    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setPasswordError(passwordErrors.join(' '));
      isValid = false;
    }
    return isValid;
  };

  const handleSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const userData = { firstName, lastName, email, password, phoneNumber };
      const response = await axios.post('http://10.10.44.246:8080/api/auth/register', userData);
      console.log('Registration successful:', response.data);

      Alert.alert('Account Created Successfully', 'Your account has been created successfully.', [
        { text: 'OK', onPress: () => navigation.navigate('Login') }
      ]);

      // Clear input fields
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        Alert.alert('Sign Up Failed', error.response.data.message || 'Registration failed. Please try again.', [{ text: 'OK' }]);
        if (error.response.data.errors) {
          setErrorMessages(error.response.data.errors);
        }
      } else {
        // Something else happened while setting up the request
        Alert.alert('Sign Up Failed', 'Failed to create account. Please try again later.', [{ text: 'OK' }]);
      }
      console.error('Registration failed:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={setFirstName}
          />
          {!!firstNameError && <Text style={styles.error}>{firstNameError}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last name"
            value={lastName}
            onChangeText={setLastName}
          />
          {!!lastNameError && <Text style={styles.error}>{lastNameError}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            value={email}
            onChangeText={setEmail}
          />
          {!!emailError && <Text style={styles.error}>{emailError}</Text>}
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
          {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          {!!phoneNumberError && <Text style={styles.error}>{phoneNumberError}</Text>}
        </View>
        {!!errorMessages.length && (
          <View style={styles.errorContainer}>
            {errorMessages.map((error, index) => (
              <Text key={index} style={styles.error}>{error}</Text>
            ))}
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFAFA',
    paddingBottom: 50,
  },
  logo: {   
    width: 200,
    height: 200,
  },
  inputContainer: {
    marginBottom: 10,
    width: '80%',
  },
  label: {
    marginTop: 0,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 35,
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
    borderRadius: 20,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    marginTop: 10,
    color: '#A464AA',
    textDecorationLine: 'underline',
  },
  errorContainer: {
    width: '80%',
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default SignUp;
