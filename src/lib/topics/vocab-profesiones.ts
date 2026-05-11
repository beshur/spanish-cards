import type { Topic } from '$lib/types';

const vocabProfesiones: Topic = {
	id: 'vocab-profesiones',
	name: 'Vocabulario: Profesiones y Trabajo',
	description:
		'Professions, job-search vocabulary, and gender forms (camarero/a, juez/a, actriz…).',
	icon: '💼',
	cards: [
		{
			sentence: 'Para servir en la cafetería buscan a un ___. (camarero/a)',
			answer: 'camarero',
			translation: 'They are looking for a waiter to serve at the café.',
			verb: '—',
			hint: 'masc. — waiter'
		},
		{
			sentence: 'Mi mujer es ___ y trabaja en un hospital. (cocinero/a)',
			answer: 'cocinera',
			translation: 'My wife is a cook and works at a hospital.',
			verb: '—',
			hint: 'fem. — cook'
		},
		{
			sentence: 'El acusado se sentó frente a la ___. (juez/a)',
			answer: 'jueza',
			translation: 'The defendant sat in front of the (female) judge.',
			verb: '—',
			hint: 'fem. of juez'
		},
		{
			sentence: 'Penélope Cruz es una ___ española muy conocida. (actor/actriz)',
			answer: 'actriz',
			translation: 'Penélope Cruz is a very well-known Spanish actress.',
			verb: '—',
			hint: 'fem. of actor'
		},
		{
			sentence: 'He enviado el currículo para la ___ de cocinero. (vacante)',
			answer: 'vacante',
			translation: 'I sent my CV for the cook vacancy.',
			verb: '—',
			hint: 'open position'
		},
		{
			sentence: 'Tengo una ___ de trabajo el lunes a las diez.',
			answer: 'entrevista',
			translation: 'I have a job interview on Monday at ten.',
			verb: '—',
			hint: 'job interview'
		},
		{
			sentence: 'Ofrecen un sueldo ___ más comisiones. (permanent)',
			answer: 'fijo',
			translation: 'They offer a fixed salary plus commissions.',
			verb: '—',
			hint: 'fixed (permanent)'
		},
		{
			sentence: 'Trabajo solo por las mañanas, hago ___ jornada.',
			answer: 'media',
			translation: 'I only work mornings — I do part-time.',
			verb: '—',
			hint: 'media ___ = half day'
		},
		{
			sentence: 'Mi padre va a ___ después de 40 años trabajando.',
			answer: 'jubilarse',
			translation: 'My dad is going to retire after 40 years working.',
			verb: 'jubilarse',
			hint: 'to retire'
		},
		{
			sentence: 'Está en el ___ desde hace cinco meses y busca empleo.',
			answer: 'paro',
			translation: 'He has been unemployed for five months and is looking for work.',
			verb: '—',
			hint: 'unemployment'
		},
		{
			sentence: 'Antes de firmar, lee bien el ___ de trabajo.',
			answer: 'contrato',
			translation: 'Before signing, read the work contract carefully.',
			verb: '—',
			hint: 'contract'
		},
		{
			sentence: 'Estudio para ser ___ y abrir una clínica. (médico/a)',
			answer: 'médica',
			translation: 'I am studying to become a (female) doctor and open a clinic.',
			verb: '—',
			hint: 'fem. — doctor'
		}
	]
};

export default vocabProfesiones;
