import type { Topic } from '$lib/types';

const futuro: Topic = {
	id: 'futuro',
	name: 'Futuro',
	description:
		'The simple future — predictions, promises, and futuro after creo que / supongo que. Includes irregular stems.',
	icon: '🔮',
	cards: [
		{
			sentence: 'Dentro de unos años ___ a la Luna. (viajar, nosotros)',
			answer: 'viajaremos',
			translation: 'In a few years we will travel to the Moon.',
			verb: 'viajar',
			hint: 'nosotros — regular'
		},
		{
			sentence: 'Pasado mañana ___ a tu padre. (visitar, yo)',
			answer: 'visitaré',
			translation: 'The day after tomorrow I’ll visit your father.',
			verb: 'visitar',
			hint: 'yo — regular'
		},
		{
			sentence: 'Creo que Juan ___ a Barcelona. (viajar)',
			answer: 'viajará',
			translation: 'I think Juan will travel to Barcelona.',
			verb: 'viajar',
			hint: 'él — after creo que'
		},
		{
			sentence: '¿Qué ___ si tus padres te preguntan por las notas esta noche? (decir, tú)',
			answer: 'dirás',
			translation: 'What will you say if your parents ask you about your grades tonight?',
			verb: 'decir',
			hint: 'tú — irregular stem dir-'
		},
		{
			sentence: 'Este domingo yo no ___ con mis amigos, tengo que estudiar. (salir)',
			answer: 'saldré',
			translation: 'This Sunday I won’t go out with my friends, I have to study.',
			verb: 'salir',
			hint: 'yo — irregular stem saldr-'
		},
		{
			sentence: 'Si apruebo todas las asignaturas, mis padres me ___ un viaje a París. (pagar)',
			answer: 'pagarán',
			translation: 'If I pass all my subjects, my parents will pay me a trip to Paris.',
			verb: 'pagar',
			hint: 'ellos — regular'
		},
		{
			sentence: 'Dicen que el año próximo ___ más becas para los estudiantes. (haber)',
			answer: 'habrá',
			translation: 'They say that next year there will be more grants for students.',
			verb: 'haber',
			hint: 'impersonal — irregular stem habr-'
		},
		{
			sentence: 'Han dicho que este fin de semana ___ nieve en la sierra. (haber)',
			answer: 'habrá',
			translation: 'They’ve said there will be snow in the mountains this weekend.',
			verb: 'haber',
			hint: 'impersonal — irregular'
		},
		{
			sentence: '...y ___ ir a esquiar. (poder, nosotros)',
			answer: 'podremos',
			translation: '…and we will be able to go skiing.',
			verb: 'poder',
			hint: 'nosotros — irregular stem podr-'
		},
		{
			sentence: 'Jorge dice que de mayor ___ pianista. (ser)',
			answer: 'será',
			translation: 'Jorge says when he grows up he will be a pianist.',
			verb: 'ser',
			hint: 'él — regular'
		},
		{
			sentence: 'En el futuro la gente ___ solamente energía solar. (usar)',
			answer: 'usará',
			translation: 'In the future people will use only solar energy.',
			verb: 'usar',
			hint: 'la gente → 3.ª sing.'
		},
		{
			sentence: 'Es mejor que salgamos pronto porque si no ___ mucho tráfico. (haber)',
			answer: 'habrá',
			translation: 'It’s better that we leave early, otherwise there will be a lot of traffic.',
			verb: 'haber',
			hint: 'impersonal — irregular'
		},
		{
			sentence: 'Tendré que estudiar más si quiero aprobar el examen — ___ que estudiar más. (tener, yo)',
			answer: 'Tendré',
			translation: 'I’ll have to study more if I want to pass the exam.',
			verb: 'tener',
			hint: 'yo — irregular stem tendr-'
		},
		{
			sentence: 'Mañana ___ las decoraciones de Navidad. (poner, nosotros)',
			answer: 'pondremos',
			translation: 'Tomorrow we’ll put up the Christmas decorations.',
			verb: 'poner',
			hint: 'nosotros — irregular stem pondr-'
		},
		{
			sentence: '¿___ conmigo al concierto el viernes? (venir, tú)',
			answer: 'Vendrás',
			translation: 'Will you come with me to the concert on Friday?',
			verb: 'venir',
			hint: 'tú — irregular stem vendr-'
		}
	]
};

export default futuro;
