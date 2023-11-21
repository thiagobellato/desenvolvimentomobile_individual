import React from "react";
import { Image, View, Text } from "react-native";
import image from '../../assets/logo.png';
import styles from "./styles";

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <Text style={styles.title}>Meu INSS</Text>
        </View>
    )
}