<script>
  import ProductList from './../../components/ProductList.svelte'
</script>

<main>
  <button>Добавить</button>
  Имеющиеся товары
  <div class="products">
    <ProductList rules={{edit:true}}/>
  </div>
</main>

<style>
  .products{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>