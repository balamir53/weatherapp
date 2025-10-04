import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherIcon from '../components/WeatherIcon';
import TemperatureDisplay from '../components/TemperatureDisplay';
import LocationServices from '../components/LocationServices';

const HomeScreen = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch weather data and location information
    // Handle errors
  }, []);

  return (
    <View style={styles.container}>
      {error ? (
        <Text>Error fetching data. Please try again.</Text>
      ) : (
        <>
          <WeatherIcon weatherData={weatherData} />
          <TemperatureDisplay weatherData={weatherData} />
          <LocationServices location={location} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;