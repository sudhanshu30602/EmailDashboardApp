import { useRouter } from 'expo-router';
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/Login');
    }, 5000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/fonts/Splash.json')}
        autoPlay
        loop={false}
        style={styles.animation}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90', // Or dark background if your animation is light
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: width * 0.8,
    height: width * 0.8,
  },
});
