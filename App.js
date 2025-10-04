import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ForecastScreen from './src/screens/ForecastScreen';
import WeatherIcon from './src/components/WeatherIcon';
import TemperatureDisplay from './src/components/TemperatureDisplay';
import LocationServices from './src/components/LocationServices';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  ForecastScreen: { screen: ForecastScreen }
});

// Add StatusBar for Expo
// <StatusBar style="auto" />

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}