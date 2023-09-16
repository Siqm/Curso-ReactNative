import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = {uri: 'https://reactjs.org/logo-og.png'};

export default function Background() {
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>Inside</Text>
            </ImageBackground>
        </View>
    )
}