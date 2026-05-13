<script lang="ts">
	import { page } from '$app/stores';
	import { a2ExamCategories } from '$lib/a2-exam';
	import ExamLanding from '$lib/components/ExamLanding.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
</script>

<SeoHead
	title="A2 Spanish Exam Prep"
	description="A2-level flashcards aligned with the recap syllabus: pretérito indefinido, ser/estar, object pronouns, basic reported speech, and themed A2 vocabulary."
	pathname={$page.url.pathname}
/>

<ExamLanding
	level="A2"
	title="A2 Exam Prep"
	tagline="Core topics from the A2 syllabus — past tenses, ser/estar, object pronouns, plus everyday vocab."
	categories={a2ExamCategories}
/>
