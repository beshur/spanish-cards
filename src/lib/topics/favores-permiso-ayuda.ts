import type { Topic } from '$lib/types';

const favoresPermisoAyuda: Topic = {
	id: 'favores-permiso-ayuda',
	name: 'Favores, Permiso y Ayuda',
	description:
		'¿Te importa + inf? (favor) · ¿Te importa que + subj? (permission) · ¿Quieres que + subj? (offering).',
	icon: '🤝',
	cards: [
		{
			sentence: '¿Te ___ repetir lo que has dicho? (favor — pedir acción al otro)',
			answer: 'importa',
			translation: 'Do you mind repeating what you said?',
			verb: 'importar',
			hint: '+ infinitivo'
		},
		{
			sentence: '¿Te importa ___ pases por la panadería? (favor)',
			answer: 'que',
			translation: 'Could you stop by the bakery?',
			verb: '—',
			hint: '+ que + subj.'
		},
		{
			sentence: '¿Os importa que ___ con vosotros en el ascensor? (permiso)',
			answer: 'entremos',
			translation: 'Do you mind if we get in the elevator with you?',
			verb: 'entrar',
			hint: 'permiso — + subj.'
		},
		{
			sentence: '¿Te importa ___ te despierte mañana? (permiso)',
			answer: 'que',
			translation: 'Do you mind if I wake you up tomorrow?',
			verb: '—',
			hint: '+ que + subj.'
		},
		{
			sentence: '¿Queréis que ___ yo con el director? (ofrecer ayuda)',
			answer: 'hable',
			translation: 'Do you want me to speak with the director?',
			verb: 'hablar',
			hint: 'querer que + subj. — yo'
		},
		{
			sentence: '¿Le importa que le ___ unas preguntas? (permiso, formal)',
			answer: 'haga',
			translation: 'Do you mind if I ask you a few questions?',
			verb: 'hacer',
			hint: 'yo — pres. subj.'
		},
		{
			sentence: '¿Quieres que ___ a recogerte al aeropuerto? (ofrecer ayuda)',
			answer: 'vaya',
			translation: 'Do you want me to pick you up at the airport?',
			verb: 'ir',
			hint: 'yo — pres. subj.'
		},
		{
			sentence: '¿Podrías ___ una barra de pan? (favor)',
			answer: 'comprar',
			translation: 'Could you buy a loaf of bread?',
			verb: 'comprar',
			hint: 'podrías + infinitivo'
		},
		{
			sentence: '¿Quieres que te ___ a la estación? (ofrecer ayuda)',
			answer: 'lleve',
			translation: 'Do you want me to take you to the station?',
			verb: 'llevar',
			hint: 'yo — pres. subj.'
		},
		{
			sentence: '¿Te importaría ___ la ventana? (favor — más cortés)',
			answer: 'cerrar',
			translation: 'Would you mind closing the window?',
			verb: 'cerrar',
			hint: 'condicional + infinitivo'
		},
		{
			sentence: '¿Quieres que ___ contigo al médico? (ofrecer ayuda)',
			answer: 'vayamos',
			translation: 'Do you want us to go to the doctor with you?',
			verb: 'ir',
			hint: 'nosotros — pres. subj.'
		},
		{
			sentence: '¿Le ___ que abra la ventana? (permiso, formal — con usted)',
			answer: 'importa',
			translation: 'Do you mind if I open the window? (formal)',
			verb: 'importar',
			hint: 'usted — + que + subj.'
		}
	]
};

export default favoresPermisoAyuda;
