import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Texto({ children, style }) {
    return <Text style={[style, styles.texto]}>{ children }</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    }
})