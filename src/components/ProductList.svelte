<script>
  import ProductCategoryGroup from './ProductCategoryGroup.svelte';
  export let rules = {edit: false}
  export let basket = {};
  export let categories = [];
  export let products = [];
  export let currentCategory = {id: 0, name: ''};
  
  import { onMount } from "svelte";
  onMount(async () => {
    let categoriesBlock = document.querySelectorAll('.product__group');
    categoriesBlock.forEach(element => {
      element.addEventListener("click", function(e) {
      }, false);
    });
    window.addEventListener('scroll', (e) => {scrollSpy(e)});
  })
  function scrollSpy(e){
    let elems = document.querySelectorAll(`.product__group`);
      for (let i = 0; i< elems.length; i++){
        let elem = elems[i];
        currentCategory = categories[i]
        if (window.pageYOffset < elem.offsetTop){
          break;
        }
      }
  }
</script>

<div class="products">
{#each categories as category (category.id)}
  <ProductCategoryGroup bind:basket category={category} products={products.filter((el) => el.category_id == category.id)} rules={rules} />
{/each}
</div>

<style>
  .products{
    /* width: 360px; */
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 1vw
  }
</style>