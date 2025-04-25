import React from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#007AFF', 
  },
  buttonLabel: {
    color: 'white',
    fontSize: 18,
  },
});

const CustomButton = ({ label }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert(`Hello! You pressed a button: "${label}"`)}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;