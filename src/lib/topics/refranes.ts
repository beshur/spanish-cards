import type { Topic } from '$lib/types';

const refranes: Topic = {
	id: 'refranes',
	name: 'Refranes y Proverbios',
	description:
		'Learn classic Spanish proverbs — complete the saying to build cultural fluency and impress native speakers.',
	icon: '🪶',
	cards: [
		{
			sentence: 'Más vale tarde ___.  (Better late than...)',
			answer: 'que nunca',
			translation: 'Better late than never.',
			verb: 'valer',
			hint: 'The most common way to excuse a delay'
		},
		{
			sentence: 'A falta de pan, ___.  (Make do with what you have)',
			answer: 'buenas son tortas',
			translation: 'When there is no bread, flatcakes will do. (Make do with what you have.)',
			verb: 'ser',
			hint: 'When the ideal option isn\'t available, accept the alternative'
		},
		{
			sentence: 'En boca cerrada ___.  (Silence is golden)',
			answer: 'no entran moscas',
			translation: "Flies don't enter a closed mouth. (Silence is golden.)",
			verb: 'entrar',
			hint: 'Staying quiet keeps you out of trouble'
		},
		{
			sentence: 'No hay mal que ___.  (Every cloud has a silver lining)',
			answer: 'por bien no venga',
			translation:
				'There is no misfortune that doesn\'t bring something good. (Every cloud has a silver lining.)',
			verb: 'venir',
			hint: 'Even bad situations can lead to good outcomes'
		},
		{
			sentence: 'Quien mucho abarca, ___.  (Don\'t bite off more than you can chew)',
			answer: 'poco aprieta',
			translation:
				"He who grasps too much, squeezes little. (Don't bite off more than you can chew.)",
			verb: 'apretar',
			hint: 'Trying to do too many things at once means doing none well'
		},
		{
			sentence: 'Ojos que no ven, ___.  (Out of sight, out of mind)',
			answer: 'corazón que no siente',
			translation:
				"Eyes that don't see, heart that doesn't feel. (Out of sight, out of mind.)",
			verb: 'sentir',
			hint: 'What you don\'t see can\'t hurt you emotionally'
		},
		{
			sentence: 'Perro que ladra ___.  (His bark is worse than his bite)',
			answer: 'no muerde',
			translation:
				"A dog that barks doesn't bite. (His bark is worse than his bite.)",
			verb: 'morder',
			hint: 'Those who threaten the loudest are often the least dangerous'
		}
	]
};

export default refranes;
