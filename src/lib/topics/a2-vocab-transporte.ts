import type { Topic } from '$lib/types';

const a2VocabTransporte: Topic = {
	id: 'a2-vocab-transporte',
	name: 'Transporte y expresiones de lugar',
	description:
		'Means of transport — autobús, bicicleta, autocar, metro, moto, taxi, tren, avión, barco, andando — and location expressions — delante de, detrás de, al lado de, cerca de, lejos de, enfrente de, a la derecha/izquierda de, en el cruce, en la esquina.',
	icon: '🚌',
	cards: [
		{
			sentence: 'Si vas al pueblo de tus abuelos, lo más cómodo es el ___ porque hace muchos kilómetros. (transporte de larga distancia)',
			answer: 'autocar',
			translation: 'If you go to your grandparents’ village, the most comfortable option is the coach because it’s many kilometres away.',
			verb: '—',
			hint: 'autocar = long-distance bus / coach'
		},
		{
			sentence: 'En Madrid hay mucha gente, prefiero coger el ___ porque va por debajo de la tierra. (subterráneo)',
			answer: 'metro',
			translation: 'In Madrid there are many people, I prefer the metro because it goes underground.',
			verb: '—',
			hint: 'metro = underground/subway'
		},
		{
			sentence: 'Para cruzar el océano usamos el ___. (sobre el agua)',
			answer: 'barco',
			translation: 'To cross the ocean we use the boat.',
			verb: '—',
			hint: 'barco = boat/ship'
		},
		{
			sentence: 'Mi hermano viene al trabajo en ___, hace ejercicio cada día. (dos ruedas, sin motor)',
			answer: 'bicicleta',
			translation: 'My brother comes to work by bike, he exercises every day.',
			verb: '—',
			hint: 'bicicleta = bicycle'
		},
		{
			sentence: 'Es muy tarde, mejor cojamos un ___ a casa. (coche con conductor)',
			answer: 'taxi',
			translation: 'It’s very late, let’s take a taxi home.',
			verb: '—',
			hint: 'taxi = taxi'
		},
		{
			sentence: 'Para ir de Madrid a Barcelona el ___ tarda solo dos horas y media. (alta velocidad)',
			answer: 'tren',
			translation: 'To go from Madrid to Barcelona the train takes only two and a half hours.',
			verb: '—',
			hint: 'tren = train'
		},
		{
			sentence: 'Voy a la oficina ___ porque vivo a cinco minutos. (sin transporte)',
			answer: 'andando',
			translation: 'I go to the office on foot because I live five minutes away.',
			verb: '—',
			hint: 'andando = on foot / walking'
		},
		{
			sentence: 'El supermercado está al ___ de mi casa, justo en el edificio de enfrente. (frente, opp. de "detrás")',
			answer: 'lado',
			translation: 'The supermarket is next to my house, right in the building opposite.',
			verb: '—',
			hint: 'al lado de = next to'
		},
		{
			sentence: 'La farmacia está ___ del banco, justo cara a cara. (frente a)',
			answer: 'enfrente',
			translation: 'The chemist is opposite the bank, right in front of it.',
			verb: '—',
			hint: 'enfrente de = opposite'
		},
		{
			sentence: 'Mis padres viven ___ de aquí, a unos doscientos metros. (no lejos)',
			answer: 'cerca',
			translation: 'My parents live near here, about two hundred metres away.',
			verb: '—',
			hint: 'cerca de = near'
		},
		{
			sentence: 'El aeropuerto está muy ___ del centro, hay una hora en coche. (opuesto a "cerca")',
			answer: 'lejos',
			translation: 'The airport is very far from the centre — it’s an hour by car.',
			verb: '—',
			hint: 'lejos de = far from'
		},
		{
			sentence: 'En la foto Juan está ___ del coche, no se le ve la cara, solo la espalda. (parte posterior)',
			answer: 'detrás',
			translation: 'In the photo Juan is behind the car, you can’t see his face, only his back.',
			verb: '—',
			hint: 'detrás de = behind'
		},
		{
			sentence: 'Gira a la ___ en la próxima calle, el restaurante está allí. (opuesta a "izquierda")',
			answer: 'derecha',
			translation: 'Turn right at the next street, the restaurant is there.',
			verb: '—',
			hint: 'a la derecha = on/to the right'
		},
		{
			sentence: 'La estatua está justo en el ___ de las dos avenidas. (encuentro de calles)',
			answer: 'cruce',
			translation: 'The statue is right at the junction of the two avenues.',
			verb: '—',
			hint: 'en el cruce = at the junction'
		}
	]
};

export default a2VocabTransporte;
