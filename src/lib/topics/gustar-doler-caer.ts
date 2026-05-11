import type { Topic } from '$lib/types';

const gustarDolerCaer: Topic = {
	id: 'gustar-doler-caer',
	name: 'Verbos tipo Gustar',
	description:
		'Gustar, doler, caer (bien/mal), interesar, importar, parecer, molestar, preocupar — pronoun + verb agrees with the thing.',
	icon: '❤️‍🩹',
	cards: [
		{
			sentence: 'A mí no ___ interesa la política.',
			answer: 'me',
			translation: 'I am not interested in politics.',
			verb: 'interesar',
			hint: 'pronoun for yo'
		},
		{
			sentence: '¿A ti ___ cae bien la profesora nueva?',
			answer: 'te',
			translation: 'Do you like the new teacher?',
			verb: 'caer',
			hint: 'pronoun for tú'
		},
		{
			sentence: 'A ella no le ___ bien esa blusa. (quedar)',
			answer: 'queda',
			translation: 'That blouse doesn’t look good on her.',
			verb: 'quedar',
			hint: '3rd singular — la blusa'
		},
		{
			sentence: '¿A vosotros ___ preocupa la contaminación?',
			answer: 'os',
			translation: 'Are you guys worried about pollution?',
			verb: 'preocupar',
			hint: 'pronoun for vosotros'
		},
		{
			sentence: 'A ellos no ___ importa llegar tarde.',
			answer: 'les',
			translation: 'They don’t mind arriving late.',
			verb: 'importar',
			hint: 'pronoun for ellos'
		},
		{
			sentence: 'A Natalia no le ___ el chocolate. (gustar)',
			answer: 'gusta',
			translation: 'Natalia doesn’t like chocolate.',
			verb: 'gustar',
			hint: '3rd singular — el chocolate'
		},
		{
			sentence: 'Me ___ las personas simpáticas. (gustar)',
			answer: 'gustan',
			translation: 'I like nice people.',
			verb: 'gustar',
			hint: '3rd plural — las personas'
		},
		{
			sentence: 'A Ernesto le ___ fatal los pantalones nuevos. (quedar)',
			answer: 'quedan',
			translation: 'The new trousers look awful on Ernesto.',
			verb: 'quedar',
			hint: '3rd plural — los pantalones'
		},
		{
			sentence: 'Me ___ la cabeza desde anoche. (doler)',
			answer: 'duele',
			translation: 'My head has been hurting since last night.',
			verb: 'doler',
			hint: 'la cabeza — singular'
		},
		{
			sentence: 'A mis padres les ___ los pies después de andar tanto. (doler)',
			answer: 'duelen',
			translation: 'My parents’ feet hurt after walking so much.',
			verb: 'doler',
			hint: 'los pies — plural'
		},
		{
			sentence: 'Niños, ¿___ apetece un helado?',
			answer: 'os',
			translation: 'Kids, do you fancy an ice cream?',
			verb: 'apetecer',
			hint: 'pronoun for vosotros'
		},
		{
			sentence: 'No pongas la música tan alta, a mis vecinos ___ molesta mucho.',
			answer: 'les',
			translation: 'Don’t play the music so loud — my neighbors really mind.',
			verb: 'molestar',
			hint: 'pronoun for ellos'
		}
	]
};

export default gustarDolerCaer;
