<script>
  export let category = {id: 0, name: ''}
  export let currentCategory = {id: 0, name: ''}
</script>

<!-- <a href="#{category.name}" data-category-name={category.name} class="category {currentCategory.id === category.id ? 'category--active' : ''}" 
  on:click="{(e) => {
    e.preventDefault();
    currentCategory = category;
    let elem = document.getElementById(category.name)
    let scrollHeight = elem ? elem.offsetTop : 0;
    window.scrollTo({
      top: scrollHeight - 40,
      behavior: "smooth"
    });
  }}"
  >
  {category.name}
</a> -->
<a href="#{category.name}" data-category-name={category.name} class="category {currentCategory.id === category.id ? 'category--active' : ''}" 
  on:click="{(e) => {
    e.preventDefault();
    let elem = document.getElementById(category.name)
    let scrollHeight = elem ? elem.offsetTop : 0;
    window.scrollTo({
      top: scrollHeight - 40,
      behavior: "smooth"
    });
    setTimeout(() => {
      currentCategory = category;
    }, 250)
  }}"
  >
  {category.name}
</a>

<style>
.category{
  color: var(--tg-theme-hint-color);
  background: var(--tg-theme-secondary-bg-color);
  border-radius: 5px;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  padding: 7px 14px;
  text-decoration: none;
}
.category--active{
  background: var(--tg-theme-bg-color);
  border-radius: 25px;
  color: var(--tg-theme-text-color);
}
</style>