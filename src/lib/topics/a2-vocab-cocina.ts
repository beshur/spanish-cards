import type { Topic } from '$lib/types';

const a2VocabCocina: Topic = {
	id: 'a2-vocab-cocina',
	name: 'Cocina y Restaurante',
	description:
		'Cooking ingredients, basic cooking verbs (cocer, freír, mezclar…) and restaurant vocabulary (camarero, primer plato, postre, la cuenta).',
	icon: '🍳',
	cards: [
		{
			sentence: 'Para hacer paella necesitamos arroz, azafrán y ___. (mariscos)',
			answer: 'gambas',
			translation: 'To make paella we need rice, saffron and prawns.',
			verb: '—',
			hint: 'gambas = prawns'
		},
		{
			sentence: 'Antes de cocinar, hay que ___ las verduras con agua fría. (verbo de cocina)',
			answer: 'lavar',
			translation: 'Before cooking, you have to wash the vegetables with cold water.',
			verb: 'lavar',
			hint: 'lavar = to wash'
		},
		{
			sentence: 'Voy a ___ las patatas en trozos no muy grandes. (cortar en trozos pequeños)',
			answer: 'cortar',
			translation: "I'm going to cut the potatoes into not very big pieces.",
			verb: 'cortar',
			hint: 'cortar = to cut'
		},
		{
			sentence: 'Para hacer salsa de tomate, primero hay que ___ la cebolla y el ajo. (verbo de cocina)',
			answer: 'picar',
			translation: 'To make tomato sauce, first you have to chop the onion and garlic.',
			verb: 'picar',
			hint: 'picar = to chop finely'
		},
		{
			sentence: 'Las patatas las puedes ___ en aceite muy caliente. (cocinar en aceite)',
			answer: 'freír',
			translation: 'You can fry the potatoes in very hot oil.',
			verb: 'freír',
			hint: 'freír = to fry'
		},
		{
			sentence: 'Hay que ___ los huevos en agua hirviendo durante diez minutos. (cocinar en agua)',
			answer: 'cocer',
			translation: 'You have to boil the eggs in boiling water for ten minutes.',
			verb: 'cocer',
			hint: 'cocer = to boil'
		},
		{
			sentence: '¿Me pasas el ___ de oliva, por favor? (líquido para cocinar)',
			answer: 'aceite',
			translation: 'Could you pass me the olive oil, please?',
			verb: '—',
			hint: 'aceite de oliva = olive oil'
		},
		{
			sentence: 'En el bar de la esquina, el ___ es muy simpático y nos conoce a todos. (persona)',
			answer: 'camarero',
			translation: 'At the corner bar, the waiter is very friendly and knows all of us.',
			verb: '—',
			hint: 'camarero = waiter'
		},
		{
			sentence: 'De primer plato voy a tomar la ensalada y de ___ pescado. (segundo / plato fuerte)',
			answer: 'segundo',
			translation: "For the first course I'll have salad and for the main course fish.",
			verb: '—',
			hint: 'segundo plato = main course'
		},
		{
			sentence: 'Para terminar voy a pedir un ___ de chocolate. (último plato dulce)',
			answer: 'postre',
			translation: 'To finish I’ll order a chocolate dessert.',
			verb: '—',
			hint: 'postre = dessert'
		},
		{
			sentence: 'Antes de comer, los españoles toman una ___ con la bebida. (snack pequeño)',
			answer: 'tapa',
			translation: 'Before eating, Spaniards have a small snack with their drink.',
			verb: '—',
			hint: 'tapa = small dish/snack'
		},
		{
			sentence: '¿Nos puede traer la ___? Tenemos que irnos. (lo que pagas)',
			answer: 'cuenta',
			translation: 'Could you bring us the bill? We need to leave.',
			verb: '—',
			hint: 'la cuenta = the bill'
		},
		{
			sentence: 'Por la mañana mucha gente toma un café con ___ y tostadas. (con el café español)',
			answer: 'leche',
			translation: 'In the morning many people have a café con leche and toast.',
			verb: '—',
			hint: 'café con leche'
		},
		{
			sentence: 'En este restaurante el ___ de la casa es una tortilla muy famosa. (sustantivo)',
			answer: 'plato',
			translation: 'At this restaurant the house special is a very famous tortilla.',
			verb: '—',
			hint: 'plato de la casa = house special'
		}
	]
};

export default a2VocabCocina;
