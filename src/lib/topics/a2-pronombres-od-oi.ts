import type { Topic } from '$lib/types';

const a2PronombresOdOi: Topic = {
	id: 'a2-pronombres-od-oi',
	name: 'Pronombres OD / OI (A2)',
	description:
		'Direct object (me, te, lo/la, nos, os, los/las) and indirect object (me, te, le, nos, os, les) pronouns — including the le → se shift when both pronouns appear together.',
	icon: '👉',
	cards: [
		{
			sentence: '¿Dónde están mis gafas? No ___ veo por ningún lado. (las gafas)',
			answer: 'las',
			translation: "Where are my glasses? I can't see them anywhere.",
			verb: '—',
			hint: 'OD plural feminine → las'
		},
		{
			sentence: 'He comprado el periódico esta mañana. ¿Quieres leer___? (el periódico)',
			answer: 'lo',
			translation: 'I bought the paper this morning. Do you want to read it?',
			verb: '—',
			hint: 'OD masc. sing. attached to infinitive → leerlo'
		},
		{
			sentence: 'A María ___ he dado un regalo precioso. (OI a ella)',
			answer: 'le',
			translation: 'I gave a beautiful gift to María.',
			verb: '—',
			hint: 'OI 3rd person singular → le'
		},
		{
			sentence: 'Le he comprado un libro a mi hermano. Mañana ___ doy. (los dos pronombres juntos)',
			answer: 'se lo',
			translation: 'I bought my brother a book. Tomorrow I’ll give it to him.',
			verb: '—',
			hint: 'OI le + OD lo → le se convierte en "se" → "se lo"'
		},
		{
			sentence: 'Si ves a tu hermana, dile que ayer ___ llamé por teléfono. (OD a ella)',
			answer: 'la',
			translation: 'If you see your sister, tell her I called her on the phone yesterday.',
			verb: '—',
			hint: 'OD fem. sing. → la'
		},
		{
			sentence: 'Yo no veo películas de terror, pero a mis hijos ___ encantan. (OI a ellos)',
			answer: 'les',
			translation: "I don't watch horror films, but my kids love them.",
			verb: '—',
			hint: 'OI plural → les'
		},
		{
			sentence: 'Quiero mucho a mis hijos, pero nunca ___ digo. (decir → "it to them")',
			answer: 'se lo',
			translation: 'I love my kids a lot, but I never say it to them.',
			verb: '—',
			hint: 'OI les → se + OD lo → "se lo"'
		},
		{
			sentence: 'El profesor ___ ha pedido un trabajo para subir nota. (OI a mí)',
			answer: 'me',
			translation: 'The teacher asked me for a paper to bring my grade up.',
			verb: '—',
			hint: 'OI yo → me'
		},
		{
			sentence: 'Yo el dinero ___ guardo en el banco. (el dinero)',
			answer: 'lo',
			translation: 'I keep the money in the bank.',
			verb: '—',
			hint: 'OD masc. sing. → lo (before verb)'
		},
		{
			sentence: '¿Le has mandado los paquetes a Ana? Sí, ___ mandé hace unos días. (a ella + los paquetes)',
			answer: 'se los',
			translation: 'Have you sent the parcels to Ana? Yes, I sent them to her a few days ago.',
			verb: '—',
			hint: 'le → se + los'
		},
		{
			sentence: '¿Te has puesto la camisa nueva? Sí, ___ puse este domingo. (a mí + la camisa)',
			answer: 'me la',
			translation: 'Did you wear your new shirt? Yes, I wore it this Sunday.',
			verb: '—',
			hint: 'reflexivo me + OD fem. → "me la"'
		},
		{
			sentence: '¿Has comprado el periódico? Sí, ___ he comprado esta mañana. (el periódico)',
			answer: 'lo',
			translation: 'Did you buy the paper? Yes, I bought it this morning.',
			verb: '—',
			hint: 'OD masc. sing. before verb → lo'
		},
		{
			sentence: '¿Has hecho los ejercicios? Sí, ___ he hecho esta tarde. (los ejercicios)',
			answer: 'los',
			translation: 'Did you do the exercises? Yes, I did them this afternoon.',
			verb: '—',
			hint: 'OD masc. plural → los'
		},
		{
			sentence: '¿Le has traído el libro a tu hermana? Sí, ___ he traído. (a ella + el libro)',
			answer: 'se lo',
			translation: 'Did you bring your sister the book? Yes, I brought it to her.',
			verb: '—',
			hint: 'le → se + lo'
		},
		{
			sentence: '¿Les has devuelto el dinero a tus amigos? Sí, ___ devolví ayer. (a ellos + el dinero)',
			answer: 'se lo',
			translation: 'Did you return the money to your friends? Yes, I returned it to them yesterday.',
			verb: '—',
			hint: 'les → se + lo'
		},
		{
			sentence: 'A nosotros la profesora ___ ha explicado la regla muchas veces. (OI a nosotros)',
			answer: 'nos',
			translation: 'The teacher has explained the rule to us many times.',
			verb: '—',
			hint: 'OI nosotros → nos'
		},
		{
			sentence: 'A ti ___ regalaron una bicicleta para tu cumpleaños, ¿no? (OI a ti)',
			answer: 'te',
			translation: 'They gave you a bike for your birthday, right?',
			verb: '—',
			hint: 'OI tú → te'
		}
	]
};

export default a2PronombresOdOi;
