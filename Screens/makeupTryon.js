import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import the AntDesign icon library
import Icon from 'react-native-vector-icons/Ionicons';

const MakeupTryon = ({ route,navigation }) => {
   React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Makeup Try on',
    });
   }, [navigation]);
  const { capturedPhotoUri } = route.params;

  // Dummy makeup look data
  const makeupLook = { id: 0, name: 'Looks ' }; // Change the name and data as needed

  // Array of image URIs for each card
  const cardImages = [
    require('../assets/eyeMakeup1.png'),
    require('../assets/eyeMakeup.png'),
    require('../assets/bridalMakeup.png'),
    require('../assets/nudeMakeup.png'),
    require('../assets/naturalMakeup.png'),
    require('../assets/partyMakeup.png'),
    require('../assets/pastelMakeup.png'),
    require('../assets/sara.png'),
    require('../assets/hamna.png'),
    require('../assets/alizy.png'),
  ];

  // Array of text for each card
  const cardTexts = [
    'Look1',
    'Look 2',
    'Look 3',
    'Look 4',
    'Look 5',
    'Look 6',
    'Look 7',
    'Look 8',
    'Look 9',
    'Look 10',
  ];

  return (
    <View style={styles.container}>
      {/* Display the captured photo */}
      <Image source={{ uri: capturedPhotoUri }} style={styles.capturedPhoto} />

      {/* Container below the captured photo */}
      <View style={styles.belowPhotoContainer}>
        {/* Reset icon */}
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="reload1" size={24} color="white" />
        </TouchableOpacity>
        
        {/* Favorite icon */}
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="heart" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.wrapContainer}>
        {/* Makeup look card */}
        <TouchableOpacity style={styles.makeupLookCard}>
          <Image source={require('../assets/eyeMakeup1.png')} style={styles.makeupLookImage} />
          <Text style={styles.makeupLookName}>{makeupLook.name}</Text>
        </TouchableOpacity>

        {/* Arrow container */}
        <TouchableOpacity style={styles.arrowContainer}>
          <Text>
            <AntDesign name="right" size={15} color="black" /> {/* Arrow icon */}
          </Text>
        </TouchableOpacity>

        {/* Container with 10 cards */}
        <ScrollView horizontal>
          <View style={styles.wrapContainer}>
            {cardImages.map((imageUri, index) => (
              <TouchableOpacity key={index} style={[styles.card, styles.cardSize]}>
                <Image source={imageUri} style={styles.cardImage} resizeMode="contain" />
                {cardTexts[index] && <Text style={styles.cardText}>{cardTexts[index]}</Text>}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
                <TouchableOpacity
                style={styles.forwardContainer}
                onPress={() => navigation.navigate('OurStylists')}
                >
                <Icon name="arrow-forward" size={25} color="white" style={styles.arrowIcon} />
                </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAFA',
  },
  capturedPhoto: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
  },
  belowPhotoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor:'#EBD6E4',
    height:40,
  },
  forwardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent:'flex-end',
    marginBottom: 20,
    backgroundColor:'#EBD6E4',
    height:30,
  },
  wrapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor:'white',
    height:120,
    borderWidth:0.5,
    borderColor:'#EBD6E4',
  },
  arrowContainer: {
    backgroundColor: '#FFFAFA',
    padding: 10,
    marginLeft: 10,
    height: 120,
    width: 30,
    marginLeft:0,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  makeupLookCard: {
    backgroundColor: '#EBD6E4',
    padding: 10,
    height: 120,
    marginLeft:-10,
    width: 60,
    alignItems: 'center', // Center horizontally
  },
  makeupLookImage: {
    width: 50,
    height: 50,
    marginTop:15,
    marginBottom: 10, // Add space between image and text
  },
  makeupLookName: {
    fontSize: 16,
    textAlign: 'center', // Center text horizontally
  },
  card: {
    backgroundColor: '#EBD6E4',
    padding: 10,
    marginLeft: 10,
    height: 100,
    width: 60,
    alignItems: 'center', // Center horizontally
  },
  cardSize: {
    height: 100,
    width: 60,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    flex: 1,
  },
  cardText: {
    fontSize: 12.5,
    textAlign: 'center', // Center text horizontally
  },
});

export default MakeupTryon;
















// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { AntDesign } from '@expo/vector-icons'; // Import the AntDesign icon library
// import Icon from 'react-native-vector-icons/Ionicons';

// const MakeupTryon = ({ route,navigation }) => {
//    React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: 'Makeup Try on',
//     });
//    }, [navigation]);
//   const { capturedPhotoUri } = route.params;

