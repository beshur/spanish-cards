import type { Topic } from '$lib/types';

const conjetura: Topic = {
	id: 'conjetura',
	name: 'Conjetura',
	description:
		'A lo mejor + indicativo (no futuro). Quizás/probablemente + ind. o subj. Seguramente + futuro o pres. subj.',
	icon: '🤔',
	cards: [
		{
			sentence: 'Juan no me habla. Quizás ___ enfadado conmigo. (estar)',
			answer: 'esté',
			translation: 'Juan isn’t talking to me. Maybe he’s mad at me.',
			verb: 'estar',
			hint: 'quizás → subjuntivo (preferred)'
		},
		{
			sentence: '¿Necesitas un trabajo? A lo mejor ___ uno pronto. (conseguir, tú)',
			answer: 'consigues',
			translation: 'Do you need a job? Maybe you’ll get one soon.',
			verb: 'conseguir',
			hint: 'a lo mejor → indicativo (no futuro)'
		},
		{
			sentence: 'El niño está llorando. Seguramente ___ hambre. (tener)',
			answer: 'tenga',
			translation: 'The child is crying. He’s probably hungry.',
			verb: 'tener',
			hint: 'seguramente → subj. (or fut.)'
		},
		{
			sentence: 'Estamos buscando billetes. A lo mejor los ___ en internet. (encontrar, nosotros)',
			answer: 'encontramos',
			translation: 'We’re looking for tickets. Maybe we’ll find them online.',
			verb: 'encontrar',
			hint: 'a lo mejor → indicativo'
		},
		{
			sentence: 'Paco no puede venir. Probablemente ___ trabajo en casa. (tener)',
			answer: 'tenga',
			translation: 'Paco can’t come. He probably has work at home.',
			verb: 'tener',
			hint: 'probablemente → subj.'
		},
		{
			sentence: 'Hace tiempo que no veo a Victoria. A lo mejor ya no ___ en Madrid. (vivir)',
			answer: 'vive',
			translation: 'I haven’t seen Victoria in a while. Maybe she no longer lives in Madrid.',
			verb: 'vivir',
			hint: 'a lo mejor → indicativo'
		},
		{
			sentence: 'El avión tenía que aterrizar. Quizás ___ con retraso. (venir)',
			answer: 'venga',
			translation: 'The plane was supposed to land. Maybe it’s delayed.',
			verb: 'venir',
			hint: 'quizás → subj.'
		},
		{
			sentence: 'No sé por qué no abre. Quizás no ___ el timbre. (oír, ella)',
			answer: 'oiga',
			translation: 'I don’t know why she isn’t opening. Maybe she doesn’t hear the bell.',
			verb: 'oír',
			hint: 'quizás → subj.'
		},
		{
			sentence: 'El director quiere hablar contigo. Seguramente te ___ el sueldo. (subir)',
			answer: 'suba',
			translation: 'The director wants to talk to you. He’s surely going to raise your salary.',
			verb: 'subir',
			hint: 'seguramente → subj.'
		},
		{
			sentence: 'Alicia no ha venido. A lo mejor ___ enferma. (estar)',
			answer: 'está',
			translation: 'Alicia hasn’t come. Maybe she’s sick.',
			verb: 'estar',
			hint: 'a lo mejor → indicativo'
		},
		{
			sentence: 'Quizás ya ___ que ir al médico. (tener, ella)',
			answer: 'tenga',
			translation: 'Maybe she already has to go to the doctor.',
			verb: 'tener',
			hint: 'quizás → subj.'
		},
		{
			sentence: 'Probablemente nosotros ___ a cenar a un restaurante japonés. (ir)',
			answer: 'vayamos',
			translation: 'We’ll probably go for dinner to a Japanese restaurant.',
			verb: 'ir',
			hint: 'probablemente → subj.'
		}
	]
};

export default conjetura;
