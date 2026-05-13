import type { Topic } from '$lib/types';

const a2NumerosFechas: Topic = {
	id: 'a2-numeros-fechas',
	name: 'Números y Fechas',
	description:
		'Numbers above 100 (with masc/fem agreement on the hundreds), thousands and millions, and Spanish date format "dos de enero de 1976".',
	icon: '🔢',
	cards: [
		{
			sentence: 'Este abrigo cuesta ___ euros. (200, masc.)',
			answer: 'doscientos',
			translation: 'This coat costs two hundred euros.',
			verb: '—',
			hint: '200 + euros masc. → doscientos'
		},
		{
			sentence: 'Tiene una finca de ___ hectáreas. (300, fem.)',
			answer: 'trescientas',
			translation: 'She owns a 300-hectare estate.',
			verb: '—',
			hint: 'centenas concuerdan en género — fem. → trescientas'
		},
		{
			sentence: 'En la clase hay ___ alumnos. (25)',
			answer: 'veinticinco',
			translation: 'There are 25 students in the class.',
			verb: '—',
			hint: '1–30 son una sola palabra → veinticinco'
		},
		{
			sentence: 'Mi abuelo nació en ___. (1942)',
			answer: 'mil novecientos cuarenta y dos',
			translation: 'My grandfather was born in 1942.',
			verb: '—',
			hint: 'mil + novecientos + cuarenta + y + dos'
		},
		{
			sentence: 'La ciudad tiene ___ habitantes. (2.000.000)',
			answer: 'dos millones',
			translation: 'The city has two million inhabitants.',
			verb: '—',
			hint: 'millón se hace plural: dos millones'
		},
		{
			sentence: 'La encuesta dice que el ___ por ciento de los jóvenes hace deporte. (25%)',
			answer: 'veinticinco',
			translation: '25% of young people exercise.',
			verb: '—',
			hint: '"por ciento" = percent — número como veinticinco'
		},
		{
			sentence: 'Esta finca cuesta ___ euros. (125)',
			answer: 'ciento veinticinco',
			translation: 'This estate costs 125 euros.',
			verb: '—',
			hint: 'ciento (no "cien") cuando le sigue otro número'
		},
		{
			sentence: 'En la biblioteca hay ___ libros. (100)',
			answer: 'cien',
			translation: 'There are 100 books in the library.',
			verb: '—',
			hint: '100 exacto = cien (no "ciento")'
		},
		{
			sentence: 'Carlos Gardel murió el 24 de ___ de 1935. (mes: 6)',
			answer: 'junio',
			translation: 'Carlos Gardel died on June 24, 1935.',
			verb: '—',
			hint: '6 → junio (lowercase en español)'
		},
		{
			sentence: 'La fecha de hoy es: 15 de agosto ___ 2005. (preposición fechas)',
			answer: 'de',
			translation: 'Today is 15 August 2005.',
			verb: '—',
			hint: 'fórmula: día + de + mes + de + año'
		},
		{
			sentence: 'Rosario Flores nació el cuatro de noviembre de ___. (1963)',
			answer: 'mil novecientos sesenta y tres',
			translation: 'Rosario Flores was born on November 4, 1963.',
			verb: '—',
			hint: '1963 → mil novecientos sesenta y tres'
		},
		{
			sentence: 'El nuevo libro tiene ___ páginas. (500)',
			answer: 'quinientas',
			translation: 'The new book has 500 pages.',
			verb: '—',
			hint: '500 + páginas fem. → quinientas (forma irregular)'
		},
		{
			sentence: 'En la fiesta había ___ invitados. (700, masc.)',
			answer: 'setecientos',
			translation: 'There were 700 guests at the party.',
			verb: '—',
			hint: '700 = setecientos (irregular — no "sietecientos")'
		},
		{
			sentence: 'La final fue el ___ de mayo. (29)',
			answer: 'veintinueve',
			translation: 'The final was on May 29.',
			verb: '—',
			hint: '1–30 en una palabra → veintinueve'
		}
	]
};

export default a2NumerosFechas;
