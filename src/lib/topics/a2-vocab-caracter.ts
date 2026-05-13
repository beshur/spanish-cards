import type { Topic } from '$lib/types';

const a2VocabCaracter: Topic = {
	id: 'a2-vocab-caracter',
	name: 'Adjetivos de Carácter',
	description:
		'Common adjectives for personality and character — amable, simpático, antipático, tranquilo, nervioso, divertido, aburrido, egoísta, cariñoso…',
	icon: '🧑‍🎨',
	cards: [
		{
			sentence: 'Pedro siempre saluda a todo el mundo y ayuda en lo que puede. Es muy ___. (lo opuesto de "antipático")',
			answer: 'amable',
			translation: 'Pedro always greets everyone and helps as much as he can. He is very kind.',
			verb: '—',
			hint: 'amable = kind'
		},
		{
			sentence: 'Mi vecino nunca habla ni saluda, es bastante ___. (negativo)',
			answer: 'antipático',
			translation: "My neighbour never speaks or says hello, he is quite unfriendly.",
			verb: '—',
			hint: 'antipático = unfriendly'
		},
		{
			sentence: 'María es muy ___, abraza y besa mucho a sus hijos. (positivo)',
			answer: 'cariñosa',
			translation: 'María is very affectionate, she hugs and kisses her kids a lot.',
			verb: '—',
			hint: 'cariñoso/a = affectionate'
		},
		{
			sentence: 'Juan solo piensa en sí mismo, es un poco ___. (negativo)',
			answer: 'egoísta',
			translation: 'Juan only thinks of himself, he is a bit selfish.',
			verb: '—',
			hint: 'egoísta = selfish (mismo en masculino y femenino)'
		},
		{
			sentence: 'Mi padre es una persona muy ___, nunca grita ni se enfada. (calm)',
			answer: 'tranquila',
			translation: 'My father is a very calm person, he never yells or gets angry.',
			verb: '—',
			hint: 'tranquilo/a — concuerda con "persona" (fem.)'
		},
		{
			sentence: 'Esa actriz cuenta muchos chistes en las entrevistas, es muy ___. (positivo)',
			answer: 'divertida',
			translation: 'That actress tells many jokes in interviews, she is really fun.',
			verb: '—',
			hint: 'divertido/a = fun'
		},
		{
			sentence: 'Las clases de historia son muy ___, nadie quiere asistir. (negativo de "divertido")',
			answer: 'aburridas',
			translation: 'The history classes are very boring, nobody wants to attend.',
			verb: '—',
			hint: 'aburrido/a = boring (con clases → aburridas)'
		},
		{
			sentence: 'Carmen es ___, siempre tiene una sonrisa. (positivo, sinónimo de "contenta")',
			answer: 'alegre',
			translation: 'Carmen is cheerful, she always has a smile.',
			verb: '—',
			hint: 'alegre = cheerful'
		},
		{
			sentence: 'Mi profesor de matemáticas es muy ___, todos sus alumnos lo quieren. (positivo)',
			answer: 'simpático',
			translation: 'My maths teacher is very nice, all his students love him.',
			verb: '—',
			hint: 'simpático = nice/friendly'
		},
		{
			sentence: 'Antes de un examen mi hermana se pone muy ___, no puede dormir. (negativo, sin tranquilidad)',
			answer: 'nerviosa',
			translation: 'Before an exam my sister gets very nervous, she can’t sleep.',
			verb: '—',
			hint: 'nervioso/a = nervous'
		},
		{
			sentence: 'Ese señor pesa más de 120 kilos, es bastante ___. (físico, también "molesto" en otro sentido)',
			answer: 'pesado',
			translation: 'That gentleman weighs more than 120 kilos, he is quite heavy.',
			verb: '—',
			hint: 'pesado/a — físico o también "molesto"'
		},
		{
			sentence: 'Mi sobrino siempre saluda a todos los invitados, es muy ___. (educado)',
			answer: 'educado',
			translation: 'My nephew always greets all the guests, he is very polite.',
			verb: '—',
			hint: 'educado = polite'
		},
		{
			sentence: 'Carlos no acepta opiniones diferentes, es un poco ___. (cerrado de mente)',
			answer: 'cerrado',
			translation: 'Carlos does not accept different opinions, he is a bit close-minded.',
			verb: '—',
			hint: 'cerrado = close-minded'
		}
	]
};

export default a2VocabCaracter;
