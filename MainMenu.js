import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';
import { Browser, Wallet, Notebook, Alarm } from './Componentes/SVG';
import { SvgXml } from 'react-native-svg';

const MainMenuScreen = ({ navigation, route }) => {
  const { fullName, email, phoneNumber } = route.params;
  const [isMenuVisible, setMenuVisible] = useState(false);

  const navigateToScreen = (screen) => {
    setMenuVisible(false);
    navigation.navigate(screen);
  };

  const svgXml = `
  <svg viewBox="0 -1 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>hamburger</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-210.000000, -887.000000)" fill="#000000"> <path d="M229,895 L211,895 C210.448,895 210,895.448 210,896 C210,896.553 210.448,897 211,897 L229,897 C229.552,897 230,896.553 230,896 C230,895.448 229.552,895 229,895 L229,895 Z M229,903 L211,903 C210.448,903 210,903.448 210,904 C210,904.553 210.448,905 211,905 L229,905 C229.552,905 230,904.553 230,904 C230,903.448 229.552,903 229,903 L229,903 Z M211,889 L229,889 C229.552,889 230,888.553 230,888 C230,887.448 229.552,887 229,887 L211,887 C210.448,887 210,887.448 210,888 C210,888.553 210.448,889 211,889 L211,889 Z" id="hamburger" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg>
  `;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.starbucks}>STARBUCKS</Text>
      <TouchableOpacity onPress={() => setMenuVisible(true)}>
       <SvgXml xml={svgXml} width="30" height="30" />
      </TouchableOpacity>
      </View>
      <Text style={styles.goodMorning}>Good Morning,</Text>
      <Text style={styles.name}>{fullName}</Text>
      <View style={styles.rewardContainer}>
        <Text style={styles.rewardTitle}>STARBUCKS REWARD</Text>
        <Text style={styles.greenLevel}>Green Level</Text>
        <Text style={styles.cardBalance}>21/100</Text>
        <View style={styles.progressBar}></View>
      </View>
      <View style={styles.additionalContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.cardBalanceInput} placeholder="Card Balance" />
          <Button title="Rp 593.000,-" onPress={() => {}} />
        </View>
        <View style={styles.imageRow}>
          {[...Array(4)].map((_, index) => (
            <Image
              key={index}
              style={styles.image}
              source={require('./imagenes/Cafe.png')} />
          ))}
        </View>
        <View style={styles.svgRow}>
          <Browser></Browser>
          <Wallet></Wallet>
          <Notebook></Notebook>
          <Alarm></Alarm>
        </View>
        <View style={styles.imageRow}>
          {[...Array(3)].map((_, index) => (
            <Image
              key={index}
              style={styles.image}
              source={require('./imagenes/Cafe.png')} />
          ))}
      </View>
      <Modal
        visible={isMenuVisible}
        animationType="none"
        transparent={true}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ backgroundColor: '#f0c88d', width: 200, padding: 20, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>{fullName}</Text>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>{email}</Text>
            <Button title="Home" onPress={() => navigateToScreen('Home')} />
            <Button title="Inicio" onPress={() => navigateToScreen('Inicio')} />
            <Button title="OTP" onPress={() => navigateToScreen('OTP')} />
            <Button title="Cuenta" onPress={() => navigateToScreen('Cuenta')} />
            <Button title="MainMenu" onPress={() => navigateToScreen('MainMenu')} />
            <Button title="Cerrar" onPress={() => setMenuVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008A46',
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  starbucks: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  goodMorning: {
    fontSize: 16,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    marginBottom: 20,
  },
  rewardContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
  },
  rewardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  greenLevel: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardBalance: {
    fontSize: 16,
    marginBottom: 10,
  },
  progressBar: {
    backgroundColor: 'lightgrey',
    height: 10,
    width: '100%',
    marginBottom: 10,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardBalanceInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    borderRadius: 5,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  image: {
    width: 50,
    height: 50, 
    resizeMode: 'contain',
  },
  svgRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },
  additionalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    marginTop: 20,
  },
  menuButton: {
    marginLeft: 'auto',
    padding: 10,
  },
  menuContainer: {
    position: 'absolute',
    top: 60,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});


export default MainMenuScreen;
