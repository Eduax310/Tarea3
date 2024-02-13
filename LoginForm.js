import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text, Checkbox } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate('OTP');
  };

  return (
    <>
      <Text style={{ color: 'green', textAlign: 'left', marginLeft: 40 }}>Log in with email</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{ marginTop: 10, width: '80%', height: 50, borderColor: 'green', borderWidth: 1, backgroundColor: 'white', color: 'green', alignSelf: 'center' }}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        style={{ marginTop: 10, width: '80%', height: 50, borderColor: 'green', borderWidth: 1, backgroundColor: 'white', color: 'green', alignSelf: 'center' }}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, alignSelf: 'center' }}>
      <Checkbox.Item  status="checked" label="Show Password" />
        <Text style={{ color: 'green', textAlign: 'right', marginLeft: 'auto' }}>Forgot password?</Text>
      </View>
      <Button mode="contained" onPress={handleSignIn} style={{ marginTop: 30, alignSelf: 'center', backgroundColor: 'green' }}>
        SIGN IN
      </Button>
    </>
  );
};

export default LoginForm;
