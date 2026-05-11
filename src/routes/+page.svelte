<script lang="ts">
	import type { Topic } from '$lib/types';
	import { topics } from '$lib/topics';
	import TopicSelector from '$lib/components/TopicSelector.svelte';
	import PracticeSession from '$lib/components/PracticeSession.svelte';

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
	<TopicSelector {topics} {activeTopic} onselect={selectTopic} />
{:else}
	{#key activeTopic.id}
		<PracticeSession topic={activeTopic} onExit={exitPractice} />
	{/key}
{/if}

<style>
	.welcome {
		text-align: center;
		margin-bottom: 1rem;
	}

	.tagline {
		font-size: 1.1rem;
		color: var(--text-secondary);
		margin: 0;
	}
</style>
