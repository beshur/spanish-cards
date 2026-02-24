import type { Topic } from '$lib/types';

const preposicionesEsenciales: Topic = {
	id: 'preposiciones-esenciales',
	name: 'Preposiciones Esenciales',
	description:
		'Master the "essential six" prepositions you will use in almost every sentence — a, en, con, sin, sobre, and bajo.',
	icon: '🧱',
	cards: [
		{
			sentence:
				'Voy ___ la oficina todas las mañanas en metro porque es más rápido. (dirección)',
			answer: 'a',
			translation:
				'I go to the office every morning by metro because it is faster.',
			verb: 'a',
			hint: 'A = to — direction toward a destination'
		},
		{
			sentence:
				'Estoy ___ el hospital visitando a mi abuela que se operó ayer de la rodilla. (ubicación)',
			answer: 'en',
			translation:
				'I am at the hospital visiting my grandmother who had knee surgery yesterday.',
			verb: 'en',
			hint: 'En = in/at — physical location'
		},
		{
			sentence:
				'Hablo ___ mi jefe todas las semanas sobre el progreso de los proyectos. (compañía)',
			answer: 'con',
			translation:
				'I speak with my boss every week about the progress of the projects.',
			verb: 'con',
			hint: 'Con = with — accompaniment or interaction'
		},
		{
			sentence:
				'Un café ___ azúcar, por favor; estoy intentando llevar una vida más sana. (ausencia)',
			answer: 'sin',
			translation:
				"A coffee without sugar, please — I'm trying to lead a healthier life.",
			verb: 'sin',
			hint: 'Sin = without — absence of something'
		},
		{
			sentence:
				'Hay un documental muy interesante ___ la Guerra Civil española en esa plataforma. (tema)',
			answer: 'sobre',
			translation:
				'There is a very interesting documentary about the Spanish Civil War on that platform.',
			verb: 'sobre',
			hint: 'Sobre = about — the topic or subject'
		},
		{
			sentence:
				'Los empleados trabajan ___ mucha presión durante la temporada de Navidad. (figurado)',
			answer: 'bajo',
			translation:
				'The employees work under a lot of pressure during the Christmas season.',
			verb: 'bajo',
			hint: 'Bajo = under — figurative sense (pressure, supervision)'
		},
		{
			sentence:
				'Llegamos ___ casa a las diez de la noche, muertos de cansancio tras la excursión. (destino)',
			answer: 'a',
			translation:
				'We arrived home at ten at night, exhausted after the trip.',
			verb: 'a',
			hint: 'A = to — arrival at a destination: llegar a'
		},
		{
			sentence:
				'Dejé las llaves ___ la mesa de la entrada antes de salir corriendo al trabajo. (superficie)',
			answer: 'en',
			translation:
				'I left the keys on the hall table before rushing out to work.',
			verb: 'en',
			hint: 'En = on — on a surface'
		},
		{
			sentence:
				'Fuimos al cine ___ nuestros amigos del barrio a ver la última película de Bayona. (compañía)',
			answer: 'con',
			translation:
				"We went to the cinema with our neighbourhood friends to see Bayona's latest film.",
			verb: 'con',
			hint: 'Con = with — companionship'
		},
		{
			sentence:
				'No puedo vivir ___ música; la escucho todos los días camino al trabajo. (ausencia)',
			answer: 'sin',
			translation:
				"I can't live without music — I listen to it every day on my way to work.",
			verb: 'sin',
			hint: 'Sin = without — something essential that is missing'
		},
		{
			sentence:
				'El acuerdo comercial se firmó ___ la supervisión del director general de la empresa. (autoridad)',
			answer: 'bajo',
			translation:
				"The trade agreement was signed under the general manager's supervision.",
			verb: 'bajo',
			hint: 'Bajo = under — authority or supervision'
		},
		{
			sentence:
				'Estamos leyendo un libro ___ inteligencia artificial y su impacto en la sociedad. (tema)',
			answer: 'sobre',
			translation:
				'We are reading a book about artificial intelligence and its impact on society.',
			verb: 'sobre',
			hint: 'Sobre = about — topic or subject matter'
		}
	]
};

export default preposicionesEsenciales;
