import type { Topic } from '$lib/types';

const pronombresRelativos: Topic = {
	id: 'pronombres-relativos',
	name: 'Pronombres Relativos',
	description:
		'Que, quien(es), el/la cual — and the indicative vs subjuntivo choice when the antecedent is unknown.',
	icon: '🔗',
	cards: [
		{
			sentence: 'He visto un restaurante que ___ un cocido buenísimo. (poner)',
			answer: 'pone',
			translation: 'I saw a restaurant that serves an excellent stew.',
			verb: 'poner',
			hint: 'indicativo — known antecedent'
		},
		{
			sentence: 'Estamos buscando un bar que ___ buenas tapas. (tener)',
			answer: 'tenga',
			translation: 'We are looking for a bar that has good tapas.',
			verb: 'tener',
			hint: 'subjuntivo — unknown antecedent'
		},
		{
			sentence: 'No hay ningún bar que ___ buenas tapas en este barrio. (tener)',
			answer: 'tenga',
			translation: 'There is no bar that has good tapas in this neighborhood.',
			verb: 'tener',
			hint: 'subjuntivo — negated antecedent'
		},
		{
			sentence: 'Cómprate un coche barato pero que ___ seguro. (ser)',
			answer: 'sea',
			translation: 'Buy yourself a cheap car, but one that is safe.',
			verb: 'ser',
			hint: 'subjuntivo — not yet identified'
		},
		{
			sentence: 'Conozco una profesora de piano que ___ clases a 20 € la hora. (dar)',
			answer: 'da',
			translation: 'I know a piano teacher who gives lessons for 20 € an hour.',
			verb: 'dar',
			hint: 'indicativo — specific person'
		},
		{
			sentence: 'Tengo un programa de ordenador que ___ para componer música. (servir)',
			answer: 'sirve',
			translation: 'I have a computer program that is used for composing music.',
			verb: 'servir',
			hint: 'indicativo — specific'
		},
		{
			sentence: '¿Conoces a alguien que ___ cuidar de mis hijos tres tardes a la semana? (poder)',
			answer: 'pueda',
			translation: 'Do you know anyone who can take care of my kids three afternoons a week?',
			verb: 'poder',
			hint: 'subjuntivo — unknown'
		},
		{
			sentence: 'Necesito una mochila que ___ para el gimnasio. (servir)',
			answer: 'sirva',
			translation: 'I need a backpack that works for the gym.',
			verb: 'servir',
			hint: 'subjuntivo — not yet found'
		},
		{
			sentence: 'Estoy buscando un piso que ___ una terraza grande. (tener)',
			answer: 'tenga',
			translation: 'I am looking for a flat that has a big terrace.',
			verb: 'tener',
			hint: 'subjuntivo — unspecific'
		},
		{
			sentence: 'Mi jefe está buscando un secretario que ___ quedarse hasta las ocho. (querer)',
			answer: 'quiera',
			translation: 'My boss is looking for a secretary who is willing to stay until eight.',
			verb: 'querer',
			hint: 'subjuntivo — unknown candidate'
		},
		{
			sentence: 'Me han dicho que necesitan chicos que ___ carné de conducir. (tener)',
			answer: 'tengan',
			translation: 'They told me they need guys who have a driver’s license.',
			verb: 'tener',
			hint: 'subjuntivo'
		},
		{
			sentence: '¿Conoces a alguien que ___ en televisión? (trabajar)',
			answer: 'trabaje',
			translation: 'Do you know anyone who works on television?',
			verb: 'trabajar',
			hint: 'subjuntivo — unknown'
		}
	]
};

export default pronombresRelativos;