//   // Dummy makeup look data
//   const makeupLook = { id: 0, name: 'Looks ' }; // Change the name and data as needed

//   // Array of image URIs for each card
//   const cardImages = [
//     require('../assets/eyeMakeup1.png'),
//     require('../assets/eyeMakeup.png'),
//     require('../assets/bridalMakeup.png'),
//     require('../assets/nudeMakeup.png'),
//     require('../assets/naturalMakeup.png'),
//     require('../assets/partyMakeup.png'),
//     require('../assets/pastelMakeup.png'),
//     require('../assets/sara.png'),
//     require('../assets/hamna.png'),
//     require('../assets/alizy.png'),
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Display the captured photo */}
//       <Image source={{ uri: capturedPhotoUri }} style={styles.capturedPhoto} />

//       {/* Container below the captured photo */}
//       <View style={styles.belowPhotoContainer}>
//         {/* Reset icon */}
//         <TouchableOpacity style={styles.iconButton}>
//           <AntDesign name="reload1" size={24} color="white" />
//         </TouchableOpacity>
        
//         {/* Favorite icon */}
//         <TouchableOpacity style={styles.iconButton}>
//           <AntDesign name="heart" size={24} color="white" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.wrapContainer}>
//         {/* Makeup look card */}
//         <TouchableOpacity style={styles.makeupLookCard}>
//           <Image source={require('../assets/eyeMakeup1.png')} style={styles.makeupLookImage} />
//           <Text style={styles.makeupLookName}>{makeupLook.name}</Text>
//         </TouchableOpacity>

//         {/* Arrow container */}
//         <TouchableOpacity style={styles.arrowContainer}>
//           <Text>
//             <AntDesign name="right" size={15} color="black" /> {/* Arrow icon */}
//           </Text>
//         </TouchableOpacity>

//         {/* Container with 10 cards */}
//         <ScrollView horizontal>
//           <View style={styles.wrapContainer}>
//             {cardImages.map((imageUri, index) => (
//               <TouchableOpacity key={index} style={[styles.card, styles.cardSize]}>
//                 <Image source={imageUri} style={styles.cardImage} resizeMode="contain" />
//                 <Text style={styles.cardText}>Card {index + 1}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </ScrollView>
//       </View>
//                 <TouchableOpacity
//                 style={styles.forwardContainer}
//                 onPress={() => navigation.navigate('OurStylists')}
//                 >
//                 <Icon name="arrow-forward" size={25} color="white" style={styles.arrowIcon} />
//                 </TouchableOpacity>


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFAFA',
//   },
//   capturedPhoto: {
//     width: '80%',
//     height: '60%',
//     resizeMode: 'contain',
//     marginBottom: 20,
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   belowPhotoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginBottom: 20,
//     backgroundColor:'#EBD6E4',
//     height:40,
//   },
//   forwardContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     justifyContent:'flex-end',
//     marginBottom: 20,
//     backgroundColor:'#EBD6E4',
//     height:30,
//   },
//   wrapContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     marginBottom: 20,
//     backgroundColor:'white',
//     height:120,
//     borderWidth:0.5,
//     borderColor:'#EBD6E4',
//   },
//   arrowContainer: {
//     backgroundColor: '#FFFAFA',
//     padding: 10,
//     marginLeft: 10,
//     height: 120,
//     width: 30,
//     marginLeft:0,
//     alignItems: 'center', // Center horizontally
//     justifyContent: 'center',
//   },
//   contentContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//   },
//   makeupLookCard: {
//     backgroundColor: '#EBD6E4',
//     padding: 10,
//     height: 120,
//     marginLeft:-10,
//     width: 60,
//     alignItems: 'center', // Center horizontally
//   },
//   makeupLookImage: {
//     width: 50,
//     height: 50,
//     marginTop:15,
//     marginBottom: 10, // Add space between image and text
//   },
//   makeupLookName: {
//     fontSize: 16,
//     textAlign: 'center', // Center text horizontally
//   },
//   card: {
//     backgroundColor: '#EBD6E4',
//     padding: 10,
//     marginLeft: 10,
//     height: 100,
//     width: 60,
//     alignItems: 'center', // Center horizontally
//   },
//   cardSize: {
//     height: 100,
//     width: 60,
//   },
//   cardImage: {
//     width: 50,
//     height: 50,
//     marginBottom: 10,
//     flex: 1,
//   },
//   cardText: {
//     fontSize: 12.5,
//     textAlign: 'center', // Center text horizontally
//   },
// });

// export default MakeupTryon;