import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';
import { RootStackParamList } from '../navigation/types';

const WelcomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Welcome'>>();

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/welcome.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <LinearGradient
          colors={['#FFFFFF00', '#FFFFFF']}
          style={styles.gradient}
        />
      </View>

      <Text style={styles.title}>
        Wherever You Are Health Is Number One
      </Text>

      <Text style={styles.subtitle}>
        There is no instant way to a healthy life
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('MainTabs')}


      >
        <Text style={styles.buttonText}>Get Started</Text>
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
  button: {
  width: 350,
  height: 56,
  borderRadius: 32,
  backgroundColor: '#192126', // updated button background color
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 40,
  left: 20,
},
buttonText: {
  fontSize: 18,
  color: '#FFFFFF', // updated text color (remains white)
  fontFamily: 'Lato_700Bold',
},

});
