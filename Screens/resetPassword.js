import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet,ScrollView } from 'react-native';

export default function ResetPassword({ navigation }) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

     React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Reset Password',
    });
  }, [navigation]);

  const handleResetPassword = () => {
    // Implement logic to reset password
    // After resetting password, navigate to the Login screen
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>New Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your new password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Done</Text>
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
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 0,
    marginLeft:50,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%', // Adjusted width to leave space for the logo
    marginLeft: 10,
    marginRight: 10,
    width:300,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: '100%', // Adjusted width to fill the container
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
    marginTop: 10,
    borderRadius: 20,
    marginLeft: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

