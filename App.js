import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "Rafael", idade: 23, email:"rafael@native.com"},
        {name: "Cleiton", idade: 23, email:"cleiton@native.com"},
        {name: "Fabiano", idade: 23, email:"indio@native.com"},
        {name: "Saito?", idade: 23, email:"saito-sama@native.com"},
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView> */}

        <FlatList 
          data = {this.state.data}
          keyExtractor={(item) => item.nome} // 'key' or 'id' são identificado automaticamente
          renderItem={ ({ item }) => <Pessoa data={ item }/> }
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  box1: {
    backgroundColor: "#FFaa00",
    height: 250
  },

  box2: {
    backgroundColor: "#FF0000",
    height: 250
  },

  box3: {
    backgroundColor: "#00FF00",
    height: 250
  },

  box4: {
    backgroundColor: "#0000FF",
    height: 250
  },

  areaPessoa: {
    backgroundColor: '#000044',
    height: 200,
    marginBottom: 15
  },

  textoPessoa: {
    fontSize: 20
  }
})

export default App;

class Pessoa extends Component {
  render() {
    return (
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.name}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
      </View>
    )
  }
}