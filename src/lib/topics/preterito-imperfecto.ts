import type { Topic } from '$lib/types';

const preteritoImperfecto: Topic = {
	id: 'preterito-imperfecto',
	name: 'Pretérito Imperfecto',
	description:
		'Past habits, ongoing descriptions, and background actions interrupted by something punctual.',
	icon: '🌫️',
	cards: [
		{
			sentence: 'Antes ___ mucho los fines de semana, pero ahora prefiero quedarme. (salir, yo)',
			answer: 'salía',
			translation: 'I used to go out a lot on weekends, but now I prefer to stay home.',
			verb: 'salir',
			hint: 'yo form — habit in the past'
		},
		{
			sentence: 'El camino del río ___ muy estrecho y acababa en un arenal. (ser)',
			answer: 'era',
			translation: 'The river path was very narrow and ended in a sandbank.',
			verb: 'ser',
			hint: 'description — irregular'
		},
		{
			sentence: 'Empezó a llover cuando ___ a la playa. (llegar, nosotros)',
			answer: 'llegábamos',
			translation: 'It started raining when we were arriving at the beach.',
			verb: 'llegar',
			hint: 'nosotros — ongoing action interrupted'
		},
		{
			sentence: 'Cuando ___ niños, mis hermanos y yo íbamos a la montaña. (ser, nosotros)',
			answer: 'éramos',
			translation: 'When we were children, my brothers and I used to go to the mountains.',
			verb: 'ser',
			hint: 'nosotros — irregular'
		},
		{
			sentence: 'Mi abuela ___ con nosotros en el pueblo. (vivir)',
			answer: 'vivía',
			translation: 'My grandmother used to live with us in the village.',
			verb: 'vivir',
			hint: 'ella — habitual past'
		},
		{
			sentence: 'De pequeño yo ___ al fútbol todas las tardes. (jugar)',
			answer: 'jugaba',
			translation: 'As a child I played football every afternoon.',
			verb: 'jugar',
			hint: 'yo — past habit'
		},
		{
			sentence: '¿Cuántos años ___ cuando empezaste a estudiar español? (tener, tú)',
			answer: 'tenías',
			translation: 'How old were you when you started studying Spanish?',
			verb: 'tener',
			hint: 'tú — describing age in the past'
		},
		{
			sentence: 'Mientras yo ___ la cena, los niños veían la tele. (preparar)',
			answer: 'preparaba',
			translation: 'While I was preparing dinner, the kids were watching TV.',
			verb: 'preparar',
			hint: 'yo — simultaneous past actions'
		},
		{
			sentence: 'Cuando éramos jóvenes, nosotros ___ mucho. (dormir)',
			answer: 'dormíamos',
			translation: 'When we were young, we used to sleep a lot.',
			verb: 'dormir',
			hint: 'nosotros — habitual'
		},
		{
			sentence: '___ las ocho cuando sonó el teléfono. (ser)',
			answer: 'Eran',
			translation: 'It was eight o’clock when the phone rang.',
			verb: 'ser',
			hint: 'time in the past — ellas form'
		},
		{
			sentence: 'Mi padre siempre ___ el coche los sábados. (lavar)',
			answer: 'lavaba',
			translation: 'My father always used to wash the car on Saturdays.',
			verb: 'lavar',
			hint: 'él — repeated past habit'
		},
		{
			sentence: 'Vosotros ___ a la abuela todos los domingos, ¿verdad? (visitar)',
			answer: 'visitabais',
			translation: 'You guys used to visit grandma every Sunday, right?',
			verb: 'visitar',
			hint: 'vosotros — habitual past'
		}
	]
};

export default preteritoImperfecto;
