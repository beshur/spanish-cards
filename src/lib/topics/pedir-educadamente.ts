import type { Topic } from '$lib/types';

const pedirEducadamente: Topic = {
	id: 'pedir-educadamente',
	name: 'Pedir Educadamente',
	description:
		'Polite request formulas — ¿Le importaría…? ¿Sería posible…? ¿Podría…? ¿Te importa que…?',
	icon: '🙏',
	cards: [
		{
			sentence: '¿___ importaría decirme si hay habitaciones libres? (forma formal con usted)',
			answer: 'Le',
			translation: 'Would you mind telling me if there are rooms available?',
			verb: '—',
			hint: 'pronoun for usted'
		},
		{
			sentence: '¿Sería ___ prepararme la cuenta, por favor?',
			answer: 'posible',
			translation: 'Would it be possible to prepare my bill, please?',
			verb: '—',
			hint: 'sería ___ + infinitivo'
		},
		{
			sentence: '¿___ tan amable de indicarme dónde hay un restaurante japonés?',
			answer: 'Sería',
			translation: 'Would you be kind enough to point me to a Japanese restaurant?',
			verb: '—',
			hint: 'forma cortés con infinitivo'
		},
		{
			sentence: '¿___ importaría despertarme a las ocho de la mañana? (formal)',
			answer: 'Le',
			translation: 'Would you mind waking me up at eight in the morning?',
			verb: '—',
			hint: 'pronoun for usted'
		},
		{
			sentence: '¿___ importa repetir lo que has dicho?',
			answer: 'Te',
			translation: 'Do you mind repeating what you said?',
			verb: '—',
			hint: 'pronoun for tú'
		},
		{
			sentence: '¿___ prestarme dinero? Olvidé mi cartera. (forma informal con tú)',
			answer: 'Podrías',
			translation: 'Could you lend me money? I forgot my wallet.',
			verb: 'poder',
			hint: 'condicional de poder — tú'
		},
		{
			sentence: '¿___ pasarme la sal, por favor? (formal con usted)',
			answer: 'Podría',
			translation: 'Could you pass me the salt, please?',
			verb: 'poder',
			hint: 'condicional de poder — usted'
		},
		{
			sentence: '¿Le ___ que me siente aquí? (formal — permission)',
			answer: 'importa',
			translation: 'Would you mind if I sit here?',
			verb: 'importar',
			hint: '+ que + subjuntivo'
		},
		{
			sentence: '¿Te importa ___ luz? (favor)',
			answer: 'apagar',
			translation: 'Do you mind turning off the light?',
			verb: 'apagar',
			hint: 'favor — + infinitivo'
		},
		{
			sentence: '¿Te importa que ___ la ventana? (permission)',
			answer: 'abra',
			translation: 'Do you mind if I open the window?',
			verb: 'abrir',
			hint: 'permiso — + subj.'
		},
		{
			sentence: '¿___ tan amables de esperar un momento? (formal plural)',
			answer: 'Serían',
			translation: 'Would you (plural) be so kind as to wait a moment?',
			verb: '—',
			hint: 'serían + tan amables de + inf.'
		},
		{
			sentence: '¿___ traernos otra cuchara, por favor? (formal)',
			answer: 'Podría',
			translation: 'Could you bring us another spoon, please?',
			verb: 'poder',
			hint: 'condicional — usted'
		}
	]
};

export default pedirEducadamente;
