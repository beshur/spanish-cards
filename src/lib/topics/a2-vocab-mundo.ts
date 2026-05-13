import type { Topic } from '$lib/types';

const a2VocabMundo: Topic = {
	id: 'a2-vocab-mundo',
	name: 'Planeta, política y opiniones',
	description:
		'Environment (medioambiente, contaminación, gases tóxicos, ozono, espacio, milenio), politics (elecciones, partido político, votar, gobierno, pensiones, sanidad, educación) and opinion adjectives (divertido, raro, interesante, aburrido, maravilloso, horrible, romántico…).',
	icon: '🌍',
	cards: [
		{
			sentence: 'La ___ del aire en las grandes ciudades es un problema muy grave. (aire sucio)',
			answer: 'contaminación',
			translation: 'Air pollution in big cities is a very serious problem.',
			verb: '—',
			hint: 'contaminación = pollution'
		},
		{
			sentence: 'Hay que cuidar el ___ y reciclar la basura. (la naturaleza)',
			answer: 'medioambiente',
			translation: 'We have to take care of the environment and recycle the rubbish.',
			verb: '—',
			hint: 'medioambiente = environment'
		},
		{
			sentence: 'Los coches eléctricos no emiten ___ tóxicos. (humo de los coches)',
			answer: 'gases',
			translation: 'Electric cars don’t emit toxic gases.',
			verb: '—',
			hint: 'gases tóxicos = toxic gases'
		},
		{
			sentence: 'La capa de ___ nos protege de los rayos del sol. (en la atmósfera)',
			answer: 'ozono',
			translation: 'The ozone layer protects us from the sun’s rays.',
			verb: '—',
			hint: 'ozono = ozone'
		},
		{
			sentence: 'El próximo domingo son las ___ generales en España. (proceso para votar)',
			answer: 'elecciones',
			translation: 'Next Sunday are the general elections in Spain.',
			verb: '—',
			hint: 'elecciones = elections'
		},
		{
			sentence: 'Tengo dieciocho años, ya puedo ___ por primera vez. (acción en las elecciones)',
			answer: 'votar',
			translation: 'I am eighteen, I can vote for the first time now.',
			verb: 'votar',
			hint: 'votar = to vote'
		},
		{
			sentence: 'No sé a qué ___ político voy a apoyar este año. (grupo organizado)',
			answer: 'partido',
			translation: 'I don’t know which political party I’ll support this year.',
			verb: '—',
			hint: 'partido político = political party'
		},
		{
			sentence: 'El ___ ha aprobado una nueva ley sobre la educación. (autoridad del país)',
			answer: 'gobierno',
			translation: 'The government has approved a new law on education.',
			verb: '—',
			hint: 'gobierno = government'
		},
		{
			sentence: 'La ___ pública es gratuita en España: si te pones enfermo no pagas. (servicio médico del Estado)',
			answer: 'sanidad',
			translation: 'Public healthcare is free in Spain: if you get sick you don’t pay.',
			verb: '—',
			hint: 'sanidad = healthcare'
		},
		{
			sentence: 'Mi abuelo está jubilado y vive con su ___. (dinero después de jubilarse)',
			answer: 'pensión',
			translation: 'My grandfather is retired and lives on his pension.',
			verb: '—',
			hint: 'pensión = pension'
		},
		{
			sentence: 'La última novela de Allende es muy ___, no puedo dejar de leerla. (positivo, "atrapa")',
			answer: 'interesante',
			translation: 'Allende’s latest novel is very interesting, I can’t stop reading it.',
			verb: '—',
			hint: 'interesante = interesting'
		},
		{
			sentence: 'La película es ___, no la recomiendo a nadie. (muy mala)',
			answer: 'horrible',
			translation: 'The film is horrible, I don’t recommend it to anyone.',
			verb: '—',
			hint: 'horrible = horrible'
		},
		{
			sentence: 'Su nuevo coche es ___, parece sacado de una película de ciencia ficción. (positivo, "increíble")',
			answer: 'maravilloso',
			translation: 'Their new car is wonderful, it looks like it’s out of a sci-fi film.',
			verb: '—',
			hint: 'maravilloso = wonderful'
		},
		{
			sentence: 'Ese cuadro es muy ___, nunca había visto nada parecido. (poco común)',
			answer: 'raro',
			translation: 'That painting is very strange, I had never seen anything like it.',
			verb: '—',
			hint: 'raro = strange/odd'
		}
	]
};

export default a2VocabMundo;
