<script>
  import Product from './Product.svelte';
  export let category = {id: 0, name: ''};
  export let products = [{id: 0, title: '', body: ''}];
  export let basket = {};
  export let rules = {edit: false};

</script>

<div class="product__group" id="{category.name}">
  <div class="product__group__category"><b>{category.name}</b></div>
  <div class="product__group__produtcs">
    {#each products as product (product.id)}
      <Product bind:basket product={product} rules={rules} />
    {/each}
  </div>
</div>

<style>
  .product__group{
    width: 100%;
    display: flex;
    /* display: grid; */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    /* justify-content: flex-start; */
    align-items: center;
    /* padding: 5px; */
  }
  .product__group__category{
    color: var(--tg-theme-text-color);
    padding-left: 3vw;
    font-size: 28px;
    width: 100%;
    margin-bottom: 1px;
  }
  .product__group__produtcs{
    margin-top: 2vw;
    margin-bottom: 2vw;
    width: 100%;
    display: grid;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 0 3vw;
    gap: 3vw;
  }
</style>