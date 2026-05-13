<script lang="ts">
	import type { SessionStats } from '$lib/types';

	interface Props {
		current: number;
		total: number;
		stats: SessionStats;
	}

	let { current, total, stats }: Props = $props();

	let progress = $derived(total > 0 ? ((current) / total) * 100 : 0);
	let accuracy = $derived(
		stats.correct + stats.incorrect > 0
			? Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100)
			: 0
	);
</script>

<div class="progress-container">
	<div class="progress-info">
		<span class="progress-label">Card {Math.min(current + 1, total)} of {total}</span>
		<div class="stats">
			<span class="stat correct">{stats.correct} correct</span>
			<span class="stat incorrect">{stats.incorrect} wrong</span>
			{#if stats.correct + stats.incorrect > 0}
				<span class="stat accuracy">{accuracy}%</span>
			{/if}
		</div>
	</div>
	<div class="progress-track">
		<div class="progress-fill" style="width: {progress}%"></div>
	</div>
</div>

<style>
	.progress-container {
		max-width: 640px;
		margin: 0 auto;
		padding: 0.5rem 0 1rem 0;
		position: sticky;
		top: 0;
		z-index: 10;
		background: var(--bg);
	}

	.progress-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.progress-label {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-secondary);
	}

	.stats {
		display: flex;
		gap: 0.75rem;
	}

	.stat {
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.1rem 0.5rem;
		border-radius: 999px;
	}

	.stat.correct {
		color: var(--green);
		background: var(--green-bg);
	}

	.stat.incorrect {
		color: var(--red);
		background: var(--red-bg);
	}

	.stat.accuracy {
		color: var(--accent);
		background: var(--accent-bg);
	}

	.progress-track {
		height: 6px;
		background: var(--border);
		border-radius: 999px;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: var(--accent);
		border-radius: 999px;
		transition: width 0.4s ease;
	}
</style>
