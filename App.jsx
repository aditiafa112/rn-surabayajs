import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import PhotosScreen from './src/screens/PhotosScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={CustomBottomTab}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Photo" component={PhotosScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // mematikan auto header dari library
        }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const CustomBottomTab = ({route}) => ({
  tabBarIcon: ({focused}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = focused
        ? require('./src/assets/home-icon-active.png')
        : require('./src/assets/home-icon.png');
    } else if (route.name === 'Photo') {
      iconName = focused
        ? require('./src/assets/photo-icon-active.png')
        : require('./src/assets/photo-icon.png');
    } else {
      iconName = require('./src/assets/default-icon.png');
    }

    return <Image source={iconName} style={styles.iconBottomTab} />;
  },
  tabBarActiveTintColor: '#6a4234',
  tabBarInactiveTintColor: '#000000',
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerShown: false,
  tabBarStyle: {
    height: 70,
    paddingBottom: 5,
  },
});

const styles = StyleSheet.create({
  iconBottomTab: {
    width: 24,
    height: 24,
    marginVertical: 8,
  },
});
