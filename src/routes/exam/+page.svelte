<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Exam Prep — Spanish Cards</title>
</svelte:head>

<div class="welcome">
	<h1 class="title">Exam Prep</h1>
	<p class="tagline">Pick your level to drill the syllabus topics.</p>
</div>

<div class="levels">
	<a class="level-card ready" href="{base}/b1-exam">
		<span class="level-icon">🎓</span>
		<div class="level-body">
			<h2 class="level-title">B1</h2>
			<p class="level-desc">
				Intermediate exam — conditional, subjuntivo, relative clauses, vocab, and more.
			</p>
		</div>
		<span class="level-cta">Start →</span>
	</a>

	<span class="level-card stub" title="Coming soon">
		<span class="level-icon">📚</span>
		<div class="level-body">
			<h2 class="level-title">A2</h2>
			<p class="level-desc">Elementary exam — coming soon.</p>
		</div>
		<span class="level-cta">soon</span>
	</span>
</div>

<style>
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
		margin: 0;
	}

	.levels {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 560px;
		margin: 0 auto;
	}

	.level-card {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.1rem 1.2rem;
		border: 2px solid var(--border);
		border-radius: 1rem;
		background: var(--surface);
		color: var(--text);
		text-decoration: none;
		transition: all 0.15s ease;
	}

	.level-card.ready {
		border-color: var(--accent);
		background: var(--accent-bg);
	}

	.level-card.ready:hover {
		transform: translateY(-1px);
		box-shadow: 0 6px 18px var(--accent-glow);
	}

	.level-card.stub {
		opacity: 0.55;
		cursor: not-allowed;
		border-style: dashed;
	}

	.level-icon {
		font-size: 2rem;
		line-height: 1;
	}

	.level-body {
		flex: 1;
		min-width: 0;
	}

	.level-title {
		font-size: 1.2rem;
		font-weight: 800;
		margin: 0;
	}

	.level-desc {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin: 0.2rem 0 0;
		line-height: 1.4;
	}

	.level-cta {
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--accent);
		white-space: nowrap;
	}

	.level-card.stub .level-cta {
		color: var(--text-secondary);
	}
</style>
