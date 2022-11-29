<script>
	import { basket as basketStore, categories as categoriesStore, products as productsStore } from '../store/store'
  import { onMount } from "svelte";
  import CategoriesList from './../components/CategoriesList.svelte'
  import ProductList from './../components/ProductList.svelte'
  import FooterBar from './../components/FooterBar.svelte';

  let categories = [];
  let products = [];
  let currentCategory = {};
  let basket = {};
  basketStore.subscribe((data) => { 
    basket = data
  })
  categoriesStore.subscribe((data) => {
    categories = data
  })
  productsStore.subscribe((data) => {
    products = data
  })
  $: basketStore.set(basket);

  onMount(async () => {
    currentCategory = categories[0]
    let tg = window.Telegram.WebApp;
    tg.setBackgroundColor('#ffa')
    tg.expand();
    tg.MainButton.show()
  });
</script>

<main>
  <div class="app">
    <CategoriesList bind:categories bind:currentCategory />
    <ProductList bind:basket products={products} categories={categories} bind:currentCategory />
    <FooterBar bind:basket />
  </div>
</main>

<style>
  *{
    scroll-behavior:smooth;
  }
  body{
    background-color: #1c1c1e;
  }
  .app{
    background: var(--tg-theme-button-color);
    color: var(--tg-theme-button-text-color);
    /* max-width: 440px; */
    margin: 0 auto;
  }
</style>