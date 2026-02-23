import type { Topic } from '$lib/types';
import subjuntivo from './subjuntivo';
import presentPerfect from './present-perfect';
import pasadosIrregulares from './pasados-irregulares';
import futuroEstiloIndirecto from './futuro-estilo-indirecto';
import condicionalSalud from './condicional-salud';
import imperativo from './imperativo';
import refranes from './refranes';
import estiloIndirectoPasados from './estilo-indirecto-pasados';

/**
 * All available topics.
 * To add a new topic, create a new file in this folder and import it here.
 */
export const topics: Topic[] = [
	subjuntivo,
	presentPerfect,
	pasadosIrregulares,
	futuroEstiloIndirecto,
	estiloIndirectoPasados,
	condicionalSalud,
	imperativo,
	refranes
];

export function getTopicById(id: string): Topic | undefined {
	return topics.find((t) => t.id === id);
}
