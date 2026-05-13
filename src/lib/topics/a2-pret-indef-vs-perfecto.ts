import type { Topic } from '$lib/types';

const a2PretIndefVsPerfecto: Topic = {
	id: 'a2-pret-indef-vs-perfecto',
	name: 'Indefinido vs Pretérito Perfecto',
	description:
		'Choosing between pretérito indefinido (closed past: ayer, en 2010, el lunes) and pretérito perfecto (recent past linked to now: hoy, esta semana, ya, todavía no).',
	icon: '🔀',
	cards: [
		{
			sentence: 'Esta mañana no ___ ido a trabajar. (ir, yo)',
			answer: 'he',
			translation: "I haven't gone to work this morning.",
			verb: 'haber',
			hint: '"esta mañana" → perfecto: he ido'
		},
		{
			sentence: 'Ayer ___ con mi madre en el centro. (comer, yo)',
			answer: 'comí',
			translation: 'Yesterday I had lunch with my mother downtown.',
			verb: 'comer',
			hint: '"ayer" → indefinido: comí'
		},
		{
			sentence: 'En 2001 ___ a Turquía de vacaciones. (ir, nosotros)',
			answer: 'fuimos',
			translation: 'In 2001 we went on holiday to Turkey.',
			verb: 'ir',
			hint: 'año cerrado → indefinido: fuimos'
		},
		{
			sentence: 'Este año ___ tres veces a Argentina. (ir, yo)',
			answer: 'he ido',
			translation: "I've been to Argentina three times this year.",
			verb: 'ir',
			hint: '"este año" (no acabado) → perfecto'
		},
		{
			sentence: 'Hace dos meses ___ a Brasil. (viajar, nosotros)',
			answer: 'viajamos',
			translation: 'Two months ago we travelled to Brazil.',
			verb: 'viajar',
			hint: '"hace + tiempo" pasado cerrado → indefinido'
		},
		{
			sentence: '¿Ya ___ las maletas? (hacer, tú)',
			answer: 'has hecho',
			translation: 'Have you packed already?',
			verb: 'hacer',
			hint: '"ya" → perfecto'
		},
		{
			sentence: 'Todavía no ___ a mi hermano. (llamar, yo)',
			answer: 'he llamado',
			translation: "I haven't called my brother yet.",
			verb: 'llamar',
			hint: '"todavía no" → perfecto'
		},
		{
			sentence: 'Esta semana ___ poca tele. (ver, yo)',
			answer: 'he visto',
			translation: "I've watched little TV this week.",
			verb: 'ver',
			hint: '"esta semana" (abierta) → perfecto: he visto'
		},
		{
			sentence: 'La semana pasada ___ al teatro con Marta. (ir, yo)',
			answer: 'fui',
			translation: 'Last week I went to the theatre with Marta.',
			verb: 'ir',
			hint: '"la semana pasada" → indefinido'
		},
		{
			sentence: 'En agosto ___ de vacaciones en Andalucía. (estar, yo)',
			answer: 'estuve',
			translation: 'In August I was on holiday in Andalusia.',
			verb: 'estar',
			hint: 'mes pasado cerrado → indefinido: estuve'
		},
		{
			sentence: 'Hoy ___ a ver a una amiga. (ir, yo)',
			answer: 'he ido',
			translation: "I've gone to see a friend today.",
			verb: 'ir',
			hint: '"hoy" (sin marcador específico) → perfecto'
		},
		{
			sentence: 'El lunes ___ pasta para cenar. (preparar, yo)',
			answer: 'preparé',
			translation: 'On Monday I made pasta for dinner.',
			verb: 'preparar',
			hint: 'día concreto pasado → indefinido'
		},
		{
			sentence: 'Mi madre ___ tres años en París. (vivir)',
			answer: 'vivió',
			translation: 'My mother lived in Paris for three years.',
			verb: 'vivir',
			hint: 'periodo cerrado/acabado → indefinido'
		},
		{
			sentence: 'Roberto Gómez es famoso porque ___ muchos libros. (escribir)',
			answer: 'ha escrito',
			translation: 'Roberto Gómez is famous because he has written many books.',
			verb: 'escribir',
			hint: 'experiencia vital sin fecha → perfecto: ha escrito'
		},
		{
			sentence: '¿___ alguna vez en España? (estar, tú)',
			answer: 'has estado',
			translation: 'Have you ever been to Spain?',
			verb: 'estar',
			hint: '"alguna vez" experiencias vitales → perfecto'
		}
	]
};

export default a2PretIndefVsPerfecto;
