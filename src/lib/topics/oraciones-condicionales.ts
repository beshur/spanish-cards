import type { Topic } from '$lib/types';

const oracionesCondicionales: Topic = {
	id: 'oraciones-condicionales',
	name: 'Oraciones Condicionales',
	description:
		'Si + presente → futuro/imperativo (real). Si + imperfecto de subjuntivo → condicional (improbable).',
	icon: '🔀',
	cards: [
		{
			sentence: 'Si tengo tiempo, ___ a verte. (ir, yo)',
			answer: 'iré',
			translation: 'If I have time, I will go to see you.',
			verb: 'ir',
			hint: 'condición real → futuro'
		},
		{
			sentence: 'Si tienes algún problema, ___ por teléfono. (llamar, tú)',
			answer: 'llámame',
			translation: 'If you have any problem, call me on the phone.',
			verb: 'llamar',
			hint: 'condición real → imperativo'
		},
		{
			sentence: 'Si ___ mucho dinero, no trabajaría. (tener, yo)',
			answer: 'tuviera',
			translation: 'If I had a lot of money, I wouldn’t work.',
			verb: 'tener',
			hint: 'improbable — imperf. de subj.'
		},
		{
			sentence: 'Si Roberto ___ más, aprobaría. (estudiar)',
			answer: 'estudiara',
			translation: 'If Roberto studied more, he would pass.',
			verb: 'estudiar',
			hint: 'improbable — imperf. de subj.'
		},
		{
			sentence: 'Si ___ más de cien años, tendríamos tiempo para hacer muchas cosas. (vivir, nosotros)',
			answer: 'viviéramos',
			translation: 'If we lived more than a hundred years, we’d have time to do lots of things.',
			verb: 'vivir',
			hint: 'nosotros — imperf. de subj.'
		},
		{
			sentence: 'Si ___ menos, no estarías tan cansado. (trabajar, tú)',
			answer: 'trabajaras',
			translation: 'If you worked less, you wouldn’t be so tired.',
			verb: 'trabajar',
			hint: 'tú — imperf. de subj.'
		},
		{
			sentence: 'Si todos ___ más amables, el mundo sería más agradable. (ser)',
			answer: 'fueran',
			translation: 'If everyone were nicer, the world would be more pleasant.',
			verb: 'ser',
			hint: 'ellos — imperf. de subj. (irregular)'
		},
		{
			sentence: 'Si ___ cansado, no vayas a trabajar. (estar, tú)',
			answer: 'estás',
			translation: 'If you’re tired, don’t go to work.',
			verb: 'estar',
			hint: 'real — presente'
		},
		{
			sentence: 'Si ___ ir al cine el domingo, te llamamos. (poder, nosotros)',
			answer: 'podemos',
			translation: 'If we can go to the cinema on Sunday, we’ll call you.',
			verb: 'poder',
			hint: 'real — presente'
		},
		{
			sentence: 'Si llama Ismael, dile que estoy enferma — Si ___ Ismael, dile… (llamar)',
			answer: 'llama',
			translation: 'If Ismael calls, tell him I’m sick.',
			verb: 'llamar',
			hint: 'real — presente'
		},
		{
			sentence: 'Si ___ más, sería más feliz. (sonreír, tú)',
			answer: 'sonrieras',
			translation: 'If you smiled more, you would be happier.',
			verb: 'sonreír',
			hint: 'improbable — imperf. de subj.'
		},
		{
			sentence: 'Si hace buen tiempo, ___ a la playa. (ir, nosotros)',
			answer: 'iremos',
			translation: 'If the weather is nice, we’ll go to the beach.',
			verb: 'ir',
			hint: 'real — futuro'
		}
	]
};

export default oracionesCondicionales;
