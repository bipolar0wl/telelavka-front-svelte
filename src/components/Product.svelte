<script>
  export let product = {id: 0, name: '', description: '', price: 0};
  export let rules = {edit: false};
  export let basket = {};
  import Counter from './ProductCounter.svelte';
  let imgs = ['/src/data/images/dress.png', '/src/data/images/hood.png', '/src/data/images/tie.png', '/src/data/images/shoe.png']
</script>

<div class="product">
  <!-- <img class="product__img" src="https://picsum.photos/150" alt="https://random.imagecdn.app/120/120"/> -->
  <img class="product__img" src={product.image} alt="Nothing here"/>
  <div class="product__info">
    <p class="product__name">{product.name}</p>
    <p class="product__description">{product.description}</p>
    <Counter bind:basket product={product}/>
  </div>
  {#if rules.edit}
    <button>Редактировать</button>
  {/if}
</div>

<style>
  .product{
    margin: 10px;
    /* outline: 1px solid gray; */
    border-radius: 5px;
    width: 150px;
  }
  .product__info{
    padding: 0;
  }
  .product__name{
    color: #fff;
    font-size: 16px;
    /* font-weight: bold; */
    padding: 0;
    margin: 5px 0 0 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* margin-block: 10px; */
  }
  .product__description{
    color: #fff;
    font-size: 12px;
    margin: 0 0 5px 0;
  }
  .product__img{
    max-width: 150px;
    max-height: 150px;
    min-width: 150px;
    min-height: 150px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
  }
  .product__img:hover{
    /* -webkit-animation: image_blur 2s;  */
    /* filter: blur(10px); */
  }
  @-webkit-keyframes image_blur {
    0% { -webkit-filter: blur(0px)}
    50% { -webkit-filter: blur(5px)}
    100% { -webkit-filter: blur(10px)}
  }
</style>