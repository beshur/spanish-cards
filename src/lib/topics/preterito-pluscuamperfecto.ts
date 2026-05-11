import type { Topic } from '$lib/types';

const preteritoPluscuamperfecto: Topic = {
	id: 'preterito-pluscuamperfecto',
	name: 'Pretérito Pluscuamperfecto',
	description:
		'Past actions completed before another past action — había + past participle.',
	icon: '🕰️',
	cards: [
		{
			sentence: 'Cuando llegué a casa, mi marido ya ___ la cena. (preparar)',
			answer: 'había preparado',
			translation: 'When I got home, my husband had already prepared dinner.',
			verb: 'preparar',
			hint: 'él form — había + participio'
		},
		{
			sentence: 'Clara lloraba porque su madre no le ___ un helado. (comprar)',
			answer: 'había comprado',
			translation: 'Clara was crying because her mother hadn’t bought her an ice cream.',
			verb: 'comprar',
			hint: 'ella form'
		},
		{
			sentence: 'Me encontré a Carlos y me dijo que ___ de trabajo. (cambiar)',
			answer: 'había cambiado',
			translation: 'I ran into Carlos and he told me he had changed jobs.',
			verb: 'cambiar',
			hint: 'él form'
		},
		{
			sentence: 'Cuando Franco murió, yo aún no ___. (nacer)',
			answer: 'había nacido',
			translation: 'When Franco died, I had not yet been born.',
			verb: 'nacer',
			hint: 'yo form'
		},
		{
			sentence: 'Cuando volvieron a casa, todavía no ___ el ascensor. (arreglar, ellos)',
			answer: 'habían arreglado',
			translation: 'When they came back home, they had not yet fixed the elevator.',
			verb: 'arreglar',
			hint: 'ellos form'
		},
		{
			sentence: 'La última vez que vi a Marisa, ___ muchísimo. (adelgazar)',
			answer: 'había adelgazado',
			translation: 'The last time I saw Marisa, she had lost a lot of weight.',
			verb: 'adelgazar',
			hint: 'ella form'
		},
		{
			sentence: 'Cuando Eva empezó la carrera, nosotros ya ___. (terminar)',
			answer: 'habíamos terminado',
			translation: 'When Eva started university, we had already finished.',
			verb: 'terminar',
			hint: 'nosotros form'
		},
		{
			sentence: 'A los 27 años, Leopoldo Muñoz ya ___ sus obras más importantes. (componer)',
			answer: 'había compuesto',
			translation: 'By 27, Leopoldo Muñoz had already composed his most important works.',
			verb: 'componer',
			hint: 'él — irregular participle'
		},
		{
			sentence: '¿___ (vosotros) antes un paisaje como este? (ver)',
			answer: 'Habíais visto',
			translation: 'Had you ever seen a landscape like this before?',
			verb: 'ver',
			hint: 'vosotros — irregular participle'
		},
		{
			sentence: 'No pudimos comprar el libro porque ya ___ la librería. (cerrar, ellos)',
			answer: 'habían cerrado',
			translation: 'We couldn’t buy the book because the bookshop had already closed.',
			verb: 'cerrar',
			hint: 'ellos form'
		},
		{
			sentence: 'Gonzalo se enfadó porque ellos ___ todas sus cosas desordenadas. (dejar)',
			answer: 'habían dejado',
			translation: 'Gonzalo got angry because they had left all his things in a mess.',
			verb: 'dejar',
			hint: 'ellos form'
		},
		{
			sentence: 'Cuando llamaste, yo ya ___ la película. (ver)',
			answer: 'había visto',
			translation: 'When you called, I had already seen the movie.',
			verb: 'ver',
			hint: 'yo — irregular participle'
		}
	]
};

export default preteritoPluscuamperfecto;
