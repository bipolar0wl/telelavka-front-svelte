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
  price = price.slice(0, -2) + '.' + price.substring(price.length-2);
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
  .counter button{
    appearance: none;
    border: 0;
    border-radius: 10px;
    color: #fff;
    padding: 4px 8px;
    font-size: 16px;
  }
  .add-button{
    background-color: #f9a819;
    animation: slideOut ease 0.25s;
    width: 100%;
  }
  .add-button span{
    color: black;
    background-color: #f9a819;
    font-weight: bold;
    white-space: nowrap;
  }
  .increment{
    background-color: #f9a819;
    animation: slidein ease 0.25s;
  }
  .decrement{
    background-color: #cf5a4d;
  }
  .count{
    color: #fff;
  }
  .increment, .decrement{
    font-weight: bold;
    font-size: large;
    width: 35px;
  }
  @keyframes slidein {
    from {
      margin-left: -100%;
      width: 100%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
  }
  @keyframes slideOut {
    from {
      width: 40%;
    }
    to {
      width: 100%;
    }
  }
</style>