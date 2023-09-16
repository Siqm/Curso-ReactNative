import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import {styles} from './styles';

function CustomButton(props) {
    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton