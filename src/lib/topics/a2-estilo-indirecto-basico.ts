import type { Topic } from '$lib/types';

const a2EstiloIndirectoBasico: Topic = {
	id: 'a2-estilo-indirecto-basico',
	name: 'Estilo Indirecto (A2)',
	description:
		'Basic reported speech — when the introductory verb is in the past, the present becomes imperfect, ir → iba, and questions keep the same word order with an added "si" when there is no interrogative.',
	icon: '🗣️',
	cards: [
		{
			sentence: 'Carlos dijo: "Vivo en Cádiz." → Carlos dijo que ___ en Cádiz. (vivir)',
			answer: 'vivía',
			translation: 'Carlos said: "I live in Cádiz." → Carlos said that he lived in Cádiz.',
			verb: 'vivir',
			hint: 'presente → imperfecto (él/ella: vivía)'
		},
		{
			sentence: 'María dijo: "Voy a comer con mis padres." → María dijo que ___ a comer con sus padres. (ir)',
			answer: 'iba',
			translation: 'María said: "I am going to eat with my parents." → María said she was going to eat with her parents.',
			verb: 'ir',
			hint: 'ir presente → iba (imperfecto)'
		},
		{
			sentence: 'Mi abuelo decía: "Antes veía mejor." → Mi abuelo decía que antes ___ mejor. (ver)',
			answer: 'veía',
			translation: 'My grandpa used to say: "I used to see better." → My grandpa used to say that he used to see better.',
			verb: 'ver',
			hint: 'imperfecto → imperfecto (no cambia)'
		},
		{
			sentence: 'Juan preguntó: "¿Vas al cine?" → Juan preguntó que si ___ al cine. (ir, tú)',
			answer: 'iba',
			translation: 'Juan asked: "Are you going to the cinema?" → Juan asked if I was going to the cinema.',
			verb: 'ir',
			hint: 'pregunta sin pronombre interrogativo → "si" + imperfecto'
		},
		{
			sentence: 'Me preguntó: "¿Dónde estás?" → Me preguntó dónde ___. (estar, yo)',
			answer: 'estaba',
			translation: 'He asked me: "Where are you?" → He asked me where I was.',
			verb: 'estar',
			hint: 'pregunta con pronombre interrogativo → se mantiene, pres. → imperfecto'
		},
		{
			sentence: 'Mi madre dijo: "No me gusta esta casa." → Mi madre dijo que no le ___ esa casa. (gustar)',
			answer: 'gustaba',
			translation: "My mother said: 'I don't like this house.' → My mother said she didn't like that house.",
			verb: 'gustar',
			hint: 'gustar presente → gustaba (imperfecto)'
		},
		{
			sentence: 'Pedro dijo: "Tenemos una fiesta aquí." → Pedro dijo que ___ una fiesta allí. (tener)',
			answer: 'tenían',
			translation: 'Pedro said: "We have a party here." → Pedro said they had a party there.',
			verb: 'tener',
			hint: 'nosotros tenemos → ellos tenían; "aquí" → "allí"'
		},
		{
			sentence: 'Me preguntó: "¿Has leído El Quijote?" → Me preguntó si ___ leído El Quijote. (perfecto → pluscuamperfecto)',
			answer: 'había',
			translation: 'He asked me: "Have you read Don Quixote?" → He asked me if I had read Don Quixote.',
			verb: 'haber',
			hint: 'pretérito perfecto → pluscuamperfecto: "había leído"'
		},
		{
			sentence: 'Voy a ver a mi primo. → Dijo que ___ a ver a su primo. (ir)',
			answer: 'iba',
			translation: '"I am going to see my cousin." → He said he was going to see his cousin.',
			verb: 'ir',
			hint: 'ir presente → iba'
		},
		{
			sentence: '"Quiero visitar España." → Dijo que ___ visitar España. (querer)',
			answer: 'quería',
			translation: '"I want to visit Spain." → He said he wanted to visit Spain.',
			verb: 'querer',
			hint: 'querer presente → quería'
		},
		{
			sentence: '"¿Cuándo vienes?" → Me preguntó cuándo ___. (venir, yo)',
			answer: 'iba',
			translation: '"When are you coming?" → He asked me when I was coming. (lit. when I was going to come)',
			verb: 'ir',
			hint: 'futuro próximo informal → "iba a venir"; cuándo iba (a venir)'
		},
		{
			sentence: '"Tengo trabajo ahora." → Me preguntó si ___ trabajo entonces. (tener)',
			answer: 'tenía',
			translation: '"Do you have work now?" → He asked me if I had work then.',
			verb: 'tener',
			hint: 'tener presente → tenía; "ahora" → "entonces"'
		}
	]
};

export default a2EstiloIndirectoBasico;
