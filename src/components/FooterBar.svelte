<script>
  // import { basket } from './../store/basket'
  export let basket = {};
</script>

{#if Object.keys(basket).length !== 0}
<a class="bucket" href="/basket">
  Купить
</a>
{/if}

<style>
  .bucket{
    display: flex;
    position: sticky;
    color: rgb(114, 160, 21);
    background: yellow;
    text-align: center;
    height: 60px;
    width: 100%;
    bottom: 0;
    justify-content: center;
    align-items: center;
    font-size: 26px;
    text-decoration: none;
  }
  .bucket.empty{
    bottom: -100;
  }
</style>