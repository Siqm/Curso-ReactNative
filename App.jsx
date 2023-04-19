import Slider from '@react-native-community/slider';
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Slider
          minimumValue={0}
          maximumValue={100}
          onValueChange={ (selectedValue) => this.setState({value: selectedValue})}
          step={1}
          value={this.state.value}
          minimumTrackTintColor='#0000FF'
          maximumTrackTintColor='#FF0000'
        />
        <Text style={{fontSize: 30, textAlign: 'center'}}>{this.state.value}</Text>
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