import type { Topic } from '$lib/types';

const vozPasiva: Topic = {
	id: 'voz-pasiva',
	name: 'Voz Pasiva',
	description:
		'Ser + participio (concordando con el sujeto pasivo) — used in news, history, and formal texts.',
	icon: '📰',
	cards: [
		{
			sentence: 'La penicilina ___ descubierta en 1928. (ser, indefinido)',
			answer: 'fue',
			translation: 'Penicillin was discovered in 1928.',
			verb: 'ser',
			hint: 'sujeto femenino singular'
		},
		{
			sentence: 'Hoy ___ recuperados los artículos robados. (haber sido)',
			answer: 'han sido',
			translation: 'Today the stolen articles have been recovered.',
			verb: 'ser',
			hint: 'plural masculino — pret. perf.'
		},
		{
			sentence: 'El sospechoso ha ___ declarado culpable por el Tribunal. (ser)',
			answer: 'sido',
			translation: 'The suspect has been declared guilty by the Court.',
			verb: 'ser',
			hint: 'participio de ser'
		},
		{
			sentence: 'El partido de fútbol ___ suspendido debido al mal tiempo. (ser)',
			answer: 'fue',
			translation: 'The football match was suspended due to bad weather.',
			verb: 'ser',
			hint: 'masculino singular — indefinido'
		},
		{
			sentence: 'La consejería ha ___ criticada durante la huelga. (ser)',
			answer: 'sido',
			translation: 'The council has been criticised during the strike.',
			verb: 'ser',
			hint: 'femenino — participio'
		},
		{
			sentence: 'El servicio de trenes ___ interrumpido por la huelga. (ser, indefinido)',
			answer: 'fue',
			translation: 'The train service was interrupted by the strike.',
			verb: 'ser',
			hint: 'masculino singular'
		},
		{
			sentence: 'Las medidas ambientales han ___ recibidas con entusiasmo. (ser)',
			answer: 'sido',
			translation: 'The environmental measures have been received with enthusiasm.',
			verb: 'ser',
			hint: 'participio para "han ___"'
		},
		{
			sentence: 'El Congreso de Médicos ___ clausurado por el ministro. (ser)',
			answer: 'fue',
			translation: 'The Medical Congress was closed by the minister.',
			verb: 'ser',
			hint: 'masculino singular — indefinido'
		},
		{
			sentence: 'Las preguntas ___ contestadas por el profesor. (ser, presente)',
			answer: 'son',
			translation: 'The questions are answered by the teacher.',
			verb: 'ser',
			hint: 'plural — presente'
		},
		{
			sentence: 'El cuadro ___ pintado por Goya en 1814.',
			answer: 'fue',
			translation: 'The painting was painted by Goya in 1814.',
			verb: 'ser',
			hint: 'masculino singular — indefinido'
		},
		{
			sentence: 'Esos libros ___ escritos por una autora joven. (ser, indefinido)',
			answer: 'fueron',
			translation: 'Those books were written by a young female author.',
			verb: 'ser',
			hint: 'masculino plural'
		},
		{
			sentence: 'Las reuniones ___ canceladas por el director. (ser, presente)',
			answer: 'son',
			translation: 'The meetings are cancelled by the director.',
			verb: 'ser',
			hint: 'femenino plural — presente'
		}
	]
};

export default vozPasiva;
