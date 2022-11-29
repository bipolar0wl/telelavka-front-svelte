<script>
  export let category = {id: 0, name: ''}
  export let currentCategory = {id: 0, name: ''}
</script>

<a href="#{category.name}" data-category-name={category.name} class="category {currentCategory.id === category.id ? 'category--active' : ''}" 
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
</a>

<style>
.category{
  color: #9b9897;
  border-radius: 5px;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  padding: 7px 14px;
  margin: 0 5px;
  text-decoration: none;
}
.category--active{
  background: #514d4c;
  border-radius: 25px;
  color: #fff;
}
</style>