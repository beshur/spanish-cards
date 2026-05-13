<script lang="ts">
	import { examCategories } from '$lib/exam';
	import ExamLanding from '$lib/components/ExamLanding.svelte';
</script>

<svelte:head>
	<title>B1 Exam Prep — Spanish Cards</title>
</svelte:head>

<ExamLanding
	level="B1"
	title="B1 Exam Prep"
	tagline="Priority topics for the B1 final. Tap a topic to drill — greyed-out cards are syllabus items still waiting for cards."
	categories={examCategories}
/>
