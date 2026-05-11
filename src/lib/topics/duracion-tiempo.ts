import type { Topic } from '$lib/types';

const duracionTiempo: Topic = {
	id: 'duracion-tiempo',
	name: 'Duración y Tiempo',
	description:
		'Express how long an action has been happening — desde, desde hace, desde que, hace … que.',
	icon: '⏳',
	cards: [
		{
			sentence: 'No veo a mis primos ___ diez años.',
			answer: 'desde hace',
			translation: 'I haven’t seen my cousins for ten years.',
			verb: '—',
			hint: '___ + period of time'
		},
		{
			sentence: 'Vive en Berlín ___ febrero.',
			answer: 'desde',
			translation: 'She has lived in Berlin since February.',
			verb: '—',
			hint: '___ + specific date'
		},
		{
			sentence: 'No sale con sus amigas ___ tiene novio.',
			answer: 'desde que',
			translation: 'She doesn’t go out with her friends since she got a boyfriend.',
			verb: '—',
			hint: '___ + clause with conjugated verb'
		},
		{
			sentence: '___ tres años que trabajo en esta empresa.',
			answer: 'Hace',
			translation: 'I have been working at this company for three years.',
			verb: '—',
			hint: '___ + time + que + verb'
		},
		{
			sentence: '¿Cuánto tiempo ___ que eres vegetariana?',
			answer: 'hace',
			translation: 'How long have you been a vegetarian?',
			verb: '—',
			hint: 'fixed question structure'
		},
		{
			sentence: '¿___ cuándo estudias chino?',
			answer: 'Desde',
			translation: 'Since when have you been studying Chinese?',
			verb: '—',
			hint: 'asking for a starting point'
		},
		{
			sentence: 'Estudio español ___ tres meses.',
			answer: 'desde hace',
			translation: 'I have been studying Spanish for three months.',
			verb: '—',
			hint: 'duration up to now'
		},
		{
			sentence: 'Clara lleva gafas ___ era niña.',
			answer: 'desde que',
			translation: 'Clara has worn glasses since she was a child.',
			verb: '—',
			hint: 'introduces a past starting clause'
		},
		{
			sentence: 'Raúl trabaja en un restaurante ___ 2017.',
			answer: 'desde',
			translation: 'Raúl has been working at a restaurant since 2017.',
			verb: '—',
			hint: '+ year as starting point'
		},
		{
			sentence: 'Tengo carné de conducir ___ tenía 18 años.',
			answer: 'desde que',
			translation: 'I’ve had a driving license since I was 18.',
			verb: '—',
			hint: '+ past clause'
		},
		{
			sentence: '___ mucho tiempo que no veo a Marta.',
			answer: 'Hace',
			translation: 'It’s been a long time since I last saw Marta.',
			verb: '—',
			hint: '+ time + que + verb'
		},
		{
			sentence: 'Pedro se encuentra mejor ___ toma las pastillas nuevas.',
			answer: 'desde que',
			translation: 'Pedro feels better since he started taking the new pills.',
			verb: '—',
			hint: '+ clause'
		}
	]
};

export default duracionTiempo;
