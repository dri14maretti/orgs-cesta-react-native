import React from 'react';
import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function cesta() {
	return (
		<>
			<Image source={topo} style={estilos.topo} />
			<Text style={estilos.titulo}>Detalhe da cesta</Text>

			<View style={estilos.cesta}>
				<Text style={estilos.nome}>Cesta de Verduras</Text>
				<Text>Fazenda Cachoeirinha</Text>
				<Text>
					Uma cesta com produtos selecionados cuidadosamente da fazenda direto
					para sua cozinha
				</Text>
                <Text>R$40,00</Text>
			</View>
		</>
	);
}

const estilos = StyleSheet.create({
	topo: {
		width: '100%',
		height: (578 / 768) * width,
	},
	titulo: {
		width: '100%',
		position: 'absolute',
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 16,
		fontWeight: 'bold',
		padding: 16,
		color: 'white',
	},
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: '#464646',
        fontWeight: 'bold'
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
    }
});
