export interface Card {
	/** The sentence with a blank indicated by ___ */
	sentence: string;
	/** The correct answer to fill in the blank */
	answer: string;
	/** English translation of the full sentence */
	translation: string;
	/** The base (infinitive) form of the verb */
	verb: string;
	/** Hint to show (e.g., the pronoun or subject) */
	hint?: string;
}

export interface Topic {
	id: string;
	name: string;
	description: string;
	icon: string;
	cards: Card[];
}

export interface SessionStats {
	total: number;
	correct: number;
	incorrect: number;
	skipped: number;
}
