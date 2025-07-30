import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../navigation/types';
import { signInAnonymously, onAuthStateChanged } from 'firebase/auth';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleGetStarted = async () => {
    setLoading(true);

    try {
      navigation.navigate('MainTabs')
    } catch (error) {
      console.error('Error signing in anonymously:', error);
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       console.log('User is signed in:', user.uid);
  //       navigation.replace('MainTabs');
  //     }
  //   });

  //   return unsubscribe; // Cleanup on unmount
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753680828/welcome_v9ptyp.png' }}
          style={styles.image}
          resizeMode="contain"
        />
        <LinearGradient colors={['#FFFFFF00', '#FFFFFF']} style={styles.gradient} />
      </View>

      <Text style={styles.title}>Wherever You Are Health Is Number One</Text>
      <Text style={styles.subtitle}>There is no instant way to a healthy life</Text>

      <Image
        source={{ uri: 'https://res.cloudinary.com/dgliirggm/image/upload/v1753682439/carousel_ajgvwr.png' }}
        style={styles.carouselImage}
      />

      <TouchableOpacity style={styles.button} onPress={handleGetStarted} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Get Started</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};


export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  imageWrapper: {
    width: 396,
    height: 565,
    position: 'relative',
    left: -5,
    marginTop: 60,
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 100,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Lato_900Black',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 9,
    color: '#000',
    textTransform: 'capitalize',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
    lineHeight: 15,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666666',
  },
  carouselImage: {
    width: 65,
    height: 5,
    position: 'absolute',
    top: 750,
    left: 157,
    borderRadius: 5,
    opacity: 1,
  },
  button: {
    width: 350,
    height: 56,
    borderRadius: 32,
    backgroundColor: '#192126',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    left: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Lato_700Bold',
  },
});