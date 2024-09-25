import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';
import BottomNavigationBar from './bottomNavigationBar';

export default function Booking({ navigation }) {

  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    time: '',
  });

  // New state for time slots
  const [timeSlots, setTimeSlots] = useState({
    morning: ['9:00', '10:00', '11:00'],
    afternoon: ['2:00', '3:00', '4:00', '5:00', '6:00'],
  });

  // Function to handle time slot selection
  const selectTimeSlot = (time) => {
    setBookingDetails({ ...bookingDetails, time });
  };

  const handleBooking = () => {
    navigation.navigate('Overview', { bookingDetails });
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      {/* Content */}
      <View style={styles.content}>
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => setBookingDetails({ ...bookingDetails, date: day.dateString })}
          markedDates={{ [bookingDetails.date]: { selected: true } }}
          theme={{
            backgroundColor: '#FFFFFF',
            calendarBackground: '#FFFFFF',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: '#D0A7D3',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: '#00adf5',
            selectedDotColor: '#ffffff',
            arrowColor: 'orange',
            monthTextColor: '#D0A7D3',
            textDayFontFamily: 'monospace',
            textMonthFontFamily: 'monospace',
            textDayHeaderFontFamily: 'monospace',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: '300',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 16
          }}
        />
        
        {/* Time Slot Selection */}
        <View style={styles.timeSlotContainer}>
          <Text style={styles.timeSlotHeading}>Morning</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {timeSlots.morning.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlot,
                  bookingDetails.time === time && styles.selectedTimeSlot,
                ]}
                onPress={() => selectTimeSlot(time)}
              >
                <Text style={styles.timeSlotText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text style={styles.timeSlotHeading}>Afternoon</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {timeSlots.afternoon.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlot,
                  bookingDetails.time === time && styles.selectedTimeSlot,
                ]}
                onPress={() => selectTimeSlot(time)}
              >
                <Text style={styles.timeSlotText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Booking Button */}
        <TouchableOpacity style={styles.button} onPress={handleBooking}>
          <Text style={styles.buttonText}>Overview</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
         <BottomNavigationBar navigation={navigation} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
   // padding: 20,
    //paddingTop: 20,
    paddingBottom:100,
    paddingLeft:15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendar: {
    marginBottom: 10,
    width: 300, // Adjust the width of the calendar as needed
    aspectRatio: 1, // Maintain aspect ratio
  },
  timeSlotContainer: {
    width: '100%',
    marginTop: 20,
  },
  timeSlotHeading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  timeSlot: {
    padding: 10,
    borderWidth: 1,
    borderColor: '',
    borderRadius: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  selectedTimeSlot: {
    backgroundColor: '#D0A7D3',
  },
  timeSlotText: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#A464AA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
   // paddingTop:10,
   marginTop:10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
