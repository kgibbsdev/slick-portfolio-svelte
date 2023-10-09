<script lang="ts">
	import Card from '$lib/components/Card/Card.svelte';
	import { base } from '$app/paths';
	import { SKILLS } from '$lib/params';
	import SearchPage from '$lib/components/SearchPage.svelte';
	import type { Skill } from '$lib/types';
	import { isBlank } from '@riadh-adrani/utils';
	import { getAssetURL } from '$lib/data/assets';
	import UIcon from '$lib/components/Icon/UIcon.svelte';

	const { items, title } = SKILLS;

	let result: Array<Skill> = items;

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		if (isBlank(query)) {
			result = items;
		}

		result = items.filter((it) => it.name.toLowerCase().includes(query));
		console.log('results:');
		result.forEach((element) => {
			console.log(element.name);
		});
	};
</script>

<SearchPage {title} on:search={onSearch}>
	{#if result.length === 0}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not find anything...</p>
		</div>
	{:else if result.length === items.length}
		<h2 class="mt-5 mb-5 text-center">Professional Experience - Current</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mb-10">
			{#each result.slice(0, 4) as skill (skill.slug)}
				<Card
					classes={['cursor-pointer decoration-none']}
					tiltDegree={1}
					href={`${base}/skills/${skill.slug}`}
					bgImg={getAssetURL(skill.logo)}
				>
					<p class="text-[var(--tertiary-text)]">{skill.name}</p>
				</Card>
			{/each}
		</div>
		<h2 class="mt-5 mb-5 text-center">Professional Experience - Previous</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mb-10">
			{#each result.slice(4, 9) as skill (skill.slug)}
				<Card
					classes={['cursor-pointer decoration-none']}
					tiltDegree={1}
					href={`${base}/skills/${skill.slug}`}
					bgImg={getAssetURL(skill.logo)}
				>
					<p class="text-[var(--tertiary-text)]">{skill.name}</p>
				</Card>
			{/each}
		</div>

		<!-- Personal Experience Section -->
		<h2 class="mt-5 mb-5 text-center">Personal Experience - Side Projects</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
			{#each result.slice(9) as skill (skill.slug)}
				<Card
					classes={['cursor-pointer decoration-none']}
					tiltDegree={1}
					href={`${base}/skills/${skill.slug}`}
					bgImg={getAssetURL(skill.logo)}
				>
					<p class="text-[var(--tertiary-text)]">{skill.name}</p>
				</Card>
			{/each}
		</div>
	{:else}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5 mt-10">
			{#each result as skill (skill.slug)}
				<Card
					classes={['cursor-pointer decoration-none']}
					tiltDegree={1}
					href={`${base}/skills/${skill.slug}`}
					bgImg={getAssetURL(skill.logo)}
				>
					<p class="text-[var(--tertiary-text)]">{skill.name}</p>
				</Card>
			{/each}
		</div>
	{/if}
</SearchPage>
