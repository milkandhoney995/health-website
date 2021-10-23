<template>
  <div class="tabs flexBox">
    <input
      id="mindset"
      type="radio"
      class="tab__item"
      name="cp_tab"
      aria-controls="mindset"
      checked
    />
    <label for="mindset" class="tab__item">Mindset</label>
    <input
      id="sing"
      class="tab__item"
      type="radio"
      name="cp_tab"
      aria-controls="sing"
    />
    <label for="sing" class="tab__item">Sing</label>
    <input
      id="book"
      class="tab__item"
      type="radio"
      name="cp_tab"
      aria-controls="book"
    />
    <label for="book" class="tab__item">Book</label>
    <input
      id="recipe"
      class="tab__item"
      type="radio"
      name="cp_tab"
      aria-controls="recipe"
    />
    <label for="recipe" class="tab__item">recipe</label>
    <div id="mindset__content" class="tab__content">
      <h2>Mindset</h2>
      <p>Explanation of mindset</p>
    </div>
    <div id="sing__content" class="tab__content">
      <h2>Sing</h2>
      <p>Explanation of sing</p>
    </div>
    <div id="book__content" class="tab__content">
      <h2>Book</h2>
      <p>Explanation of book</p>
    </div>
    <div id="recipe__content" class="tab__content">
      <h2>recipe</h2>
      <p>Explanation of recipe</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
}
</script>
