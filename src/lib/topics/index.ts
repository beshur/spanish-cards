import type { Topic } from '$lib/types';
import subjuntivo from './subjuntivo';
import presentPerfect from './present-perfect';
import pasadosIrregulares from './pasados-irregulares';
import futuro from './futuro';
import futuroEstiloIndirecto from './futuro-estilo-indirecto';
import condicionalSalud from './condicional-salud';
import imperativo from './imperativo';
import refranes from './refranes';
import estiloIndirectoPasados from './estilo-indirecto-pasados';
import preposicionDe from './preposicion-de';
import porVsPara from './por-vs-para';
import preposicionesEsenciales from './preposiciones-esenciales';
import trampasPreposicionales from './trampas-preposicionales';

// B1 exam-prep topics
import presente from './presente';
import preteritoImperfecto from './preterito-imperfecto';
import duracionTiempo from './duracion-tiempo';
import preteritoPluscuamperfecto from './preterito-pluscuamperfecto';
import gustarDolerCaer from './gustar-doler-caer';
import pronombresRelativos from './pronombres-relativos';
import perifrasisVerbales from './perifrasis-verbales';
import estarGerundio from './estar-gerundio';
import oracionesFinales from './oraciones-finales';
import comparativosSuperlativos from './comparativos-superlativos';
import oracionesCuando from './oraciones-cuando';
import oracionesCondicionales from './oraciones-condicionales';
import sentimientosOpiniones from './sentimientos-opiniones';
import imperfectoSubjuntivo from './imperfecto-subjuntivo';
import estiloIndirectoOrdenes from './estilo-indirecto-ordenes';
import vozPasiva from './voz-pasiva';
import deseoSubjuntivo from './deseo-subjuntivo';
import conjetura from './conjetura';
import pedirEducadamente from './pedir-educadamente';
import pronombresObjeto from './pronombres-objeto';
import indefinidos from './indefinidos';
import seImpersonal from './se-impersonal';
import favoresPermisoAyuda from './favores-permiso-ayuda';
import adverbios from './adverbios';
import vocabAlimentos from './vocab-alimentos';
import vocabCuerpo from './vocab-cuerpo';
import vocabProfesiones from './vocab-profesiones';
import vocabDeportes from './vocab-deportes';
import vocabAlojamiento from './vocab-alojamiento';
import vocabTiempo from './vocab-tiempo';
import vocabRopa from './vocab-ropa';

/**
 * All available topics.
 * To add a new topic, create a new file in this folder and import it here.
 */
export const topics: Topic[] = [
	subjuntivo,
	presentPerfect,
	pasadosIrregulares,
	futuro,
	futuroEstiloIndirecto,
	estiloIndirectoPasados,
	condicionalSalud,
	imperativo,
	refranes,
	preposicionDe,
	porVsPara,
	preposicionesEsenciales,
	trampasPreposicionales,
	presente,
	preteritoImperfecto,
	duracionTiempo,
	preteritoPluscuamperfecto,
	gustarDolerCaer,
	pronombresRelativos,
	perifrasisVerbales,
	estarGerundio,
	oracionesFinales,
	comparativosSuperlativos,
	oracionesCuando,
	oracionesCondicionales,
	sentimientosOpiniones,
	imperfectoSubjuntivo,
	estiloIndirectoOrdenes,
	vozPasiva,
	deseoSubjuntivo,
	conjetura,
	pedirEducadamente,
	pronombresObjeto,
	indefinidos,
	seImpersonal,
	favoresPermisoAyuda,
	adverbios,
	vocabAlimentos,
	vocabCuerpo,
	vocabProfesiones,
	vocabDeportes,
	vocabAlojamiento,
	vocabTiempo,
	vocabRopa
];

export function getTopicById(id: string): Topic | undefined {
	return topics.find((t) => t.id === id);
}
