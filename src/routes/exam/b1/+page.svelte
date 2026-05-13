<script lang="ts">
	import { page } from '$app/stores';
	import { examCategories } from '$lib/exam';
	import ExamLanding from '$lib/components/ExamLanding.svelte';
	import SeoHead from '$lib/components/SeoHead.svelte';
</script>

<SeoHead
	title="B1 Spanish Exam Prep"
	description="Intermediate B1 flashcards: conditional, subjuntivo, relative clauses, reported speech, passive voice and themed vocabulary."
	pathname={$page.url.pathname}
/>

<ExamLanding
	level="B1"
	title="B1 Exam Prep"
	tagline="Priority topics for the B1 final. Tap a topic to drill — greyed-out cards are syllabus items still waiting for cards."
	categories={examCategories}
/>
