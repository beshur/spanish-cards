import type { Topic } from '$lib/types';

const a2MeGustaria: Topic = {
	id: 'a2-me-gustaria',
	name: 'Me gustaría + infinitivo',
	description:
		'Polite expression of wishes — me/te/le/nos/os/les gustaría + infinitive. For improbable or hypothetical desires.',
	icon: '🌟',
	cards: [
		{
			sentence: 'A mí me ___ vivir en el campo algún día. (gustar — condicional)',
			answer: 'gustaría',
			translation: 'I would like to live in the countryside one day.',
			verb: 'gustar',
			hint: 'condicional regular de gustar — yo/él/ella: gustaría'
		},
		{
			sentence: '¿Te ___ ir al concierto del sábado conmigo? (gustar — condicional)',
			answer: 'gustaría',
			translation: 'Would you like to come to the concert on Saturday with me?',
			verb: 'gustar',
			hint: 'oferta cortés → te gustaría'
		},
		{
			sentence: 'A Lucía le ___ cambiar de trabajo, no está contenta. (gustar)',
			answer: 'gustaría',
			translation: 'Lucía would like to change jobs, she is not happy.',
			verb: 'gustar',
			hint: 'a + persona + le gustaría'
		},
		{
			sentence: 'A nosotros nos ___ comprar un apartamento en la playa. (gustar)',
			answer: 'gustaría',
			translation: 'We would like to buy a flat at the seaside.',
			verb: 'gustar',
			hint: 'nos gustaría (el verbo concuerda con el "objeto" — aquí infinitivo)'
		},
		{
			sentence: 'Os ___ ver otra vez El señor de los anillos en el cine, ¿verdad? (gustar)',
			answer: 'gustaría',
			translation: 'You all would like to see Lord of the Rings again in the cinema, right?',
			verb: 'gustar',
			hint: 'os gustaría + infinitivo'
		},
		{
			sentence: 'A mis amigos les ___ tener tres o cuatro hijos. (encantar — condicional)',
			answer: 'encantaría',
			translation: 'My friends would love to have three or four kids.',
			verb: 'encantar',
			hint: 'mismo patrón que "gustar": les encantaría + infinitivo'
		},
		{
			sentence: '¿Le ___ tomar algo, señor? (cortesía — usted)',
			answer: 'gustaría',
			translation: 'Would you like something to drink, sir?',
			verb: 'gustar',
			hint: 'usted → le gustaría'
		},
		{
			sentence: 'A mí me ___ aprender chino, pero es muy difícil. (gustar)',
			answer: 'gustaría',
			translation: "I'd like to learn Chinese, but it's very hard.",
			verb: 'gustar',
			hint: 'deseo hipotético → me gustaría'
		},
		{
			sentence: 'A los niños les ___ ir al parque de atracciones. (gustar)',
			answer: 'gustaría',
			translation: 'The kids would like to go to the amusement park.',
			verb: 'gustar',
			hint: 'a ellos → les gustaría'
		},
		{
			sentence: 'Me ___ pedirte un favor, si tienes un momento. (gustar)',
			answer: 'gustaría',
			translation: 'I would like to ask you a favour, if you have a moment.',
			verb: 'gustar',
			hint: 'introducción cortés → me gustaría'
		}
	]
};

export default a2MeGustaria;
