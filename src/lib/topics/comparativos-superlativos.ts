import type { Topic } from '$lib/types';

const comparativosSuperlativos: Topic = {
	id: 'comparativos-superlativos',
	name: 'Comparativos y Superlativos',
	description:
		'Más/menos que, tan como, tanto/a/os/as como, irregulares (mayor, mejor…) and -ísimo.',
	icon: '⚖️',
	cards: [
		{
			sentence: 'Mi coche es ___ ruidoso que el tuyo.',
			answer: 'menos',
			translation: 'My car is less noisy than yours.',
			verb: '—',
			hint: 'inferiority'
		},
		{
			sentence: 'Mi coche corre tanto ___ el tuyo.',
			answer: 'como',
			translation: 'My car runs as fast as yours.',
			verb: '—',
			hint: 'equality with verb'
		},
		{
			sentence: 'Mi coche gasta tanta gasolina ___ el tuyo.',
			answer: 'como',
			translation: 'My car uses as much petrol as yours.',
			verb: '—',
			hint: 'equality with noun'
		},
		{
			sentence: 'Esta niña es guap___. (sin comparación)',
			answer: 'ísima',
			translation: 'This girl is extremely pretty.',
			verb: '—',
			hint: 'superlativo absoluto'
		},
		{
			sentence: 'Es el ___ alto de su clase.',
			answer: 'más',
			translation: 'He is the tallest in his class.',
			verb: '—',
			hint: 'superlativo relativo'
		},
		{
			sentence: 'Ana es más joven. Es ___ que su hermana.',
			answer: 'menor',
			translation: 'Ana is younger. She is younger than her sister.',
			verb: '—',
			hint: 'irregular comparative of pequeño/joven'
		},
		{
			sentence: 'Tú trabajas más que yo. Yo no trabajo ___ horas como tú.',
			answer: 'tantas',
			translation: 'You work more than me. I don’t work as many hours as you.',
			verb: '—',
			hint: 'tanto/a/os/as — agrees with horas'
		},
		{
			sentence: 'Madrid tiene ___ habitantes que Barcelona.',
			answer: 'más',
			translation: 'Madrid has more inhabitants than Barcelona.',
			verb: '—',
			hint: 'comparison with noun'
		},
		{
			sentence: 'Begoña no está ___ delgada como Susana.',
			answer: 'tan',
			translation: 'Begoña is not as thin as Susana.',
			verb: '—',
			hint: 'equality with adjective'
		},
		{
			sentence: 'Estos zapatos son malísimos. Me gustaría comprarme unos ___.',
			answer: 'mejores',
			translation: 'These shoes are awful. I’d like to buy better ones.',
			verb: '—',
			hint: 'irregular comparative of bueno'
		},
		{
			sentence: 'Hago más deporte que Ángel. Estoy ___ forma que él.',
			answer: 'en mejor',
			translation: 'I do more sport than Ángel. I’m in better shape than him.',
			verb: '—',
			hint: 'idiom — en mejor forma'
		},
		{
			sentence: 'El avestruz es el animal de dos patas más rápido ___ mundo.',
			answer: 'del',
			translation: 'The ostrich is the fastest two-legged animal in the world.',
			verb: '—',
			hint: 'superlativo + de + lugar'
		}
	]
};

export default comparativosSuperlativos;
