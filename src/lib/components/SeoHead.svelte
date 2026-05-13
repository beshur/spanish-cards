<script lang="ts">
	import { resolveSeo, SITE_NAME, type SeoData } from '$lib/seo';
	import defaultOgImage from '$lib/assets/spanish.webp';

	let { title, description, pathname, image, type }: SeoData = $props();

	const seo = $derived(resolveSeo({ title, description, pathname, image: image ?? defaultOgImage, type }));
</script>

<svelte:head>
	<title>{seo.fullTitle}</title>
	<meta name="description" content={seo.description} />
	<link rel="canonical" href={seo.url} />

	<meta property="og:type" content={seo.type} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:title" content={seo.title} />
	<meta property="og:description" content={seo.description} />
	<meta property="og:url" content={seo.url} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="714" />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
</svelte:head>
