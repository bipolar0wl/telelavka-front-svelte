<script>
  import { basket as basketStore, categories as categoriesStore, products as productsStore } from './../store/store'
  export let product = {id: 0, name: '', description: '', price: 0};
  export let basket = {};
  basketStore.subscribe((data) => { 
    basket = data
  })
  let count = basket[product.id] || 0;
  const increment = () => {
    count += 1;
    basket[product.id] = count;
  }
  const decrement = () => {
    count -= 1;
    if (basket[product.id] && count <= 0){
      delete basket[product.id];
      basket = basket;
    }else{
      basket[product.id] = count;
    }
  }
  let price = product.price.toString();
  // Копейки
  // price = price.slice(0, -2) + '.' + price.substring(price.length-2);
</script>

<div class="counter">
  {#if count == 0}
  <div class="counter-new">
    <button class="add-button" on:click={increment}>
      <span>{price} ₽</span>
    </button>
  </div>
  {:else}
  <div class="counter-edit">
    <button class="decrement" on:click={decrement}>
      -
    </button>
    <span class="count">{count}</span>
    <button class="increment" on:click={increment}>
      +
    </button>
  </div>
  {/if}
</div>

<style>
  .counter{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .counter .counter-new{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  .counter .counter-edit{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .counter .counter-edit button{
    min-width: 20px;
    width: 12vw;
  }
  .counter button{
    appearance: none;
    border: 0;
    border-radius: 10px;
    color: var(--tg-theme-text-color);
    padding: 4px 8px;
    font-size: 16px;
    font-weight: bold;
    min-height: 27px;
    height: 8vw;
  }
  .counter button{
    font-weight: 700;
  }
  .add-button{
    /* background-color: var(--tg-theme-button-color); */
    background-color: #F8A917;
    animation: slideOut ease 0.25s;
    width: 100%;
  }
  .add-button span{
    color: var(--tg-theme-text-color);
    /* background-color: var(--tg-theme-button-color); */
    background-color: #F8A917;
    font-weight: bold;
    white-space: nowrap;
  }
  .increment{
    /* background-color: var(--tg-theme-button-color); */
    color: var(--tg-theme-text-color);
    background-color: #F8A917;
    animation: slideIn ease 0.25s;
  }
  .decrement{
    background-color: #cf5a4d;
  }
  .count{
    color: var(--tg-theme-text-color);
  }
  .increment, .decrement{
    font-weight: bold;
    font-size: large;
    width: 35px;
  }
  @keyframes slideIn {
    from {
      /* transform: translateX(100%); */
      margin-left: -100%;
      width: 100%;
    }
    to {
      /* transform: translateX(0); */
      margin-left: 0%;
      width: 100%;
    }
  }
  @keyframes slideOut {
    from {
      width: 20%;
    }
    to {
      width: 100%;
    }
  }
</style>