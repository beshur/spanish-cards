<script lang="ts">
	import { untrack } from 'svelte';
	import type { Card, Topic, SessionStats } from '$lib/types';
	import FlashCard from './FlashCard.svelte';
	import ResultCard from './ResultCard.svelte';
	import ProgressBar from './ProgressBar.svelte';
	import SessionSummary from './SessionSummary.svelte';

	interface Props {
		topic: Topic;
		onExit: () => void;
	}

	let { topic, onExit }: Props = $props();

	type Phase = 'practice' | 'result' | 'summary';

	let phase: Phase = $state('practice');
	let shuffledCards: Card[] = $state(untrack(() => shuffle(topic.cards)));
	let currentIndex = $state(0);
	let lastAnswer = $state('');
	let lastCorrect = $state(false);
	let stats: SessionStats = $state(
		untrack(() => ({
			total: shuffledCards.length,
			correct: 0,
			incorrect: 0,
			skipped: 0
		}))
	);

	function shuffle<T>(arr: T[]): T[] {
		const copy = [...arr];
		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[copy[i], copy[j]] = [copy[j], copy[i]];
		}
		return copy;
	}

	function normalize(s: string): string {
		return s.toLowerCase().trim().normalize('NFC');
	}

	function restart() {
		shuffledCards = shuffle(topic.cards);
		currentIndex = 0;
		stats = { total: shuffledCards.length, correct: 0, incorrect: 0, skipped: 0 };
		phase = 'practice';
	}

	function handleSubmit(userAnswer: string) {
		const card = shuffledCards[currentIndex];
		lastAnswer = userAnswer;
		lastCorrect = normalize(userAnswer) === normalize(card.answer);

		if (lastCorrect) {
			stats.correct++;
		} else {
			stats.incorrect++;
		}

		phase = 'result';
	}

	function handleSkip() {
		stats.skipped++;
		advance();
	}

	function advance() {
		if (currentIndex + 1 >= shuffledCards.length) {
			phase = 'summary';
		} else {
			currentIndex++;
			phase = 'practice';
		}
	}
</script>

<div class="practice-bar">
	<button class="back-btn" onclick={onExit}>← Topics</button>
	<span class="topic-label">
		<span class="topic-icon">{topic.icon}</span>
		{topic.name}
	</span>
</div>

{#if phase === 'practice' && shuffledCards.length > 0}
	<ProgressBar current={currentIndex} total={shuffledCards.length} {stats} />
	<FlashCard card={shuffledCards[currentIndex]} onsubmit={handleSubmit} onskip={handleSkip} />
{/if}

{#if phase === 'result' && shuffledCards.length > 0}
	<ProgressBar current={currentIndex} total={shuffledCards.length} {stats} />
	<ResultCard
		card={shuffledCards[currentIndex]}
		userAnswer={lastAnswer}
		isCorrect={lastCorrect}
		onnext={advance}
	/>
{/if}

{#if phase === 'summary'}
	<SessionSummary {stats} {topic} onrestart={restart} onchangetopic={onExit} />
{/if}

<style>
	.practice-bar {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}

	.back-btn {
		font-family: inherit;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-secondary);
		background: none;
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		padding: 0.35rem 0.75rem;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.back-btn:hover {
		border-color: var(--text-secondary);
		color: var(--text);
	}

	.topic-label {
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-secondary);
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
	}

	.topic-icon {
		font-size: 1.1rem;
	}
</style>
