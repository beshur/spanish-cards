import type { Topic } from '$lib/types';

const a2PronombresInterrogativos: Topic = {
	id: 'a2-pronombres-interrogativos',
	name: 'Pronombres interrogativos',
	description:
		'Question words — qué, quién/quiénes, cuál/cuáles, cuándo, dónde, cómo, cuánto/a/os/as, por qué. Variables (quién, cuál, cuánto) agree in number/gender; invariables (qué, cuándo, dónde, cómo) do not. All carry a written accent.',
	icon: '❓',
	cards: [
		{
			sentence: '¿___ es tu actor favorito? (persona, pregunta abierta)',
			answer: 'Quién',
			translation: 'Who is your favourite actor?',
			verb: '—',
			hint: '¿Quién? — persona, singular'
		},
		{
			sentence: '¿___ vinieron a la fiesta? (varias personas)',
			answer: 'Quiénes',
			translation: 'Who came to the party?',
			verb: '—',
			hint: '¿Quiénes? — plural'
		},
		{
			sentence: '¿___ libro quieres leer primero, el rojo o el verde? (elección entre opciones)',
			answer: 'Qué',
			translation: 'Which book do you want to read first, the red or the green one?',
			verb: '—',
			hint: 'qué + sustantivo = which'
		},
		{
			sentence: '¿___ es más caro, el café o el té? (elección, sin sustantivo)',
			answer: 'Cuál',
			translation: 'Which is more expensive, coffee or tea?',
			verb: '—',
			hint: 'cuál solo, sin sustantivo después'
		},
		{
			sentence: '¿___ son los nombres de tus hermanos? (elección plural)',
			answer: 'Cuáles',
			translation: 'What are your brothers’ names?',
			verb: '—',
			hint: 'cuáles — plural'
		},
		{
			sentence: '¿___ años tienes? (cantidad)',
			answer: 'Cuántos',
			translation: 'How old are you?',
			verb: '—',
			hint: 'cuántos — masc. plural, concuerda con "años"'
		},
		{
			sentence: '¿___ horas trabajas al día? (cantidad, fem.)',
			answer: 'Cuántas',
			translation: 'How many hours a day do you work?',
			verb: '—',
			hint: 'cuántas — fem. plural'
		},
		{
			sentence: '¿___ cuesta este abrigo? (precio)',
			answer: 'Cuánto',
			translation: 'How much does this coat cost?',
			verb: '—',
			hint: 'cuánto invariable cuando va con un verbo'
		},
		{
			sentence: '¿___ llega tu hermano? (tiempo)',
			answer: 'Cuándo',
			translation: 'When does your brother arrive?',
			verb: '—',
			hint: 'cuándo — tiempo, invariable'
		},
		{
			sentence: '¿___ vives? — Yo no sé dónde vives. (lugar)',
			answer: 'Dónde',
			translation: 'Where do you live? — I don’t know where you live.',
			verb: '—',
			hint: 'dónde — lugar'
		},
		{
			sentence: '¿___ están tus padres? (modo / estado)',
			answer: 'Cómo',
			translation: 'How are your parents?',
			verb: '—',
			hint: 'cómo — modo, invariable'
		},
		{
			sentence: '¿___ no viniste ayer a clase? (causa)',
			answer: 'Por qué',
			translation: 'Why didn’t you come to class yesterday?',
			verb: '—',
			hint: 'por qué — pregunta de causa (dos palabras, con tilde)'
		},
		{
			sentence: '¿De ___ es esa chaqueta tan elegante? (persona — posesión)',
			answer: 'quién',
			translation: 'Whose elegant jacket is that?',
			verb: '—',
			hint: '¿De quién? — posesión'
		},
		{
			sentence: '¿A ___ hora empieza la película? (tiempo concreto)',
			answer: 'qué',
			translation: 'What time does the film start?',
			verb: '—',
			hint: 'a qué hora — fórmula fija'
		}
	]
};

export default a2PronombresInterrogativos;
