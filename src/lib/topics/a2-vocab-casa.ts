import type { Topic } from '$lib/types';

const a2VocabCasa: Topic = {
	id: 'a2-vocab-casa',
	name: 'La Casa y los Muebles',
	description:
		'Rooms and furniture — salón, dormitorio, cuarto de baño, cocina, plus the most common pieces of furniture you find in each.',
	icon: '🛋️',
	cards: [
		{
			sentence: 'En el salón tenemos un sofá grande y una ___ de libros. (mueble)',
			answer: 'librería',
			translation: 'In the living room we have a big sofa and a bookshelf.',
			verb: '—',
			hint: 'librería = bookshelf'
		},
		{
			sentence: 'En el dormitorio principal hay una ___ de matrimonio. (mueble)',
			answer: 'cama',
			translation: 'In the master bedroom there is a double bed.',
			verb: '—',
			hint: 'cama = bed'
		},
		{
			sentence: 'Mis hijos guardan su ropa en el ___. (mueble del dormitorio)',
			answer: 'armario',
			translation: 'My kids keep their clothes in the wardrobe.',
			verb: '—',
			hint: 'armario = wardrobe'
		},
		{
			sentence: 'En el cuarto de baño hay un lavabo y una ___. (mueble del baño)',
			answer: 'ducha',
			translation: 'In the bathroom there is a sink and a shower.',
			verb: '—',
			hint: 'ducha = shower'
		},
		{
			sentence: 'No tenemos bañera, solo ___. (instalación)',
			answer: 'ducha',
			translation: "We don't have a bathtub, just a shower.",
			verb: '—',
			hint: 'ducha vs bañera'
		},
		{
			sentence: 'Para guardar la comida fría tenemos un ___ grande en la cocina. (electrodoméstico)',
			answer: 'frigorífico',
			translation: 'To store cold food we have a big fridge in the kitchen.',
			verb: '—',
			hint: 'frigorífico (también: nevera)'
		},
		{
			sentence: 'Después de comer ponemos los platos sucios en el ___. (electrodoméstico)',
			answer: 'lavavajillas',
			translation: 'After eating we put the dirty dishes in the dishwasher.',
			verb: '—',
			hint: 'lavavajillas = dishwasher'
		},
		{
			sentence: 'En la cocina tenemos un ___ de gas con cuatro fuegos. (aparato)',
			answer: 'horno',
			translation: 'In the kitchen we have a gas oven with four burners.',
			verb: '—',
			hint: 'horno = oven (also "cocina" can mean stove)'
		},
		{
			sentence: 'Nos sentamos a comer en la ___ del comedor. (mueble)',
			answer: 'mesa',
			translation: 'We sit down to eat at the dining table.',
			verb: '—',
			hint: 'mesa = table'
		},
		{
			sentence: 'En el dormitorio al lado de la cama tengo una ___ de noche. (mueble)',
			answer: 'mesita',
			translation: 'In the bedroom next to the bed I have a nightstand.',
			verb: '—',
			hint: 'mesita de noche = nightstand'
		},
		{
			sentence: 'En el salón hay una ___ encima del suelo de madera. (textil)',
			answer: 'alfombra',
			translation: 'In the living room there is a rug on top of the wooden floor.',
			verb: '—',
			hint: 'alfombra = rug/carpet'
		},
		{
			sentence: 'Mi abuela tiene un ___ antiguo donde se sienta a leer. (mueble)',
			answer: 'sillón',
			translation: 'My grandma has an old armchair where she sits to read.',
			verb: '—',
			hint: 'sillón = armchair'
		},
		{
			sentence: 'En el baño nos vemos en el ___ cuando nos peinamos. (objeto)',
			answer: 'espejo',
			translation: 'In the bathroom we see ourselves in the mirror when we comb our hair.',
			verb: '—',
			hint: 'espejo = mirror'
		},
		{
			sentence: 'La ropa sucia va dentro de la ___ del lavadero. (electrodoméstico)',
			answer: 'lavadora',
			translation: 'Dirty clothes go inside the washing machine in the utility room.',
			verb: '—',
			hint: 'lavadora = washing machine'
		}
	]
};

export default a2VocabCasa;
