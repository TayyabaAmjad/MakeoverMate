import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, Alert, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import BottomNavigationBar from './bottomNavigationBar';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Overview({ navigation }) {

  const route = useRoute();
  const { bookingDetails } = route.params;

  // Sample stylist and makeup look
  const selectedStylist = "Jane Smith";
  const selectedMakeupLook = "Natural Look";
  // Sample price and tax rate
  const priceWithoutTax = 60;
  const taxRate = 0.1;

  // Calculate total price with tax
  const totalPriceWithTax = priceWithoutTax * (1 + taxRate);

  // State for payment method toggle
  const [isEasyPaisa, setIsEasyPaisa] = useState(false);

  const handlePaymentMethodToggle = () => setIsEasyPaisa(previousState => !previousState);

  const handleBookingConfirmation = () => {
    // Here you can implement the logic to confirm the booking
    // For now, let's just display an alert confirming the booking
    Alert.alert('Booking Confirmed', `Your appointment is booked for ${bookingDetails.date} at ${bookingDetails.time} with ${selectedStylist} for ${selectedMakeupLook}. Total Price: $${totalPriceWithTax.toFixed(2)}.`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* <Text style={styles.heading}>Overview</Text> */}
        <Text>Date: {bookingDetails.date}</Text>
        <Text>Time: {bookingDetails.time}</Text>
        <Text>Stylist: {selectedStylist}</Text>
        <Text>Makeup Look: {selectedMakeupLook}</Text>
        <Text>Tax Price: ${(totalPriceWithTax - priceWithoutTax).toFixed(2)}</Text>
        <Text>Total Price (with tax): ${totalPriceWithTax.toFixed(2)}</Text>

        <View style={styles.paymentMethod}>
          <Text>Payment Method: </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEasyPaisa ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={handlePaymentMethodToggle}
            value={isEasyPaisa}
          />
          <Text>{isEasyPaisa? 'Easy Paisa' : 'Cash'}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleBookingConfirmation}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
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
  scrollViewContent: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#D0A7D3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
});
