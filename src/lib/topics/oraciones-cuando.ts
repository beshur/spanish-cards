import type { Topic } from '$lib/types';

const oracionesCuando: Topic = {
	id: 'oraciones-cuando',
	name: 'Oraciones con Cuando',
	description:
		'Cuando + indicativo for present/past; + subjuntivo for the future; + futuro in indirect questions.',
	icon: '🕒',
	cards: [
		{
			sentence: 'Cuando ___ de viaje, siempre traigo regalos. (ir, yo)',
			answer: 'voy',
			translation: 'When I go on a trip, I always bring back presents.',
			verb: 'ir',
			hint: 'presente — habitual'
		},
		{
			sentence: 'Cuando ___ del trabajo, fui a visitar a Lola. (salir, yo)',
			answer: 'salí',
			translation: 'When I left work, I went to visit Lola.',
			verb: 'salir',
			hint: 'indefinido — past'
		},
		{
			sentence: 'Cuando ___ en París, trabajaba de camarero. (vivir, yo)',
			answer: 'vivía',
			translation: 'When I lived in Paris, I worked as a waiter.',
			verb: 'vivir',
			hint: 'imperfecto — habitual past'
		},
		{
			sentence: 'Cuando ___ este trabajo, voy a hacer un viaje. (terminar, yo)',
			answer: 'termine',
			translation: 'When I finish this job, I’m going to take a trip.',
			verb: 'terminar',
			hint: 'subjuntivo — future reference'
		},
		{
			sentence: '¿Cuándo ___ a verme? (venir, tú)',
			answer: 'vendrás',
			translation: 'When will you come to see me?',
			verb: 'venir',
			hint: 'interrogativa directa — futuro'
		},
		{
			sentence: '¿Sabes cuándo ___ María? (llegar)',
			answer: 'llegará',
			translation: 'Do you know when María will arrive?',
			verb: 'llegar',
			hint: 'interrogativa indirecta — futuro'
		},
		{
			sentence: 'No sé cuándo ___ a verte. (ir, yo)',
			answer: 'iré',
			translation: 'I don’t know when I’ll go to see you.',
			verb: 'ir',
			hint: 'indirect question — futuro'
		},
		{
			sentence: 'Cuando ___ a Paris, ve al Louvre. (ir, tú)',
			answer: 'vayas',
			translation: 'When you go to Paris, visit the Louvre.',
			verb: 'ir',
			hint: 'subjuntivo — future'
		},
		{
			sentence: 'Cuando ___ del trabajo, pásate por mi casa. (volver, tú)',
			answer: 'vuelvas',
			translation: 'When you get back from work, drop by my place.',
			verb: 'volver',
			hint: 'subjuntivo — future order'
		},
		{
			sentence: 'Cuando ___ a María, dile que la quiero. (ver, tú)',
			answer: 'veas',
			translation: 'When you see María, tell her I love her.',
			verb: 'ver',
			hint: 'subjuntivo — future'
		},
		{
			sentence: 'Cuando ___ tiempo, escribe la redacción. (tener, tú)',
			answer: 'tengas',
			translation: 'When you have time, write the essay.',
			verb: 'tener',
			hint: 'subjuntivo — future'
		},
		{
			sentence: 'Cuando ___ hambre, pídeselo a tu padre. (tener, tú)',
			answer: 'tengas',
			translation: 'When you’re hungry, ask your father.',
			verb: 'tener',
			hint: 'subjuntivo — future'
		}
	]
};

export default oracionesCuando;
