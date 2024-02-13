import React from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';

const OTPInput = ({ containerStyle, value, onChangeText, ...props }) => {
  const renderedInputs = () => {
    const inputs = [];
    for (let i = 0; i < 6; i++) {
      inputs.push(
        <View key={i} style={[styles.inputContainer, { marginRight: i !== 5 ? 10 : 0 }]}>
          <TextInput
            style={styles.textInput}
            value={value[i]}
            onChangeText={text => onChangeText(i, text)}
            maxLength={1}
            keyboardType="number-pad"
            {...props}
          />
        </View>
      );
    }
    return inputs;
  };

  return (
    <View style={[styles.mainContainer, containerStyle]}>
      <Text style={styles.paragraph}>
        You only have to enter an OTP code we sent via SMS to your registered phone number +6288803210321
      </Text>
      <Text style={styles.otpLabel}>OTP*</Text>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {renderedInputs()}
        </View>
      </View>
      <Image source={require('./imagenes/StarBucks.webp')} style={styles.cornerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
  },
  paragraph: {
    color: 'green',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: 50,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: '#333',
    fontSize: 20,
  },
  otpLabel: {
    textAlign: 'left',
    color: 'green',
    marginBottom: 10,
    marginLeft: 30,
  },
  cornerImage: {
    position: 'absolute',
    bottom: -530,
    left: -100,
    width: 400,
    height: 400,
    opacity: 0.3,
  },
});

export default OTPInput;
