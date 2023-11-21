import React from 'react';
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { AntDesign, Ionicons, FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Bubble({ logo, tipo, texto }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao}>
                {tipo === 'FontAwesome5' && (
                    <FontAwesome5 name={logo} size={32} color="#96b1fe" />
                )}
                {tipo === 'AntDesign' && (
                    <AntDesign name={logo} size={32} color="#96b1fe" />
                )}
                {tipo === 'Ionicons' && (
                    <Ionicons name={logo} size={32} color="#96b1fe" />
                )}
                {tipo === 'MaterialCommunityIcons' && (
                    <MaterialCommunityIcons name={logo} size={32} color="#96b1fe" />
                )}
                {tipo === 'FontAwesome' && (
                    <FontAwesome name={logo} size={32} color="#96b1fe" />
                )}
            </TouchableOpacity>
            <View style={styles.container_texto}>
                <Text style={styles.texto}>{texto}</Text>
            </View>
        </View>
    )
}