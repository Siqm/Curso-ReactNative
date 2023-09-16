import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import CustomButton from './src/components/CustomButton';
import Input from './src/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./public/background.png')}
        style={styles.image}
      >
        <View>

          <ImageBackground
            resizeMode='contain'
            source={require('./public/logoFree.png')}
            style={styles.logo}
          ></ImageBackground>

          <Input
            placeholder='Email'
          />
          <Input
            placeholder='Password'
          />

          <CustomButton title="Login"/>

          <TouchableOpacity style={{ marginTop: 150 }}>
            <Text style={styles.red}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <View style={styles.teste}>

            <Text style={styles.subtitle}>Ainda não é membro? </Text>
            <TouchableOpacity>
              <Text style={styles.red}>Registre-se</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    color: '#afafaf',
    fontFamily: 'Poppins'
  },

  image: {
    flex: 1
  },

  logo: {
    width: 135,
    height: 72,
    marginTop: 125,
    justifyContent: 'center',
    marginLeft: 127,
    marginBottom: 60
  },

  red: {
    color: '#D53333',
    textAlign: 'center'
  },

  teste : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center',
  },

  subtitle: {
    color: '#5A5A5A'
  }

})