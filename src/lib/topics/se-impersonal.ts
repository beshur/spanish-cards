import type { Topic } from '$lib/types';

const seImpersonal: Topic = {
	id: 'se-impersonal',
	name: 'Se Impersonal',
	description:
		'Se + verbo for rules, recipes and ads — verb agrees with the thing in 3rd singular/plural.',
	icon: '🪧',
	cards: [
		{
			sentence: 'En espacios cerrados no ___ puede fumar.',
			answer: 'se',
			translation: 'In enclosed spaces one cannot smoke.',
			verb: '—',
			hint: 'partícula impersonal'
		},
		{
			sentence: 'El Día de Reyes ___ hacen regalos a los niños.',
			answer: 'se',
			translation: 'On the Day of the Three Kings, presents are given to the children.',
			verb: '—',
			hint: 'partícula'
		},
		{
			sentence: 'Se ___ el pimiento en trozos grandes. (cortar)',
			answer: 'corta',
			translation: 'The pepper is cut in large pieces.',
			verb: 'cortar',
			hint: '3.ª sing. — el pimiento'
		},
		{
			sentence: 'Se ___ las verduras y se echan en la sartén. (cortar)',
			answer: 'cortan',
			translation: 'The vegetables are cut and thrown in the pan.',
			verb: 'cortar',
			hint: '3.ª pl. — las verduras'
		},
		{
			sentence: 'En español no ___ pronuncia la hache.',
			answer: 'se',
			translation: 'In Spanish the h is not pronounced.',
			verb: '—',
			hint: 'partícula'
		},
		{
			sentence: 'En ese hotel no ___ admiten animales.',
			answer: 'se',
			translation: 'In that hotel animals are not allowed.',
			verb: '—',
			hint: 'partícula'
		},
		{
			sentence: 'Se ___ piso de 120 metros cuadrados. (vender)',
			answer: 'vende',
			translation: 'A 120 m² flat for sale.',
			verb: 'vender',
			hint: '3.ª sing.'
		},
		{
			sentence: 'Se ___ clases particulares de física. (impartir)',
			answer: 'imparten',
			translation: 'Private physics lessons given.',
			verb: 'impartir',
			hint: '3.ª pl. — clases'
		},
		{
			sentence: 'Se ___ bicicletas por horas. (alquilar)',
			answer: 'alquilan',
			translation: 'Bicycles rented by the hour.',
			verb: 'alquilar',
			hint: '3.ª pl.'
		},
		{
			sentence: 'Se ___ habitación en el Colegio Mayor. (compartir)',
			answer: 'comparte',
			translation: 'Room to share at the Colegio Mayor.',
			verb: 'compartir',
			hint: '3.ª sing.'
		},
		{
			sentence: 'Se ___ niños los fines de semana. (cuidar)',
			answer: 'cuidan',
			translation: 'Childcare offered on weekends.',
			verb: 'cuidar',
			hint: '3.ª pl.'
		},
		{
			sentence: 'Se ___ y se ___ perros. (pasear / bañar)',
			answer: 'pasean y se bañan',
			translation: 'Dogs walked and bathed.',
			verb: '—',
			hint: '3.ª pl. — dos verbos'
		}
	]
};

export default seImpersonal;
