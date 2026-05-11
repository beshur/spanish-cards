import type { Topic } from '$lib/types';
import { topics } from '$lib/topics';

export interface ExamTopicRef {
	id: string;
	label: string;
	topic?: Topic;
}

export interface ExamCategory {
	id: string;
	title: string;
	icon: string;
	description: string;
	topics: ExamTopicRef[];
}

function ref(id: string, label: string): ExamTopicRef {
	const topic = topics.find((t) => t.id === id);
	return { id, label, topic };
}

export const examCategories: ExamCategory[] = [
	{
		id: 'tiempos-verbales',
		title: 'Tiempos y formas verbales',
		icon: '⏱️',
		description: 'Indicative tenses — present through conditional.',
		topics: [
			ref('presente', 'Presente'),
			ref('present-perfect', 'Pretérito perfecto'),
			ref('pasados-irregulares', 'Pretérito indefinido'),
			ref('preterito-imperfecto', 'Pretérito imperfecto'),
			ref('futuro', 'Futuro'),
			ref('duracion-tiempo', 'Duración y tiempo de acción'),
			ref('preterito-pluscuamperfecto', 'Pretérito pluscuamperfecto'),
			ref('condicional-salud', 'Condicional')
		]
	},
	{
		id: 'sintaxis',
		title: 'Sintaxis y estructuras',
		icon: '🧩',
		description: 'Prepositions, pronouns, periphrases, comparatives.',
		topics: [
			ref('preposiciones-esenciales', 'Preposiciones (a, en, …)'),
			ref('preposicion-de', 'Preposición de'),
			ref('por-vs-para', 'Por vs Para'),
			ref('trampas-preposicionales', 'Trampas preposicionales'),
			ref('gustar-doler-caer', 'Gustar, doler, caer, interesar, preocupar'),
			ref('pronombres-relativos', 'Pronombres relativos'),
			ref('perifrasis-verbales', 'Perífrasis verbales'),
			ref('estar-gerundio', 'Estar / estaba / estuve + gerundio'),
			ref('oraciones-finales', 'Oraciones finales (para / para que)'),
			ref('comparativos-superlativos', 'Comparativos y superlativos'),
			ref('oraciones-cuando', 'Oraciones temporales con cuando'),
			ref('oraciones-condicionales', 'Oraciones condicionales')
		]
	},
	{
		id: 'modos-y-estilo',
		title: 'Modos, imperativo y estilo indirecto',
		icon: '🎭',
		description: 'Imperative, subjunctive, reported speech, passive.',
		topics: [
			ref('imperativo', 'Imperativo (afirmativo y negativo)'),
			ref('subjuntivo', 'Subjuntivo presente'),
			ref('sentimientos-opiniones', 'Sentimientos, emociones y opiniones'),
			ref('imperfecto-subjuntivo', 'Imperfecto de subjuntivo'),
			ref('estilo-indirecto-pasados', 'Estilo indirecto (I)'),
			ref('estilo-indirecto-ordenes', 'Estilo indirecto (II) — órdenes, peticiones, consejos'),
			ref('voz-pasiva', 'Voz pasiva y voz activa'),
			ref('deseo-subjuntivo', 'Expresar deseo (que + subj / inf)')
		]
	},
	{
		id: 'pragmatica',
		title: 'Pragmática y conjetura',
		icon: '💬',
		description: 'Suppositions, polite requests, pronouns, indefinites, adverbs.',
		topics: [
			ref('conjetura', 'Conjetura (a lo mejor, quizás, probablemente, igual)'),
			ref('pedir-educadamente', 'Pedir de forma educada'),
			ref('pronombres-objeto', 'Pronombres de objeto directo e indirecto'),
			ref('indefinidos', 'Indefinidos (poco, un poco, mucho, demasiado)'),
			ref('se-impersonal', 'Se impersonal'),
			ref('favores-permiso-ayuda', 'Pedir favores, permiso, ofrecer ayuda'),
			ref('adverbios', 'Adverbios')
		]
	},
	{
		id: 'vocabulario',
		title: 'Vocabulario',
		icon: '📚',
		description: 'Thematic vocabulary for the exam.',
		topics: [
			ref('vocab-alimentos', 'Alimentos'),
			ref('vocab-cuerpo', 'Partes del cuerpo'),
			ref('vocab-profesiones', 'Profesiones y trabajo'),
			ref('vocab-deportes', 'Deportes y cultura'),
			ref('vocab-alojamiento', 'Alojamiento'),
			ref('vocab-tiempo', 'Tiempo atmosférico'),
			ref('vocab-ropa', 'Ropa')
		]
	}
];
