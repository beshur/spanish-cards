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

export const a2ExamCategories: ExamCategory[] = [
	{
		id: 'tiempos-verbales',
		title: 'Tiempos verbales',
		icon: '⏱️',
		description: 'Past tenses, future, and conditional patterns at A2 level.',
		topics: [
			ref('a2-preterito-indefinido', 'Pretérito indefinido'),
			ref('present-perfect', 'Pretérito perfecto'),
			ref('a2-pret-indef-vs-perfecto', 'Indefinido vs perfecto'),
			ref('preterito-imperfecto', 'Pretérito imperfecto'),
			ref('a2-imperfecto-vs-indefinido', 'Imperfecto vs indefinido'),
			ref('estar-gerundio', 'Estar / estaba + gerundio'),
			ref('futuro', 'Futuro imperfecto'),
			ref('perifrasis-verbales', 'Perífrasis verbales (ir a, llevar + ger.)'),
			ref('a2-condicionales-reales', 'Condicionales reales (si + presente)')
		]
	},
	{
		id: 'sintaxis',
		title: 'Sintaxis y estructuras',
		icon: '🧩',
		description: 'Pronouns, ser/estar, comparatives, polite formulas.',
		topics: [
			ref('a2-ser-vs-estar', 'Ser vs Estar'),
			ref('a2-estado-de-animo', 'Estar + estados de ánimo'),
			ref('gustar-doler-caer', 'Gustar y verbos similares'),
			ref('a2-me-gustaria', 'Me gustaría + infinitivo'),
			ref('a2-pronombres-od-oi', 'Pronombres OD / OI'),
			ref('a2-hay-que-se-puede', 'Hay que / Se puede'),
			ref('se-impersonal', 'Se impersonal'),
			ref('indefinidos', 'Indefinidos (alguien, nadie, algo, nada)'),
			ref('comparativos-superlativos', 'Comparativos y superlativos'),
			ref('preposiciones-esenciales', 'Preposiciones esenciales'),
			ref('a2-numeros-fechas', 'Números y fechas')
		]
	},
	{
		id: 'modos-y-estilo',
		title: 'Modos, imperativo y estilo indirecto',
		icon: '🎭',
		description: 'Imperative, basic subjunctive uses, reported speech.',
		topics: [
			ref('imperativo', 'Imperativo'),
			ref('subjuntivo', 'Presente de subjuntivo'),
			ref('oraciones-cuando', 'Cuando + indicativo / subjuntivo'),
			ref('pronombres-relativos', 'Pronombres relativos (que, quien, donde)'),
			ref('a2-estilo-indirecto-basico', 'Estilo indirecto')
		]
	},
	{
		id: 'vocabulario',
		title: 'Vocabulario A2',
		icon: '📚',
		description: 'Daily life, home, character, food, biography, body, weather.',
		topics: [
			ref('a2-vocab-cotidiano', 'Actividades cotidianas'),
			ref('a2-vocab-casa', 'La casa y los muebles'),
			ref('a2-vocab-caracter', 'Adjetivos de carácter'),
			ref('a2-vocab-cocina', 'Cocina y restaurante'),
			ref('a2-vocab-biografia', 'Verbos para biografías'),
			ref('vocab-cuerpo', 'Cuerpo y salud'),
			ref('vocab-tiempo', 'Tiempo meteorológico'),
			ref('vocab-ropa', 'Ropa'),
			ref('vocab-profesiones', 'Profesiones'),
			ref('vocab-alimentos', 'Alimentos')
		]
	}
];
