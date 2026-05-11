import type { Topic } from '$lib/types';

const vocabAlojamiento: Topic = {
	id: 'vocab-alojamiento',
	name: 'Vocabulario: Alojamiento',
	description: 'Hotel and room vocabulary — facilities, services, room amenities.',
	icon: '🏨',
	cards: [
		{
			sentence: 'El hotel tiene ___ para los coches eléctricos.',
			answer: 'cargador',
			translation: 'The hotel has a charger for electric cars.',
			verb: '—',
			hint: 'charger'
		},
		{
			sentence: 'Después de la sauna fui al ___ para nadar un rato.',
			answer: 'gimnasio',
			translation: 'After the sauna I went to the gym to swim for a bit.',
			verb: '—',
			hint: 'gym (gimnasio o piscina)'
		},
		{
			sentence: 'La habitación tiene aire ___, perfecto en verano.',
			answer: 'acondicionado',
			translation: 'The room has air conditioning — perfect in summer.',
			verb: '—',
			hint: 'aire ___'
		},
		{
			sentence: 'El ___ trae todo lo necesario para tomar un té.',
			answer: 'minibar',
			translation: 'The minibar has everything you need for a tea.',
			verb: '—',
			hint: 'minibar'
		},
		{
			sentence: 'Para secarme el pelo, en el baño hay un ___ de pelo.',
			answer: 'secador',
			translation: 'To dry my hair, there is a hair dryer in the bathroom.',
			verb: '—',
			hint: 'hair dryer'
		},
		{
			sentence: 'Pedí servicio de ___ para limpiar mi camisa.',
			answer: 'plancha',
			translation: 'I requested the ironing service to clean my shirt.',
			verb: '—',
			hint: 'ironing service'
		},
		{
			sentence: 'La ___ del hotel está al lado de la calle principal. (gym, sauna…)',
			answer: 'piscina',
			translation: 'The hotel pool is next to the main street.',
			verb: '—',
			hint: 'pool'
		},
		{
			sentence: 'Hay servicio de ___ las 24 horas en la habitación.',
			answer: 'habitaciones',
			translation: 'There is 24-hour room service.',
			verb: '—',
			hint: 'servicio de ___'
		},
		{
			sentence: 'Después de cenar tomamos un café en la ___ del hotel.',
			answer: 'cafetería',
			translation: 'After dinner we had a coffee at the hotel café.',
			verb: '—',
			hint: 'cafetería'
		},
		{
			sentence: 'En la entrada me dieron un ___ para entrar a la habitación.',
			answer: 'albornoz',
			translation: 'At reception they gave me a bathrobe for the room.',
			verb: '—',
			hint: 'bathrobe'
		},
		{
			sentence: 'La habitación tiene una gran ___ con vistas al mar.',
			answer: 'terraza',
			translation: 'The room has a large terrace with sea views.',
			verb: '—',
			hint: 'terrace'
		},
		{
			sentence: 'El precio incluye ___ gratis y desayuno buffet.',
			answer: 'wifi',
			translation: 'The price includes free Wi-Fi and buffet breakfast.',
			verb: '—',
			hint: 'red ___'
		}
	]
};

export default vocabAlojamiento;
