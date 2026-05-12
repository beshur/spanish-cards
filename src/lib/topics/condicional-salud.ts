import type { Topic } from '$lib/types';

const condicionalSalud: Topic = {
	id: 'condicional-salud',
	name: 'Condicional: Salud y Sentimientos',
	description:
		'Practice the conditional mood with irregular stems — in contexts of health, feelings, advice, and hypothetical situations.',
	icon: '💭',
	cards: [
		{
			sentence:
				'Si me doliera la cabeza, me ___ una bolsa de hielo en la frente. (poner)',
			answer: 'pondría',
			translation:
				'If my head hurt, I would put an ice pack on my forehead.',
			verb: 'poner',
			hint: 'yo form of condicional — irregular stem: pondr-'
		},
		{
			sentence:
				'Yo en tu lugar, ___ que no al proyecto porque es demasiado arriesgado. (decir)',
			answer: 'diría',
			translation:
				'In your place, I would say no to the project because it is too risky.',
			verb: 'decir',
			hint: 'yo form of condicional — irregular stem: dir-'
		},
		{
			sentence:
				'¿Qué ___ si tuvieras un millón de euros en tu cuenta bancaria? (hacer)',
			answer: 'harías',
			translation:
				'What would you do if you had a million euros in your bank account?',
			verb: 'hacer',
			hint: 'tú form of condicional — irregular stem: har-'
		},
		{
			sentence:
				'___ que ir al médico lo antes posible por ese dolor de espalda tan fuerte. (tener)',
			answer: 'Tendrías',
			translation:
				'You should go to the doctor as soon as possible about that severe back pain.',
			verb: 'tener',
			hint: 'tú form of condicional — irregular stem: tendr-'
		},
		{
			sentence:
				'Me ___ saber hablar chino perfectamente para viajar por toda Asia. (gustar)',
			answer: 'gustaría',
			translation:
				'I would like to speak Chinese perfectly in order to travel all over Asia.',
			verb: 'gustar',
			hint: 'regular condicional of gustar — used with indirect object pronoun me'
		},
		{
			sentence:
				'Si pudiera, ___ a visitarte todos los días después del trabajo. (venir)',
			answer: 'vendría',
			translation:
				'If I could, I would come visit you every day after work.',
			verb: 'venir',
			hint: 'yo form of condicional — irregular stem: vendr-'
		},
		{
			sentence:
				'¿___ decirme dónde está la farmacia más cercana, por favor? (poder)',
			answer: 'Podrías',
			translation:
				'Could you tell me where the nearest pharmacy is, please?',
			verb: 'poder',
			hint: 'tú form of condicional — irregular stem: podr-'
		},
		{
			sentence:
				'___ mejor si pusiéramos la reunión por la tarde en vez de por la mañana. (ser)',
			answer: 'Sería',
			translation:
				'It would be better if we held the meeting in the afternoon instead of the morning.',
			verb: 'ser',
			hint: 'él/ella form of condicional — regular: sería'
		},
		{
			sentence:
				'Si tuviéramos mucha hambre después del gimnasio, ___ unos bocadillos de jamón. (hacer)',
			answer: 'haríamos',
			translation:
				'If we were very hungry after the gym, we would make some ham sandwiches.',
			verb: 'hacer',
			hint: 'nosotros form of condicional — irregular stem: har-'
		},
		{
			sentence:
				'Me ___ muy feliz si aprobaras el examen de español con buena nota. (poner)',
			answer: 'pondría',
			translation:
				'It would make me very happy if you passed the Spanish exam with a good grade.',
			verb: 'poner',
			hint: 'yo form of condicional (reflexive ponerse) — irregular stem: pondr-'
		},
		{
			sentence:
				'___ ir de vacaciones a la montaña este verano si encontramos un hotel barato. (querer)',
			answer: 'Querríamos',
			translation:
				'We would like to go on holiday to the mountains this summer if we find a cheap hotel.',
			verb: 'querer',
			hint: 'nosotros form of condicional — irregular stem: querr-'
		},
		{
			sentence:
				'Si recibiera esa mala noticia de repente, me ___ mucho el corazón. (doler)',
			answer: 'dolería',
			translation:
				'If I suddenly received that bad news, my heart would ache a lot.',
			verb: 'doler',
			hint: 'él form of condicional — regular'
		},
		{
			sentence:
				'Si vinieras a mi casa este fin de semana, te ___ una cena española especial. (hacer)',
			answer: 'haría',
			translation:
				'If you came to my house this weekend, I would make you a special Spanish dinner.',
			verb: 'hacer',
			hint: 'yo form of condicional — irregular stem: har-'
		},
		{
			sentence:
				'___ conveniente que salieras a caminar un poco por el parque para relajarte. (ser)',
			answer: 'Sería',
			translation:
				'It would be advisable for you to go for a walk in the park to relax.',
			verb: 'ser',
			hint: 'él/ella form of condicional — regular: sería'
		},
		{
			sentence:
				'No ___ molestarte con mis problemas personales, pero necesito un consejo. (querer)',
			answer: 'querría',
			translation:
				"I wouldn't want to bother you with my personal problems, but I need some advice.",
			verb: 'querer',
			hint: 'yo form of condicional — irregular stem: querr-'
		},
		{
			sentence:
				'___ que ser más positivos ante la vida y dejar de quejarnos tanto. (tener)',
			answer: 'Tendríamos',
			translation:
				'We should be more positive about life and stop complaining so much.',
			verb: 'tener',
			hint: 'nosotros form of condicional — irregular stem: tendr-'
		},
		{
			sentence:
				'Si supiera la respuesta correcta del crucigrama, te la ___ ahora mismo. (decir)',
			answer: 'diría',
			translation:
				'If I knew the correct crossword answer, I would tell you right now.',
			verb: 'decir',
			hint: 'yo form of condicional — irregular stem: dir-'
		},
		{
			sentence:
				'Si tuviera fiebre alta y dolor de cabeza, me ___ en casa todo el día. (quedar)',
			answer: 'quedaría',
			translation:
				'If I had a high fever and a headache, I would stay home all day.',
			verb: 'quedar',
			hint: 'yo form of condicional (reflexive quedarse) — regular'
		},
		{
			sentence:
				'Si el dentista me ___ que tengo una caries, iría a tratármela enseguida. (decir)',
			answer: 'dijera',
			translation:
				'If the dentist told me I have a cavity, I would go get it treated right away.',
			verb: 'decir',
			hint: 'él/ella form of imperfecto de subjuntivo — J-stem: dij-'
		}
	]
};

export default condicionalSalud;
