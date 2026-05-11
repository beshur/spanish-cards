import type { Topic } from '$lib/types';

const oracionesFinales: Topic = {
	id: 'oraciones-finales',
	name: 'Oraciones Finales',
	description:
		'Para + infinitivo when the subject is the same; para que + subjuntivo when subjects differ.',
	icon: '🎯',
	cards: [
		{
			sentence: 'Lo llamé ___ preguntarle por su salud.',
			answer: 'para',
			translation: 'I called him to ask about his health.',
			verb: '—',
			hint: 'same subject + infinitive'
		},
		{
			sentence: 'Te lo cuento ___ sepas lo que pasó.',
			answer: 'para que',
			translation: 'I’m telling you so you know what happened.',
			verb: '—',
			hint: 'different subject + subjuntivo'
		},
		{
			sentence: 'Te he invitado ___ conozcas mi pueblo.',
			answer: 'para que',
			translation: 'I’ve invited you so you can get to know my town.',
			verb: '—',
			hint: 'different subjects'
		},
		{
			sentence: 'Necesitamos una escalera ___ cambiar la bombilla.',
			answer: 'para',
			translation: 'We need a ladder to change the bulb.',
			verb: '—',
			hint: 'same subject — infinitive'
		},
		{
			sentence: '¿___ qué traes los libros? No tenemos tiempo de estudiar.',
			answer: 'Para',
			translation: 'What do you bring the books for? We don’t have time to study.',
			verb: '—',
			hint: 'interrogative'
		},
		{
			sentence: 'Me llevé a los niños al parque ___ hicieran algo de deporte.',
			answer: 'para que',
			translation: 'I took the kids to the park so they would get some exercise.',
			verb: '—',
			hint: 'past — different subject + imperf. subj.'
		},
		{
			sentence: 'Rosario cambió la planta de sitio ___ le diera más la luz.',
			answer: 'para que',
			translation: 'Rosario moved the plant so it would get more light.',
			verb: '—',
			hint: 'past — different subject'
		},
		{
			sentence: 'Vive en Moscú, pero de vez en cuando viene aquí ___ visitar a su familia.',
			answer: 'para',
			translation: 'He lives in Moscow but occasionally comes here to visit his family.',
			verb: '—',
			hint: 'same subject'
		},
		{
			sentence: 'Le he comprado un cuento al niño ___ lea algo mientras espera.',
			answer: 'para que',
			translation: 'I bought the kid a storybook so he reads something while he waits.',
			verb: '—',
			hint: 'different subjects'
		},
		{
			sentence: '___ estar en forma, tienes que descansar lo necesario.',
			answer: 'Para',
			translation: 'To be fit, you have to rest as needed.',
			verb: '—',
			hint: 'same subject — infinitive'
		},
		{
			sentence: 'Habían salido ___ dar un paseo, pero empezó a llover.',
			answer: 'para',
			translation: 'They had gone out to take a walk, but it started raining.',
			verb: '—',
			hint: 'same subject'
		},
		{
			sentence: 'Para ___ tus ensaladas perfectas, alíñalas justo antes de servir. (quedar)',
			answer: 'que queden',
			translation: 'So that your salads turn out perfect, dress them right before serving.',
			verb: 'quedar',
			hint: 'para que + subjuntivo'
		}
	]
};

export default oracionesFinales;
