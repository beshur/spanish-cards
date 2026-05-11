import type { Topic } from '$lib/types';

const estiloIndirectoOrdenes: Topic = {
	id: 'estilo-indirecto-ordenes',
	name: 'Estilo Indirecto: Órdenes',
	description:
		'Reporting orders, requests, and advice — dijo/pidió/aconsejó que + (imperfecto de) subjuntivo.',
	icon: '📣',
	cards: [
		{
			sentence: 'Jefe: "No llegues tarde". Mi jefe siempre me dice que no ___ tarde. (llegar)',
			answer: 'llegue',
			translation: 'My boss always tells me not to arrive late.',
			verb: 'llegar',
			hint: 'presente → pres. subj.'
		},
		{
			sentence: 'Lucía: "Ven mañana a mi casa". Lucía me pidió que ___ a su casa. (ir)',
			answer: 'fuera',
			translation: 'Lucía asked me to go to her house.',
			verb: 'ir',
			hint: 'past introducer → imperf. subj.'
		},
		{
			sentence: 'Mamá: "Recoge la mesa". Mamá me ha pedido que ___ la mesa. (recoger)',
			answer: 'recoja',
			translation: 'Mom has asked me to clear the table.',
			verb: 'recoger',
			hint: 'pret. perfecto → pres. subj.'
		},
		{
			sentence: '"Coma más fruta". Me ha dicho que ___ más fruta. (comer)',
			answer: 'coma',
			translation: 'He told me to eat more fruit.',
			verb: 'comer',
			hint: 'pres. subj.'
		},
		{
			sentence: '"Léelo en voz alta". Me ha pedido que lo ___ en voz alta. (leer)',
			answer: 'lea',
			translation: 'He asked me to read it aloud.',
			verb: 'leer',
			hint: 'pres. subj.'
		},
		{
			sentence: '"No hagas ruido". Me dice siempre que no ___ ruido. (hacer)',
			answer: 'haga',
			translation: 'He always tells me not to make noise.',
			verb: 'hacer',
			hint: 'pres. subj.'
		},
		{
			sentence: '"Lleguemos a las siete". Nos han pedido que ___ a las siete. (llegar)',
			answer: 'lleguemos',
			translation: 'They’ve asked us to arrive at seven.',
			verb: 'llegar',
			hint: 'nosotros — pres. subj.'
		},
		{
			sentence: '"Terminemos pronto". Nos ha dicho que ___ pronto. (terminar)',
			answer: 'terminemos',
			translation: 'He told us to finish soon.',
			verb: 'terminar',
			hint: 'nosotros — pres. subj.'
		},
		{
			sentence: '"Haz la cena". Me ha pedido que ___ la cena. (hacer)',
			answer: 'haga',
			translation: 'He asked me to make dinner.',
			verb: 'hacer',
			hint: 'pres. subj.'
		},
		{
			sentence: '"Lavaos las manos". Les ha dicho a los niños que se ___ las manos. (lavar)',
			answer: 'laven',
			translation: 'He told the kids to wash their hands.',
			verb: 'lavarse',
			hint: 'ellos — pres. subj.'
		},
		{
			sentence: 'El médico me recomendó que ___ menos café. (tomar)',
			answer: 'tomara',
			translation: 'The doctor recommended that I drink less coffee.',
			verb: 'tomar',
			hint: 'past introducer → imperf. subj.'
		},
		{
			sentence: 'El profesor nos prohibió que ___ durante el examen. (hablar)',
			answer: 'habláramos',
			translation: 'The teacher forbade us to talk during the exam.',
			verb: 'hablar',
			hint: 'nosotros — imperf. subj.'
		}
	]
};

export default estiloIndirectoOrdenes;
