import type { Topic } from '$lib/types';

const a2VocabBiografia: Topic = {
	id: 'a2-vocab-biografia',
	name: 'Verbos para Biografías',
	description:
		'Verbs and vocab to talk about someone’s life — nacer, estudiar, casarse, divorciarse, trasladarse, morirse — combined with pretérito indefinido.',
	icon: '📜',
	cards: [
		{
			sentence: 'Pablo Picasso ___ en Málaga en 1881. (verbo: born)',
			answer: 'nació',
			translation: 'Pablo Picasso was born in Málaga in 1881.',
			verb: 'nacer',
			hint: 'nacer indefinido él: nació'
		},
		{
			sentence: 'A los doce años se ___ con su familia a Barcelona. (verbo: moved)',
			answer: 'trasladó',
			translation: 'At twelve, he moved to Barcelona with his family.',
			verb: 'trasladarse',
			hint: 'trasladarse indefinido él: se trasladó'
		},
		{
			sentence: 'Frida Kahlo ___ Bellas Artes en la escuela preparatoria. (verbo: studied)',
			answer: 'estudió',
			translation: 'Frida Kahlo studied Fine Arts at the preparatory school.',
			verb: 'estudiar',
			hint: 'estudiar indefinido él/ella: estudió'
		},
		{
			sentence: 'Frida ___ con Diego Rivera en 1929. (verbo: got married)',
			answer: 'se casó',
			translation: 'Frida married Diego Rivera in 1929.',
			verb: 'casarse',
			hint: 'casarse indefinido él/ella: se casó'
		},
		{
			sentence: 'Diego y Frida ___ en 1939 pero volvieron a casarse al año siguiente. (verbo: got divorced)',
			answer: 'se divorciaron',
			translation: 'Diego and Frida divorced in 1939 but remarried the following year.',
			verb: 'divorciarse',
			hint: 'divorciarse indefinido ellos: se divorciaron'
		},
		{
			sentence: 'Cervantes ___ en 1616, el mismo año que Shakespeare. (verbo: died)',
			answer: 'murió',
			translation: 'Cervantes died in 1616, the same year as Shakespeare.',
			verb: 'morir',
			hint: 'morir indefinido él: murió (o → u)'
		},
		{
			sentence: 'Mi abuelo ___ tres hijos: dos niñas y un niño. (verbo: had)',
			answer: 'tuvo',
			translation: 'My grandfather had three kids: two girls and a boy.',
			verb: 'tener',
			hint: 'tener indefinido él: tuvo'
		},
		{
			sentence: 'En 2010 Vargas Llosa ___ el Premio Nobel de Literatura. (verbo: won)',
			answer: 'ganó',
			translation: 'In 2010 Vargas Llosa won the Nobel Prize in Literature.',
			verb: 'ganar',
			hint: 'ganar indefinido él: ganó'
		},
		{
			sentence: 'Penélope Cruz ___ su primer Óscar en 2009. (verbo: received)',
			answer: 'recibió',
			translation: 'Penélope Cruz received her first Oscar in 2009.',
			verb: 'recibir',
			hint: 'recibir indefinido ella: recibió'
		},
		{
			sentence: 'A los veinte años ___ a trabajar como periodista. (verbo: started)',
			answer: 'empezó',
			translation: 'At twenty he started working as a journalist.',
			verb: 'empezar',
			hint: 'empezar indefinido él: empezó'
		},
		{
			sentence: 'En 1985 ___ a su mujer en una fiesta de la facultad. (verbo: met)',
			answer: 'conoció',
			translation: 'In 1985 he met his wife at a faculty party.',
			verb: 'conocer',
			hint: 'conocer indefinido él: conoció'
		},
		{
			sentence: 'Antes de morir, ___ varias películas históricas como director. (verbo: acted in / starred in)',
			answer: 'actuó',
			translation: 'Before dying, he starred in several historical films as a director.',
			verb: 'actuar',
			hint: 'actuar indefinido él: actuó'
		}
	]
};

export default a2VocabBiografia;
