import type { Topic } from '$lib/types';

const adverbios: Topic = {
	id: 'adverbios',
	name: 'Adverbios en -mente',
	description:
		'Form adverbs by adding -mente to the feminine adjective — and learn when to use which.',
	icon: '⚡',
	cards: [
		{
			sentence: 'La ambulancia llegó ___ al lugar del accidente. (rápido)',
			answer: 'rápidamente',
			translation: 'The ambulance arrived rapidly at the scene.',
			verb: '—',
			hint: 'adjetivo → adverbio'
		},
		{
			sentence: 'María observó ___ el famoso cuadro de Picasso. (detenido)',
			answer: 'detenidamente',
			translation: 'María observed Picasso’s famous painting carefully.',
			verb: '—',
			hint: 'adv. de modo'
		},
		{
			sentence: 'El ciclista subió ___ el puerto de montaña. (lento)',
			answer: 'lentamente',
			translation: 'The cyclist climbed the mountain pass slowly.',
			verb: '—',
			hint: 'adv. de modo'
		},
		{
			sentence: '___, Juan aprobó el carné de conducir. (final)',
			answer: 'Finalmente',
			translation: 'Finally, Juan passed the driving test.',
			verb: '—',
			hint: 'adv. de tiempo / conector'
		},
		{
			sentence: 'El finalista cantó ___. (estupendo)',
			answer: 'estupendamente',
			translation: 'The finalist sang wonderfully.',
			verb: '—',
			hint: 'adv. de modo'
		},
		{
			sentence: 'Esperaré ___ hasta que me llame por teléfono. (tranquilo)',
			answer: 'tranquilamente',
			translation: 'I’ll wait calmly until he calls me.',
			verb: '—',
			hint: 'adv. de modo'
		},
		{
			sentence: 'Me caí por las escaleras ___. (tonto)',
			answer: 'tontamente',
			translation: 'I fell down the stairs stupidly.',
			verb: '—',
			hint: 'adv. de modo'
		},
		{
			sentence: 'Lo mejor es comer ___ y bien. (correcto)',
			answer: 'correctamente',
			translation: 'The best thing is to eat correctly and well.',
			verb: '—',
			hint: 'adj. → adv.'
		},
		{
			sentence: 'Habla ___, por favor — no entiendo nada. (despacio)',
			answer: 'despacio',
			translation: 'Speak slowly, please — I don’t understand a thing.',
			verb: '—',
			hint: 'adverbio que NO termina en -mente'
		},
		{
			sentence: 'Lo terminamos ___, sin prisa. (maravilloso)',
			answer: 'maravillosamente',
			translation: 'We finished it wonderfully, without rushing.',
			verb: '—',
			hint: 'adv. de modo'
		},
		{
			sentence: 'Lo dijo ___, sin pensar. (directo)',
			answer: 'directamente',
			translation: 'He said it directly, without thinking.',
			verb: '—',
			hint: 'adv. de modo'
		},
		{
			sentence: 'Me lo explicó ___, no entendí nada. (rápido)',
			answer: 'rápidamente',
			translation: 'He explained it rapidly to me, I didn’t understand a thing.',
			verb: '—',
			hint: 'adv. de modo'
		}
	]
};

export default adverbios;
