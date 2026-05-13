import type { Topic } from '$lib/types';

const a2VocabTrabajo: Topic = {
	id: 'a2-vocab-trabajo',
	name: 'Profesiones y trabajo',
	description:
		'Professions (mecánico, dependiente, peluquero, cocinero, programador, periodista…), workplaces (oficina, empresa, taller, tienda, hospital), work-related verbs (buscar/encontrar trabajo, enviar el currículum, hacer una entrevista, tener experiencia), and newspaper sections.',
	icon: '💼',
	cards: [
		{
			sentence: 'Mi coche no arranca, voy a llevarlo al ___. (persona que arregla coches)',
			answer: 'mecánico',
			translation: 'My car won’t start, I’m going to take it to the mechanic.',
			verb: '—',
			hint: 'mecánico = mechanic'
		},
		{
			sentence: 'Marta trabaja en una tienda de ropa como ___, atiende a los clientes. (persona que vende)',
			answer: 'dependienta',
			translation: 'Marta works in a clothes shop as a shop assistant, she serves customers.',
			verb: '—',
			hint: 'dependiente/a = shop assistant'
		},
		{
			sentence: 'Voy a la ___ para cortarme el pelo el sábado. (lugar donde te cortan el pelo)',
			answer: 'peluquería',
			translation: 'I’m going to the hairdresser’s to get my hair cut on Saturday.',
			verb: '—',
			hint: 'peluquería = hair salon'
		},
		{
			sentence: 'Mi tío es ___ en un restaurante italiano famoso. (cocinar como profesión)',
			answer: 'cocinero',
			translation: 'My uncle is a cook at a famous Italian restaurant.',
			verb: '—',
			hint: 'cocinero = cook/chef'
		},
		{
			sentence: 'Trabajo como ___ informático, hago programas para una empresa de Madrid. (escribe código)',
			answer: 'programador',
			translation: 'I work as a software programmer, I make programs for a Madrid company.',
			verb: '—',
			hint: 'programador = programmer'
		},
		{
			sentence: 'Ana escribe noticias para el diario, es ___. (escribe en periódicos)',
			answer: 'periodista',
			translation: 'Ana writes news for the newspaper, she is a journalist.',
			verb: '—',
			hint: 'periodista = journalist'
		},
		{
			sentence: 'Trabajo en una ___ multinacional con sede en Barcelona. (compañía)',
			answer: 'empresa',
			translation: 'I work at a multinational company headquartered in Barcelona.',
			verb: '—',
			hint: 'empresa = company'
		},
		{
			sentence: 'Mi marido es enfermero y trabaja en el ___ de la ciudad. (centro médico)',
			answer: 'hospital',
			translation: 'My husband is a nurse and works at the city hospital.',
			verb: '—',
			hint: 'hospital = hospital'
		},
		{
			sentence: 'Después de estudiar tres meses, por fin he encontrado ___. (empleo)',
			answer: 'trabajo',
			translation: 'After three months of studying, I’ve finally found a job.',
			verb: '—',
			hint: 'encontrar trabajo = to find a job'
		},
		{
			sentence: 'Mañana tengo una ___ de trabajo muy importante a las diez. (reunión con el jefe nuevo)',
			answer: 'entrevista',
			translation: 'Tomorrow I have a very important job interview at ten.',
			verb: '—',
			hint: 'entrevista = interview'
		},
		{
			sentence: 'He ___ mi currículum a cinco empresas esta semana. (mandar por correo)',
			answer: 'enviado',
			translation: 'I have sent my CV to five companies this week.',
			verb: 'enviar',
			hint: 'enviar (pp: enviado) — pretérito perfecto'
		},
		{
			sentence: 'Tengo cinco años de ___ en marketing digital. (conocimiento ganado trabajando)',
			answer: 'experiencia',
			translation: 'I have five years of experience in digital marketing.',
			verb: '—',
			hint: 'experiencia = experience'
		},
		{
			sentence: 'La sección de ___ del periódico habla de fútbol y baloncesto. (parte de un diario)',
			answer: 'deportes',
			translation: 'The sports section of the newspaper talks about football and basketball.',
			verb: '—',
			hint: 'deportes = sports (section)'
		},
		{
			sentence: 'En la sección de ___ se publican anuncios para vender o alquilar cosas. (sección con avisos)',
			answer: 'anuncios',
			translation: 'In the classifieds section ads to sell or rent are published.',
			verb: '—',
			hint: 'anuncios = classifieds/ads'
		}
	]
};

export default a2VocabTrabajo;
