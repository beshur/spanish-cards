<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import favicon from '$lib/assets/favicon.svg';
	import './styles.css';

	let { children } = $props();

	const navLinks = [
		{ href: `${base}/`, label: 'Practice' },
		{ href: `${base}/exam`, label: 'B1 Exam' }
	];

	function isActive(href: string, current: string): boolean {
		const home = `${base}/`;
		if (href === home) return current === home || current === base;
		return current === href || current.startsWith(href + '/');
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="shell">
	<header class="app-header">
		<div class="header-content">
			<a class="logo" href="{base}/">
				<span class="logo-icon">🇪🇸</span>
				Spanish Cards
			</a>
			<nav class="top-nav">
				{#each navLinks as link (link.href)}
					<a
						href={link.href}
						class="nav-link"
						class:active={isActive(link.href, $page.url.pathname)}
					>
						{link.label}
					</a>
				{/each}
			</nav>
		</div>
	</header>

	<main class="main">
		{@render children()}
	</main>

	<footer class="app-footer">
		<p>Practice makes perfect. Keep going! 💪</p>
	</footer>
</div>

<style>
	.shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	@media (max-width: 767px) {
		.shell {
			min-height: 200vh;
		}
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
		gap: 1rem;
	}

	.logo {
		font-size: 1.25rem;
		font-weight: 800;
		color: var(--text);
		margin: 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
	}

	.logo-icon {
		font-size: 1.4rem;
	}

	.top-nav {
		display: flex;
		gap: 0.25rem;
	}

	.nav-link {
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-secondary);
		text-decoration: none;
		padding: 0.4rem 0.8rem;
		border-radius: 0.5rem;
		border: 1px solid transparent;
		transition: all 0.15s ease;
	}

	.nav-link:hover {
		color: var(--text);
		border-color: var(--border);
	}

	.nav-link.active {
		color: var(--accent);
		background: var(--accent-bg);
	}

	.main {
		flex: 1;
		max-width: 800px;
		width: 100%;
		margin: 0 auto;
		padding: 2rem 1.5rem;
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
