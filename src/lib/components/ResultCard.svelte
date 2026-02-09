<script lang="ts">
	import type { Card } from '$lib/types';

	interface Props {
		card: Card;
		userAnswer: string;
		isCorrect: boolean;
		onnext: () => void;
	}

	let { card, userAnswer, isCorrect, onnext }: Props = $props();

	// Focus the next button
	let nextBtn: HTMLButtonElement | undefined = $state();

	$effect(() => {
		setTimeout(() => nextBtn?.focus(), 50);
	});

	let fullSentence = $derived(card.sentence.replace('___', card.answer));
</script>

<div class="result-card" class:correct={isCorrect} class:incorrect={!isCorrect}>
	<div class="result-header">
		{#if isCorrect}
			<span class="result-icon">🎉</span>
			<h3 class="result-title correct-text">Correct!</h3>
		{:else}
			<span class="result-icon">😕</span>
			<h3 class="result-title incorrect-text">Not quite</h3>
		{/if}
	</div>

	<div class="result-body">
		<p class="full-sentence">{fullSentence}</p>

		{#if !isCorrect}
			<div class="comparison">
				<div class="comparison-row">
					<span class="label">Your answer:</span>
					<span class="value wrong">{userAnswer}</span>
				</div>
				<div class="comparison-row">
					<span class="label">Correct:</span>
					<span class="value right">{card.answer}</span>
				</div>
			</div>
		{/if}

		<p class="translation">{card.translation}</p>
	</div>

	<div class="result-actions">
		<button bind:this={nextBtn} class="btn btn-primary" onclick={onnext}>
			Next Card <span class="shortcut">Enter</span>
		</button>
	</div>
</div>

<svelte:window onkeydown={(e) => {
	if (e.key === 'Enter') {
		onnext();
	}
}} />

<style>
	.result-card {
		background: var(--surface);
		border: 2px solid var(--border);
		border-radius: 1.25rem;
		padding: 2rem;
		max-width: 640px;
		margin: 0 auto;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		text-align: center;
	}

	.result-card.correct {
		border-color: var(--green);
		background: var(--green-bg);
	}

	.result-card.incorrect {
		border-color: var(--red);
		background: var(--red-bg);
	}

	.result-header {
		margin-bottom: 1.25rem;
	}

	.result-icon {
		font-size: 2.5rem;
		line-height: 1;
		display: block;
		margin-bottom: 0.5rem;
	}

	.result-title {
		font-size: 1.25rem;
		font-weight: 700;
		margin: 0;
	}

	.correct-text {
		color: var(--green);
	}

	.incorrect-text {
		color: var(--red);
	}

	.result-body {
		margin-bottom: 1.5rem;
	}

	.full-sentence {
		font-size: 1.2rem;
		font-weight: 600;
		color: var(--text);
		margin: 0 0 1rem 0;
		line-height: 1.5;
	}

	.comparison {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin-bottom: 1rem;
		padding: 0.75rem 1rem;
		background: var(--surface);
		border-radius: 0.75rem;
	}

	.comparison-row {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		align-items: center;
	}

	.label {
		font-size: 0.85rem;
		color: var(--text-secondary);
		font-weight: 500;
	}

	.value {
		font-size: 1rem;
		font-weight: 700;
		padding: 0.15rem 0.6rem;
		border-radius: 0.4rem;
	}

	.value.wrong {
		color: var(--red);
		background: var(--red-bg);
		text-decoration: line-through;
	}

	.value.right {
		color: var(--green);
		background: var(--green-bg);
	}

	.translation {
		font-size: 0.9rem;
		color: var(--text-secondary);
		font-style: italic;
		margin: 0;
	}

	.result-actions {
		display: flex;
		justify-content: center;
	}

	.btn {
		font-family: inherit;
		font-size: 0.95rem;
		font-weight: 600;
		padding: 0.6rem 1.5rem;
		border-radius: 0.75rem;
		border: 2px solid transparent;
		cursor: pointer;
		transition: all 0.15s ease;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.btn-primary {
		background: var(--accent);
		color: white;
	}

	.btn-primary:hover {
		filter: brightness(1.1);
		transform: translateY(-1px);
	}

	.shortcut {
		font-size: 0.7rem;
		opacity: 0.6;
		padding: 0.1rem 0.35rem;
		border-radius: 0.25rem;
		background: rgba(0, 0, 0, 0.1);
	}
</style>
