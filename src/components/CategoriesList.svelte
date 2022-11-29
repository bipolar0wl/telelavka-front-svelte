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
  background-color: #1c1c1e;
  position: sticky;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  overflow: auto;
  white-space: nowrap;
}
.categories::-webkit-scrollbar {
    display: none;
}
</style>