import type { Topic } from '$lib/types';

const imperfectoSubjuntivo: Topic = {
	id: 'imperfecto-subjuntivo',
	name: 'Imperfecto de Subjuntivo',
	description:
		'Hablara/comiera/viviera — used in if-clauses (improbable) and after past introducers.',
	icon: '🌙',
	cards: [
		{
			sentence: 'Si tuviera mucho dinero, no ___. (trabajar, yo)',
			answer: 'trabajaría',
			translation: 'If I had a lot of money, I wouldn’t work.',
			verb: 'trabajar',
			hint: 'apódosis — condicional'
		},
		{
			sentence: 'Me aconsejó que ___ al médico. (ir, yo)',
			answer: 'fuera',
			translation: 'He advised me to go to the doctor.',
			verb: 'ir',
			hint: 'irregular — yo'
		},
		{
			sentence: 'Me dijo que ___ la ventana. (abrir, yo)',
			answer: 'abriera',
			translation: 'He told me to open the window.',
			verb: 'abrir',
			hint: 'yo — regular'
		},
		{
			sentence: 'Si Roberto ___ más, aprobaría. (estudiar)',
			answer: 'estudiara',
			translation: 'If Roberto studied more, he would pass.',
			verb: 'estudiar',
			hint: 'él — regular'
		},
		{
			sentence: 'Lucía me pidió que ___ a su casa. (venir, yo)',
			answer: 'viniera',
			translation: 'Lucía asked me to come to her house.',
			verb: 'venir',
			hint: 'yo — irregular'
		},
		{
			sentence: 'Si tú ___ menos televisión, dormirías mejor. (ver)',
			answer: 'vieras',
			translation: 'If you watched less TV, you would sleep better.',
			verb: 'ver',
			hint: 'tú — regular'
		},
		{
			sentence: 'Si ___ más amables, el mundo sería mejor. (ser, ellos)',
			answer: 'fueran',
			translation: 'If they were nicer, the world would be better.',
			verb: 'ser',
			hint: 'ellos — irregular'
		},
		{
			sentence: 'Si ___ menos azúcar, te sentirías mejor. (tomar, tú)',
			answer: 'tomaras',
			translation: 'If you took less sugar, you’d feel better.',
			verb: 'tomar',
			hint: 'tú — regular'
		},
		{
			sentence: 'Si ___ con nosotros, lo pasaríamos genial. (venir, vosotros)',
			answer: 'vinierais',
			translation: 'If you guys came with us, we’d have a great time.',
			verb: 'venir',
			hint: 'vosotros — irregular'
		},
		{
			sentence: 'Si nosotros ___ más tiempo, viajaríamos juntos. (tener)',
			answer: 'tuviéramos',
			translation: 'If we had more time, we would travel together.',
			verb: 'tener',
			hint: 'nosotros — irregular'
		},
		{
			sentence: 'Quería que tú ___ a mi fiesta. (venir)',
			answer: 'vinieras',
			translation: 'I wanted you to come to my party.',
			verb: 'venir',
			hint: 'tú — irregular'
		},
		{
			sentence: 'Mi madre me pidió que ___ la mesa. (poner, yo)',
			answer: 'pusiera',
			translation: 'My mother asked me to set the table.',
			verb: 'poner',
			hint: 'yo — irregular'
		}
	]
};

export default imperfectoSubjuntivo;
