import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WeatherIcon from '../components/WeatherIcon';
import TemperatureDisplay from '../components/TemperatureDisplay';

const ForecastScreen = ({ navigation }) => {
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch 5-day weather forecast data
    const fetchForecastData = async () => {
      try {
        // Make API call to get forecast data
        // const data = await fetchForecastData();
        // setForecastData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchForecastData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Display 5-day weather forecast using WeatherIcon and TemperatureDisplay components */}
      {forecastData.map((day, index) => (
        <View key={index} style={styles.forecastItem}>
          <WeatherIcon icon={day.icon} />
          <TemperatureDisplay temperature={day.temperature} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forecastItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default ForecastScreen;