<script lang="ts">
	import type { Topic } from '$lib/types';

	interface Props {
		topics: Topic[];
		activeTopic: Topic | null;
		onselect: (topic: Topic) => void;
	}

	let { topics, activeTopic, onselect }: Props = $props();
</script>

<div class="topic-selector">
	<h2>Choose a Topic</h2>
	<div class="topic-grid">
		{#each topics as topic (topic.id)}
			<button
				class="topic-card"
				class:active={activeTopic?.id === topic.id}
				onclick={() => onselect(topic)}
			>
				<span class="topic-icon">{topic.icon}</span>
				<span class="topic-name">{topic.name}</span>
				<span class="topic-count">{topic.cards.length} cards</span>
				<p class="topic-desc">{topic.description}</p>
			</button>
		{/each}
	</div>
</div>

<style>
	.topic-selector {
		margin-bottom: 2rem;
	}

	.topic-selector h2 {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 1rem;
	}

	.topic-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
	}

	.topic-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.4rem;
		padding: 1.25rem;
		border: 2px solid var(--border);
		border-radius: 1rem;
		background: var(--surface);
		cursor: pointer;
		transition: all 0.2s ease;
		text-align: left;
		font-family: inherit;
		color: var(--text);
	}

	.topic-card:hover {
		border-color: var(--accent);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}

	.topic-card.active {
		border-color: var(--accent);
		background: var(--accent-bg);
		box-shadow: 0 0 0 3px var(--accent-glow);
	}

	.topic-icon {
		font-size: 2rem;
		line-height: 1;
	}

	.topic-name {
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--text);
	}

	.topic-count {
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--accent);
		background: var(--accent-bg);
		padding: 0.15rem 0.5rem;
		border-radius: 999px;
	}

	.topic-desc {
		font-size: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.45;
		margin: 0;
	}
</style>
