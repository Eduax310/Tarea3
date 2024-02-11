import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './Inicio';
import OTP from './OTPMain';
import Cuenta from './Cuenta';
import Pantalla from './Pantalla';
import Drawer from './MainMenu';
import contenido from './contenido';

interface InicioButtonProps {
  onPress: () => void;
  navigation: any;
}

const InicioButton: React.FC<InicioButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('./imagenes/StarBucks.webp')}
        style={{ width: 250, height: 250 }}
      />
    </TouchableOpacity>
  );
};


const App2 = ({ navigation }: { navigation: any }) => {
  const handleInicioPress = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <InicioButton navigation={navigation} onPress={handleInicioPress} />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App2} />
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Cuenta" component={Cuenta} />
        <Stack.Screen name="Pantalla Principal" component={Pantalla} />
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="contenido" component={contenido} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
