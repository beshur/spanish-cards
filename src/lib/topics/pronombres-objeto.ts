import type { Topic } from '$lib/types';

const pronombresObjeto: Topic = {
	id: 'pronombres-objeto',
	name: 'Pronombres OD e OI',
	description:
		'Direct & indirect object pronouns, including the le → se rule when both appear together.',
	icon: '↔️',
	cards: [
		{
			sentence: '¿Has visto la exposición? Sí, ___ vi el sábado. (OD f. sing.)',
			answer: 'la',
			translation: 'Did you see the exhibition? Yes, I saw it on Saturday.',
			verb: '—',
			hint: 'la exposición → la'
		},
		{
			sentence: '¿Has hablado con tu hermana? Sí, ___ llamé la semana pasada. (OD f. sing.)',
			answer: 'la',
			translation: 'Have you talked to your sister? Yes, I called her last week.',
			verb: '—',
			hint: 'a ella → la (or le accepted)'
		},
		{
			sentence: '¿Has preparado los macarrones? No, ___ prepararé más tarde. (OD m. pl.)',
			answer: 'los',
			translation: 'Did you make the macaroni? No, I’ll make them later.',
			verb: '—',
			hint: 'los macarrones → los'
		},
		{
			sentence: 'No pagues, yo ___ invito. (OD masc. sing. — a ti)',
			answer: 'te',
			translation: 'Don’t pay, I’m treating you.',
			verb: '—',
			hint: 'a ti → te'
		},
		{
			sentence: '¿Qué ___ has regalado a tu madre? (OD neutro: a thing)',
			answer: 'le',
			translation: 'What did you give your mother as a present?',
			verb: '—',
			hint: 'OI — a tu madre'
		},
		{
			sentence: 'Devuélveme el libro que ___ presté. (OI — a ti)',
			answer: 'te',
			translation: 'Give me back the book I lent you.',
			verb: '—',
			hint: 'OI — a ti → te'
		},
		{
			sentence: '¿___ has dado la noticia a Luis? (OI — a él)',
			answer: 'Le',
			translation: 'Have you given the news to Luis?',
			verb: '—',
			hint: 'OI — a él'
		},
		{
			sentence: 'Acércaselo a tu compañero — Acerca ___ a él. (combinación)',
			answer: 'selo',
			translation: 'Pass it to your colleague.',
			verb: '—',
			hint: 'le + lo → se lo (juntos tras el verbo)'
		},
		{
			sentence: 'Dámelo, por favor — ___ a mí. (combinación: OI + OD)',
			answer: 'Dámelo',
			translation: 'Give it to me, please.',
			verb: 'dar',
			hint: 'imperativo + me + lo'
		},
		{
			sentence: '¿Me podrías dejar tu móvil? Sí, có___. (imperativo de coger + lo)',
			answer: 'gelo',
			translation: 'Could you lend me your phone? Yes, take it.',
			verb: 'coger',
			hint: 'imperativo + lo'
		},
		{
			sentence: 'Quiero verlos / Los quiero ver — Quiero ___. (perífrasis con OD pl.)',
			answer: 'verlos',
			translation: 'I want to see them.',
			verb: 'ver',
			hint: 'infinitivo + los'
		},
		{
			sentence: 'Sí, ___ he visto encima de la mesa. (OD pl. — las gafas)',
			answer: 'las',
			translation: 'Yes, I’ve seen them on top of the table.',
			verb: '—',
			hint: 'las gafas → las'
		}
	]
};

export default pronombresObjeto;
