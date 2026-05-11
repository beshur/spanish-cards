import type { Topic } from '$lib/types';

const deseoSubjuntivo: Topic = {
	id: 'deseo-subjuntivo',
	name: 'Expresar Deseos',
	description:
		'Quiero/espero/deseo/me gustaría + infinitivo (mismo sujeto) o + que + subjuntivo (sujetos distintos).',
	icon: '🌠',
	cards: [
		{
			sentence: 'Deseo ___ más tiempo libre. (tener, yo)',
			answer: 'tener',
			translation: 'I wish I had more free time.',
			verb: 'tener',
			hint: 'mismo sujeto — infinitivo'
		},
		{
			sentence: 'Yo deseo que mis hijos ___ felices. (ser)',
			answer: 'sean',
			translation: 'I want my children to be happy.',
			verb: 'ser',
			hint: 'distinto sujeto — subjuntivo'
		},
		{
			sentence: 'Ella espera ___ el informe a tiempo. (terminar)',
			answer: 'terminar',
			translation: 'She hopes to finish the report on time.',
			verb: 'terminar',
			hint: 'mismo sujeto — infinitivo'
		},
		{
			sentence: 'Nos gustaría ___ Nueva York. (conocer)',
			answer: 'conocer',
			translation: 'We would like to get to know New York.',
			verb: 'conocer',
			hint: 'mismo sujeto'
		},
		{
			sentence: 'Me gustaría que ___ tu cuarto. (limpiar, tú)',
			answer: 'limpiaras',
			translation: 'I would like you to clean your room.',
			verb: 'limpiar',
			hint: 'me gustaría → imperf. subj.'
		},
		{
			sentence: 'Quiero que él ___ con nosotros mañana. (venir)',
			answer: 'venga',
			translation: 'I want him to come with us tomorrow.',
			verb: 'venir',
			hint: 'distinto sujeto — pres. subj.'
		},
		{
			sentence: 'Mi hija no me ayuda. Me gustaría que mi hija me ___. (ayudar)',
			answer: 'ayudara',
			translation: 'My daughter doesn’t help me. I’d like her to help me.',
			verb: 'ayudar',
			hint: 'me gustaría → imperf. subj.'
		},
		{
			sentence: 'Llego tarde todos los días. Me gustaría no ___ tarde. (llegar)',
			answer: 'llegar',
			translation: 'I arrive late every day. I’d like not to arrive late.',
			verb: 'llegar',
			hint: 'mismo sujeto — infinitivo'
		},
		{
			sentence: 'Mis hijos no trabajan. Me gustaría que mis hijos ___. (trabajar)',
			answer: 'trabajaran',
			translation: 'My kids don’t work. I’d like them to work.',
			verb: 'trabajar',
			hint: 'me gustaría → imperf. subj.'
		},
		{
			sentence: 'No salgo nunca de viaje. Me gustaría ___ de viaje. (salir)',
			answer: 'salir',
			translation: 'I never go on trips. I’d like to go on a trip.',
			verb: 'salir',
			hint: 'mismo sujeto'
		},
		{
			sentence: 'Me gustaría que tú me ___ japonés. (hablar)',
			answer: 'hablaras',
			translation: 'I’d like you to speak Japanese to me.',
			verb: 'hablar',
			hint: 'me gustaría → imperf. subj.'
		},
		{
			sentence: 'Les gustaría que yo ___ más amable. (ser)',
			answer: 'fuera',
			translation: 'They’d like me to be nicer.',
			verb: 'ser',
			hint: 'les gustaría → imperf. subj.'
		}
	]
};

export default deseoSubjuntivo;
