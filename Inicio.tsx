import React from 'react';
import { View } from 'react-native';
import Logo from './Logo';
import LoginForm from './LoginForm';
import FooterLinks from './FooterLinks';

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff'}}>
      <Logo />
      <LoginForm />
      <FooterLinks />
    </View>
  );
};

export default LoginScreen;