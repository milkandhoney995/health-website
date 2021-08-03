<template>
  <header>
    <!-- PC -->
    <!-- <div class="header__fix__pc show__pc">
      <div class="center">
        <nav class="menu">
          <ul class="menu__alignment flex">
            <li class="menu__item">
              <a href="" class="link__fade menu__link">ABOUT</a>
            </li>
            <li class="menu__item">
              <a href="" class="link__fade menu__link">SERVICE</a>
            </li>
            <li class="menu__item">
              <a href="" class="link__fade menu__link">BLOG</a>
            </li>
            <li class="menu__item">
              <a href="" class="link__fade menu__link">RECIPE</a>
            </li>
            <li class="menu__item">
              <a href="" class="link__fade menu__link">CONTACT</a>
            </li>
          </ul>
          <ul class="sns__pc menu__alignment flex">
            <li class="menu__item">facebook</li>
            <li class="menu__item">Instagram</li>
          </ul>
        </nav>
      </div>
    </div> -->
    <!-- SP -->
    <div class="header__fix__sp">
      <div class="center">
        <div class="logo">
          <a>
            <h1 class="logo__title">UTANO HARADA</h1>
          </a>
        </div>
        <div class="btn">
          <div class="hamburger__btn" @click="ActiveBtn = !ActiveBtn">
            <span
              class="hamburger__item"
              :class="{ item__change01: ActiveBtn }"
            ></span>
            <span
              class="hamburger__item"
              :class="{ item__change02: ActiveBtn }"
            ></span>
            <span
              class="hamburger__item"
              :class="{ item__change03: ActiveBtn }"
            ></span>
          </div>
        </div>

        <transition name="hamburger__menu">
          <div v-show="ActiveBtn" class="wrapper">
            <div class="center">
              <div class="box__top">
                <div class="logo">
                  <a>
                    <h1>UTANO HARADA</h1>
                  </a>
                </div>
              </div>
              <nav class="menu">
                <ul class="menu__wrap menu__alignment flex">
                  <li class="menu__item">
                    <a href="" class="link__fade menu__link">ABOUT</a>
                  </li>
                  <li class="menu__item">
                    <a href="" class="link__fade menu__link">SERVICE</a>
                  </li>
                  <li class="menu__item">
                    <a href="" class="link__fade menu__link">BLOG</a>
                  </li>
                  <li class="menu__item">
                    <a href="" class="link__fade menu__link">RECIPE</a>
                  </li>
                  <li class="menu__item">
                    <a href="" class="link__fade menu__link">CONTACT</a>
                  </li>
                </ul>
              </nav>
              <div class="box__btm">
                <ul class="sns__pc menu__alignment">
                  <li class="menu__item">facebook</li>
                  <li class="menu__item">Instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      ActiveBtn: false,
    }
  },
}
</script>
