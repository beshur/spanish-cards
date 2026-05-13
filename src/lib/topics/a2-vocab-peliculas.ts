import type { Topic } from '$lib/types';

const a2VocabPeliculas: Topic = {
	id: 'a2-vocab-peliculas',
	name: 'Tipos de películas',
	description:
		'Film genres at A2 — policíaca, comedia, ciencia ficción, terror, guerra, acción, oeste, musical, fantasía, aventuras, histórica.',
	icon: '🎬',
	cards: [
		{
			sentence: 'Si te gusta reírte, tienes que ver una ___. (género divertido)',
			answer: 'comedia',
			translation: 'If you like laughing, you should watch a comedy.',
			verb: '—',
			hint: 'comedia = comedy'
		},
		{
			sentence: 'Las películas con detectives y asesinatos son películas ___. (crimen)',
			answer: 'policíacas',
			translation: 'Films with detectives and murders are crime/detective films.',
			verb: '—',
			hint: 'policíaca = crime/detective'
		},
		{
			sentence: 'Mi hijo solo ve películas de ___ ficción, con naves y robots. (futuro)',
			answer: 'ciencia',
			translation: 'My son only watches science fiction films, with spaceships and robots.',
			verb: '—',
			hint: 'ciencia ficción = sci-fi'
		},
		{
			sentence: 'No me gustan las películas de ___ porque me dan miedo. (sustos)',
			answer: 'terror',
			translation: 'I don’t like horror films because they scare me.',
			verb: '—',
			hint: 'terror = horror'
		},
		{
			sentence: 'Esa peli de ___ tiene muchas peleas y persecuciones. (mucho movimiento)',
			answer: 'acción',
			translation: 'That action film has many fights and chase scenes.',
			verb: '—',
			hint: 'acción = action'
		},
		{
			sentence: 'Las películas del ___ tienen vaqueros y caballos. (americano antiguo)',
			answer: 'oeste',
			translation: 'Western films have cowboys and horses.',
			verb: '—',
			hint: 'oeste = Western'
		},
		{
			sentence: 'En un ___ los personajes cantan y bailan todo el tiempo. (con canciones)',
			answer: 'musical',
			translation: 'In a musical the characters sing and dance the whole time.',
			verb: '—',
			hint: 'musical = musical'
		},
		{
			sentence: 'Las películas de ___ cuentan batallas y soldados. (conflicto armado)',
			answer: 'guerra',
			translation: 'War films tell about battles and soldiers.',
			verb: '—',
			hint: 'guerra = war'
		},
		{
			sentence: 'Las películas de ___ tienen dragones, magos y mundos imaginarios. (imaginación)',
			answer: 'fantasía',
			translation: 'Fantasy films have dragons, wizards and imaginary worlds.',
			verb: '—',
			hint: 'fantasía = fantasy'
		},
		{
			sentence: 'Las películas de ___ están ambientadas en otra época del pasado. (siglos atrás)',
			answer: 'históricas',
			translation: 'Historical films are set in another era of the past.',
			verb: '—',
			hint: 'histórica = historical'
		},
		{
			sentence: 'En las películas de ___ los personajes viajan y descubren lugares nuevos. (riesgo y exploración)',
			answer: 'aventuras',
			translation: 'In adventure films, characters travel and discover new places.',
			verb: '—',
			hint: 'aventuras = adventure'
		},
		{
			sentence: '¿Qué tipo de ___ has visto este fin de semana? (sustantivo general)',
			answer: 'película',
			translation: 'What kind of film did you watch this weekend?',
			verb: '—',
			hint: 'película = film/movie'
		}
	]
};

export default a2VocabPeliculas;
