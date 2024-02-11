import React from 'react';
import { View, Text } from 'react-native';

const FooterLinks = () => {
  return (
    <View style={{ position: 'absolute', bottom: 60, width: '100%', alignItems: 'center' }}>
      <Text style={{ color: 'green', textAlign: 'center' }}>
        not a member? Sign up now
      </Text>
    </View>
  );
};

export default FooterLinks;
