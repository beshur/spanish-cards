import type { Topic } from '$lib/types';

const futuroEstiloIndirecto: Topic = {
	id: 'futuro-estilo-indirecto',
	name: 'Futuro y Estilo Indirecto',
	description:
		'Practice irregular future tense stems and reported speech — where future becomes conditional in indirect discourse.',
	icon: '🔮',
	cards: [
		{
			sentence:
				'Mañana te ___ qué planes tengo para el fin de semana. (decir)',
			answer: 'diré',
			translation: "Tomorrow I'll tell you what plans I have for the weekend.",
			verb: 'decir',
			hint: 'yo form of futuro — irregular stem: dir-'
		},
		{
			sentence:
				'Creo que ___ mucho calor el próximo agosto en Andalucía. (hacer)',
			answer: 'hará',
			translation: "I think it'll be very hot next August in Andalusia.",
			verb: 'hacer',
			hint: 'él/ella form of futuro — irregular stem: har-'
		},
		{
			sentence:
				'___ que estudiar mucho más si quiero aprobar el examen de junio. (tener)',
			answer: 'Tendré',
			translation: "I'll have to study much more if I want to pass the June exam.",
			verb: 'tener',
			hint: 'yo form of futuro — irregular stem: tendr-'
		},
		{
			sentence:
				'Dijo que ___ la música más baja para no molestar a los vecinos. (poner)',
			answer: 'pondría',
			translation: 'He said he would turn the music down so as not to bother the neighbours.',
			verb: 'poner',
			hint: 'él/ella form of condicional (estilo indirecto) — irregular stem: pondr-'
		},
		{
			sentence:
				'No sé si ___ venir a tu fiesta de cumpleaños el sábado por la noche. (poder)',
			answer: 'podré',
			translation: "I don't know if I'll be able to come to your birthday party on Saturday night.",
			verb: 'poder',
			hint: 'yo form of futuro — irregular stem: podr-'
		},
		{
			sentence:
				'___ la nota del examen la semana que viene, después de las vacaciones. (saber)',
			answer: 'Sabremos',
			translation: "We'll find out the exam grade next week, after the holidays.",
			verb: 'saber',
			hint: 'nosotros form of futuro — irregular stem: sabr-'
		},
		{
			sentence:
				'Ellos ___ ir a cenar al restaurante nuevo del barrio esta noche. (querer)',
			answer: 'querrán',
			translation: "They'll want to go eat at the new neighbourhood restaurant tonight.",
			verb: 'querer',
			hint: 'ellos form of futuro — irregular stem: querr-'
		},
		{
			sentence:
				'Me dijo que ___ a las siete en punto, pero todavía no ha llegado. (venir)',
			answer: 'vendría',
			translation: "He told me he would come at seven o'clock sharp, but he still hasn't arrived.",
			verb: 'venir',
			hint: 'él/ella form of condicional (estilo indirecto) — irregular stem: vendr-'
		},
		{
			sentence:
				'___ muchas oportunidades de trabajo si estudias programación e idiomas. (haber)',
			answer: 'Habrá',
			translation:
				"There'll be many job opportunities if you study programming and languages.",
			verb: 'haber',
			hint: 'impersonal form of futuro — irregular stem: habr-'
		},
		{
			sentence:
				'___ al médico mañana a primera hora si me sigo sintiendo tan mal. (ir)',
			answer: 'Iré',
			translation: "I'll go to the doctor first thing tomorrow if I keep feeling this bad.",
			verb: 'ir',
			hint: 'yo form of futuro — irregular: iré'
		},
		{
			sentence:
				'Juan me aseguró que ___ el trabajo antes del viernes sin falta. (hacer)',
			answer: 'haría',
			translation:
				'Juan assured me that he would do the work before Friday without fail.',
			verb: 'hacer',
			hint: 'él form of condicional (estilo indirecto) — irregular stem: har-'
		},
		{
			sentence:
				'Le pregunté si ___ tiempo libre para ayudarme con la mudanza al piso nuevo. (tener)',
			answer: 'tendría',
			translation:
				'I asked him if he would have free time to help me with the move to the new flat.',
			verb: 'tener',
			hint: 'él/ella form of condicional (estilo indirecto) — irregular stem: tendr-'
		},
		{
			sentence:
				'Dijo que no ___ si podría asistir a la reunión del martes por la mañana. (saber)',
			answer: 'sabría',
			translation:
				"He said he wouldn't know if he could attend Tuesday morning's meeting.",
			verb: 'saber',
			hint: 'él/ella form of condicional (estilo indirecto) — irregular stem: sabr-'
		},
		{
			sentence:
				'Te prometo que siempre ___ la verdad, pase lo que pase. (decir)',
			answer: 'diré',
			translation: "I promise you I'll always tell the truth, no matter what happens.",
			verb: 'decir',
			hint: 'yo form of futuro — irregular stem: dir-'
		},
		{
			sentence:
				'¿___ conmigo al concierto de rock el próximo viernes por la noche? (venir)',
			answer: 'Vendrás',
			translation: 'Will you come with me to the rock concert next Friday night?',
			verb: 'venir',
			hint: 'tú form of futuro — irregular stem: vendr-'
		},
		{
			sentence:
				'Mañana ___ las decoraciones de Navidad por toda la casa. (poner)',
			answer: 'pondremos',
			translation: "Tomorrow we'll put up the Christmas decorations all around the house.",
			verb: 'poner',
			hint: 'nosotros form of futuro — irregular stem: pondr-'
		},
		{
			sentence:
				'Ella me contó que ___ vivir en el extranjero algún día para conocer otras culturas. (querer)',
			answer: 'querría',
			translation:
				'She told me she would like to live abroad someday to experience other cultures.',
			verb: 'querer',
			hint: 'ella form of condicional (estilo indirecto) — irregular stem: querr-'
		},
		{
			sentence:
				'No ___ qué pasó exactamente hasta que hablemos con él cara a cara. (saber)',
			answer: 'sabremos',
			translation:
				"We won't know exactly what happened until we speak with him face to face.",
			verb: 'saber',
			hint: 'nosotros form of futuro — irregular stem: sabr-'
		},
		{
			sentence:
				'¿___ prestarme tu coche el lunes para ir al aeropuerto a recoger a mi madre? (poder)',
			answer: 'Podrás',
			translation:
				'Will you be able to lend me your car on Monday to pick up my mother at the airport?',
			verb: 'poder',
			hint: 'tú form of futuro — irregular stem: podr-'
		},
		{
			sentence:
				'Dijo que ___ a cenar con nosotros el sábado, pero al final no apareció. (venir)',
			answer: 'vendría',
			translation:
				'He said he would come to dinner with us on Saturday, but in the end he didn\'t show up.',
			verb: 'venir',
			hint: 'él/ella form of condicional (estilo indirecto) — irregular stem: vendr-'
		}
	]
};

export default futuroEstiloIndirecto;
