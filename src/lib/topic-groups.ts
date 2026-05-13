import type { Topic } from '$lib/types';
import { topics } from '$lib/topics';

export interface TopicGroup {
	id: string;
	title: string;
	icon: string;
	topics: Topic[];
}

const GROUP_BY_ID: Record<string, string> = {
	// Tenses & verb forms
	presente: 'tenses',
	'present-perfect': 'tenses',
	'pasados-irregulares': 'tenses',
	'preterito-imperfecto': 'tenses',
	'preterito-pluscuamperfecto': 'tenses',
	futuro: 'tenses',
	'futuro-estilo-indirecto': 'tenses',
	'condicional-salud': 'tenses',
	'duracion-tiempo': 'tenses',
	'estar-gerundio': 'tenses',
	'perifrasis-verbales': 'tenses',
	'a2-preterito-indefinido': 'tenses',
	'a2-pret-indef-vs-perfecto': 'tenses',
	'a2-imperfecto-vs-indefinido': 'tenses',
	'a2-condicionales-reales': 'tenses',

	// Structure & syntax
	'preposiciones-esenciales': 'structure',
	'preposicion-de': 'structure',
	'por-vs-para': 'structure',
	'trampas-preposicionales': 'structure',
	'gustar-doler-caer': 'structure',
	'pronombres-relativos': 'structure',
	'comparativos-superlativos': 'structure',
	'oraciones-finales': 'structure',
	'oraciones-cuando': 'structure',
	'oraciones-condicionales': 'structure',
	'pronombres-objeto': 'structure',
	indefinidos: 'structure',
	'se-impersonal': 'structure',
	'a2-ser-vs-estar': 'structure',
	'a2-pronombres-od-oi': 'structure',
	'a2-hay-que-se-puede': 'structure',
	'a2-me-gustaria': 'structure',
	'a2-estado-de-animo': 'structure',
	'a2-numeros-fechas': 'structure',
	'a2-pronombres-interrogativos': 'structure',

	// Mood, imperative & reported speech
	imperativo: 'mood',
	subjuntivo: 'mood',
	'imperfecto-subjuntivo': 'mood',
	'estilo-indirecto-pasados': 'mood',
	'estilo-indirecto-ordenes': 'mood',
	'voz-pasiva': 'mood',
	'deseo-subjuntivo': 'mood',
	'sentimientos-opiniones': 'mood',
	'a2-estilo-indirecto-basico': 'mood',

	// Pragmatics & expression
	conjetura: 'pragmatics',
	'pedir-educadamente': 'pragmatics',
	'favores-permiso-ayuda': 'pragmatics',
	adverbios: 'pragmatics',
	refranes: 'pragmatics',

	// Vocabulary
	'vocab-alimentos': 'vocab',
	'vocab-cuerpo': 'vocab',
	'vocab-profesiones': 'vocab',
	'vocab-deportes': 'vocab',
	'vocab-alojamiento': 'vocab',
	'vocab-tiempo': 'vocab',
	'vocab-ropa': 'vocab',
	'a2-vocab-cotidiano': 'vocab',
	'a2-vocab-casa': 'vocab',
	'a2-vocab-caracter': 'vocab',
	'a2-vocab-cocina': 'vocab',
	'a2-vocab-biografia': 'vocab',
	'a2-vocab-familia': 'vocab',
	'a2-vocab-peliculas': 'vocab',
	'a2-vocab-transporte': 'vocab',
	'a2-vocab-estado-cosas': 'vocab',
	'a2-vocab-trabajo': 'vocab',
	'a2-vocab-mundo': 'vocab',
	'a2-vocab-objetos': 'vocab'
};

const GROUP_META: { id: string; title: string; icon: string }[] = [
	{ id: 'tenses', title: 'Tenses & verb forms', icon: '⏱️' },
	{ id: 'structure', title: 'Structure & syntax', icon: '🧩' },
	{ id: 'mood', title: 'Mood, imperative & reported speech', icon: '🎭' },
	{ id: 'pragmatics', title: 'Pragmatics & expression', icon: '💬' },
	{ id: 'vocab', title: 'Vocabulary', icon: '📚' },
	{ id: 'other', title: 'Other', icon: '✨' }
];

export const topicGroups: TopicGroup[] = (() => {
	const buckets: Record<string, Topic[]> = {};
	for (const t of topics) {
		const g = GROUP_BY_ID[t.id] ?? 'other';
		(buckets[g] ??= []).push(t);
	}
	const result: TopicGroup[] = [];
	for (const m of GROUP_META) {
		const items = buckets[m.id] ?? [];
		if (items.length > 0) {
			result.push({ id: m.id, title: m.title, icon: m.icon, topics: items });
		}
	}
	return result;
})();
