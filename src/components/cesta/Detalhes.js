import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Texto from '../Texto';

export default function Detalhes({
	nome,
	logo,
	nomeFazenda,
	descricao,
	preco,
}) {
	return (
		<>
			<Texto style={estilos.nome}>{nome}</Texto>
			<View style={estilos.fazenda}>
				<Image source={logo} style={estilos.logoFazenda} />
				<Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
			</View>
			<Texto style={estilos.descricao}>{descricao}</Texto>
			<Texto style={estilos.preco}>{preco}</Texto>

			<TouchableOpacity style={estilos.botao} onPress={funcaoExecutada}>
				<Texto style={estilos.textoBotao}>Comprar</Texto>
			</TouchableOpacity>
		</>
	);
}

const funcaoExecutada = () => {
    console.log('funcao executada');
}

const estilos = StyleSheet.create({
	nome: {
		fontSize: 26,
		lineHeight: 42,
		color: '#464646',
		fontWeight: 'bold',
	},
	fazenda: {
		flexDirection: 'row',
	},
	logoFazenda: {
		width: 32,
		height: 32,
	},
	nomeFazenda: {
		fontSize: 16,
		lineHeight: 26,
		marginLeft: 12,
	},
	descricao: {
		color: '#A3A3A3',
		fontSize: 16,
		lineHeight: 26,
	},
	preco: {
		color: '#2A9F85',
		fontWeight: 'bold',
		fontSize: 26,
		lineHeight: 42,
	},
	botao: {
		marginTop: 16,
		backgroundColor: '#2A9F85',
		paddingVertical: 12,
		borderRadius: 6,
	},
	textoBotao: {
		textAlign: 'center',
        color: 'white',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
	},
});
