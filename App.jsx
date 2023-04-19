import { Picker } from '@react-native-picker/picker';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizza: 0,
      pizzas: [
        {key:1, name: 'Marguerita', value: 39.90},
        {key:2, name: 'Quatro queijos', value: 37.90},
        {key:3, name: 'Pepperoni', value: 45.90},
        {key:4, name: 'Carijó', value: 40.90},
        {key:5, name: 'Moda do chefe', value: 37.90},
      ]
    }
  }

  render() {

    let itemPizzas = this.state.pizzas.map((item, index) => {
      return <Picker.Item key={index} value={index} label={item.name}/>
    })
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue})}
        >
          {itemPizzas}
        </Picker>

        <Text style={styles.pizzas}>Você escolhe: {this.state.pizzas[this.state.pizza].name}</Text>
        <Text style={styles.pizzas}>R$: {this.state.pizzas[this.state.pizza].value.toFixed(2)}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
  },

  logo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  pizzas: {
    marginTop: 15,
    fontSize: 25,
    textAlign:'center'
  }
})