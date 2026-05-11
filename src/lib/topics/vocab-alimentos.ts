import type { Topic } from '$lib/types';

const vocabAlimentos: Topic = {
	id: 'vocab-alimentos',
	name: 'Vocabulario: Alimentos',
	description:
		'Common Spanish foods from the B1 syllabus — meat, fish, vegetables, dairy, staples.',
	icon: '🍅',
	cards: [
		{
			sentence: 'Para hacer la tortilla necesito patatas y ___ frescos.',
			answer: 'huevos',
			translation: 'To make the omelette I need potatoes and fresh eggs.',
			verb: '—',
			hint: 'eggs'
		},
		{
			sentence: 'Como yogur con frutos secos y un poco de ___ líquida en el desayuno.',
			answer: 'leche',
			translation: 'I have yogurt with nuts and a bit of milk for breakfast.',
			verb: '—',
			hint: 'milk'
		},
		{
			sentence: 'Las ___ son una legumbre típica del cocido madrileño.',
			answer: 'lentejas',
			translation: 'Lentils are a typical pulse in Madrid stew.',
			verb: '—',
			hint: 'lentils'
		},
		{
			sentence: 'Voy a hacer paella con arroz, pollo y ___.',
			answer: 'mejillones',
			translation: 'I’m going to make paella with rice, chicken and mussels.',
			verb: '—',
			hint: 'mussels'
		},
		{
			sentence: 'Para la ensalada compré ___ y tomates.',
			answer: 'lechuga',
			translation: 'For the salad I bought lettuce and tomatoes.',
			verb: '—',
			hint: 'lettuce'
		},
		{
			sentence: 'No como carne, pero sí ___: salmón, atún y merluza.',
			answer: 'pescado',
			translation: 'I don’t eat meat, but I do eat fish: salmon, tuna and hake.',
			verb: '—',
			hint: 'fish (the food category)'
		},
		{
			sentence: 'Me he comprado un ___ de jamón y queso para el almuerzo.',
			answer: 'bocadillo',
			translation: 'I bought myself a ham and cheese sandwich for lunch.',
			verb: '—',
			hint: 'sandwich on baguette bread'
		},
		{
			sentence: 'En el supermercado venden ___ verdes y rojas para el guiso. (sing. f.: berenjena)',
			answer: 'berenjenas',
			translation: 'At the supermarket they sell green and red aubergines for the stew.',
			verb: '—',
			hint: 'aubergines / eggplants'
		},
		{
			sentence: 'A los niños les encanta la ___ con tomate.',
			answer: 'pasta',
			translation: 'The kids love pasta with tomato sauce.',
			verb: '—',
			hint: 'pasta'
		},
		{
			sentence: 'Para hacer el potaje uso ___ y espinacas.',
			answer: 'garbanzos',
			translation: 'To make the stew I use chickpeas and spinach.',
			verb: '—',
			hint: 'chickpeas'
		},
		{
			sentence: 'En el desayuno suelo tomar un ___ natural con fruta.',
			answer: 'yogur',
			translation: 'For breakfast I usually have a natural yogurt with fruit.',
			verb: '—',
			hint: 'yogurt'
		},
		{
			sentence: 'Compré ___ de ternera para hacer a la plancha.',
			answer: 'filete',
			translation: 'I bought a beef steak to grill.',
			verb: '—',
			hint: 'steak'
		}
	]
};

export default vocabAlimentos;
