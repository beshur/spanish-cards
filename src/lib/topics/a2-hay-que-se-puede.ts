import type { Topic } from '$lib/types';

const a2HayQueSePuede: Topic = {
	id: 'a2-hay-que-se-puede',
	name: 'Hay que / Se puede',
	description:
		'Impersonal obligation (hay que + infinitivo), permission (se puede + inf.) and prohibition (no se puede + inf.). All invariable — no subject agreement.',
	icon: '🚧',
	cards: [
		{
			sentence: 'Para aprobar el examen ___ estudiar todos los días. (obligación general)',
			answer: 'hay que',
			translation: 'To pass the exam you have to study every day.',
			verb: 'haber',
			hint: '"hay que" + infinitivo — obligación general impersonal'
		},
		{
			sentence: 'En este restaurante ___ reservar mesa con antelación. (es necesario)',
			answer: 'hay que',
			translation: 'At this restaurant you have to book a table in advance.',
			verb: 'haber',
			hint: 'general necessity → hay que'
		},
		{
			sentence: 'No ___ entrar con comida en el museo, está prohibido. (prohibición)',
			answer: 'se puede',
			translation: "You can't bring food into the museum, it's forbidden.",
			verb: 'poder',
			hint: 'prohibición impersonal → (no) se puede + inf.'
		},
		{
			sentence: 'Aquí ___ aparcar gratis los domingos. (permiso general)',
			answer: 'se puede',
			translation: 'You can park for free here on Sundays.',
			verb: 'poder',
			hint: 'permiso/general permission → se puede + inf.'
		},
		{
			sentence: '___ tener mucho cuidado al cruzar esta carretera. (obligación)',
			answer: 'Hay que',
			translation: 'You have to be very careful crossing this road.',
			verb: 'haber',
			hint: 'general obligation → Hay que (start of sentence)'
		},
		{
			sentence: 'No ___ hacer ruido después de las once de la noche. (prohibición)',
			answer: 'se puede',
			translation: "You can't make noise after eleven at night.",
			verb: 'poder',
			hint: 'prohibición → no se puede'
		},
		{
			sentence: 'Para llegar a tiempo ___ salir antes de las ocho. (obligación)',
			answer: 'hay que',
			translation: 'To get there on time you have to leave before eight.',
			verb: 'haber',
			hint: 'condition → hay que'
		},
		{
			sentence: 'En la biblioteca ___ guardar silencio. (obligación)',
			answer: 'hay que',
			translation: 'In the library you have to be quiet.',
			verb: 'haber',
			hint: 'rule → hay que'
		},
		{
			sentence: '¿___ pagar con tarjeta aquí? (¿es posible?)',
			answer: 'Se puede',
			translation: 'Can you pay by card here?',
			verb: 'poder',
			hint: 'pregunta de posibilidad/permiso → Se puede'
		},
		{
			sentence: 'Para hacer este plato ___ comprar ingredientes frescos. (es necesario)',
			answer: 'hay que',
			translation: 'To make this dish you need to buy fresh ingredients.',
			verb: 'haber',
			hint: 'necessity → hay que'
		},
		{
			sentence: 'No ___ fumar en ningún espacio público cerrado. (prohibición)',
			answer: 'se puede',
			translation: 'You cannot smoke in any enclosed public space.',
			verb: 'poder',
			hint: 'prohibición → no se puede'
		},
		{
			sentence: 'En verano ___ beber mucha agua para no deshidratarse. (recomendación general)',
			answer: 'hay que',
			translation: 'In summer you have to drink a lot of water to avoid getting dehydrated.',
			verb: 'haber',
			hint: 'general recommendation → hay que'
		}
	]
};

export default a2HayQueSePuede;
