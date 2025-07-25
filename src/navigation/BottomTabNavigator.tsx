// src/navigation/BottomTabNavigator.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import TodayPlanScreen from '../screens/TodayPlanScreen';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import { BottomTabParamList } from './types';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const CustomTabIcon = ({ focused, source, label }: any) => {
  return focused ? (
    <View style={styles.focusedContainer}>
      <Image source={source} style={styles.focusedIcon} />
      <Text style={styles.focusedText}>{label}</Text>
    </View>
  ) : (
    <Image source={source} style={styles.unfocusedIcon} />
  );
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              focused={focused}
              source={require('../../assets/images/home.png')}
              label="Home"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              focused={focused}
              source={require('../../assets/images/Explore.png')}
              label="Explore"
            />
          ),
        }}
      />
      <Tab.Screen
        name="TodayPlan"
        component={TodayPlanScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              focused={focused}
              source={require('../../assets/images/Statistic.png')}
              label="Plan"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              focused={focused}
              source={require('../../assets/images/home.png')}
              label="Stats"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
  position: 'absolute',
  bottom: 20, // adjust spacing from bottom
  left: 25,
  right: 25,
  height: 64,
  backgroundColor: '#000',
  borderRadius: 32,
  paddingHorizontal: 10,
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 0.1,
  shadowRadius: 5,
},

  focusedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BBF246', // glowing background
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 43,
    gap: 4,
  },
  focusedIcon: {
    width: 20,
    height: 20,
    tintColor: '#000', // icon inside glow becomes black
  },
  focusedText: {
    fontSize: 12,
    color: '#000',
    fontFamily: 'Lato_700Bold',
  },
  unfocusedIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFF', // white icon
  },
});
