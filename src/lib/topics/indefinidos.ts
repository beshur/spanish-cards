import type { Topic } from '$lib/types';

const indefinidos: Topic = {
	id: 'indefinidos',
	name: 'Indefinidos',
	description:
		'Poco/un poco/mucho/bastante/demasiado — agreement and the poco vs un poco distinction.',
	icon: '🧮',
	cards: [
		{
			sentence: 'Hay ___ personal en esta empresa.',
			answer: 'poco',
			translation: 'There is little staff in this company.',
			verb: '—',
			hint: 'masc. sing. — "not much"'
		},
		{
			sentence: 'Quiero un café con ___ de leche.',
			answer: 'un poco',
			translation: 'I want a coffee with a little milk.',
			verb: '—',
			hint: '"a little" — positive small amount'
		},
		{
			sentence: 'Me gusta ___. (≈ a lot)',
			answer: 'mucho',
			translation: 'I like it a lot.',
			verb: '—',
			hint: 'adverb — invariable'
		},
		{
			sentence: 'Julián come ___ dulces.',
			answer: 'muchos',
			translation: 'Julián eats many sweets.',
			verb: '—',
			hint: 'masc. pl.'
		},
		{
			sentence: 'Las patatas están ___ buenas.',
			answer: 'bastante',
			translation: 'The potatoes are pretty good.',
			verb: '—',
			hint: 'invariable — modifica adjetivo'
		},
		{
			sentence: 'Esperé ___ horas.',
			answer: 'bastantes',
			translation: 'I waited many hours.',
			verb: '—',
			hint: 'fem. pl. — con sustantivo'
		},
		{
			sentence: 'Tenía ___ miedo.',
			answer: 'demasiado',
			translation: 'I was too scared.',
			verb: '—',
			hint: 'masc. sing.'
		},
		{
			sentence: 'Hay ___ coches en esta calle.',
			answer: 'demasiados',
			translation: 'There are too many cars on this street.',
			verb: '—',
			hint: 'masc. pl.'
		},
		{
			sentence: 'He comprado ___ cerveza. (corrige: bastantes → bastante)',
			answer: 'bastante',
			translation: 'I have bought enough beer.',
			verb: '—',
			hint: 'cerveza is non-count — singular'
		},
		{
			sentence: 'No he bebido ___ agua.',
			answer: 'bastante',
			translation: 'I haven’t drunk enough water.',
			verb: '—',
			hint: 'invariable con incontable'
		},
		{
			sentence: 'No me lo puedo comprar; es ___ caro.',
			answer: 'demasiado',
			translation: 'I can’t afford it; it’s too expensive.',
			verb: '—',
			hint: 'adv. — invariable antes de adjetivo'
		},
		{
			sentence: 'Tengo ___ amigos. (corrige: mucho → muchos)',
			answer: 'muchos',
			translation: 'I have many friends.',
			verb: '—',
			hint: 'masc. pl.'
		}
	]
};

export default indefinidos;
