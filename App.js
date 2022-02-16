import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/pages/cesta';

import mock from './src/mocks/cesta';

import {
	useFonts,
	Monstserrat_400Regular,
	Monstserrat_700bold,
} from '@expo-google-fonts/montserrat';

export default function App() {
	const [fontsLoaded, error] = useFonts({
		MontserratRegular: Monstserrat_400Regular,
		MontserratBold: Monstserrat_700bold,
	});

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar />
			<Cesta {...mock} />
		</SafeAreaView>
	);
}
