import type { Topic } from '$lib/types';

const a2VocabCotidiano: Topic = {
	id: 'a2-vocab-cotidiano',
	name: 'Actividades Cotidianas',
	description:
		'Vocabulary for daily routine — reflexive verbs (despertarse, ducharse, peinarse…) and common errand verbs (hacer la compra, planchar la ropa).',
	icon: '☀️',
	cards: [
		{
			sentence: 'Todos los días ___ a las siete de la mañana. (verbo reflexivo)',
			answer: 'me despierto',
			translation: 'I wake up at seven every morning.',
			verb: 'despertarse',
			hint: 'reflexivo "despertarse" — yo: me despierto'
		},
		{
			sentence: 'Después de despertarme, ___ rápido y desayuno. (verbo reflexivo)',
			answer: 'me levanto',
			translation: 'After waking up, I get up quickly and have breakfast.',
			verb: 'levantarse',
			hint: 'reflexivo "levantarse" — yo: me levanto'
		},
		{
			sentence: 'Mi marido ___ todas las mañanas antes de desayunar. (afeitarse, él)',
			answer: 'se afeita',
			translation: 'My husband shaves every morning before breakfast.',
			verb: 'afeitarse',
			hint: 'reflexivo él: se afeita'
		},
		{
			sentence: 'Mis hijos no ___ por la mañana porque van con el pelo mojado al cole. (peinarse, ellos)',
			answer: 'se peinan',
			translation: "My kids don't comb their hair in the morning because they go to school with wet hair.",
			verb: 'peinarse',
			hint: 'reflexivo ellos: se peinan'
		},
		{
			sentence: 'Los sábados nosotros ___ la compra en el mercado. (acción cotidiana)',
			answer: 'hacemos',
			translation: 'On Saturdays we do the grocery shopping at the market.',
			verb: 'hacer',
			hint: '"hacer la compra"'
		},
		{
			sentence: 'No me gusta ___ la ropa, prefiero llevarla a la tintorería. (verbo doméstico)',
			answer: 'planchar',
			translation: "I don't like ironing clothes, I prefer to take them to the dry cleaner.",
			verb: 'planchar',
			hint: 'planchar la ropa = to iron'
		},
		{
			sentence: 'Los lunes por la tarde tenemos una ___ de equipo en el trabajo. (sustantivo)',
			answer: 'reunión',
			translation: 'On Monday afternoons we have a team meeting at work.',
			verb: '—',
			hint: 'tener una reunión = to have a meeting'
		},
		{
			sentence: 'Antes de acostarme me gusta ___ un poco de novela. (acción)',
			answer: 'leer',
			translation: 'Before going to bed I like to read a bit of a novel.',
			verb: 'leer',
			hint: 'leer (infinitivo)'
		},
		{
			sentence: 'Después de cenar, mis hijos ___ los dientes y se acuestan. (verbo reflexivo)',
			answer: 'se cepillan',
			translation: 'After dinner, my kids brush their teeth and go to bed.',
			verb: 'cepillarse',
			hint: 'cepillarse los dientes → ellos: se cepillan'
		},
		{
			sentence: 'Normalmente ___ a la cama sobre las once de la noche. (verbo reflexivo)',
			answer: 'me acuesto',
			translation: 'I usually go to bed around eleven at night.',
			verb: 'acostarse',
			hint: 'acostarse irregular (o → ue): me acuesto'
		},
		{
			sentence: 'Tengo que ___ a los niños al colegio antes de ir a la oficina. (verbo común)',
			answer: 'llevar',
			translation: 'I have to take the kids to school before going to the office.',
			verb: 'llevar',
			hint: 'llevar a alguien a algún sitio'
		},
		{
			sentence: 'Por la tarde mis hijos ___ la tele un rato. (acción)',
			answer: 'ven',
			translation: 'In the afternoon my kids watch TV for a while.',
			verb: 'ver',
			hint: 'ver la tele → ellos: ven'
		},
		{
			sentence: 'Mi padre ___ el periódico todos los domingos por la mañana. (acción habitual)',
			answer: 'lee',
			translation: 'My father reads the paper every Sunday morning.',
			verb: 'leer',
			hint: 'leer el periódico → él: lee'
		},
		{
			sentence: 'Los domingos ___ una comida especial para toda la familia. (preparar comida)',
			answer: 'hacemos',
			translation: 'On Sundays we make a special meal for the whole family.',
			verb: 'hacer',
			hint: 'hacer la comida = to cook the meal'
		},
		{
			sentence: 'Me ducho con agua fría porque me ___ mucho. (sentir bien — gustar)',
			answer: 'gusta',
			translation: 'I shower with cold water because I like it a lot.',
			verb: 'gustar',
			hint: 'gustar 3ra persona (eso): gusta'
		}
	]
};

export default a2VocabCotidiano;
