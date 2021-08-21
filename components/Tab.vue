<template>
  <div class="tabs flexBox">
    <input
      id="nature"
      type="radio"
      class="tab__item"
      name="cp_tab"
      aria-controls="first_tab02"
      checked
    />
    <label for="nature" class="tab__item">Nature</label>
    <input
      id="sing"
      class="tab__item"
      type="radio"
      name="cp_tab"
      aria-controls="second_tab02"
    />
    <label for="sing" class="tab__item">Sing</label>
    <input
      id="book"
      class="tab__item"
      type="radio"
      name="cp_tab"
      aria-controls="third_tab02"
    />
    <label for="book" class="tab__item">Book</label>
    <input
      id="mindset"
      class="tab__item"
      type="radio"
      name="cp_tab"
      aria-controls="force_tab02"
    />
    <label for="mindset" class="tab__item">Mindset</label>
    <div id="nature__content" class="tab__content">
      <h2>Nature</h2>
      <p>Explanation of sing</p>
    </div>
    <div id="sing__content" class="tab__content">
      <h2>Sing</h2>
      <p>Explanation of sing</p>
    </div>
    <div id="book__content" class="tab__content">
      <h2>Book</h2>
      <p>Explanation of book</p>
    </div>
    <div id="mindset__content" class="tab__content">
      <h2>Mindset</h2>
      <p>Explanation of mindset</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
}
</script>
