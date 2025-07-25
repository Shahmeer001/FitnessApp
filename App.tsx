import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lato_400Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato_700Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato_900Black': require('./assets/fonts/Lato-Black.ttf'),
    
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
