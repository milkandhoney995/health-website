<template>
  <header>
    <!-- PC -->
    <div class="header__fix__pc show__pc">
      <div class="center">
        <nav class="menu">
          <ul class="menu__alignment flexbox">
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
          <ul class="menu__alignment flexbox">
            <li class="menu__item">facebook</li>
            <li class="menu__item">Instagram</li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- SP -->
    <div class="header__fix__sp show__sp">
      <div class="wrapper center">
        <div v-show="!ActiveBtn" class="logo">
          <a href="">
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
          <div v-show="ActiveBtn" class="navi">
            <nav class="menu">
              <div class="logo">
                <a href="">
                  <h1 class="logo__title">UTANO HARADA</h1>
                </a>
              </div>
              <ul class="menu__wrap menu__alignment">
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
              <div class="box__btm">
                <ul class="menu__alignment">
                  <li class="menu__item__sns">facebook</li>
                  <li class="menu__item__sns">Instagram</li>
                </ul>
              </div>
            </nav>
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
