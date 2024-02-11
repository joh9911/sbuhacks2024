import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScrollView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import FeedScreen from './FeedScreen';
import CreateScreen from './CreateScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';

const BottomTab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    
    <BottomTab.Navigator>
      <BottomTab.Screen name="Feed" component={FeedScreen} />
      <BottomTab.Screen name="Search" component={SearchScreen} />
      <BottomTab.Screen name="Create" component={CreateScreen} />
      <BottomTab.Screen name="Profile" component={ProfileScreen} />
    </BottomTab.Navigator>
    
    
  );
}
const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#F0F0F0',
  }
    
});



