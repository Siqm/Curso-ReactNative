import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native'
import Pessoas from './src/Pessoas/Pessoas';

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
          renderItem={ ({ item }) => <Pessoas data={ item }/> }
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

})

export default App;

