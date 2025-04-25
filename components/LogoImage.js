import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

const LogoImage = () => {
  const myLogo = require('../assets/images/softserve.png');

  return (
    <Image source={myLogo} style={styles.image} />
  );
};

export default LogoImage;