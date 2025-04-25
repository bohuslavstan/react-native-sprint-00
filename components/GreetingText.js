import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 28,
    textAlign: 'center', 
    marginBottom: 20, 
  },
});

const GreetingText = () => {
  return (
    <Text style={styles.text}>
      Start working My App! Bohuslav Stanishevskyy
    </Text>
  );
};

export default GreetingText;