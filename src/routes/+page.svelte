<script lang="ts">
	import type { Topic } from '$lib/types';
	import { topicGroups, type TopicGroup } from '$lib/topic-groups';
	import PracticeSession from '$lib/components/PracticeSession.svelte';

	const groups: TopicGroup[] = topicGroups;
	let activeTopic: Topic | null = $state(null);

	function selectTopic(topic: Topic) {
		activeTopic = topic;
	}

	function exitPractice() {
		activeTopic = null;
	}
</script>

<svelte:head>
	<title>Spanish Cards — Practice Your Spanish</title>
</svelte:head>

{#if !activeTopic}
	<div class="welcome">
		<p class="tagline">Fill in the blank. Master the grammar.</p>
	</div>

	<div class="groups">
		{#each groups as group (group.id)}
			{@const groupTopics: Topic[] = group.topics}
			<section class="group">
				<header class="group-header">
					<span class="group-icon">{group.icon}</span>
					<h2 class="group-title">{group.title}</h2>
					<span class="group-count">{groupTopics.length}</span>
				</header>

				<div class="topic-grid">
					{#each groupTopics as t (t.id)}
						<button class="topic-card" onclick={() => selectTopic(t)}>
							<span class="topic-icon">{t.icon}</span>
							<span class="topic-name">{t.name}</span>
							<span class="topic-count">{t.cards.length} cards</span>
							<p class="topic-desc">{t.description}</p>
						</button>
					{/each}
				</div>
			</section>
		{/each}
	</div>
{:else}
	{#key activeTopic.id}
		<PracticeSession topic={activeTopic} onExit={exitPractice} />
	{/key}
{/if}

<style>
	.welcome {
		text-align: center;
		margin-bottom: 1.25rem;
	}

	.tagline {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin: 0;
	}

	.groups {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.group-header {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		margin-bottom: 0.9rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--border);
	}

	.group-icon {
		font-size: 1.3rem;
		line-height: 1;
	}

	.group-title {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--text);
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin: 0;
		flex: 1;
		min-width: 0;
	}

	.group-count {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--accent);
		background: var(--accent-bg);
		padding: 0.15rem 0.55rem;
		border-radius: 999px;
		white-space: nowrap;
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
