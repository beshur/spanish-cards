import type { Topic } from '$lib/types';

const vocabTiempo: Topic = {
	id: 'vocab-tiempo',
	name: 'Vocabulario: Tiempo Atmosférico',
	description:
		'Weather expressions — clouds, rain, fog, storms, and the verbs hacer/estar/haber for weather.',
	icon: '☁️',
	cards: [
		{
			sentence: 'Hace mucho ___ en la sierra hoy, ponte el abrigo.',
			answer: 'frío',
			translation: 'It’s very cold in the mountains today, put on your coat.',
			verb: '—',
			hint: 'cold'
		},
		{
			sentence: '___ a cántaros toda la mañana. (it’s pouring)',
			answer: 'Llueve',
			translation: 'It’s pouring rain all morning.',
			verb: 'llover',
			hint: 'verb llover'
		},
		{
			sentence: 'No se podía aterrizar; no había suficiente visibilidad por la ___.',
			answer: 'niebla',
			translation: 'They couldn’t land; there wasn’t enough visibility because of the fog.',
			verb: '—',
			hint: 'fog'
		},
		{
			sentence: 'Está ___, hay muchas nubes en el cielo.',
			answer: 'nublado',
			translation: 'It’s cloudy, there are lots of clouds in the sky.',
			verb: '—',
			hint: 'cloudy'
		},
		{
			sentence: 'En invierno está ___ en los Alpes. (snow verb)',
			answer: 'nevando',
			translation: 'In winter it’s snowing in the Alps.',
			verb: 'nevar',
			hint: 'gerundio de nevar'
		},
		{
			sentence: 'Hace mucho ___, no salgas sin gafas de sol.',
			answer: 'sol',
			translation: 'It’s very sunny, don’t go out without sunglasses.',
			verb: '—',
			hint: 'sun'
		},
		{
			sentence: 'Se acerca una ___ con truenos y lluvia fuerte.',
			answer: 'tormenta',
			translation: 'A storm with thunder and heavy rain is coming.',
			verb: '—',
			hint: 'storm'
		},
		{
			sentence: 'Salí sin paraguas y la ___ me empapó.',
			answer: 'lluvia',
			translation: 'I went out without an umbrella and the rain soaked me.',
			verb: '—',
			hint: 'rain (noun)'
		},
		{
			sentence: 'En la sierra ha caído mucha ___ esta noche.',
			answer: 'nieve',
			translation: 'In the mountains a lot of snow has fallen tonight.',
			verb: '—',
			hint: 'snow (noun)'
		},
		{
			sentence: 'En la playa hace muchísimo ___, no se puede abrir la sombrilla.',
			answer: 'viento',
			translation: 'On the beach it’s very windy, you can’t open the umbrella.',
			verb: '—',
			hint: 'wind'
		},
		{
			sentence: 'Hoy hace mucho ___, ponte ropa ligera.',
			answer: 'calor',
			translation: 'Today it’s very hot, wear light clothing.',
			verb: '—',
			hint: 'heat'
		},
		{
			sentence: 'Hay ___ y claros, pero no va a llover.',
			answer: 'nubes',
			translation: 'There are clouds and clear patches, but it won’t rain.',
			verb: '—',
			hint: 'clouds'
		}
	]
};

export default vocabTiempo;
