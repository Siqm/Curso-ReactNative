import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

 class Pessoas extends Component {
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

const styles = StyleSheet.create({
  areaPessoa: {
    backgroundColor: '#000044',
    height: 200,
    marginBottom: 15
  },

  textoPessoa: {
    fontSize: 20
  }
})

export default Pessoas