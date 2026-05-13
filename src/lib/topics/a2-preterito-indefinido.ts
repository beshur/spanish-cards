import type { Topic } from '$lib/types';

const a2PreteritoIndefinido: Topic = {
	id: 'a2-preterito-indefinido',
	name: 'Pretérito Indefinido (A2)',
	description:
		'Past simple tense — completed actions at a specific point in the past. Regular -ar/-er/-ir endings plus the most common irregulars (estar, tener, hacer, ir/ser, poder, venir).',
	icon: '⏪',
	cards: [
		// Regular -ar
		{
			sentence: 'Ayer ___ ocho horas en la oficina. (trabajar, yo)',
			answer: 'trabajé',
			translation: 'Yesterday I worked eight hours at the office.',
			verb: 'trabajar',
			hint: '-ar yo: -é'
		},
		{
			sentence: 'El sábado ___ con tus amigos hasta tarde. (cenar, tú)',
			answer: 'cenaste',
			translation: 'On Saturday you had dinner with your friends until late.',
			verb: 'cenar',
			hint: '-ar tú: -aste'
		},
		{
			sentence: 'María ___ el flamenco el verano pasado. (bailar)',
			answer: 'bailó',
			translation: 'María danced flamenco last summer.',
			verb: 'bailar',
			hint: '-ar él/ella: -ó'
		},
		{
			sentence: 'Nosotros ___ a Roma en abril. (viajar)',
			answer: 'viajamos',
			translation: 'We travelled to Rome in April.',
			verb: 'viajar',
			hint: '-ar nosotros: -amos (same as presente — context tells you)'
		},
		{
			sentence: 'Vosotros ___ la fiesta el fin de semana pasado. (organizar)',
			answer: 'organizasteis',
			translation: 'You (pl.) organised the party last weekend.',
			verb: 'organizar',
			hint: '-ar vosotros: -asteis'
		},
		{
			sentence: 'Mis padres ___ una casa en Madrid en 1990. (comprar)',
			answer: 'compraron',
			translation: 'My parents bought a house in Madrid in 1990.',
			verb: 'comprar',
			hint: '-ar ellos: -aron'
		},
		// Regular -er
		{
			sentence: 'Ayer ___ una paella riquísima. (comer, yo)',
			answer: 'comí',
			translation: 'Yesterday I ate a delicious paella.',
			verb: 'comer',
			hint: '-er yo: -í'
		},
		{
			sentence: '¿___ el correo que te mandé? (recibir, tú)',
			answer: 'recibiste',
			translation: 'Did you get the email I sent you?',
			verb: 'recibir',
			hint: '-ir tú: -iste'
		},
		{
			sentence: 'El año pasado mi hermano ___ en Alemania. (vivir)',
			answer: 'vivió',
			translation: 'Last year my brother lived in Germany.',
			verb: 'vivir',
			hint: '-ir él/ella: -ió'
		},
		{
			sentence: 'Después de la película ___ del cine y nos fuimos a casa. (salir, nosotros)',
			answer: 'salimos',
			translation: 'After the film we left the cinema and went home.',
			verb: 'salir',
			hint: '-ir nosotros: -imos'
		},
		{
			sentence: 'Los niños ___ todas las galletas en cinco minutos. (comer)',
			answer: 'comieron',
			translation: 'The kids ate all the cookies in five minutes.',
			verb: 'comer',
			hint: '-er ellos: -ieron'
		},
		// Irregular: ser/ir (same form)
		{
			sentence: 'El domingo ___ al cine con Elena. (ir, yo)',
			answer: 'fui',
			translation: 'On Sunday I went to the cinema with Elena.',
			verb: 'ir',
			hint: 'ir = ser in indefinido — yo: fui'
		},
		{
			sentence: 'La fiesta ___ un éxito total. (ser)',
			answer: 'fue',
			translation: 'The party was a total success.',
			verb: 'ser',
			hint: 'ser = ir in indefinido — él/ella: fue'
		},
		{
			sentence: 'El verano pasado mis hermanos y yo ___ a Grecia. (ir)',
			answer: 'fuimos',
			translation: 'Last summer my siblings and I went to Greece.',
			verb: 'ir',
			hint: 'nosotros: fuimos'
		},
		// Irregular: estar
		{
			sentence: 'Anoche ___ en casa de Pepe hasta las siete. (estar, nosotros)',
			answer: 'estuvimos',
			translation: 'Last night we were at Pepe’s house until seven.',
			verb: 'estar',
			hint: 'stem: estuv- + endings -e -iste -o -imos -isteis -ieron'
		},
		{
			sentence: 'Yo ___ enfermo toda la semana pasada. (estar)',
			answer: 'estuve',
			translation: 'I was sick all of last week.',
			verb: 'estar',
			hint: 'yo: estuve (no tilde)'
		},
		{
			sentence: '¿Dónde ___ ayer por la tarde? (estar, tú)',
			answer: 'estuviste',
			translation: 'Where were you yesterday afternoon?',
			verb: 'estar',
			hint: 'tú: estuviste'
		},
		// Irregular: tener
		{
			sentence: 'El lunes ___ que ir al médico. (tener, yo)',
			answer: 'tuve',
			translation: 'On Monday I had to go to the doctor.',
			verb: 'tener',
			hint: 'stem: tuv- — yo: tuve'
		},
		{
			sentence: 'En verano Mercedes ___ un accidente. (tener)',
			answer: 'tuvo',
			translation: 'In summer Mercedes had an accident.',
			verb: 'tener',
			hint: 'él/ella: tuvo'
		},
		{
			sentence: 'Mis abuelos ___ cuatro hijos. (tener)',
			answer: 'tuvieron',
			translation: 'My grandparents had four kids.',
			verb: 'tener',
			hint: 'ellos: tuvieron'
		},
		// Irregular: hacer
		{
			sentence: 'Hace tres años Marilú ___ un viaje a Argentina. (hacer)',
			answer: 'hizo',
			translation: 'Three years ago Marilú took a trip to Argentina.',
			verb: 'hacer',
			hint: 'stem: hic- → hizo (z before o, soft sound)'
		},
		{
			sentence: 'El sábado ___ una tarta de chocolate. (hacer, yo)',
			answer: 'hice',
			translation: 'On Saturday I made a chocolate cake.',
			verb: 'hacer',
			hint: 'yo: hice'
		},
		{
			sentence: '¿Qué ___ el fin de semana? (hacer, tú)',
			answer: 'hiciste',
			translation: 'What did you do over the weekend?',
			verb: 'hacer',
			hint: 'tú: hiciste'
		},
		// Irregular: poder, venir, poner, decir
		{
			sentence: 'No ___ ir a la fiesta porque tenía fiebre. (poder, yo)',
			answer: 'pude',
			translation: "I couldn't go to the party because I had a fever.",
			verb: 'poder',
			hint: 'stem: pud- — yo: pude'
		},
		{
			sentence: 'Mis primos ___ a visitarnos en Navidad. (venir)',
			answer: 'vinieron',
			translation: 'My cousins came to visit us at Christmas.',
			verb: 'venir',
			hint: 'stem: vin- — ellos: vinieron'
		},
		{
			sentence: 'Juan ___ los libros en la estantería. (poner)',
			answer: 'puso',
			translation: 'Juan put the books on the shelf.',
			verb: 'poner',
			hint: 'stem: pus- — él: puso'
		},
		{
			sentence: 'El niño ___ una mentira a sus padres. (decir)',
			answer: 'dijo',
			translation: 'The kid told a lie to his parents.',
			verb: 'decir',
			hint: 'stem: dij- → dijo (no -ió)'
		},
		{
			sentence: 'Los testigos ___ la verdad al juez. (decir)',
			answer: 'dijeron',
			translation: 'The witnesses told the truth to the judge.',
			verb: 'decir',
			hint: 'j-stem ellos: -eron (not -ieron) → dijeron'
		},
		// Time markers
		{
			sentence: 'En 2012 ___ mi hijo mayor. (nacer)',
			answer: 'nació',
			translation: 'In 2012 my older son was born.',
			verb: 'nacer',
			hint: 'specific year → indefinido'
		},
		{
			sentence: 'El año pasado ___ unas vacaciones en Egipto. (pasar, nosotros)',
			answer: 'pasamos',
			translation: 'Last year we spent a holiday in Egypt.',
			verb: 'pasar',
			hint: '"el año pasado" → indefinido'
		}
	]
};

export default a2PreteritoIndefinido;
