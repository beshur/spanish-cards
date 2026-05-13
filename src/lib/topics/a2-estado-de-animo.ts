import type { Topic } from '$lib/types';

const a2EstadoDeAnimo: Topic = {
	id: 'a2-estado-de-animo',
	name: 'Estar + estados de ánimo',
	description:
		'Adjectives for mood and emotional state — always with estar (estoy enfadado, está harta…). Plus a few permanent character vs temporary mood contrasts.',
	icon: '😊',
	cards: [
		{
			sentence: 'Creo que la profesora ___ enfadada con nosotros por algo. (estar)',
			answer: 'está',
			translation: "I think the teacher is angry with us about something.",
			verb: 'estar',
			hint: 'estado de ánimo → estar'
		},
		{
			sentence: 'Manu ___ harto de estudiar, lleva ocho horas con los libros. (estar)',
			answer: 'está',
			translation: "Manu is fed up with studying — he's been at the books for eight hours.",
			verb: 'estar',
			hint: 'harto = sentimiento → estar'
		},
		{
			sentence: 'Mis padres ___ muy contentos con mi nota. (estar)',
			answer: 'están',
			translation: 'My parents are very happy with my grade.',
			verb: 'estar',
			hint: 'contento (estado) → estar'
		},
		{
			sentence: 'Hoy ___ deprimida porque he discutido con mi novio. (estar, yo)',
			answer: 'estoy',
			translation: "Today I'm depressed because I had a fight with my boyfriend.",
			verb: 'estar',
			hint: 'estado emocional puntual → estar'
		},
		{
			sentence: 'Lucía ___ preocupada por el examen de mañana. (estar)',
			answer: 'está',
			translation: 'Lucía is worried about tomorrow’s exam.',
			verb: 'estar',
			hint: 'preocupada = estado → estar'
		},
		{
			sentence: 'Después del partido los jugadores ___ cansadísimos. (estar)',
			answer: 'estaban',
			translation: 'After the game the players were exhausted.',
			verb: 'estar',
			hint: 'cansado → estar (imperfecto de estar)'
		},
		{
			sentence: 'Mi prima ___ enamorada de su nuevo compañero de trabajo. (estar)',
			answer: 'está',
			translation: 'My cousin is in love with her new co-worker.',
			verb: 'estar',
			hint: 'enamorado → estar'
		},
		{
			sentence: 'Los niños ___ animados con la idea del cumpleaños. (estar)',
			answer: 'están',
			translation: 'The kids are excited about the birthday party.',
			verb: 'estar',
			hint: 'animado = estado → estar'
		},
		{
			sentence: 'No quiero salir, ___ aburrido y prefiero quedarme en casa. (estar, yo)',
			answer: 'estoy',
			translation: "I don't want to go out, I'm bored and prefer to stay home.",
			verb: 'estar',
			hint: 'estar aburrido = to feel bored (ser aburrido = boring person)'
		},
		{
			sentence: 'Esta película ___ aburrida, vamos a cambiar de canal. (ser)',
			answer: 'es',
			translation: "This film is boring, let's change the channel.",
			verb: 'ser',
			hint: 'ser aburrido = boring (intrinsic) — película'
		},
		{
			sentence: 'Carlos ___ una persona muy alegre, siempre cuenta chistes. (ser)',
			answer: 'es',
			translation: 'Carlos is a very cheerful person, he always tells jokes.',
			verb: 'ser',
			hint: 'rasgo de carácter → ser'
		},
		{
			sentence: 'Hoy Carlos ___ alegre porque le ha tocado la lotería. (estar)',
			answer: 'está',
			translation: 'Today Carlos is cheerful because he won the lottery.',
			verb: 'estar',
			hint: 'estado de ánimo hoy → estar'
		},
		{
			sentence: 'Mi jefe ___ de buen humor esta mañana. (estar)',
			answer: 'está',
			translation: 'My boss is in a good mood this morning.',
			verb: 'estar',
			hint: '"de buen humor" — estado puntual → estar'
		},
		{
			sentence: 'Carmen ___ nerviosa porque tiene una entrevista. (estar)',
			answer: 'está',
			translation: "Carmen is nervous because she has a job interview.",
			verb: 'estar',
			hint: 'estar nervioso = feeling nervous (today)'
		}
	]
};

export default a2EstadoDeAnimo;
