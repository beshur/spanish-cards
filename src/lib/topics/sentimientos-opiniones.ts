import type { Topic } from '$lib/types';

const sentimientosOpiniones: Topic = {
	id: 'sentimientos-opiniones',
	name: 'Sentimientos y Opiniones',
	description:
		'Me preocupa / es importante / me molesta… + infinitivo (mismo sujeto) o + que + subjuntivo (sujetos distintos).',
	icon: '💭',
	cards: [
		{
			sentence: 'Me preocupa ___ tarde al médico. (llegar, yo)',
			answer: 'llegar',
			translation: 'I’m worried about arriving late to the doctor.',
			verb: 'llegar',
			hint: 'mismo sujeto — infinitivo'
		},
		{
			sentence: 'Me preocupa que Paco ___ tarde al médico. (llegar)',
			answer: 'llegue',
			translation: 'I’m worried that Paco arrives late to the doctor.',
			verb: 'llegar',
			hint: 'distinto sujeto — subjuntivo'
		},
		{
			sentence: 'A la abuela le encanta que ___ buen tiempo. (hacer)',
			answer: 'haga',
			translation: 'Grandma loves it when the weather is nice.',
			verb: 'hacer',
			hint: 'subjuntivo'
		},
		{
			sentence: 'Me fastidia ___ de planes por culpa de Sergio. (cambiar, yo)',
			answer: 'cambiar',
			translation: 'It annoys me to change plans because of Sergio.',
			verb: 'cambiar',
			hint: 'mismo sujeto — infinitivo'
		},
		{
			sentence: 'A Paula y a mí nos encanta que ___ gente a casa. (venir)',
			answer: 'venga',
			translation: 'Paula and I love it when people come to the house.',
			verb: 'venir',
			hint: 'subjuntivo — sujetos distintos'
		},
		{
			sentence: '¿No te preocupa ___ tan lejos de la ciudad? (vivir, tú)',
			answer: 'vivir',
			translation: 'Doesn’t it worry you to live so far from the city?',
			verb: 'vivir',
			hint: 'mismo sujeto — infinitivo'
		},
		{
			sentence: 'Creo que a Felipe le molesta que ___ en su casa. (fumar, nosotros)',
			answer: 'fumemos',
			translation: 'I think it bothers Felipe when we smoke in his house.',
			verb: 'fumar',
			hint: 'subjuntivo'
		},
		{
			sentence: 'Me parece importante ___ otras culturas. (conocer)',
			answer: 'conocer',
			translation: 'I think it’s important to know other cultures.',
			verb: 'conocer',
			hint: 'impersonal — infinitivo'
		},
		{
			sentence: 'A nosotras nos gusta mucho que Roxana ___ la cena. (preparar)',
			answer: 'prepare',
			translation: 'We really like that Roxana prepares dinner.',
			verb: 'preparar',
			hint: 'subjuntivo'
		},
		{
			sentence: 'A los políticos no les interesa que la gente ___ tan descontenta. (estar)',
			answer: 'esté',
			translation: 'Politicians aren’t interested in the people being so unhappy.',
			verb: 'estar',
			hint: 'subjuntivo'
		},
		{
			sentence: 'No es necesario ___ nativo para ser un buen profesor de inglés. (ser)',
			answer: 'ser',
			translation: 'It is not necessary to be native to be a good English teacher.',
			verb: 'ser',
			hint: 'impersonal — infinitivo'
		},
		{
			sentence: 'Es conveniente que tú ___ lo que dice el médico. (hacer)',
			answer: 'hagas',
			translation: 'It’s advisable that you do what the doctor says.',
			verb: 'hacer',
			hint: 'subjuntivo'
		}
	]
};

export default sentimientosOpiniones;
