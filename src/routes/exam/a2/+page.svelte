<script lang="ts">
	import { a2ExamCategories } from '$lib/a2-exam';
	import ExamLanding from '$lib/components/ExamLanding.svelte';
</script>

<svelte:head>
	<title>A2 Exam Prep — Spanish Cards</title>
</svelte:head>

<ExamLanding
	level="A2"
	title="A2 Exam Prep"
	tagline="Core topics from the A2 syllabus — past tenses, ser/estar, object pronouns, plus everyday vocab."
	categories={a2ExamCategories}
/>
