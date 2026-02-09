import type { Topic } from '$lib/types';

const subjuntivo: Topic = {
	id: 'subjuntivo',
	name: 'Subjuntivo Presente',
	description: 'Practice the present subjunctive mood — used for wishes, doubts, emotions, and hypothetical situations.',
	icon: '🌊',
	cards: [
		// -AR verbs
		{
			sentence: 'Espero que tú ___ más. (hablar)',
			answer: 'hables',
			translation: 'I hope that you speak more.',
			verb: 'hablar',
			hint: 'tú form'
		},
		{
			sentence: 'Es importante que nosotros ___ la verdad. (buscar)',
			answer: 'busquemos',
			translation: 'It is important that we look for the truth.',
			verb: 'buscar',
			hint: 'nosotros form — note the spelling change c→qu'
		},
		{
			sentence: 'Quiero que ella ___ conmigo. (bailar)',
			answer: 'baile',
			translation: 'I want her to dance with me.',
			verb: 'bailar',
			hint: 'ella form'
		},
		{
			sentence: 'Dudo que ellos ___ a tiempo. (llegar)',
			answer: 'lleguen',
			translation: 'I doubt that they arrive on time.',
			verb: 'llegar',
			hint: 'ellos form — note the spelling change g→gu'
		},
		{
			sentence: 'Es necesario que yo ___ temprano. (trabajar)',
			answer: 'trabaje',
			translation: 'It is necessary that I work early.',
			verb: 'trabajar',
			hint: 'yo form'
		},
		// -ER verbs
		{
			sentence: 'No creo que él ___ la respuesta. (saber)',
			answer: 'sepa',
			translation: "I don't think he knows the answer.",
			verb: 'saber',
			hint: 'él form — irregular'
		},
		{
			sentence: 'Es posible que nosotros ___ mañana. (comer)',
			answer: 'comamos',
			translation: 'It is possible that we eat tomorrow.',
			verb: 'comer',
			hint: 'nosotros form'
		},
		{
			sentence: 'Ojalá que tú ___ bien. (correr)',
			answer: 'corras',
			translation: 'I hope that you run well.',
			verb: 'correr',
			hint: 'tú form'
		},
		// -IR verbs
		{
			sentence: 'Es mejor que ustedes ___ ahora. (salir)',
			answer: 'salgan',
			translation: 'It is better that you all leave now.',
			verb: 'salir',
			hint: 'ustedes form — irregular'
		},
		{
			sentence: 'Quiero que tú ___ la puerta. (abrir)',
			answer: 'abras',
			translation: 'I want you to open the door.',
			verb: 'abrir',
			hint: 'tú form'
		},
		{
			sentence: 'Es triste que ella no ___ venir. (poder)',
			answer: 'pueda',
			translation: "It is sad that she can't come.",
			verb: 'poder',
			hint: 'ella form — stem change o→ue'
		},
		{
			sentence: 'Necesito que ustedes ___ esto. (escribir)',
			answer: 'escriban',
			translation: 'I need you all to write this.',
			verb: 'escribir',
			hint: 'ustedes form'
		},
		// Irregular verbs
		{
			sentence: 'Espero que tú ___ feliz. (ser)',
			answer: 'seas',
			translation: 'I hope that you are happy.',
			verb: 'ser',
			hint: 'tú form — irregular'
		},
		{
			sentence: 'Es importante que nosotros ___ al médico. (ir)',
			answer: 'vayamos',
			translation: 'It is important that we go to the doctor.',
			verb: 'ir',
			hint: 'nosotros form — irregular'
		},
		{
			sentence: 'Ojalá que ellos ___ la verdad. (decir)',
			answer: 'digan',
			translation: 'I hope they tell the truth.',
			verb: 'decir',
			hint: 'ellos form — irregular'
		},
		{
			sentence: 'No creo que yo ___ tiempo. (tener)',
			answer: 'tenga',
			translation: "I don't think I have time.",
			verb: 'tener',
			hint: 'yo form — irregular'
		},
		{
			sentence: 'Es probable que ella ___ en casa. (estar)',
			answer: 'esté',
			translation: 'It is likely that she is at home.',
			verb: 'estar',
			hint: 'ella form — irregular, note the accent'
		},
		{
			sentence: 'Quiero que tú me ___ un favor. (hacer)',
			answer: 'hagas',
			translation: 'I want you to do me a favor.',
			verb: 'hacer',
			hint: 'tú form — irregular'
		},
		{
			sentence: 'Es raro que él no ___ nada. (dar)',
			answer: 'dé',
			translation: "It is strange that he doesn't give anything.",
			verb: 'dar',
			hint: 'él form — irregular, note the accent'
		},
		{
			sentence: 'Espero que ustedes ___ bien. (dormir)',
			answer: 'duerman',
			translation: 'I hope you all sleep well.',
			verb: 'dormir',
			hint: 'ustedes form — stem change o→ue'
		}
	]
};

export default subjuntivo;
