import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor:'#ddd'}}>
        <View style={{ height: 65, backgroundColor: '#121212'}}></View>

        <View style={{ flex: 1, backgroundColor: '#ddd'}}></View>

        <View style={{ height: 65, backgroundColor: '#121212'}}></View>
      </View>
    )
  }
}


export default App;