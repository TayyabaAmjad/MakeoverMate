import React from 'react';
import { View, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

// Import your screens here
import Login from './Screens/login';
import AdminLogin from './Screens/adminLogin';
import SignUp from './Screens/signup';
import Home from './Screens/home';
import Splash from './Screens/splash';
import ForgotPassword from './Screens/forgotPassword'; 
import ResetPassword from './Screens/resetPassword';
import Makeover from './Screens/makeover';
import NaturalMakeup from './Screens/naturalMakeup';
import EyeMakeup from './Screens/eyeMakeup';
import PartyMakeup from './Screens/partyMakeup';
import NudeMakeup from './Screens/nudeMakeup';
import PastelMakeup from './Screens/pastelMakeup';
import BridalMakeup from './Screens/bridalMakeup';
import OurStylists from './Screens/OurStylists';
import TopStylists from './Screens/topStylist';
import Sara from './Screens/Stylist1';
import Hamna from './Screens/Stylist2';
import Alizy from './Screens/Stylist3';
import Farwa from './Screens/Stylist4';
import Aisha from './Screens/Stylist5';
import Hira from './Screens/Stylist6';
import Arwa from './Screens/Stylist7';
import Huma from './Screens/Stylist8';
import Mahar from './Screens/Stylist9';
import Booking from './Screens/Booking';
import Profile from './Screens/profile';
import Favourite from './Screens/Favourite';
import Overview from './Screens/Overview';
import TryOn from './Screens/tryon';
import Cam from './Screens/CameraScreen';
import Photo from './Screens/capturedPhoto';
import ColorPalette from './Screens/colorPalettePicker';
import Notification from './Screens/notifications';
import MakeupTryon from './Screens/makeupTryon';
import Search from './Screens/searchscreen';
import TopStylist1 from './Screens/topstylist1';
import TopStylist2 from './Screens/topstylist2';
import TopStylist3 from './Screens/topstylist3';
import Administration from './Screens/administration';
// import ManageLooksDropdown from './Screens/ManageLooksDropdownScreen';
// import ManageStylistsDropdown from './Screens/ManageStylistsDropdownScreen';

const Stack = createStackNavigator();

export default function App() {
  const openGoogleMaps = () => {
    const url = 'https://www.google.com/maps';
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  const openDialPad = () => {
    const url = 'tel:1234567890'; // replace with your phone number
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#D0A7D3', // Change the color to your desired color
          },
          headerTintColor: '#fff', // Change the text color of the header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({
            title: 'Home',
            headerLeft: () => null,
            headerRight: () => (
              <View style={{ flexDirection: 'row', marginRight: 20 }}>
                <TouchableOpacity onPress={openGoogleMaps}>
                  <Icon name="location-outline" size={22} color="white" style={{ marginRight: 15 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openDialPad}>
                  <Icon name="call-outline" size={22} color="white"  />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> 
        <Stack.Screen name="ResetPassword" component={ResetPassword} /> 
        <Stack.Screen name="Makeover" component={Makeover} /> 
        <Stack.Screen name="NaturalMakeup" component={NaturalMakeup} /> 
        <Stack.Screen name="EyeMakeup" component={EyeMakeup} /> 
        <Stack.Screen name="PartyMakeup" component={PartyMakeup} /> 
        <Stack.Screen name="NudeMakeup" component={NudeMakeup} /> 
        <Stack.Screen name="PastelMakeup" component={PastelMakeup} /> 
        <Stack.Screen name="BridalMakeup" component={BridalMakeup} /> 
        <Stack.Screen name="OurStylists" component={OurStylists} />
        <Stack.Screen name="TopStylists" component={TopStylists} />
        <Stack.Screen name="Sara" component={Sara} />
        <Stack.Screen name="Hamna" component={Hamna} />
        <Stack.Screen name="Alizy" component={Alizy} />
        <Stack.Screen name="Farwa" component={Farwa} />
        <Stack.Screen name="Aisha" component={Aisha} />
        <Stack.Screen name="Hira" component={Hira} />
        <Stack.Screen name="Arwa" component={Arwa} />
        <Stack.Screen name="Huma" component={Huma} />
        <Stack.Screen name="Mahar" component={Mahar} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Favourite" component={Favourite} />
        <Stack.Screen name="Overview" component={Overview} />
        <Stack.Screen name="TryOn" component={TryOn} />
        <Stack.Screen name="Cam" component={Cam} />
         <Stack.Screen name="Photo" component={Photo} />
         <Stack.Screen name="ColorPalette" component={ColorPalette} />
         <Stack.Screen name="Notification" component={Notification} />
         <Stack.Screen name="MakeupTryon" component={ MakeupTryon} />
         <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="TopStylist1" component={TopStylist1} />   
        <Stack.Screen name="TopStylist2" component={TopStylist2} />   
        <Stack.Screen name="TopStylist3" component={TopStylist3} />  
        <Stack.Screen name="Administration" component={Administration} />   
        {/* <Stack.Screen name="ManageLooksDropdown" component={ManageLooksDropdown} />
        <Stack.Screen name="ManageStylistsDropdown" component={ManageStylistsDropdown} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
