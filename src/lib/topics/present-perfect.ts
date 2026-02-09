import type { Topic } from '$lib/types';

const presentPerfect: Topic = {
	id: 'present-perfect',
	name: 'Pretérito Perfecto',
	description: 'Practice the present perfect tense — formed with haber + past participle, used for recent or life experiences.',
	icon: '✅',
	cards: [
		// Regular -AR verbs
		{
			sentence: 'Yo ___ con mi madre esta mañana. (hablar)',
			answer: 'he hablado',
			translation: 'I have spoken with my mother this morning.',
			verb: 'hablar',
			hint: 'yo form of haber + past participle of hablar'
		},
		{
			sentence: 'Tú ___ mucho hoy. (trabajar)',
			answer: 'has trabajado',
			translation: 'You have worked a lot today.',
			verb: 'trabajar',
			hint: 'tú form of haber + -ado'
		},
		{
			sentence: 'Ella ___ una canción bonita. (cantar)',
			answer: 'ha cantado',
			translation: 'She has sung a beautiful song.',
			verb: 'cantar',
			hint: 'ella form of haber + -ado'
		},
		{
			sentence: 'Nosotros ___ la cena. (cocinar)',
			answer: 'hemos cocinado',
			translation: 'We have cooked dinner.',
			verb: 'cocinar',
			hint: 'nosotros form of haber + -ado'
		},
		{
			sentence: 'Ellos ___ toda la tarde. (estudiar)',
			answer: 'han estudiado',
			translation: 'They have studied all afternoon.',
			verb: 'estudiar',
			hint: 'ellos form of haber + -ado'
		},
		// Regular -ER verbs
		{
			sentence: 'Yo ___ la carta. (leer)',
			answer: 'he leído',
			translation: 'I have read the letter.',
			verb: 'leer',
			hint: 'yo form of haber + past participle — note the accent on leído'
		},
		{
			sentence: 'Tú ___ demasiado. (comer)',
			answer: 'has comido',
			translation: 'You have eaten too much.',
			verb: 'comer',
			hint: 'tú form of haber + -ido'
		},
		{
			sentence: 'Él ___ la maratón. (correr)',
			answer: 'ha corrido',
			translation: 'He has run the marathon.',
			verb: 'correr',
			hint: 'él form of haber + -ido'
		},
		// Regular -IR verbs
		{
			sentence: 'Nosotros ___ en Madrid antes. (vivir)',
			answer: 'hemos vivido',
			translation: 'We have lived in Madrid before.',
			verb: 'vivir',
			hint: 'nosotros form of haber + -ido'
		},
		{
			sentence: 'Ustedes ___ mucho últimamente. (salir)',
			answer: 'han salido',
			translation: 'You all have gone out a lot lately.',
			verb: 'salir',
			hint: 'ustedes form of haber + -ido'
		},
		// Irregular past participles
		{
			sentence: 'Yo ___ una carta a mi abuela. (escribir)',
			answer: 'he escrito',
			translation: 'I have written a letter to my grandmother.',
			verb: 'escribir',
			hint: 'yo form — irregular participle: escrito'
		},
		{
			sentence: 'Tú ___ la puerta. (abrir)',
			answer: 'has abierto',
			translation: 'You have opened the door.',
			verb: 'abrir',
			hint: 'tú form — irregular participle: abierto'
		},
		{
			sentence: 'Ella ___ la verdad. (decir)',
			answer: 'ha dicho',
			translation: 'She has told the truth.',
			verb: 'decir',
			hint: 'ella form — irregular participle: dicho'
		},
		{
			sentence: 'Nosotros ___ todo el trabajo. (hacer)',
			answer: 'hemos hecho',
			translation: 'We have done all the work.',
			verb: 'hacer',
			hint: 'nosotros form — irregular participle: hecho'
		},
		{
			sentence: 'Ellos ___ las llaves. (poner)',
			answer: 'han puesto',
			translation: 'They have put the keys.',
			verb: 'poner',
			hint: 'ellos form — irregular participle: puesto'
		},
		{
			sentence: 'Yo ___ una película increíble. (ver)',
			answer: 'he visto',
			translation: 'I have seen an incredible movie.',
			verb: 'ver',
			hint: 'yo form — irregular participle: visto'
		},
		{
			sentence: '¿Tú ___ al nuevo restaurante? (ir)',
			answer: 'has ido',
			translation: 'Have you gone to the new restaurant?',
			verb: 'ir',
			hint: 'tú form of haber + ido'
		},
		{
			sentence: 'Ella ___ el regalo en la mesa. (poner)',
			answer: 'ha puesto',
			translation: 'She has put the gift on the table.',
			verb: 'poner',
			hint: 'ella form — irregular participle: puesto'
		},
		{
			sentence: 'Nosotros ___ al museo. (volver)',
			answer: 'hemos vuelto',
			translation: 'We have returned to the museum.',
			verb: 'volver',
			hint: 'nosotros form — irregular participle: vuelto'
		},
		{
			sentence: 'Ellos no ___ nada todavía. (resolver)',
			answer: 'han resuelto',
			translation: 'They have not resolved anything yet.',
			verb: 'resolver',
			hint: 'ellos form — irregular participle: resuelto'
		}
	]
};

export default presentPerfect;
