import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={{
        // Exercício 1,Vamos usar na prop justifyContent o 
        // space-between ( Fazer com tenha espaço iguais entre eles ): 
          // flex: 1, 
          // flexDirection: 'row', 
          // justifyContent:"space-between",

        // Exercício 2, Vamos usar agora na prop justifyContent o space-around 
        // ( Fazer com tenha espaços iguais entre eles mas tambem ao redor ):
          // flex: 1,
          // flexDirection: 'row',
          // justifyContent: 'space-around'

        // Exercício 3, Vamos agora usar uma prop nova dentro
        // do alignItems o stretch ( Para essa prop funcionar
        // as views filhas não podem ter largura FIXA ) Vamos lá:
          flex: 1,
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
      >

        <View style={{ width: 100, height: 50, backgroundColor: 'red'}}></View>

        <View style={{ width: 50, height: 50, backgroundColor: 'blue'}}></View>

        <View style={{ width: 50, height: 50, backgroundColor: 'green'}}></View>
      </View>
    )
  }
}


export default App;