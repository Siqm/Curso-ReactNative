import Slider from '@react-native-community/slider';
import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Switch 
          value={this.state.status}
          onValueChange={ (switchValue) => this.setState({status: switchValue})}
        />

        <Text style={{textAlign: 'right', marginRight: 5, fontSize: 30}}>
          {(this.state.status) ? "True" : "False"}
        </Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
  },
})