<script>
	import { onMount } from 'svelte';
	import { element } from 'svelte/internal';
  import Category from './Category.svelte';
  export let categories = []
  export let currentCategory = {id: 0, name: ''}

  onMount(() => {
    let categoriesList = document.getElementsByClassName('category');
    [].forEach.call(categoriesList, function (e, category, event) {
      
    });
  })  
</script>

<div class="categories">
  {#each categories as category (category.id)}
    <Category category={category} bind:currentCategory />
  {/each}
</div>

<style>
.categories{
  display: flex;
  top: 0;
  /* margin-left: 9px; */
  margin: 0 3vw;
  background: var(--tg-theme-secondary-bg-color);
  position: sticky;
  align-items: center;
  justify-content: flex-start;
  padding: 5px 0;
  overflow: auto;
  white-space: nowrap;
}
.categories::-webkit-scrollbar {
    display: none;
}
</style>