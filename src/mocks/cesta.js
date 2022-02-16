import logo from '../../assets/logo.png';

import tomate from '../../assets/frutas/Tomate.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import abobora from '../../assets/frutas/Abóbora.png';

const cesta = {
	topo: {
		titulo: 'Detalhe da cesta',
	},

	detalhes: {
		nome: 'Cesta de Verduras',
		fazenda: 'Fazenda Cachoeirinha',
		descricao:
			'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
		logo,
	},

	itens: {
		titulo: 'Itens da cesta',
		itens: [
			{
				nome: 'Tomate',
				imagem: abobora,
			},
			{
				nome: 'Abóbora',
				imagem: batata,
			},
			{
				nome: 'Batata',
				imagem: batata,
			},
			{
				nome: 'Pepino',
				imagem: pepino,
			},
			{
				nome: 'Brócolis',
				imagem: brocolis,
			},
		],
	},
};

export default cesta;
