<script>
	import Product from "./Product.svelte";
  // export let basket = [];
  // console.log($basket);
</script>

<div>
  <div>
    <button>←</button>
    <p>Магазин</p>
  </div>
  <div>
    <p>Ваш заказ</p>
    <a>Назад</a>
  </div>
  {#each basket as product (product.id)}
    <div>
      <img src="" alt="">
      <div>
        <span>{product.name}</span><span>{product.count}</span>
        <span>{product.description}</span>
      </div>
      <div></div>
    </div>
  {/each}
  <div>
    <input type="text" placeholder="Добавить комментарий">
  </div>
  <div>
    <button>Заказать {basket.reduce((sum, val) => sum + val, 0)} ₽</button>
  </div>
</div>

<style>

</style>