import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={{
          flex: 1, 
          flexDirection: 'row', 
          justifyContent:"flex-end",
          alignItems: 'flex-start'
        }}
      >

        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>

        <View style={{ width: 50, height: 50, backgroundColor: 'blue'}}></View>

        <View style={{ width: 50, height: 50, backgroundColor: 'green'}}></View>
      </View>
    )
  }
}


export default App;