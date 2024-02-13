// Import the required modules
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';

// Define your drawer content component without any content
const DrawerContent = () => {
  return (
    <View>
      <Text>{'{informacion}'}</Text>
    </View>
  );
};

// Create the drawer navigator
const Drawer = createDrawerNavigator();

// Define your navigation component
const AppNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Placeholder" component={PlaceholderScreen} />
    </Drawer.Navigator>
  );
};

// Define the PlaceholderScreen component
const PlaceholderScreen = () => {
  return <View />;
};

// Export the AppNavigator component
export default AppNavigator;