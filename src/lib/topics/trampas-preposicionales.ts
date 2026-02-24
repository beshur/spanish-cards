import type { Topic } from '$lib/types';

const trampasPreposicionales: Topic = {
	id: 'trampas-preposicionales',
	name: 'Trampas Preposicionales',
	description:
		'Fixed verb + preposition pairs that don\'t translate literally from English — soñar CON, enamorarse DE, pensar EN, and more.',
	icon: '🪤',
	cards: [
		{
			sentence:
				'Sueño ___ viajar a Japón algún día y ver los cerezos en flor. (soñar + ?)',
			answer: 'con',
			translation:
				'I dream about travelling to Japan someday and seeing the cherry blossoms.',
			verb: 'soñar con',
			hint: 'Soñar CON (not "de") — to dream about'
		},
		{
			sentence:
				'Se enamoró ___ su colega el primer día de trabajo en la empresa. (enamorarse + ?)',
			answer: 'de',
			translation:
				'She fell in love with her colleague on her first day at the company.',
			verb: 'enamorarse de',
			hint: 'Enamorarse DE (not "con") — to fall in love with'
		},
		{
			sentence:
				'Todo depende ___ la situación económica del país en los próximos meses. (depender + ?)',
			answer: 'de',
			translation:
				"Everything depends on the country's economic situation over the coming months.",
			verb: 'depender de',
			hint: 'Depender DE (not "en") — to depend on'
		},
		{
			sentence:
				'No puedo dejar de pensar ___ las vacaciones de verano en la costa. (pensar + ?)',
			answer: 'en',
			translation:
				"I can't stop thinking about the summer holidays on the coast.",
			verb: 'pensar en',
			hint: 'Pensar EN (not "de" or "sobre") — to think about'
		},
		{
			sentence:
				'Me olvidé ___ comprar el pan de camino a casa y tuve que volver a salir. (olvidarse + ?)',
			answer: 'de',
			translation:
				'I forgot to buy bread on my way home and had to go out again.',
			verb: 'olvidarse de',
			hint: 'Olvidarse DE — to forget to / to forget about'
		},
		{
			sentence:
				'Insistió ___ pagar la cena entera aunque éramos seis personas en la mesa. (insistir + ?)',
			answer: 'en',
			translation:
				'He insisted on paying for the entire dinner even though there were six of us at the table.',
			verb: 'insistir en',
			hint: 'Insistir EN (not "de") — to insist on'
		},
		{
			sentence:
				'Confío ___ ti para que guardes este secreto y no se lo cuentes a nadie. (confiar + ?)',
			answer: 'en',
			translation:
				"I trust you to keep this secret and not tell anyone.",
			verb: 'confiar en',
			hint: 'Confiar EN (not "de" or "a") — to trust in'
		},
		{
			sentence:
				'Se dio cuenta ___ que había perdido la cartera al llegar a casa después del concierto. (darse cuenta + ?)',
			answer: 'de',
			translation:
				'He realised he had lost his wallet when he got home after the concert.',
			verb: 'darse cuenta de',
			hint: 'Darse cuenta DE (not "en") — to realise'
		},
		{
			sentence:
				'Quedamos ___ vernos el sábado a las cinco en la puerta del museo. (quedar + ?)',
			answer: 'en',
			translation:
				'We agreed to meet on Saturday at five at the museum entrance.',
			verb: 'quedar en',
			hint: 'Quedar EN — to agree on (a plan or arrangement)'
		},
		{
			sentence:
				'Acabo ___ terminar un curso de fotografía que me encantó de principio a fin. (acabar + ?)',
			answer: 'de',
			translation:
				"I've just finished a photography course that I loved from start to finish.",
			verb: 'acabar de',
			hint: 'Acabar DE — to have just (done something)'
		},
		{
			sentence:
				'Mi hermana se dedica ___ la enseñanza de idiomas en una academia privada del centro. (dedicarse + ?)',
			answer: 'a',
			translation:
				'My sister is dedicated to language teaching at a private academy in the centre.',
			verb: 'dedicarse a',
			hint: 'Dedicarse A (not "de" or "en") — to dedicate oneself to'
		},
		{
			sentence:
				'Hay que atreverse ___ probar cosas nuevas aunque den un poco de miedo al principio. (atreverse + ?)',
			answer: 'a',
			translation:
				'You have to dare to try new things even if they are a little scary at first.',
			verb: 'atreverse a',
			hint: 'Atreverse A (not "de") — to dare to'
		}
	]
};

export default trampasPreposicionales;
