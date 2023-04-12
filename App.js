import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop:40
  },

  textoPrincipal: {
    fontSize: 25,
    color: 'red'
  },

  alinhaTexto: {
    textAlign: 'center'
  }
})

class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text style={styles.textoPrincipal}>Texto 4</Text>
      </View>
    )
  }
}


export default App;