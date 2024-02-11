
import React from 'react';
import { View, Text, Button } from 'react-native';

const MainMenuScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Menú Principal</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="Inicio"
        onPress={() => navigation.navigate('Inicio')}
      />
      <Button
        title="OTP"
        onPress={() => navigation.navigate('OTP')}
      />
      <Button
        title="Cuenta"
        onPress={() => navigation.navigate('Cuenta')}
      />
      <Button
        title="Pantalla"
        onPress={() => navigation.navigate('Pantalla')}
      />
      <Button
        title="Drawer"
        onPress={() => navigation.navigate('Drawer')}
      />
    </View>
  );
};

MainMenuScreen.navigationOptions = {
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 400,
        from: { opacity: 0, translateX: -100 },
        to: { opacity: 1, translateX: 0 }
      }
    },
    close: {
      animation: 'timing',
      config: {
        duration: 400,
        from: { opacity: 1, translateX: 0 },
        to: { opacity: 0, translateX: -100 }
      }
    }
  }
};

export default MainMenuScreen;
