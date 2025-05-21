
// import { Ionicons } from '@expo/vector-icons';
// import axios from 'axios';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { useEffect, useRef, useState } from 'react';
// import {
//   ActivityIndicator,
//   Animated,
//   Dimensions,
//   Image,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View
// } from 'react-native';

// const { width } = Dimensions.get('window');
// const ITEM_WIDTH = width * 0.8;
// const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

// const carouselData = [
//   { id: 'left-spacer' },
//   { id: '1', title: 'Welcome', description: 'Check your emails easily', image: 'https://www.bing.com/images/search?view=detailV2&ccid=YbSfNrF%2B&id=E5E91956A7070F2D5BD8ABAD07D15EC8440AE25D&thid=OIP.YbSfNrF-GgygmzUAkCkhigHaFG&mediaurl=https%3A%2F%2Fwww.revv.co.in%2Fblogs%2Fwp-content%2Fuploads%2F2019%2F11%2Fself-drive-car-rental-delhi-gurgaon-noida_revv-blog.jpg&exph=883&expw=1280&q=visited+plases&simid=608043125433632783&FORM=IRPRST&ck=09402F533BD2BBF515D68F605D9342D8&selectedIndex=2&itb=0&cw=927&ch=522&ajaxhist=0&ajaxserp=0' },
//   { id: '2', title: 'Secure', description: 'Your credentials stay safe', image: 'https://via.placeholder.com/150' },
//   { id: '3', title: 'Fast', description: 'Quick email count fetch', image: 'https://via.placeholder.com/150' },
//   { id: 'right-spacer' },
// ];

// export default function DashboardScreen() {
//   const { email, appPassword } = useLocalSearchParams();
//   const [count, setCount] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const router = useRouter();

//   const fetchEmailCount = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.post('http://192.168.29.188:3001/get-email-count', {
//         email,
//         appPassword,
//       });
//       setCount(res.data.totalEmails);
//     } catch (err) {
//       console.error(err);
//       alert('Failed to fetch emails. Check credentials.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchEmailCount();
//   }, []);

//   const renderItem = ({ item, index }) => {
//     if (!item.title) return <View style={{ width: SPACER_WIDTH }} />;

//     const inputRange = [
//       (index - 2) * ITEM_WIDTH,
//       (index - 1) * ITEM_WIDTH,
//       index * ITEM_WIDTH,
//     ];

//     const scale = scrollX.interpolate({
//       inputRange,
//       outputRange: [0.98, 1, 0.98],
//       extrapolate: 'clamp',
//     });

//     return (
//       <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
//         <Image source={{ uri: item.image }} style={styles.cardImage} />
//         <Text style={styles.cardTitle}>{item.title}</Text>
//         <Text style={styles.cardDescription}>{item.description}</Text>
//       </Animated.View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//      <View style={{paddingTop:60, padding:20,}}>
//       <Animated.FlatList
//         data={carouselData}
//         keyExtractor={(item) => item.id}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         snapToAlignment="center"
//         decelerationRate="fast"
//         contentContainerStyle={{ alignItems: 'center' }}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: true }
//         )}
//         renderItem={renderItem}
//         scrollEventThrottle={16}
//       />
//       </View>

//       <View style={styles.content}>
//         <Text style={styles.title}>📧 Email Dashboard</Text>

//         {loading ? (
//           <ActivityIndicator size="large" color="#4b7bec" style={{ marginVertical: 30 }} />
//         ) : (
//           <Text style={styles.count}>Total Emails: {count}</Text>
//         )}

