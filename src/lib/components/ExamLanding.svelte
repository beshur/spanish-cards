<script lang="ts">
	import { base } from '$app/paths';
	import type { Card, Topic } from '$lib/types';
	import type { ExamCategory } from '$lib/exam';
	import PracticeSession from './PracticeSession.svelte';

	interface Props {
		level: string;
		title: string;
		tagline: string;
		categories: ExamCategory[];
		examSize?: number;
	}

	let { level, title, tagline, categories, examSize = 50 }: Props = $props();

	let activeTopic: Topic | null = $state(null);

	function selectTopic(topic: Topic) {
		activeTopic = topic;
	}

	function exitPractice() {
		activeTopic = null;
	}

	function shuffle<T>(arr: T[]): T[] {
		const copy = [...arr];
		for (let i = copy.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[copy[i], copy[j]] = [copy[j], copy[i]];
		}
		return copy;
	}

	function startExamMode() {
		const allCards: Card[] = [];
		const seen = new Set<Topic>();
		for (const cat of categories) {
			for (const item of cat.topics) {
				if (item.topic && !seen.has(item.topic)) {
					seen.add(item.topic);
					allCards.push(...item.topic.cards);
				}
			}
		}
		const picked = shuffle(allCards).slice(0, Math.min(examSize, allCards.length));
		activeTopic = {
			id: `exam-mode-${Date.now()}`,
			name: `Exam Mode — ${picked.length} preguntas`,
			description: `Random questions across all ${level} exam-prep topics.`,
			icon: '🎓',
			cards: picked
		};
	}

	const totals = $derived(
		categories.map((c) => ({
			id: c.id,
			ready: c.topics.filter((t) => t.topic).length,
			total: c.topics.length
		}))
	);

	const overall = $derived(
		totals.reduce(
			(acc, c) => ({ ready: acc.ready + c.ready, total: acc.total + c.total }),
			{ ready: 0, total: 0 }
		)
	);

	const totalCards = $derived.by(() => {
		const seen = new Set<Topic>();
		let count = 0;
		for (const cat of categories) {
			for (const item of cat.topics) {
				if (item.topic && !seen.has(item.topic)) {
					seen.add(item.topic);
					count += item.topic.cards.length;
				}
			}
		}
		return count;
	});
</script>

