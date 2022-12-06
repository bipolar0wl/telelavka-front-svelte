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
  categoriesStore.subscribe((data) => {
    categories = data
  })
  productsStore.subscribe((data) => {
    products = data
  })
  $: basketStore.set(basket);

  onMount(async () => {
    let tg = window.Telegram.WebApp;
    currentCategory = categories[0]
    tg.expand();
    tg.MainButton.setText('Посмотреть заказ')
    tg.MainButton.setParams({
      'color': '#31b545'
    })
    tg.setBackgroundColor('secondary_bg_color');
    basketStore.subscribe((data) => { 
      basket = data
      if (Object.keys(basket).length !== 0){
        tg.MainButton.show()
      }else{
        tg.MainButton.hide()
      }
    })
  });
</script>

<main>
  <div class="app">
    <CategoriesList bind:categories bind:currentCategory />
    <ProductList bind:basket products={products} categories={categories} bind:currentCategory />
  </div>
</main>

<style>
  *{
    scroll-behavior:smooth;
  }
  body{
    background: var(--tg-theme-secondary-bg-color);
  }
  .app{
    background: var(--tg-theme-secondary-bg-color);
    color: var(--tg-theme-text-color);
    /* max-width: 360px; */
    margin: 0 auto;
  }
</style>