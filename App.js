import React, { Component } from 'react'
import { View, Text, Image, Button } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: ''
    }

    this.entrar = this.entrar.bind(this)
  }

  entrar(nome) {
    this.setState({
      nome: nome
    })
  }

  render() {
    return (
      <View>

        <Button title='Entrar' onPress={() => this.entrar('Rafael')}/>

        <Text style={{ fontSize:25, textAlign: "center", marginTop:10}}>
          {this.state.nome}
        </Text>
      </View>
    )
  }
}


export default App;