{#if !activeTopic}
	<a class="back-link" href="{base}/exam">← All exams</a>
	<div class="welcome">
		<h1 class="title">{title}</h1>
		<p class="tagline">{tagline}</p>
		<p class="progress-line">
			{overall.ready} of {overall.total} topics ready
		</p>
	</div>

	<div class="exam-mode-card">
		<div class="exam-mode-info">
			<span class="exam-mode-icon">🎓</span>
			<div>
				<h2 class="exam-mode-title">Exam Mode</h2>
				<p class="exam-mode-desc">
					{examSize} random questions drawn from the {totalCards} cards across all ready topics.
				</p>
			</div>
		</div>
		<button class="exam-mode-btn" onclick={startExamMode}>Start exam →</button>
	</div>

	<div class="categories">
		{#each categories as cat (cat.id)}
			{@const t = totals.find((x) => x.id === cat.id)}
			<section class="category">
				<header class="cat-header">
					<span class="cat-icon">{cat.icon}</span>
					<div class="cat-title-wrap">
						<h2 class="cat-title">{cat.title}</h2>
						<p class="cat-desc">{cat.description}</p>
					</div>
					{#if t}
						<span class="cat-count">{t.ready}/{t.total}</span>
					{/if}
				</header>

				<div class="topic-list">
					{#each cat.topics as item (item.id)}
						{#if item.topic}
							<button class="topic-pill ready" onclick={() => selectTopic(item.topic!)}>
								<span class="pill-icon">{item.topic.icon}</span>
								<span class="pill-label">{item.label}</span>
								<span class="pill-count">{item.topic.cards.length}</span>
							</button>
						{:else}
							<span class="topic-pill stub" title="No cards yet">
								<span class="pill-icon">◌</span>
								<span class="pill-label">{item.label}</span>
								<span class="pill-count">soon</span>
							</span>
						{/if}
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
	.back-link {
		display: inline-block;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.35rem 0.7rem;
		border: 1px solid var(--border);
		border-radius: 0.5rem;
		margin-bottom: 1rem;
		transition: all 0.15s ease;
	}

	.back-link:hover {
		border-color: var(--text-secondary);
		color: var(--text);
	}

	.welcome {
		text-align: center;
		margin-bottom: 1.75rem;
	}

	.title {
		font-size: 1.6rem;
		font-weight: 800;
		margin: 0 0 0.5rem;
		color: var(--text);
	}

	.tagline {
		font-size: 1rem;
		color: var(--text-secondary);
		margin: 0 0 0.5rem;
	}

	.progress-line {
		font-size: 0.85rem;
		color: var(--accent);
		font-weight: 600;
		margin: 0;
	}

	.exam-mode-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.1rem 1.2rem;
		margin-bottom: 1.5rem;
		border: 2px solid var(--accent);
		border-radius: 1rem;
		background: var(--accent-bg);
	}

	.exam-mode-info {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		flex: 1;
		min-width: 0;
	}

	.exam-mode-icon {
		font-size: 2rem;
		line-height: 1;
	}

	.exam-mode-title {
		font-size: 1.05rem;
		font-weight: 700;
		margin: 0;
		color: var(--text);
	}

	.exam-mode-desc {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin: 0.15rem 0 0;
		line-height: 1.4;
	}

	.exam-mode-btn {
		font-family: inherit;
		font-size: 0.9rem;
		font-weight: 700;
		color: white;
		background: var(--accent);
		border: none;
		border-radius: 0.6rem;
		padding: 0.65rem 1.1rem;
		cursor: pointer;
		white-space: nowrap;
		transition: transform 0.15s ease, box-shadow 0.15s ease;
	}

	.exam-mode-btn:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px var(--accent-glow);
	}

	.categories {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.category {
		border: 1px solid var(--border);
		border-radius: 1rem;
		padding: 1.1rem 1.2rem 1.2rem;
		background: var(--surface);
	}

	.cat-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		margin-bottom: 0.9rem;
	}

	.cat-icon {
		font-size: 1.5rem;
		line-height: 1;
	}

	.cat-title-wrap {
		flex: 1;
		min-width: 0;
	}

	.cat-title {
		font-size: 1.05rem;
		font-weight: 700;
		margin: 0;
		color: var(--text);
	}

	.cat-desc {
		font-size: 0.82rem;
		color: var(--text-secondary);
		margin: 0.1rem 0 0;
	}

	.cat-count {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--accent);
		background: var(--accent-bg);
		padding: 0.2rem 0.55rem;
		border-radius: 999px;
		white-space: nowrap;
	}

	.topic-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.topic-pill {
		font-family: inherit;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.45rem 0.7rem;
		border-radius: 999px;
		border: 1px solid var(--border);
		font-size: 0.85rem;
		color: var(--text);
		background: transparent;
		cursor: pointer;
		transition: all 0.15s ease;
	}

	.topic-pill.ready:hover {
		border-color: var(--accent);
		transform: translateY(-1px);
	}

	.topic-pill.stub {
		color: var(--text-secondary);
		opacity: 0.55;
		cursor: not-allowed;
		border-style: dashed;
	}

	.pill-icon {
		font-size: 1rem;
	}

	.pill-label {
		font-weight: 600;
	}

	.pill-count {
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--accent);
		background: var(--accent-bg);
		padding: 0.1rem 0.45rem;
		border-radius: 999px;
	}

	.topic-pill.stub .pill-count {
		color: var(--text-secondary);
		background: transparent;
		border: 1px solid var(--border);
	}
</style>
