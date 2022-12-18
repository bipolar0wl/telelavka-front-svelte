<script>
	import { basket as basketStore, categories as categoriesStore, products as productsStore } from '../store/store'
  import { onMount } from "svelte";
  import CategoriesList from './../components/CategoriesList.svelte'
  import ProductList from './../components/ProductList.svelte'
  import FooterBar from './../components/FooterBar.svelte';
	import Basket from './../components/Basket.svelte';

  let categories = [];
  let products = [];
  let currentCategory = {};
  let basket = {};
  let page = 0;
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
    tg.MainButton.onClick(() => {
      page = (page == 0) ? 1 : 0;
    });
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
    {#if page == 0}
      <CategoriesList bind:categories bind:currentCategory />
      <ProductList bind:basket products={products} categories={categories} bind:currentCategory />
    {:else}
      <Basket bind:page />
    {/if}
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