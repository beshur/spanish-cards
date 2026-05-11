import type { Topic } from '$lib/types';

const estarGerundio: Topic = {
	id: 'estar-gerundio',
	name: 'Estar + Gerundio',
	description:
		'Actions in progress — present, past (estaba vs estuve + gerundio) and future progressive.',
	icon: '🎯',
	cards: [
		{
			sentence: 'Roberto ___ leyendo una novela. (estar, presente)',
			answer: 'está',
			translation: 'Roberto is reading a novel.',
			verb: 'estar',
			hint: 'él — presente'
		},
		{
			sentence: 'Lucía ___ esperando el autobús una hora. (estar, indefinido)',
			answer: 'estuvo',
			translation: 'Lucía was waiting for the bus for one hour.',
			verb: 'estar',
			hint: 'ella — pretérito indefinido (closed duration)'
		},
		{
			sentence: 'Mañana a esta hora ___ comiendo con Ana. (estar, futuro)',
			answer: 'estaré',
			translation: 'Tomorrow at this time I’ll be having lunch with Ana.',
			verb: 'estar',
			hint: 'yo — futuro'
		},
		{
			sentence: 'Antes Juanjo siempre ___ gastando bromas. (estar, imperfecto)',
			answer: 'estaba',
			translation: 'Juanjo used to be playing pranks all the time.',
			verb: 'estar',
			hint: 'él — habitual past'
		},
		{
			sentence: 'Conozco a una chica que ___ estudiando en Berlín cuando cayó el muro. (estar)',
			answer: 'estaba',
			translation: 'I know a girl who was studying in Berlin when the wall fell.',
			verb: 'estar',
			hint: 'imperfecto — background action'
		},
		{
			sentence: 'Anoche no pude dormir porque el gato ___ maullando sin parar. (estar)',
			answer: 'estuvo',
			translation: 'Last night I couldn’t sleep because the cat was meowing non-stop.',
			verb: 'estar',
			hint: 'indefinido — closed period last night'
		},
		{
			sentence: 'Anoche ___ celebrando el cumpleaños cuando vimos la noticia. (estar, nosotros)',
			answer: 'estábamos',
			translation: 'Last night we were celebrating the birthday when we saw the news.',
			verb: 'estar',
			hint: 'nosotros — imperfecto, action interrupted'
		},
		{
			sentence: 'Durante estos últimos años, ___ viajando para mejorar su inglés. (estar, él)',
			answer: 'ha estado',
			translation: 'Over the last few years, he has been travelling to improve his English.',
			verb: 'estar',
			hint: 'pretérito perfecto + gerundio'
		},
		{
			sentence: 'Cuando éramos jóvenes, ___ saliendo juntos una temporada. (estar, nosotros)',
			answer: 'estuvimos',
			translation: 'When we were young, we were dating for a while.',
			verb: 'estar',
			hint: 'nosotros — closed past period'
		},
		{
			sentence: 'He ___ leyendo toda la mañana. (estar, yo)',
			answer: 'estado',
			translation: 'I have been reading all morning.',
			verb: 'estar',
			hint: 'participle for he ___'
		},
		{
			sentence: 'Mis hijos ___ estudiando ahora mismo, no les molestes. (estar)',
			answer: 'están',
			translation: 'My kids are studying right now, don’t bother them.',
			verb: 'estar',
			hint: 'ellos — presente'
		},
		{
			sentence: 'La semana pasada Marta ___ trabajando hasta las once todos los días. (estar)',
			answer: 'estuvo',
			translation: 'Last week Marta was working until eleven every day.',
			verb: 'estar',
			hint: 'ella — closed past period'
		}
	]
};

export default estarGerundio;
