import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import WeatherIcon from './src/components/WeatherIcon';
import TemperatureDisplay from './src/components/TemperatureDisplay';
import LocationServices from './src/components/LocationServices';

const Stack = createStackNavigator();

// Main Weather Screen
const WeatherScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Weather App</Text>
      </View>
      
      <View style={styles.weatherContent}>
        <WeatherIcon condition="sunny" size={80} />
        <TemperatureDisplay temperature={25} unit="°C" />
        <LocationServices />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
};

// Forecast Screen
const ForecastScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>5-Day Forecast</Text>
      <View style={styles.forecastList}>
        <View style={styles.forecastItem}>
          <Text>Tomorrow</Text>
          <WeatherIcon condition="cloudy" size={40} />
          <TemperatureDisplay temperature={22} unit="°C" />
        </View>
        <View style={styles.forecastItem}>
          <Text>Sunday</Text>
          <WeatherIcon condition="rainy" size={40} />
          <TemperatureDisplay temperature={18} unit="°C" />
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Weather">
        <Stack.Screen 
          name="Weather" 
          component={WeatherScreen}
          options={{ title: 'Current Weather' }}
        />
        <Stack.Screen 
          name="Forecast" 
          component={ForecastScreen}
          options={{ title: '5-Day Forecast' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  weatherContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forecastList: {
    flex: 1,
    paddingTop: 20,
  },
  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default App;