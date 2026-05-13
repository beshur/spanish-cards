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

// A2 exam-prep topics
import a2PreteritoIndefinido from './a2-preterito-indefinido';
import a2SerVsEstar from './a2-ser-vs-estar';
import a2PronombresOdOi from './a2-pronombres-od-oi';
import a2HayQueSePuede from './a2-hay-que-se-puede';
import a2MeGustaria from './a2-me-gustaria';
import a2NumerosFechas from './a2-numeros-fechas';
import a2EstiloIndirectoBasico from './a2-estilo-indirecto-basico';
import a2PretIndefVsPerfecto from './a2-pret-indef-vs-perfecto';
import a2ImperfectoVsIndefinido from './a2-imperfecto-vs-indefinido';
import a2EstadoDeAnimo from './a2-estado-de-animo';
import a2VocabCotidiano from './a2-vocab-cotidiano';
import a2VocabCasa from './a2-vocab-casa';
import a2VocabCaracter from './a2-vocab-caracter';
import a2VocabCocina from './a2-vocab-cocina';
import a2CondicionalesReales from './a2-condicionales-reales';
import a2VocabBiografia from './a2-vocab-biografia';
import a2PronombresInterrogativos from './a2-pronombres-interrogativos';
import a2VocabFamilia from './a2-vocab-familia';
import a2VocabPeliculas from './a2-vocab-peliculas';
import a2VocabTransporte from './a2-vocab-transporte';
import a2VocabEstadoCosas from './a2-vocab-estado-cosas';
import a2VocabTrabajo from './a2-vocab-trabajo';
import a2VocabMundo from './a2-vocab-mundo';
import a2VocabObjetos from './a2-vocab-objetos';

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
	vocabRopa,
	a2PreteritoIndefinido,
	a2SerVsEstar,
	a2PronombresOdOi,
	a2HayQueSePuede,
	a2MeGustaria,
	a2NumerosFechas,
	a2EstiloIndirectoBasico,
	a2PretIndefVsPerfecto,
	a2ImperfectoVsIndefinido,
	a2EstadoDeAnimo,
	a2VocabCotidiano,
	a2VocabCasa,
	a2VocabCaracter,
	a2VocabCocina,
	a2CondicionalesReales,
	a2VocabBiografia,
	a2PronombresInterrogativos,
	a2VocabFamilia,
	a2VocabPeliculas,
	a2VocabTransporte,
	a2VocabEstadoCosas,
	a2VocabTrabajo,
	a2VocabMundo,
	a2VocabObjetos
];

export function getTopicById(id: string): Topic | undefined {
	return topics.find((t) => t.id === id);
}
