import type { Topic } from '$lib/types';

const estiloIndirectoPasados: Topic = {
	id: 'estilo-indirecto-pasados',
	name: 'Estilo Indirecto en Pasados',
	description:
		'Master reported speech tense shifts — transform present → imperfect, present perfect → pluperfect, preterite → pluperfect, and imperatives → imperfect subjunctive.',
	icon: '🗣️',
	cards: [
		{
			sentence:
				'Me dijo que ___ muy cansado después de trabajar doce horas seguidas en la fábrica. (estar)',
			answer: 'estaba',
			translation:
				'He told me he was very tired after working twelve hours straight at the factory.',
			verb: 'estar',
			hint: 'presente → imperfecto in reported speech: "estoy" becomes...'
		},
		{
			sentence:
				'Ana nos contó que ___ de enfermera en un hospital cerca del centro de la ciudad. (trabajar)',
			answer: 'trabajaba',
			translation:
				'Ana told us she worked as a nurse at a hospital near the city centre.',
			verb: 'trabajar',
			hint: 'presente → imperfecto in reported speech: "trabajo" becomes...'
		},
		{
			sentence:
				'Explicó que ya había ___ el informe de ventas antes de salir de la oficina. (terminar)',
			answer: 'terminado',
			translation:
				'He explained that he had already finished the sales report before leaving the office.',
			verb: 'terminar',
			hint: 'pretérito perfecto → pluscuamperfecto: "he terminado" becomes "había ___"'
		},
		{
			sentence:
				'Confesó que nunca había ___ a un país asiático antes de aquel viaje con su familia. (viajar)',
			answer: 'viajado',
			translation:
				'She confessed she had never travelled to an Asian country before that trip with her family.',
			verb: 'viajar',
			hint: 'pretérito perfecto → pluscuamperfecto: "he viajado" becomes "había ___"'
		},
		{
			sentence:
				'Me contó que había ___ un accidente de coche camino al trabajo aquella mañana. (tener)',
			answer: 'tenido',
			translation:
				'She told me she had had a car accident on the way to work that morning.',
			verb: 'tener',
			hint: 'indefinido → pluscuamperfecto: "tuve" becomes "había ___"'
		},
		{
			sentence:
				'El profesor le recomendó que ___ más atención en clase si quería mejorar sus notas. (prestar)',
			answer: 'prestara',
			translation:
				'The teacher recommended that he pay more attention in class if he wanted to improve his grades.',
			verb: 'prestar',
			hint: 'imperativo → imperfecto de subjuntivo: "¡presta!" becomes "que ___"'
		},
		{
			sentence:
				'Dijo que no ___ nada sobre el cambio de horario de la reunión del lunes. (saber)',
			answer: 'sabía',
			translation:
				"He said he didn't know anything about the schedule change for Monday's meeting.",
			verb: 'saber',
			hint: 'presente → imperfecto in reported speech: "no sé" becomes "no ___"'
		},
		{
			sentence:
				'El médico le recomendó que ___ al menos dos litros de agua al día y menos café. (beber)',
			answer: 'bebiera',
			translation:
				'The doctor recommended that she drink at least two litres of water a day and less coffee.',
			verb: 'beber',
			hint: 'imperativo → imperfecto de subjuntivo: "¡beba!" becomes "que ___"'
		},
		{
			sentence:
				'Comentó que ___ mucho sueño porque se había acostado a las tres de la madrugada. (tener)',
			answer: 'tenía',
			translation:
				'She mentioned she was very sleepy because she had gone to bed at three in the morning.',
			verb: 'tener',
			hint: 'presente → imperfecto in reported speech: "tengo" becomes...'
		},
		{
			sentence:
				'Confesó que ya había ___ la carta privada que no tenía permiso para leer. (abrir)',
			answer: 'abierto',
			translation:
				"He confessed he had already opened the private letter he didn't have permission to read.",
			verb: 'abrir',
			hint: 'pretérito perfecto → pluscuamperfecto — irregular participle: abierto'
		},
		{
			sentence:
				'Dijo que había ___ algo muy extraño moviéndose en el jardín durante la noche. (ver)',
			answer: 'visto',
			translation:
				'She said she had seen something very strange moving in the garden during the night.',
			verb: 'ver',
			hint: 'pretérito perfecto → pluscuamperfecto — irregular participle: visto'
		},
		{
			sentence:
				'Me pidió que le ___ las llaves del apartamento antes de irme de vacaciones. (dar)',
			answer: 'diera',
			translation:
				'She asked me to give her the apartment keys before I went on vacation.',
			verb: 'dar',
			hint: 'imperativo → imperfecto de subjuntivo: "¡dame!" becomes "que le ___"'
		},
		{
			sentence:
				'Le dijeron que ___ la maleta rápidamente porque el taxi ya había llegado. (hacer)',
			answer: 'hiciera',
			translation:
				'They told him to pack his suitcase quickly because the taxi had already arrived.',
			verb: 'hacer',
			hint: 'imperativo → imperfecto de subjuntivo — irregular: hiciera'
		},
		{
			sentence:
				'Explicó que había ___ enfermo toda la semana y que por eso no había podido ir a clase. (estar)',
			answer: 'estado',
			translation:
				"He explained he had been ill all week and that's why he hadn't been able to go to class.",
			verb: 'estar',
			hint: 'indefinido → pluscuamperfecto: "estuve" becomes "había ___"'
		},
		{
			sentence:
				'Me pidió que no ___ nada a nadie sobre la fiesta sorpresa que estaba organizando. (decir)',
			answer: 'dijera',
			translation:
				'She asked me not to say anything to anyone about the surprise party she was organising.',
			verb: 'decir',
			hint: 'imperativo → imperfecto de subjuntivo — irregular: dijera'
		},
		{
			sentence:
				'Aseguró que ___ el dinero prestado antes de que terminara el mes. (devolver)',
			answer: 'devolvería',
			translation:
				'He assured us he would return the borrowed money before the end of the month.',
			verb: 'devolver',
			hint: 'futuro → condicional in reported speech: "devolveré" becomes...'
		},
		{
			sentence:
				'Nos contó que se había ___ muy nerviosa antes de su primera entrevista de trabajo. (poner)',
			answer: 'puesto',
			translation:
				'She told us she had been very nervous before her first job interview.',
			verb: 'poner',
			hint: 'indefinido → pluscuamperfecto — irregular participle: puesto'
		},
		{
			sentence:
				'Dijo que ya había ___ todo lo necesario para la cena de Nochebuena. (hacer)',
			answer: 'hecho',
			translation:
				'He said he had already done everything needed for the Christmas Eve dinner.',
			verb: 'hacer',
			hint: 'pretérito perfecto → pluscuamperfecto — irregular participle: hecho'
		},
		{
			sentence:
				'Le sugirió que ___ de casa más temprano para evitar los atascos de la hora punta. (salir)',
			answer: 'saliera',
			translation:
				'She suggested that he leave home earlier to avoid rush-hour traffic jams.',
			verb: 'salir',
			hint: 'imperativo → imperfecto de subjuntivo: "¡sal!" becomes "que ___"'
		},
		{
			sentence:
				'Nos contó que no ___ cenar nada porque ya había comido demasiado a mediodía. (querer)',
			answer: 'quería',
			translation:
				"She told us she didn't want to eat dinner because she had already eaten too much at lunch.",
			verb: 'querer',
			hint: 'presente → imperfecto in reported speech: "no quiero" becomes "no ___"'
		}
	]
};

export default estiloIndirectoPasados;
