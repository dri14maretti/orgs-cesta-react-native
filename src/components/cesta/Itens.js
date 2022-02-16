import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import Texto from '../Texto';

export default function Itens({ item: { nome, imagem } }) {
	return (
		<View style={styles.item}>
			<Image source={imagem} style={styles.imagem} />
			<Texto style={styles.nome}>{nome}</Texto>
		</View>
	);
}

const styles = StyleSheet.create({
	item: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#E6E6E6',
		paddingVertical: 16,
        marginHorizontal: 16,
		alignItems: 'center',
	},
	imagem: {
		width: 46,
		height: 46,
	},
	nome: {
		fontSize: 16,
		lineHeight: 26,
		marginLeft: 12,
		color: '#464646',
	},
});
