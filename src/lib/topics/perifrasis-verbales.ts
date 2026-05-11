import type { Topic } from '$lib/types';

const perifrasisVerbales: Topic = {
	id: 'perifrasis-verbales',
	name: 'Perífrasis Verbales',
	description:
		'Seguir/llevar + gerundio, dejar de / acabar de / empezar a / volver a + infinitivo.',
	icon: '🔁',
	cards: [
		{
			sentence: '¿___ viviendo en la misma casa? (seguir, tú)',
			answer: 'Sigues',
			translation: 'Are you still living in the same house?',
			verb: 'seguir',
			hint: 'tú — continuing action'
		},
		{
			sentence: '___ trabajando en Madrid tres años. (llevar, yo)',
			answer: 'Llevo',
			translation: 'I have been working in Madrid for three years.',
			verb: 'llevar',
			hint: 'yo — duration'
		},
		{
			sentence: 'El niño ya ha ___ de llorar.',
			answer: 'dejado',
			translation: 'The child has already stopped crying.',
			verb: 'dejar de',
			hint: 'participle of dejar'
		},
		{
			sentence: '___ de volver de vacaciones. (acabar, nosotros)',
			answer: 'Acabamos',
			translation: 'We have just come back from vacation.',
			verb: 'acabar de',
			hint: 'nosotros — present'
		},
		{
			sentence: 'Empecé ___ estudiar español cuando era joven.',
			answer: 'a',
			translation: 'I started studying Spanish when I was young.',
			verb: 'empezar a',
			hint: 'preposition after empezar'
		},
		{
			sentence: 'Volvieron ___ verse después de unos años.',
			answer: 'a',
			translation: 'They saw each other again after a few years.',
			verb: 'volver a',
			hint: 'preposition after volver'
		},
		{
			sentence: 'Mi marido ha ___ de conducir desde el accidente.',
			answer: 'dejado',
			translation: 'My husband has stopped driving since the accident.',
			verb: 'dejar de',
			hint: 'participle'
		},
		{
			sentence: 'Daniela sigue ___ a correr por las mañanas. (salir)',
			answer: 'saliendo',
			translation: 'Daniela still goes out running in the mornings.',
			verb: 'salir',
			hint: 'gerundio after seguir'
		},
		{
			sentence: 'Mañana me apuntaré otra vez al yoga — voy a ___ a hacer yoga.',
			answer: 'volver',
			translation: 'Tomorrow I’ll sign up to yoga again — I’m going to do yoga again.',
			verb: 'volver a',
			hint: 'infinitive after voy a'
		},
		{
			sentence: 'Luisa me ha llamado justo ahora — me acaba ___ llamar.',
			answer: 'de',
			translation: 'Luisa just called me — she has just called.',
			verb: 'acabar de',
			hint: 'preposition after acabar'
		},
		{
			sentence: 'El niño llora ___ hace un rato. (llevar)',
			answer: 'lleva',
			translation: 'The child has been crying for a while.',
			verb: 'llevar',
			hint: 'él — llevar + tiempo'
		},
		{
			sentence: 'Hemos puesto la televisión ahora mismo — acabamos ___ ponerla.',
			answer: 'de',
			translation: 'We turned on the TV just now — we have just turned it on.',
			verb: 'acabar de',
			hint: 'preposition'
		}
	]
};

export default perifrasisVerbales;
