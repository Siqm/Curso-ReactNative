import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase: 'A vida trará coisas boas se tiver paciência.',
      img: require("./src/biscoito.png")
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
    ]
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({ 
      textoFrase: this.frases[numeroAleatorio],
      img: require("./src/biscoitoAberto.png")
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={this.state.img}
        />

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao: {
    width: 230,
    height:50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea: {
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;