import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Color, Screen} from '../Helper';
import {
  HomeScreen,
  SearchScreen,
  DetailScreen,
  FavoriteScreen,
} from '../Screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const renderMainStack = () => {
    const initialRouteName = Screen.HomeScreen;
    return (
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screen.HomeScreen} component={HomeScreen} />
        <Stack.Screen name={Screen.SearchScreen} component={SearchScreen} />
        <Stack.Screen name={Screen.DetailScreen} component={DetailScreen} />
        <Stack.Screen name={Screen.FavoriteScreen} component={FavoriteScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={Color.black07} />
      <NavigationContainer>{renderMainStack()}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
