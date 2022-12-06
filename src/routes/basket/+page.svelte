<script>
	import { basket as basketStore, products as productsStore } from '../../store/store'
  let basket = {};
  basketStore.subscribe((data) => { 
    basket = data
  })
  let products = [];
  productsStore.subscribe((data) => { 
    products = data
  })
</script>

<div class="basket">
  <div class="basket__back">
    <a href="/">←</a>
    <a href="/">Магазин</a>
  </div>
  <div class="basket__order">
    <div class="basket__order__actions">
      <p class="basket__order__title">Ваш заказ</p>
      <a href="/">Назад</a>
    </div>
    <div class="basket__order__list">
      {#each products as product (product.id)}
      {#if basket[product.id] != undefined}
        <div class="item">
          <div class="item__info">
            <img class="item__img" src={product.image} alt="">
            <div class="item__text">
              <div>
                <span class="item__name">{product.name}</span><span class="item__count">{basket[product.id] || 0}x</span>
              </div>
              <span class="item__description">{product.description}</span>
            </div>
          </div>
          <div class="item__price">
            {product.price}
          </div>
        </div>
      {/if}
      {/each}
    </div>
  </div>
  <div>
    <textarea class="basket__comment" type="text" placeholder="Добавить комментарий"></textarea>
  </div>
  <a class="basket__buy">
    Заказать
    <!-- Заказать {basket.reduce((sum, val) => sum + val, 0)} ₽ -->
  </a>
</div>

<style>
  *{
    scroll-behavior:smooth;
    background: var(--tg-theme-bg-color);
    color: var(--tg-theme-text-color);
  }
  body{
    margin: 0;
  }
  a{
    text-decoration: none;
  }
  .basket{
    /* max-width: 440px; */
    margin: 0 auto;
  }
  .basket__back, .basket__order__actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
  }
  .basket__order__title{
    padding: 6px;
    font-size: 24px;
  }
  .basket__comment{
    width: 100%;
    border: none;
    padding: 0px;
  }
  .basket__buy{
    display: flex;
    position: fixed;
    color: #fff;
    background: #31b545;
    text-align: center;
    height: 60px;
    width: 100%;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    font-weight: bold;
    text-decoration: none;
  }
  .basket__buy-btn{
    width: 100%;
    padding: 15px;
  }
  .item{
    padding: 2px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: space-between;
  }
  .item__info{
    display: flex;
  }
  .item__text{
    padding-left: 5px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
  .item__name{
    font-weight: bold;
  }
  .item__count{
    padding-left: 5px;
    color: gold;
  }
  .item__description{
    color: lightgray
  }
  .item__img{
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
    background-color: white;
    border-radius: 10px;
  }
</style>