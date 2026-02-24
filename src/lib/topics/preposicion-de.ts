import type { Topic } from '$lib/types';

const preposicionDe: Topic = {
	id: 'preposicion-de',
	name: 'La Preposición "De"',
	description:
		'Master the versatile preposition "de" — used for possession, origin, material, and description. Think of it as the preposition of identity.',
	icon: '🔑',
	cards: [
		{
			sentence: 'El libro ___ Juan está en la estantería del salón. (posesión)',
			answer: 'de',
			translation: "Juan's book is on the living room bookshelf.",
			verb: 'de',
			hint: 'Posesión — no \'s in Spanish; use de + owner'
		},
		{
			sentence:
				'Soy ___ Barcelona, pero llevo diez años viviendo en Londres. (origen)',
			answer: 'de',
			translation:
				"I'm from Barcelona, but I've been living in London for ten years.",
			verb: 'de',
			hint: 'Origen — where someone is from: ser + de + place'
		},
		{
			sentence:
				'Me compré una pulsera ___ plata en el mercado de artesanía del pueblo. (material)',
			answer: 'de',
			translation:
				'I bought myself a silver bracelet at the village craft market.',
			verb: 'de',
			hint: 'Material — what something is made of'
		},
		{
			sentence:
				'Tengo clase ___ español todos los martes y jueves por la tarde. (descripción)',
			answer: 'de',
			translation:
				'I have Spanish class every Tuesday and Thursday afternoon.',
			verb: 'de',
			hint: 'Descripción — defining the type: clase de español'
		},
		{
			sentence:
				'La hermana ___ Luis trabaja como periodista en un periódico nacional. (posesión)',
			answer: 'de',
			translation:
				"Luis's sister works as a journalist at a national newspaper.",
			verb: 'de',
			hint: "Posesión — Luis's sister = la hermana de Luis"
		},
		{
			sentence:
				'Este vino es ___ la Rioja, una de las mejores regiones vinícolas de España. (origen)',
			answer: 'de',
			translation:
				"This wine is from La Rioja, one of Spain's best wine regions.",
			verb: 'de',
			hint: 'Origen — where the wine comes from'
		},
		{
			sentence:
				'En el escaparate había una figura ___ cristal que brillaba con la luz del sol. (material)',
			answer: 'de',
			translation:
				'In the shop window there was a crystal figure that sparkled in the sunlight.',
			verb: 'de',
			hint: 'Material — made of crystal'
		},
		{
			sentence:
				'El profesor ___ matemáticas nos ha puesto un examen sorpresa esta mañana. (descripción)',
			answer: 'de',
			translation:
				'The maths teacher gave us a surprise exam this morning.',
			verb: 'de',
			hint: 'Descripción — the maths teacher (type of teacher)'
		},
		{
			sentence:
				'Las llaves ___ la oficina están en el bolsillo de mi abrigo gris. (posesión)',
			answer: 'de',
			translation:
				'The office keys are in the pocket of my grey coat.',
			verb: 'de',
			hint: 'Posesión — the office keys = las llaves de la oficina'
		},
		{
			sentence:
				'Mis nuevos vecinos son ___ Alemania y están aprendiendo español muy rápido. (origen)',
			answer: 'de',
			translation:
				'My new neighbours are from Germany and they are learning Spanish very quickly.',
			verb: 'de',
			hint: 'Origen — from Germany'
		},
		{
			sentence:
				'Prefiero las camisas ___ algodón porque son más frescas en verano. (material)',
			answer: 'de',
			translation:
				'I prefer cotton shirts because they are cooler in summer.',
			verb: 'de',
			hint: 'Material — made of cotton'
		},
		{
			sentence:
				'¿Me pasas la taza ___ café que está al lado del ordenador portátil? (descripción)',
			answer: 'de',
			translation:
				'Can you pass me the coffee cup next to the laptop?',
			verb: 'de',
			hint: 'Descripción — a coffee cup (the type of cup, not its contents)'
		}
	]
};

export default preposicionDe;
