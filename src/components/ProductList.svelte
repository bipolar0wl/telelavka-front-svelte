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
      /* let id = element.getAttribute('data-category-name')
      console.log(`${id}`)
      console.log(document.querySelectorAll(`.product__group`))
      console.log(document.getElementById(`${id}`))
      console.log(element.scrollHeight) */
    });
    window.addEventListener('wheel', function(e) {
      let elems = document.querySelectorAll(`.product__group`);
      for (let i = 0; i< elems.length; i++){
        let elem = elems[i];
        // console.log(elem.getBoundingClientRect().top);
        if (window.pageYOffset < elem.offsetTop){
          break;
        }
        currentCategory = categories[i]
      }
      // console.log(elem.scrollHeight);
      // window.scrollTo({
      //   top: 1000,
      //   behavior: "smooth"
      // });
    });
  })
</script>

<div class="products">
{#each categories as category (category.id)}
  <ProductCategoryGroup bind:basket category={category} products={products.filter((el) => el.category_id == category.id)} rules={rules} />
{/each}
</div>

<style>
  .products{
    /* width: 340px; */
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>