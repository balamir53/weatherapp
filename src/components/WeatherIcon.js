import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherIcon = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WeatherIcon Component</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WeatherIcon;
