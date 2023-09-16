import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles'

function Input(props) {
    return (
        <View>
            <TextInput
                placeholder={props.placeholder}
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.value}
            />
        </View>
    )
}

export default Input