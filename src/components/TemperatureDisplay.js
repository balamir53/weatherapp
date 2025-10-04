import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TemperatureDisplay = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TemperatureDisplay Component</Text>
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

export default TemperatureDisplay;
