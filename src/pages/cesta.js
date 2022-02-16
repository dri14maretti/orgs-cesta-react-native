import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Topo from '../components/cesta/Topo';
import Detalhes from '../components/cesta/Detalhes';
import Itens from '../components/cesta/Itens';
import Texto from '../components/Texto';

export default function cesta({ topo, detalhes, itens }) {
	return (
		<FlatList
			data={itens.lista}
			renderItem={Itens}
			style={estilos.lista}
			ListHeaderComponent={() => (
				<>
					<Topo {...topo} />
					<View style={estilos.cesta}>
						<Detalhes {...detalhes} />
						<Texto style={estilos.titulo}>{itens.titulo}</Texto>
					</View>
				</>
			)}
		/>
	);
}

const estilos = StyleSheet.create({
	titulo: {
		color: '#464646',
		fontWeight: 'bold',
		marginTop: 32,
		marginBottom: 8,
		fontSize: 20,
		lineHeight: 32,
	},
	cesta: {
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	lista: {
		paddingHorizontal: 16,
	}
});
