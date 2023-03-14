<script>
  export let product = {id: 0, name: '', description: '', price: 0};
  export let rules = {edit: false};
  export let basket = {};
  import Counter from './ProductCounter.svelte';
  let imgs = ['/src/data/images/dress.png', '/src/data/images/hood.png', '/src/data/images/tie.png', '/src/data/images/shoe.png']
</script>

<div class="product">
  <!-- <img class="product__img" src={product.image} alt="Nothing here"/> -->
  <img class="product__img" src={product.image} alt="Nothing here"/>
  <div class="product__info">
    <div>
      <p class="product__name">{product.name}</p>
      <p class="product__description">{product.description}</p>
    </div>
    <Counter bind:basket product={product}/>
  </div>
  {#if rules.edit}
    <button>Редактировать</button>
  {/if}
</div>

<style>
  .product{
    /* margin: 10px 0; */
    /* outline: 1px solid gray; */
    border-radius: 5px;
    width: 100%;
  }
  .product__info{
    padding: 0;
  }
  .product__name{
    color: var(--tg-theme-text-color);
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
    color: var(--tg-theme-hint-color);
    font-size: 12px;
    margin: 2px 0 5px 0;
  }
  .product__img{
    max-width: 100%;
    /* max-height: 45vw; */
    /* min-width: 45vw; */
    /* min-height: 45vw; */
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    display: block;
    overflow: hidden;
    aspect-ratio: 1/1;
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