<script>
  export let category = {id: 0, name: ''}
  export let currentCategory = {id: 0, name: ''}
  const headerOffset = 40;

  function scrollSpy() {
    let elem = document.getElementById(category.name);
    setTimeout(() => {
      if (document.documentElement.clientHeight == document.body.scrollHeight - window.pageYOffset || window.pageYOffset + headerOffset == elem.offsetTop){
        currentCategory = category;
        setTimeout(() => {
          currentCategory = category;
        }, 100)
      }else{
        scrollSpy();
      }
    }, 100)
  }
</script>

<a href="#{category.name}" data-category-name={category.name} class="category {currentCategory.id === category.id ? 'category--active' : ''}" 
  on:click="{(e) => {
    e.preventDefault();
    let elem = document.getElementById(category.name)
    let scrollHeight = elem ? elem.offsetTop : 0;
    window.scrollTo({
      top: scrollHeight - headerOffset,
      behavior: "smooth"
    });
    scrollSpy();
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