import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch, TextInput, Button, ImageBackground } from 'react-native';
import Slider from '@react-native-community/slider'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: 'homem',
      limite: 50,
      estudante: false,
    }
  }

  

  render() {

    const image = require('./src/components/background/background.png');

    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode='stretch' style={styles.image}>
          <Text>Siq Banco</Text>

          <View>
            <TextInput
              placeholder='Insira seu nome'
            // onChange={}
            />

            <TextInput
              placeholder='Insira sua idade'
            // onChange={}
            />

            <Text>Selecione seu sexo:</Text>
            <Picker
              selectedValue={this.state.sexo}
              onValueChange={(valor) => this.setState({ sexo: valor })}
            >
              <Picker.Item label='Homem' value='homem' />
              <Picker.Item label='Mulher' value='mulher' />
            </Picker>

            <Text>Selecione o limite da conta:</Text>
            <Slider
              minimumValue={50}
              maximumValue={2000}
              step={100}
            // onValueChange={}
            // value={}
            />

            <Text>Você é estudante?</Text>
            <Switch
            // onValueChange={}
            />

            {/* <Button
              // onPress={}
              title='Criar conta'
              color='#841584'
            /> */}
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
  }
})