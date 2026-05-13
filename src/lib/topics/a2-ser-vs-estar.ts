import type { Topic } from '$lib/types';

const a2SerVsEstar: Topic = {
	id: 'a2-ser-vs-estar',
	name: 'Ser vs Estar (A2)',
	description:
		'Choosing between ser (identity, profession, character, nationality) and estar (location, mood, temporary state, condition). The boundary cases with adjectives.',
	icon: '⚖️',
	cards: [
		{
			sentence: 'Mi primo ___ muy inteligente y simpático. (ser/estar)',
			answer: 'es',
			translation: 'My cousin is very intelligent and friendly.',
			verb: 'ser',
			hint: 'permanent character → ser'
		},
		{
			sentence: 'Mi jefe ___ enfadado conmigo y no sé por qué. (ser/estar)',
			answer: 'está',
			translation: "My boss is angry with me and I don't know why.",
			verb: 'estar',
			hint: 'temporary mood → estar'
		},
		{
			sentence: 'Él ___ médico, trabaja en el hospital del centro. (ser/estar)',
			answer: 'es',
			translation: 'He is a doctor, he works at the central hospital.',
			verb: 'ser',
			hint: 'profession → ser'
		},
		{
			sentence: 'Este profesor ___ muy pesado hablando de política. (ser/estar)',
			answer: 'es',
			translation: 'This teacher is really tiresome when he talks about politics.',
			verb: 'ser',
			hint: 'character trait → ser'
		},
		{
			sentence: 'Hoy los niños ___ muy pesados, no sé qué les pasa. (ser/estar)',
			answer: 'están',
			translation: "Today the kids are being a real pain, I don't know what's up with them.",
			verb: 'estar',
			hint: 'temporary today → estar'
		},
		{
			sentence: 'Mi abuela ___ de Sevilla, aunque vive en Madrid. (ser/estar)',
			answer: 'es',
			translation: 'My grandma is from Seville, although she lives in Madrid.',
			verb: 'ser',
			hint: 'origin → ser'
		},
		{
			sentence: 'La reunión ___ a las cuatro en la sala grande. (ser/estar)',
			answer: 'es',
			translation: 'The meeting is at four in the big room.',
			verb: 'ser',
			hint: 'event "takes place" → ser'
		},
		{
			sentence: 'La sala grande ___ en la segunda planta. (ser/estar)',
			answer: 'está',
			translation: 'The big room is on the second floor.',
			verb: 'estar',
			hint: 'physical location of a place → estar'
		},
		{
			sentence: 'Manu ___ guapo, todas las chicas lo dicen. (ser/estar)',
			answer: 'es',
			translation: 'Manu is good-looking, all the girls say so.',
			verb: 'ser',
			hint: 'permanent looks → ser'
		},
		{
			sentence: 'Manu hoy ___ más guapo que ayer con ese traje. (ser/estar)',
			answer: 'está',
			translation: 'Manu looks even better than yesterday today in that suit.',
			verb: 'estar',
			hint: 'momentary impression → estar'
		},
		{
			sentence: '¿Manu, ___ listo para salir? Te espero en la puerta. (ser/estar)',
			answer: 'estás',
			translation: 'Manu, are you ready to leave? I’ll wait at the door.',
			verb: 'estar',
			hint: 'estar listo = ready (vs ser listo = clever)'
		},
		{
			sentence: 'Manu ___ muy listo para ser tan pequeño. (ser/estar)',
			answer: 'es',
			translation: 'Manu is really clever for someone so young.',
			verb: 'ser',
			hint: 'ser listo = clever'
		},
		{
			sentence: 'Esta sopa ___ muy buena, ¿quién la ha hecho? (ser/estar)',
			answer: 'está',
			translation: 'This soup is really good — who made it?',
			verb: 'estar',
			hint: 'tastes/feels right now → estar'
		},
		{
			sentence: 'El pescado ___ muy bueno para la salud. (ser/estar)',
			answer: 'es',
			translation: 'Fish is very good for your health.',
			verb: 'ser',
			hint: 'general truth → ser'
		},
		{
			sentence: 'La ventana ___ abierta. ¿Puedes cerrarla? (ser/estar)',
			answer: 'está',
			translation: 'The window is open. Can you close it?',
			verb: 'estar',
			hint: 'state/condition → estar'
		},
		{
			sentence: '¿Qué hora ___? Las tres y cuarto. (ser/estar)',
			answer: 'es',
			translation: 'What time is it? A quarter past three.',
			verb: 'ser',
			hint: 'time → ser'
		},
		{
			sentence: 'Hoy ___ jueves, ¿no? (ser/estar)',
			answer: 'es',
			translation: 'Today is Thursday, right?',
			verb: 'ser',
			hint: 'days/dates → ser'
		},
		{
			sentence: 'Mis hijos no ___ en casa ahora, fueron al parque. (ser/estar)',
			answer: 'están',
			translation: 'My kids are not at home now, they went to the park.',
			verb: 'estar',
			hint: 'location → estar'
		},
		{
			sentence: 'Carlos ___ una buena persona, todo el mundo lo aprecia. (ser/estar)',
			answer: 'es',
			translation: 'Carlos is a good person, everyone appreciates him.',
			verb: 'ser',
			hint: 'inherent quality → ser'
		},
		{
			sentence: 'Estoy harta. Mi hijo siempre ___ cansado pero nunca quiere dormir. (ser/estar)',
			answer: 'está',
			translation: "I'm fed up. My son is always tired but never wants to sleep.",
			verb: 'estar',
			hint: 'condition → estar'
		},
		{
			sentence: 'Tus padres ___ jóvenes, tienen menos de cincuenta años. (ser/estar)',
			answer: 'son',
			translation: 'Your parents are young, they are under fifty.',
			verb: 'ser',
			hint: 'inherent trait → ser'
		},
		{
			sentence: 'La otra profesora ___ más eficiente que esta. (ser/estar)',
			answer: 'es',
			translation: 'The other teacher is more efficient than this one.',
			verb: 'ser',
			hint: 'comparing inherent quality → ser'
		},
		{
			sentence: '¿___ libre este asiento? No me responde nadie. (ser/estar)',
			answer: 'está',
			translation: 'Is this seat free? Nobody is answering me.',
			verb: 'estar',
			hint: 'availability/state → estar'
		},
		{
			sentence: 'Mi coche ___ roto, llevo una semana sin poder usarlo. (ser/estar)',
			answer: 'está',
			translation: "My car is broken, I've gone a week without being able to use it.",
			verb: 'estar',
			hint: 'condition → estar'
		}
	]
};

export default a2SerVsEstar;
