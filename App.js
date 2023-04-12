import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class App extends Component {
  render() {
    return (
      <View>
        <Text>Hello world</Text>
        <Text style={{ color: 'red', backgroundColor: "white"}}>Estilos</Text>

        <Jobs largura={300} altura={500}/>
        
      </View>
    )
  }
}

class Jobs extends Component {
  render() {
  
    let img = 'https://sujeitoprogramador.com/steve.png'

    return (
      <Image 
        source={{ uri: img}}
        style={{ width: this.props.largura, height: this.props.altura}}
      />
    )
  }
}

export default App;