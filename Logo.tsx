import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('./imagenes/StarBucks.webp')}
      style={{ width: 150, height: 150, marginTop: 50, alignSelf:"center" }}
    />
  );
};

export default Logo;