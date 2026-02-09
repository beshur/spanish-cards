import type { Topic } from '$lib/types';
import subjuntivo from './subjuntivo';
import presentPerfect from './present-perfect';

/**
 * All available topics.
 * To add a new topic, create a new file in this folder and import it here.
 */
export const topics: Topic[] = [subjuntivo, presentPerfect];

export function getTopicById(id: string): Topic | undefined {
	return topics.find((t) => t.id === id);
}
