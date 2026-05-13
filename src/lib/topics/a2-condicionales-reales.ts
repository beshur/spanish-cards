import type { Topic } from '$lib/types';

const a2CondicionalesReales: Topic = {
	id: 'a2-condicionales-reales',
	name: 'Condicionales Reales (A2)',
	description:
		'First-conditional patterns at A2 level. Si + presente de indicativo → futuro / imperativo / presente in the main clause.',
	icon: '🪜',
	cards: [
		{
			sentence: 'Si tenemos dinero, ___ el coche. (comprar — nosotros, futuro)',
			answer: 'compraremos',
			translation: "If we have money, we'll buy the car.",
			verb: 'comprar',
			hint: 'si + presente → futuro: compraremos'
		},
		{
			sentence: 'Si te gusta viajar, ___ con nosotros. (venir — tú, imperativo)',
			answer: 'ven',
			translation: 'If you like travelling, come with us.',
			verb: 'venir',
			hint: 'si + presente → imperativo: ven'
		},
		{
			sentence: 'Si podemos, ___ a dar una vuelta esta tarde. (salir — nosotros, presente)',
			answer: 'salimos',
			translation: "If we can, we'll go out for a walk this afternoon.",
			verb: 'salir',
			hint: 'si + presente → presente con valor de futuro próximo'
		},
		{
			sentence: 'Si llama Ismael, ___ que estoy enferma. (decir — tú, imperativo)',
			answer: 'dile',
			translation: "If Ismael calls, tell him I'm sick.",
			verb: 'decir',
			hint: 'imperativo de decir tú: di + le (a él) = dile'
		},
		{
			sentence: 'Si tú no la entiendes, yo te la ___. (explicar — yo, futuro)',
			answer: 'explicaré',
			translation: "If you don't understand it, I'll explain it to you.",
			verb: 'explicar',
			hint: 'si + presente → futuro: explicaré'
		},
		{
			sentence: 'Si te llama tu jefe, ___ pronto del trabajo. (salir — tú, futuro)',
			answer: 'saldrás',
			translation: "If your boss calls, you'll leave work early.",
			verb: 'salir',
			hint: 'futuro irregular: saldrás'
		},
		{
			sentence: 'Si vuelvo pronto a casa, ___ la cena. (preparar — yo, futuro)',
			answer: 'prepararé',
			translation: "If I come home early, I'll make dinner.",
			verb: 'preparar',
			hint: 'futuro regular: prepararé'
		},
		{
			sentence: 'Si nos invitan, ___ a la fiesta el sábado. (ir — nosotros, futuro)',
			answer: 'iremos',
			translation: "If they invite us, we'll go to the party on Saturday.",
			verb: 'ir',
			hint: 'futuro de ir: iremos'
		},
		{
			sentence: 'Si no encontramos taxi, ___ andando hasta el hotel. (ir — nosotros, presente)',
			answer: 'vamos',
			translation: "If we can't find a taxi, we'll walk to the hotel.",
			verb: 'ir',
			hint: 'si + presente → presente: vamos'
		},
		{
			sentence: 'Si tienes frío, ___ la ventana, por favor. (cerrar — tú, imperativo)',
			answer: 'cierra',
			translation: 'If you’re cold, close the window, please.',
			verb: 'cerrar',
			hint: 'imperativo tú: cierra'
		},
		{
			sentence: 'Si vienes a Valencia este fin de semana, ___ a mi hermana. (llamar — tú, imperativo)',
			answer: 'llama',
			translation: 'If you come to Valencia this weekend, call my sister.',
			verb: 'llamar',
			hint: 'imperativo tú: llama'
		},
		{
			sentence: 'Si no te ven en clase, los profesores se ___. (preocupar — ellos, futuro)',
			answer: 'preocuparán',
			translation: "If they don't see you in class, the teachers will get worried.",
			verb: 'preocupar',
			hint: 'futuro pronominal: se preocuparán'
		}
	]
};

export default a2CondicionalesReales;
