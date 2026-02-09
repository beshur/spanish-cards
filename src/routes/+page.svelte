<script lang="ts">
	import type { Card, Topic, SessionStats } from '$lib/types';
	import { topics } from '$lib/topics';
	import TopicSelector from '$lib/components/TopicSelector.svelte';
	import FlashCard from '$lib/components/FlashCard.svelte';
	import ResultCard from '$lib/components/ResultCard.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import SessionSummary from '$lib/components/SessionSummary.svelte';

	type Phase = 'select' | 'practice' | 'result' | 'summary';

	let phase: Phase = $state('select');
	let activeTopic: Topic | null = $state(null);
	let shuffledCards: Card[] = $state([]);
	let currentIndex = $state(0);
	let lastAnswer = $state('');
	let lastCorrect = $state(false);
	let stats: SessionStats = $state({ total: 0, correct: 0, incorrect: 0, skipped: 0 });

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

	function selectTopic(topic: Topic) {
		activeTopic = topic;
		startSession();
	}

	function startSession() {
		if (!activeTopic) return;
		shuffledCards = shuffle(activeTopic.cards);
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

	function changeTopic() {
		activeTopic = null;
		phase = 'select';
	}
</script>

<svelte:head>
	<title>Spanish Cards — Practice Your Spanish</title>
</svelte:head>

<div class="app">
	<header class="app-header">
		<div class="header-content">
			<h1 class="logo">
				<span class="logo-icon">🇪🇸</span>
				Spanish Cards
			</h1>
			{#if phase !== 'select'}
				<button class="back-btn" onclick={changeTopic}>
					← Topics
				</button>
			{/if}
		</div>
	</header>

	<main class="main">
		{#if phase === 'select'}
			<div class="welcome">
				<p class="tagline">Fill in the blank. Master the grammar.</p>
			</div>
			<TopicSelector {topics} {activeTopic} onselect={selectTopic} />
		{/if}

		{#if phase === 'practice' && shuffledCards.length > 0}
			<ProgressBar current={currentIndex} total={shuffledCards.length} {stats} />
			<FlashCard
				card={shuffledCards[currentIndex]}
				onsubmit={handleSubmit}
				onskip={handleSkip}
			/>
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

		{#if phase === 'summary' && activeTopic}
			<SessionSummary
				{stats}
				topic={activeTopic}
				onrestart={startSession}
				onchangetopic={changeTopic}
			/>
		{/if}
	</main>

	<footer class="app-footer">
		<p>Practice makes perfect. Keep going! 💪</p>
	</footer>
</div>

<style>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.app-header {
		border-bottom: 1px solid var(--border);
		padding: 1rem 1.5rem;
		background: var(--surface);
	}

	.header-content {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--text);
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.logo-icon {
		font-size: 1.4rem;
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

	.main {
		flex: 1;
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}

	.welcome {
		text-align: center;
		margin-bottom: 1rem;
	}

	.tagline {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.app-footer {
		text-align: center;
		padding: 1.5rem;
		border-top: 1px solid var(--border);
	}

	.app-footer p {
		font-size: 0.8rem;
		color: var(--text-secondary);
		margin: 0;
		opacity: 0.7;
	}
</style>