//         <View style={styles.buttons}>
//           <View style={{ alignItems: 'center' }}>
//             <TouchableOpacity style={styles.iconButton} onPress={fetchEmailCount}>
//               <Ionicons name="refresh" size={28} color="#4b7bec" />
//             </TouchableOpacity>
//             <Text style={styles.buttonText}>Refresh</Text>
//           </View>
//           <View style={{ alignItems: 'center' }}>
//             <TouchableOpacity style={styles.iconButton} onPress={() => router.replace('/Login')}>
//               <Ionicons name="log-out-outline" size={28} color="#eb3b5a" />
//             </TouchableOpacity>
//             <Text style={styles.buttonText}>Exit</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#f8f9fa' },
//   card: {
//     backgroundColor: '#eef2f7',
//     borderRadius: 20,
//     width: ITEM_WIDTH,
//     marginHorizontal: 10,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//     elevation: 5,
//   },
//   cardImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//     marginBottom: 15,
//   },
//   cardTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#4b7bec',
//     marginBottom: 5,
//   },
//   cardDescription: {
//     fontSize: 16,
//     color: '#555',
//     textAlign: 'center',
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     //paddingTop: 40,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#2d3436',
//     marginBottom: 20,
//   },
//   count: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: '#10ac84',
//     marginBottom: 20,
//   },
//   buttons: {
//     flexDirection: 'row',
//     gap: 40,
//     marginTop: 10,
//   },
//   iconButton: {
//     padding: 12,
//     backgroundColor: '#eaeaea',
//     borderRadius: 50,
//   },
//   buttonText: {
//     marginTop: 5,
//     fontSize: 15,
//     fontWeight: '600',
//   },
// });


import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8;
const SPACER_WIDTH = (width - ITEM_WIDTH) / 2;

// Updated image URLs
const carouselData = [
  { id: 'left-spacer' },
  {
    id: '1',
    title: 'Welcome',
    description: 'Check your emails easily',
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64', // valid image
  },
  {
    id: '2',
    title: 'Secure',
    description: 'Your credentials stay safe',
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64',
  },
  {
    id: '3',
    title: 'Fast',
    description: 'Quick email count fetch',
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64',
  },
  { id: 'right-spacer' },
];

export default function DashboardScreen() {
  const { email, appPassword } = useLocalSearchParams();
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);
  const scrollX = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const fetchEmailCount = async () => {
    try {
      setLoading(true);
      const res = await axios.post('https://vumonicbackend.onrender.com/get-email-count', {
        email,
        appPassword,
      });
      setCount(res.data.totalEmails);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch emails. Check credentials.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmailCount();
  }, []);

  const renderItem = ({ item, index }) => {
    if (!item.title) return <View style={{ width: SPACER_WIDTH }} />;

    const inputRange = [
      (index - 2) * ITEM_WIDTH,
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.98, 1, 0.98],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.cardWrapper, { transform: [{ scale }] }]}>
        <ImageBackground
          source={{ uri: item.image }}
          style={styles.card}
          imageStyle={styles.cardImageBackground}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </ImageBackground>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: 60, padding: 20 }}>
        <Animated.FlatList
          data={carouselData}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment="center"
          decelerationRate="fast"
          contentContainerStyle={{ alignItems: 'center' }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true }
          )}
          renderItem={renderItem}
          scrollEventThrottle={16}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>📧 Email Dashboard</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#4b7bec" style={{ marginVertical: 30 }} />
        ) : (
          <Text style={styles.count}>Total Emails: {count}</Text>
        )}

        <View style={styles.buttons}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.iconButton} onPress={fetchEmailCount}>
              <Ionicons name="refresh" size={28} color="#4b7bec" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Refresh</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity style={styles.iconButton} onPress={() => router.replace('/Login')}>
              <Ionicons name="log-out-outline" size={28} color="#eb3b5a" />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Exit</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  cardWrapper: {
    width: ITEM_WIDTH,
    marginHorizontal: 10,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  card: {
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eef2f7',
  },
  cardImageBackground: {
    resizeMode: 'cover',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: '#f1f1f1',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 20,
  },
  count: {
    fontSize: 22,
    fontWeight: '600',
    color: '#10ac84',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 40,
    marginTop: 10,
  },
  iconButton: {
    padding: 12,
    backgroundColor: '#eaeaea',
    borderRadius: 50,
  },
  buttonText: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '600',
  },
});
