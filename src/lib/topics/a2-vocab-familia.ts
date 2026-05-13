import type { Topic } from '$lib/types';

const a2VocabFamilia: Topic = {
	id: 'a2-vocab-familia',
	name: 'La familia',
	description:
		'Family vocabulary at A2 — marido/mujer, padres, hijos, novio/a, hermanos, abuelos, tíos, primos, sobrinos, cuñados, suegros, nietos.',
	icon: '👨‍👩‍👧',
	cards: [
		{
			sentence: 'La madre de mi padre es mi ___. (mujer mayor)',
			answer: 'abuela',
			translation: 'My father’s mother is my grandmother.',
			verb: '—',
			hint: 'abuela = grandmother'
		},
		{
			sentence: 'El hijo de mi hermana es mi ___. (chico joven)',
			answer: 'sobrino',
			translation: 'My sister’s son is my nephew.',
			verb: '—',
			hint: 'sobrino = nephew'
		},
		{
			sentence: 'La hija de mi tía es mi ___. (chica)',
			answer: 'prima',
			translation: 'My aunt’s daughter is my cousin.',
			verb: '—',
			hint: 'prima = (female) cousin'
		},
		{
			sentence: 'Estoy casado: mi ___ se llama Laura. (esposa)',
			answer: 'mujer',
			translation: 'I am married: my wife’s name is Laura.',
			verb: '—',
			hint: 'mujer / esposa = wife'
		},
		{
			sentence: 'El padre de mi mujer es mi ___. (familia política)',
			answer: 'suegro',
			translation: 'My wife’s father is my father-in-law.',
			verb: '—',
			hint: 'suegro = father-in-law'
		},
		{
			sentence: 'El hermano de mi marido es mi ___. (familia política)',
			answer: 'cuñado',
			translation: 'My husband’s brother is my brother-in-law.',
			verb: '—',
			hint: 'cuñado = brother-in-law'
		},
		{
			sentence: 'Mi hija acaba de tener un bebé: ahora soy ___. (abuela en masc.)',
			answer: 'abuelo',
			translation: 'My daughter just had a baby — now I’m a grandfather.',
			verb: '—',
			hint: 'abuelo = grandfather'
		},
		{
			sentence: 'Los hijos de mis hijos son mis ___. (plural)',
			answer: 'nietos',
			translation: 'My children’s children are my grandchildren.',
			verb: '—',
			hint: 'nietos = grandchildren'
		},
		{
			sentence: 'Salgo con Pablo desde hace un año: es mi ___. (pareja, no casados)',
			answer: 'novio',
			translation: 'I have been going out with Pablo for a year — he is my boyfriend.',
			verb: '—',
			hint: 'novio = boyfriend'
		},
		{
			sentence: 'Mis ___ tienen tres hijos: mi hermano, mi hermana y yo. (mamá y papá)',
			answer: 'padres',
			translation: 'My parents have three children: my brother, my sister and me.',
			verb: '—',
			hint: 'padres = parents'
		},
		{
			sentence: 'La hermana de mi padre es mi ___. (mujer adulta)',
			answer: 'tía',
			translation: 'My father’s sister is my aunt.',
			verb: '—',
			hint: 'tía = aunt'
		},
		{
			sentence: 'Mi abuelo y mi abuela son mis ___. (par)',
			answer: 'abuelos',
			translation: 'My grandfather and grandmother are my grandparents.',
			verb: '—',
			hint: 'abuelos = grandparents'
		}
	]
};

export default a2VocabFamilia;
