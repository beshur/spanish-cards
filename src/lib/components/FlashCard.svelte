<script lang="ts">
	import type { Card } from '$lib/types';

	interface Props {
		card: Card;
		onsubmit: (userAnswer: string) => void;
		onskip: () => void;
	}

	let { card, onsubmit, onskip }: Props = $props();

	let userAnswer = $state('');
	let inputEl: HTMLInputElement | undefined = $state();
	let cardEl: HTMLDivElement | undefined = $state();

	// Rebuild state when card changes
	let currentCardSentence = $derived(card.sentence);
	let prevSentence = $state('');

	$effect(() => {
		if (currentCardSentence !== prevSentence) {
			userAnswer = '';
			prevSentence = currentCardSentence;
			// Focus the input when a new card is shown
			setTimeout(() => inputEl?.focus({ preventScroll: true }), 50);
		}
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (userAnswer.trim()) {
			onsubmit(userAnswer.trim());
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			onskip();
		}
	}

	function handleFocus() {
		// On mobile, the virtual keyboard takes ~half the screen and the browser's
		// default auto-scroll only ensures the input itself is visible — that can hide
		// the top of the sentence. Scroll to the sticky progress bar so it pins at top
		// and the question card sits right below it. Wait for the keyboard to settle
		// first or iOS's own scroll restoration fights ours.
		setTimeout(() => {
			const target = document.querySelector('.progress-container') ?? cardEl;
			target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}, 300);
	}

	// Split the sentence around the blank
	let parts = $derived(card.sentence.split('___'));
</script>

<div class="flash-card" bind:this={cardEl}>
	<div class="card-body">
		<p class="sentence">
			{#if parts.length >= 2}
				<span class="sentence-part">{parts[0]}</span>
				<span class="blank-area">
					<input
						bind:this={inputEl}
						bind:value={userAnswer}
						onkeydown={handleKeydown}
						onfocus={handleFocus}
						type="text"
						class="answer-input"
						placeholder="..."
						autocomplete="off"
						autocapitalize="off"
						spellcheck="false"
					/>
				</span>
				<span class="sentence-part">{parts[1]}</span>
			{:else}
				<span class="sentence-part">{card.sentence}</span>
			{/if}
		</p>

		{#if card.hint}
			<p class="hint">
				<span class="hint-label">Hint:</span>
				{card.hint}
			</p>
		{/if}
	</div>

	<div class="card-actions">
		<button class="btn btn-secondary" onclick={onskip}>
			Skip <span class="shortcut">Esc</span>
		</button>
		<button
			class="btn btn-primary"
			onclick={handleSubmit}
			disabled={!userAnswer.trim()}
		>
			Check <span class="shortcut">Enter</span>
		</button>
	</div>
</div>

<svelte:window onkeydown={(e) => {
	if (e.key === 'Enter' && userAnswer.trim()) {
		handleSubmit(e);
	}
}} />

<style>
	.flash-card {
		background: var(--surface);
		border: 2px solid var(--border);
		border-radius: 1.25rem;
		padding: 2rem;
		max-width: 640px;
		margin: 0 auto;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
		scroll-margin-top: 4rem;
	}

	.card-body {
		margin-bottom: 1.5rem;
	}

	.sentence {
		font-size: 1.35rem;
		line-height: 2;
		color: var(--text);
		margin: 0 0 1rem 0;
		text-align: center;
	}

	.sentence-part {
		vertical-align: middle;
	}

	.blank-area {
		display: inline-block;
		vertical-align: middle;
	}

	.answer-input {
		font-family: inherit;
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--accent);
		background: var(--accent-bg);
		border: 2px dashed var(--accent);
		border-radius: 0.5rem;
		padding: 0.25rem 0.75rem;
		width: 180px;
		text-align: center;
		outline: none;
		transition: all 0.2s ease;
	}

	.answer-input:focus {
		border-style: solid;
		box-shadow: 0 0 0 3px var(--accent-glow);
	}

	.answer-input::placeholder {
		color: var(--accent);
		opacity: 0.4;
	}

	.hint {
		text-align: center;
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin: 0;
		padding: 0.5rem 1rem;
		background: var(--bg);
		border-radius: 0.5rem;
	}

	.hint-label {
		font-weight: 600;
		color: var(--text-secondary);
	}

	.card-actions {
		display: flex;
		justify-content: center;
		gap: 1rem;
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

	.btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.btn-primary {
		background: var(--accent);
		color: white;
	}

	.btn-primary:hover:not(:disabled) {
		filter: brightness(1.1);
		transform: translateY(-1px);
	}

	.btn-secondary {
		background: var(--surface);
		color: var(--text-secondary);
		border-color: var(--border);
	}

	.btn-secondary:hover {
		border-color: var(--text-secondary);
	}

	.shortcut {
		font-size: 0.7rem;
		opacity: 0.6;
		padding: 0.1rem 0.35rem;
		border-radius: 0.25rem;
		background: rgba(0, 0, 0, 0.1);
	}
</style>
