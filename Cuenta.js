import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import MainMenu from './MainMenu';

const App = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const svgXml = '<svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#007500" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.2328 16.4569C12.9328 16.7426 12.9212 17.2173 13.2069 17.5172C13.4926 17.8172 13.9673 17.8288 14.2672 17.5431L13.2328 16.4569ZM19.5172 12.5431C19.8172 12.2574 19.8288 11.7827 19.5431 11.4828C19.2574 11.1828 18.7827 11.1712 18.4828 11.4569L19.5172 12.5431ZM18.4828 12.5431C18.7827 12.8288 19.2574 12.8172 19.5431 12.5172C19.8288 12.2173 19.8172 11.7426 19.5172 11.4569L18.4828 12.5431ZM14.2672 6.4569C13.9673 6.17123 13.4926 6.18281 13.2069 6.48276C12.9212 6.78271 12.9328 7.25744 13.2328 7.5431L14.2672 6.4569ZM19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25V12.75ZM5 11.25C4.58579 11.25 4.25 11.5858 4.25 12C4.25 12.4142 4.58579 12.75 5 12.75V11.25ZM14.2672 17.5431L19.5172 12.5431L18.4828 11.4569L13.2328 16.4569L14.2672 17.5431ZM19.5172 11.4569L14.2672 6.4569L13.2328 7.5431L18.4828 12.5431L19.5172 11.4569ZM19 11.25L5 11.25V12.75L19 12.75V11.25Z" fill="#ffffff"></path> </g></svg>';

  const handleContinuePress = () => {
    navigation.navigate('MainMenu', { fullName, email, phoneNumber }); 
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={[styles.headerText, { color: '#007500' }]}>Please fill in a few details below</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderBottomColor: '#007500' }]}
          placeholder="Full name"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderBottomColor: '#007500' }]}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { borderBottomColor: '#007500' }]}
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinuePress}>
          <SvgXml xml={svgXml} width="55" height="55" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 70,
    marginBottom: 10,
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: '#007500',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  continueButton: {
    position: 'absolute',
    bottom: '30%',
    right: '-45%',
    backgroundColor: 'transparent',
    padding: 10,
  },
});

export default App;
