import type { Topic } from '$lib/types';

const presente: Topic = {
	id: 'presente',
	name: 'Presente de Indicativo',
	description:
		'Habits, general truths, instructions, and near-future plans — including key irregular verbs.',
	icon: '☀️',
	cards: [
		{
			sentence: 'Luis nunca ___ a la discoteca los sábados. (ir)',
			answer: 'va',
			translation: 'Luis never goes to the disco on Saturdays.',
			verb: 'ir',
			hint: 'él form — irregular'
		},
		{
			sentence: 'Yo ___ peluquera y me gusta mucho mi trabajo. (ser)',
			answer: 'soy',
			translation: 'I am a hairdresser and I really like my job.',
			verb: 'ser',
			hint: 'yo form — irregular'
		},
		{
			sentence: 'Muchas tiendas en España ___ a mediodía. (cerrar)',
			answer: 'cierran',
			translation: 'Many shops in Spain close at midday.',
			verb: 'cerrar',
			hint: 'ellos form — e→ie stem change'
		},
		{
			sentence: 'Mañana te ___ a las tres en mi casa. (esperar)',
			answer: 'espero',
			translation: 'Tomorrow I will wait for you at three at my place.',
			verb: 'esperar',
			hint: 'yo form — present used for near future'
		},
		{
			sentence: 'Primero ___ el motor y luego empujas el pedal del embrague. (encender, tú)',
			answer: 'enciendes',
			translation: 'First you start the engine and then push the clutch pedal.',
			verb: 'encender',
			hint: 'tú form — instructions, e→ie'
		},
		{
			sentence: '¿A qué hora ___ (tú) normalmente del trabajo? (salir)',
			answer: 'sales',
			translation: 'What time do you usually leave work?',
			verb: 'salir',
			hint: 'tú form'
		},
		{
			sentence: 'Nosotros ___ todos los días una hora antes de cenar. (correr)',
			answer: 'corremos',
			translation: 'We run every day an hour before dinner.',
			verb: 'correr',
			hint: 'nosotros form'
		},
		{
			sentence: 'Mi hermana ___ inglés y francés en el instituto. (enseñar)',
			answer: 'enseña',
			translation: 'My sister teaches English and French at the high school.',
			verb: 'enseñar',
			hint: 'ella form'
		},
		{
			sentence: '¿Qué ___ (vosotros) los fines de semana cuando hace mal tiempo? (hacer)',
			answer: 'hacéis',
			translation: 'What do you guys do on weekends when the weather is bad?',
			verb: 'hacer',
			hint: 'vosotros form'
		},
		{
			sentence: 'Yo ___ a mis padres todos los domingos por la tarde. (ver)',
			answer: 'veo',
			translation: 'I see my parents every Sunday afternoon.',
			verb: 'ver',
			hint: 'yo form — irregular'
		},
		{
			sentence: 'Mis primos ___ en un piso enorme en el centro. (vivir)',
			answer: 'viven',
			translation: 'My cousins live in a huge flat downtown.',
			verb: 'vivir',
			hint: 'ellos form'
		},
		{
			sentence: 'Para entrar, tú ___ el botón y esperas a la señal. (pulsar)',
			answer: 'pulsas',
			translation: 'To enter, you press the button and wait for the signal.',
			verb: 'pulsar',
			hint: 'instructions — tú form'
		}
	]
};

export default presente;
