<script>
	import { basket as basketStore, products as productsStore } from '../store/store'
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
  $: basketStore.set(basket);

  onMount(async () => {
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts?limit=10");
    // products = await response.json();
    products = [
      {
        "id": 1,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Худи",
        "price": 200000
      },
      {
        "id": 2,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Лонгслив",
        "price": 150000
      },
      {
        "id": 3,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Футболка Поло",
        "price": 100000
      },
      {
        "id": 4,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Футболка",
        "price": 85000
      },
      {
        "id": 5,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Платье",
        "price": 200000
      },
      {
        "id": 6,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Джинсовая куртка",
        "price": 250000
      },
      {
        "id": 7,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Джинсы",
        "price": 180000
      },
      {
        "id": 8,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Брюки",
        "price": 140000
      },
      {
        "id": 9,
        "description": null,
        "image_uuid": null,
        "category_id": 2,
        "name": "Бомбер",
        "price": 250000
      },
      {
        "id": 10,
        "description": null,
        "image_uuid": null,
        "category_id": 3,
        "name": "Туфли",
        "price": 200000
      },
      {
        "id": 11,
        "description": null,
        "image_uuid": null,
        "category_id": 3,
        "name": "Кроссовки",
        "price": 300000
      },
      {
        "id": 12,
        "description": null,
        "image_uuid": null,
        "category_id": 3,
        "name": "Шлёпанцы",
        "price": 100000
      },
      {
        "id": 13,
        "description": null,
        "image_uuid": null,
        "category_id": 4,
        "name": "Боксёры",
        "price": 50000
      },
      {
        "id": 14,
        "description": null,
        "image_uuid": null,
        "category_id": 4,
        "name": "Галстук",
        "price": 60000
      },
      {
        "id": 15,
        "description": null,
        "image_uuid": null,
        "category_id": 4,
        "name": "Сумочка",
        "price": 120000
      }
    ];
    productsStore.set(products);
    categories = [
      // {
      //   "id": 1,
      //   "name": "Распродажа"
      // },
      {
        "id": 2,
        "name": "Одежда"
      },
      {
        "id": 3,
        "name": "Обувь"
      },
      {
        "id": 4,
        "name": "Аксессуары"
      }
    ]
    currentCategory = categories[0]
    let tg = window.Telegram.WebApp;
    tg.setBackgroundColor('#ffa')
    tg.expand();
    console.log(tg)
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