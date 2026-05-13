import type { Topic } from '$lib/types';

const a2ImperfectoVsIndefinido: Topic = {
	id: 'a2-imperfecto-vs-indefinido',
	name: 'Imperfecto vs Indefinido',
	description:
		'Choosing between pretérito imperfecto (descriptions, habits, background) and pretérito indefinido (specific completed actions). Often combined in one sentence with "cuando".',
	icon: '🎬',
	cards: [
		{
			sentence: 'Cuando ___ joven, jugaba al fútbol todos los días. (ser, yo)',
			answer: 'era',
			translation: 'When I was young, I used to play football every day.',
			verb: 'ser',
			hint: 'background/age in the past → imperfecto'
		},
		{
			sentence: 'Antes de venir a España, no ___ las corridas de toros. (conocer, yo)',
			answer: 'conocía',
			translation: 'Before coming to Spain, I didn’t know bullfights.',
			verb: 'conocer',
			hint: 'state in the past → imperfecto'
		},
		{
			sentence: 'Conocí a Ana cuando ___ en el hospital de Valladolid. (trabajar, ella)',
			answer: 'trabajaba',
			translation: 'I met Ana when she was working at the Valladolid hospital.',
			verb: 'trabajar',
			hint: 'circumstance/background → imperfecto'
		},
		{
			sentence: 'Roberto se fue de la casa porque se ___ mal con su padre. (llevar, él)',
			answer: 'llevaba',
			translation: "Roberto left the house because he didn't get on well with his father.",
			verb: 'llevar',
			hint: 'cause/state → imperfecto'
		},
		{
			sentence: 'Hace tres años Marilú ___ en Japón. (estar)',
			answer: 'estuvo',
			translation: 'Three years ago Marilú was in Japan.',
			verb: 'estar',
			hint: 'closed time marker "hace tres años" → indefinido'
		},
		{
			sentence: 'Antes ___ con mis padres, pero ahora vivo solo. (vivir, yo)',
			answer: 'vivía',
			translation: 'Before I used to live with my parents, but now I live alone.',
			verb: 'vivir',
			hint: 'habit in the past → imperfecto'
		},
		{
			sentence: 'Mientras ___ la tele, sonó el teléfono. (ver, yo)',
			answer: 'veía',
			translation: 'While I was watching TV, the phone rang.',
			verb: 'ver',
			hint: 'ongoing action with "mientras" → imperfecto'
		},
		{
			sentence: 'Mientras veía la tele, ___ el teléfono. (sonar)',
			answer: 'sonó',
			translation: 'While I was watching TV, the phone rang.',
			verb: 'sonar',
			hint: 'interrupting punctual action → indefinido'
		},
		{
			sentence: 'Mi abuela ___ cantante de ópera, pero dejó de cantar cuando nació mi madre. (ser)',
			answer: 'era',
			translation: 'My grandma was an opera singer, but she stopped singing when my mother was born.',
			verb: 'ser',
			hint: 'description / extended period → imperfecto'
		},
		{
			sentence: 'Pedro ___ mucho, pero un día sufrió un ataque al corazón. (trabajar)',
			answer: 'trabajaba',
			translation: 'Pedro used to work a lot, but one day he had a heart attack.',
			verb: 'trabajar',
			hint: 'habit in past → imperfecto'
		},
		{
			sentence: 'En 2008 ___ trabajando de camarera en Noruega. (estar, ella)',
			answer: 'estaba',
			translation: 'In 2008 she was working as a waitress in Norway.',
			verb: 'estar',
			hint: 'description of period → imperfecto with estar + -ando'
		},
		{
			sentence: 'Ayer cuando llegué a casa, mi hermano ___ en el sofá. (dormir)',
			answer: 'dormía',
			translation: 'Yesterday when I got home, my brother was sleeping on the sofa.',
			verb: 'dormir',
			hint: 'circumstance on arrival → imperfecto'
		},
		{
			sentence: 'El año pasado ___ a Sevilla con mi familia. (ir, nosotros)',
			answer: 'fuimos',
			translation: 'Last year we went to Seville with my family.',
			verb: 'ir',
			hint: '"el año pasado" → indefinido'
		},
		{
			sentence: 'Cuando vivíamos en Madrid, ___ al parque todos los domingos. (ir, nosotros)',
			answer: 'íbamos',
			translation: 'When we lived in Madrid, we used to go to the park every Sunday.',
			verb: 'ir',
			hint: 'past habit → imperfecto'
		},
		{
			sentence: 'Mi abuelo ___ ochenta años cuando murió. (tener)',
			answer: 'tenía',
			translation: 'My grandfather was eighty when he died.',
			verb: 'tener',
			hint: 'age in the past → imperfecto'
		}
	]
};

export default a2ImperfectoVsIndefinido;
