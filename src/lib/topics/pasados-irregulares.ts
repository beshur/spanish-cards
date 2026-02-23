import type { Topic } from '$lib/types';

const pasadosIrregulares: Topic = {
	id: 'pasados-irregulares',
	name: 'Pasados Irregulares',
	description:
		'Master irregular verbs in past tenses — pretérito indefinido, pretérito perfecto, and pluscuamperfecto with irregular stems and participles.',
	icon: '⏪',
	cards: [
		{
			sentence: 'Ayer ___ toda la tarea de matemáticas antes de cenar con la familia. (hacer)',
			answer: 'hice',
			translation: 'Yesterday I did all the math homework before having dinner with the family.',
			verb: 'hacer',
			hint: 'yo form of hacer in pretérito indefinido'
		},
		{
			sentence:
				'No ___ la verdad sobre la fiesta sorpresa hasta que ella me lo contó por teléfono. (saber)',
			answer: 'supe',
			translation:
				"I didn't find out the truth about the surprise party until she told me on the phone.",
			verb: 'saber',
			hint: 'yo form in pretérito indefinido — U-stem: sup-'
		},
		{
			sentence:
				'El viernes pasado ___ a clase muy temprano porque tenía un examen importante. (venir)',
			answer: 'vine',
			translation: 'Last Friday I came to class very early because I had an important exam.',
			verb: 'venir',
			hint: 'yo form in pretérito indefinido — I-stem: vin-'
		},
		{
			sentence: 'He ___ el libro de historia sobre la mesa de la oficina del profesor. (poner)',
			answer: 'puesto',
			translation: "I have put the history book on the professor's office desk.",
			verb: 'poner',
			hint: 'irregular past participle of poner'
		},
		{
			sentence:
				'¿Has ___ la nueva película de Almodóvar en el cine del centro? (ver)',
			answer: 'visto',
			translation: 'Have you seen the new Almodóvar movie at the downtown cinema?',
			verb: 'ver',
			hint: 'irregular past participle of ver'
		},
		{
			sentence:
				'Aquel día ___ mucha suerte con el tráfico y llegamos al aeropuerto a tiempo. (tener)',
			answer: 'tuvimos',
			translation:
				'That day we were very lucky with the traffic and arrived at the airport on time.',
			verb: 'tener',
			hint: 'nosotros form in pretérito indefinido — U-stem: tuv-'
		},
		{
			sentence:
				'Cuando llegué al salón, ellos ya habían ___ el regalo de cumpleaños sin esperarme. (abrir)',
			answer: 'abierto',
			translation:
				'When I arrived at the living room, they had already opened the birthday gift without waiting for me.',
			verb: 'abrir',
			hint: 'irregular past participle of abrir'
		},
		{
			sentence:
				'___ que no podía ir a la excursión porque estaba enfermo del estómago. (decir)',
			answer: 'Dije',
			translation: "I said that I couldn't go on the trip because I had a stomach illness.",
			verb: 'decir',
			hint: 'yo form in pretérito indefinido — J-stem: dij-'
		},
		{
			sentence:
				'Me ___ muy nervioso durante la presentación del proyecto final delante de todo el equipo. (poner)',
			answer: 'puse',
			translation:
				'I got very nervous during the final project presentation in front of the whole team.',
			verb: 'poner',
			hint: 'yo form (reflexive) in pretérito indefinido — U-stem: pus-'
		},
		{
			sentence: '___ comida casera para todos los invitados de la boda. (traer)',
			answer: 'Trajeron',
			translation: 'They brought homemade food for all the wedding guests.',
			verb: 'traer',
			hint: 'ellos form in pretérito indefinido — J-stem: traj-'
		},
		{
			sentence:
				'___ en la playa de Málaga durante tres horas disfrutando del sol y del mar. (estar)',
			answer: 'Estuvimos',
			translation:
				'We were at the beach in Málaga for three hours enjoying the sun and the sea.',
			verb: 'estar',
			hint: 'nosotros form in pretérito indefinido — U-stem: estuv-'
		},
		{
			sentence:
				'Nunca antes había ___ un poema en español para la clase de literatura. (escribir)',
			answer: 'escrito',
			translation: 'I had never before written a poem in Spanish for literature class.',
			verb: 'escribir',
			hint: 'irregular past participle of escribir'
		},
		{
			sentence:
				'Esta mañana he ___ ejercicio en el gimnasio antes de ir a la oficina. (hacer)',
			answer: 'hecho',
			translation: 'This morning I have exercised at the gym before going to the office.',
			verb: 'hacer',
			hint: 'irregular past participle of hacer'
		},
		{
			sentence:
				'___ entrar al concierto de jazz, pero la puerta estaba cerrada con llave. (querer)',
			answer: 'Quisieron',
			translation: 'They tried to enter the jazz concert, but the door was locked.',
			verb: 'querer',
			hint: 'ellos form in pretérito indefinido — I-stem: quis-'
		},
		{
			sentence: '¿Qué has ___ sobre el examen final de mañana? (decir)',
			answer: 'dicho',
			translation: "What have you said about tomorrow's final exam?",
			verb: 'decir',
			hint: 'irregular past participle of decir'
		},
		{
			sentence:
				'Ya habíamos ___ de vacaciones en Grecia cuando llamó mi jefe por teléfono. (volver)',
			answer: 'vuelto',
			translation:
				'We had already returned from vacation in Greece when my boss called on the phone.',
			verb: 'volver',
			hint: 'irregular past participle of volver'
		},
		{
			sentence:
				'Ayer ___ terminar el informe de ventas antes de la fecha límite. (poder)',
			answer: 'pude',
			translation: 'Yesterday I managed to finish the sales report before the deadline.',
			verb: 'poder',
			hint: 'yo form in pretérito indefinido — U-stem: pud-'
		},
		{
			sentence:
				'No me di cuenta de que había ___ el jarrón de cristal de mi abuela. (romper)',
			answer: 'roto',
			translation: "I didn't realize that I had broken my grandmother's crystal vase.",
			verb: 'romper',
			hint: 'irregular past participle of romper'
		},
		{
			sentence:
				'___ los resultados del examen por un correo electrónico del profesor. (saber)',
			answer: 'Supimos',
			translation: 'We found out the exam results through an email from the professor.',
			verb: 'saber',
			hint: 'nosotros form in pretérito indefinido — U-stem: sup-'
		},
		{
			sentence:
				'Ellos no ___ venir a la cena de Navidad porque tenían otros planes familiares. (poder)',
			answer: 'pudieron',
			translation:
				"They couldn't come to the Christmas dinner because they had other family plans.",
			verb: 'poder',
			hint: 'ellos form in pretérito indefinido — U-stem: pud-'
		},
		{
			sentence:
				'___ todo el día por las calles del casco antiguo buscando una librería. (andar)',
			answer: 'Anduve',
			translation: 'I walked all day through the streets of the old town looking for a bookshop.',
			verb: 'andar',
			hint: 'yo form in pretérito indefinido — U-stem: anduv-'
		},
		{
			sentence:
				'Toda la ropa no ___ en la maleta pequeña y tuve que llevar otra. (caber)',
			answer: 'cupo',
			translation:
				"All the clothes didn't fit in the small suitcase and I had to bring another one.",
			verb: 'caber',
			hint: 'ella/ello form in pretérito indefinido — U-stem: cup-'
		}
	]
};

export default pasadosIrregulares;
