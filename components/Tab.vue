<template>
  <div class="tabs">
    <input
      id="tab__portrait1"
      class="tab__input"
      type="radio"
      name="cp_tab"
      aria-controls="first_tab02"
      checked
    />
    <label for="tab__portrait1" class="tab__label">Nature</label>
    <input
      id="tab__portrait2"
      class="tab__input"
      type="radio"
      name="cp_tab"
      aria-controls="second_tab02"
    />
    <label for="tab__portrait2" class="tab__label">Sing</label>
    <input
      id="tab__portrait3"
      class="tab__input"
      type="radio"
      name="cp_tab"
      aria-controls="third_tab02"
    />
    <label for="tab__portrait3" class="tab__label">Book</label>
    <input
      id="tab__portrait4"
      class="tab__input"
      type="radio"
      name="cp_tab"
      aria-controls="force_tab02"
    />
    <label for="tab__portrait4" class="tab__label">Force Tab</label>
    <div class="tab__panels">
      <div class="tab__panel">
        <h2>Daily</h2>
        <p><SectionImage /></p>
      </div>
      <div class="tab__panel">
        <h2>Sing</h2>
        <p><SectionImage /></p>
      </div>
      <div class="tab__panel">
        <h2>Book</h2>
        <p>Third Tab text</p>
      </div>
      <div class="tab__panel">
        <h2>Mindset</h2>
        <p>Force Tab text</p>
      </div>
    </div>
  </div>
</template>
<script>
import SectionImage from '@/components/SectionImage.vue'

export default {
  name: 'Tab',
  components: {
    SectionImage,
  },
}
</script>
