import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CustomButton from '../../components/CustomButton';
import GreetingText from '../../components/GreetingText';
import LogoImage from '../../components/LogoImage';

export default function App() {
  return (
    <View style={styles.container}>
      <GreetingText />
      <LogoImage />
      <CustomButton label="Click Me!" />
      <CustomButton label="Press This One" />
      <CustomButton label="Another Action" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
