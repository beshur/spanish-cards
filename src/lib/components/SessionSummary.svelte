<script lang="ts">
	import type { SessionStats, Topic } from '$lib/types';

	interface Props {
		stats: SessionStats;
		topic: Topic;
		onrestart: () => void;
		onchangetopic: () => void;
	}

	let { stats, topic, onrestart, onchangetopic }: Props = $props();

	let accuracy = $derived(
		stats.correct + stats.incorrect > 0
			? Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100)
			: 0
	);

	let message = $derived(
		accuracy >= 90
			? 'Excellent! You really know this topic!'
			: accuracy >= 70
				? 'Great job! Keep practicing!'
				: accuracy >= 50
					? 'Good effort! Review the tricky ones.'
					: 'Keep at it! Practice makes perfect.'
	);

	let messageIcon = $derived(
		accuracy >= 90 ? '🏆' : accuracy >= 70 ? '🌟' : accuracy >= 50 ? '💪' : '📚'
	);
</script>

<div class="summary">
	<div class="summary-header">
		<span class="summary-icon">{messageIcon}</span>
		<h2>Session Complete!</h2>
		<p class="summary-topic">{topic.icon} {topic.name}</p>
	</div>

	<div class="stats-grid">
		<div class="stat-card">
			<span class="stat-value">{stats.total}</span>
			<span class="stat-label">Total Cards</span>
		</div>
		<div class="stat-card correct">
			<span class="stat-value">{stats.correct}</span>
			<span class="stat-label">Correct</span>
		</div>
		<div class="stat-card incorrect">
			<span class="stat-value">{stats.incorrect}</span>
			<span class="stat-label">Incorrect</span>
		</div>
		<div class="stat-card accent">
			<span class="stat-value">{accuracy}%</span>
			<span class="stat-label">Accuracy</span>
		</div>
	</div>

	<p class="message">{message}</p>

	<div class="summary-actions">
		<button class="btn btn-primary" onclick={onrestart}>
			Practice Again
		</button>
		<button class="btn btn-secondary" onclick={onchangetopic}>
			Change Topic
		</button>
	</div>
</div>

<style>
	.summary {
		background: var(--surface);
		border: 2px solid var(--border);
		border-radius: 1.25rem;
		padding: 2.5rem 2rem;
		max-width: 540px;
		margin: 0 auto;
		text-align: center;
		box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
	}

	.summary-header {
		margin-bottom: 2rem;
	}

	.summary-icon {
		font-size: 3rem;
		line-height: 1;
		display: block;
		margin-bottom: 0.5rem;
	}

	.summary-header h2 {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--text);
		margin: 0 0 0.25rem 0;
	}

	.summary-topic {
		font-size: 0.9rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.75rem;
		margin-bottom: 1.5rem;
	}

	.stat-card {
		padding: 1rem;
		border-radius: 0.75rem;
		background: var(--bg);
		border: 1px solid var(--border);
	}

	.stat-card.correct {
		background: var(--green-bg);
		border-color: var(--green);
	}

	.stat-card.incorrect {
		background: var(--red-bg);
		border-color: var(--red);
	}

	.stat-card.accent {
		background: var(--accent-bg);
		border-color: var(--accent);
	}

	.stat-value {
		display: block;
		font-size: 1.75rem;
		font-weight: 800;
		color: var(--text);
		line-height: 1.2;
	}

	.stat-card.correct .stat-value {
		color: var(--green);
	}

	.stat-card.incorrect .stat-value {
		color: var(--red);
	}

	.stat-card.accent .stat-value {
		color: var(--accent);
	}

	.stat-label {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}

	.message {
		font-size: 1.05rem;
		color: var(--text-secondary);
		margin: 0 0 1.5rem 0;
	}

	.summary-actions {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		flex-wrap: wrap;
	}

	.btn {
		font-family: inherit;
		font-size: 0.95rem;
		font-weight: 600;
		padding: 0.65rem 1.5rem;
		border-radius: 0.75rem;
		border: 2px solid transparent;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.btn-primary {
		background: var(--accent);
		color: white;
	}

	.btn-primary:hover {
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
</style>
