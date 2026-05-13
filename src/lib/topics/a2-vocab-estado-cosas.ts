import type { Topic } from '$lib/types';

const a2VocabEstadoCosas: Topic = {
	id: 'a2-vocab-estado-cosas',
	name: 'Estado de las cosas',
	description:
		'Adjectives that describe the state of things — lleno/vacío, cerrado/abierto, limpio/sucio, frío/caliente, roto, libre/ocupado, viejo, nuevo, reservado, desordenado. Used with estar.',
	icon: '🧾',
	cards: [
		{
			sentence: 'No puedo entrar, la puerta está ___. (no abierta)',
			answer: 'cerrada',
			translation: 'I can’t go in, the door is closed.',
			verb: 'estar',
			hint: 'cerrado/a — concuerda con "puerta" (fem.)'
		},
		{
			sentence: 'La botella está ___, no queda nada de agua. (sin contenido)',
			answer: 'vacía',
			translation: 'The bottle is empty, there’s no water left.',
			verb: 'estar',
			hint: 'vacío/a = empty'
		},
		{
			sentence: 'Este vaso está ___ hasta arriba, ten cuidado al moverlo. (opuesto a "vacío")',
			answer: 'lleno',
			translation: 'This glass is full to the top — be careful when moving it.',
			verb: 'estar',
			hint: 'lleno = full'
		},
		{
			sentence: 'No puedo sentarme aquí, esta mesa está ___ para otros clientes. (apartada)',
			answer: 'reservada',
			translation: 'I can’t sit here, this table is reserved for other customers.',
			verb: 'estar',
			hint: 'reservado/a = reserved'
		},
		{
			sentence: 'No te bebas la sopa todavía, está ___. (mucha temperatura)',
			answer: 'caliente',
			translation: 'Don’t drink the soup yet, it’s hot.',
			verb: 'estar',
			hint: 'caliente = hot'
		},
		{
			sentence: 'Hay que poner la calefacción, la habitación está muy ___. (poca temperatura)',
			answer: 'fría',
			translation: 'We need to turn on the heating, the room is very cold.',
			verb: 'estar',
			hint: 'frío/a — concuerda con "habitación"'
		},
		{
			sentence: 'Acabo de fregar el suelo, ahora está ___. (sin manchas)',
			answer: 'limpio',
			translation: 'I just mopped the floor, now it is clean.',
			verb: 'estar',
			hint: 'limpio = clean'
		},
		{
			sentence: 'No me pongo esa camisa, está ___ desde ayer. (con manchas)',
			answer: 'sucia',
			translation: 'I’m not wearing that shirt, it has been dirty since yesterday.',
			verb: 'estar',
			hint: 'sucio/a = dirty'
		},
		{
			sentence: 'No puedo escribir, este bolígrafo está ___, no funciona. (en mal estado)',
			answer: 'roto',
			translation: 'I can’t write, this pen is broken, it doesn’t work.',
			verb: 'estar',
			hint: 'roto = broken'
		},
		{
			sentence: 'Esta mañana el banco no está ___ todavía, abre a las nueve. (opuesto a "cerrado")',
			answer: 'abierto',
			translation: 'This morning the bank is not open yet, it opens at nine.',
			verb: 'estar',
			hint: 'abierto = open'
		},
		{
			sentence: 'Ese taxi está ___, puedes pararlo. (sin clientes)',
			answer: 'libre',
			translation: 'That taxi is free, you can stop it.',
			verb: 'estar',
			hint: 'libre = free/available'
		},
		{
			sentence: 'No puedo coger el coche, está ___ por mi padre toda la tarde. (en uso)',
			answer: 'ocupado',
			translation: 'I can’t take the car, my father has it busy all afternoon.',
			verb: 'estar',
			hint: 'ocupado = busy/occupied'
		},
		{
			sentence: 'Tu cuarto está muy ___, hay ropa por todas partes. (sin orden)',
			answer: 'desordenado',
			translation: 'Your room is very messy, there’s clothing everywhere.',
			verb: 'estar',
			hint: 'desordenado = messy'
		}
	]
};

export default a2VocabEstadoCosas;
