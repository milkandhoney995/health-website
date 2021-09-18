<template>
  <div>
    <div class="img_work_main">
      <div class="img--main">
        <img
          src="require('@/assets/images/Church.jpeg')"
          alt=""
          class="height"
        />
      </div>
    </div>
    <div class="wrap_list_work_thumb">
      <div class="mCustomScrollBox mCS-light mCSB_vertical mCSB_inside">
        <!-- JSでクラスにindexをつける -->
        <div class="mCSB_1_container mCSB_container">
          <!-- TDO:親側から画像の配列を指定し、表示させる -->
          <ul class="list_work_thumb">
            <!-- img_inviewはいらない？ -->
            <li class="link_fade img_inview">
              <div class="img">
                <div class="wrap_img_inview">
                  <img src="" alt="" class="mCS_img_loaded" />
                </div>
              </div>
              <div class="title"></div>
            </li>
          </ul>
          <div class="box_more show_sp">
            <div class="title_more">
              <div class="title_inner"></div>
            </div>
          </div>
        </div>
        <!-- JSでクラスにindexをつける -->
        <div
          class="
            mCSB_1_scrollbar_vertical mCSB_scrollTools mCSB_1_scrollbar
            mCS-light
            mCSB_scrollTools_vertical
          "
        >
          <div class="mCSB_draggerContainer">
            <div class="mCSB_1_dragger_vertical mCSB_dragger">
              <div class="mCSB_dragger_bar"></div>
            </div>
            <div class="mCSB_draggerRail"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Scrollbox',
}
</script>
<style lang="scss" scoped>
.height {
  height: 100%;
}
.img_work_main {
  float: left;
  margin-left: 80px;
  position: relative;
}
.img--main {
  height: 645px;
  overflow: hidden;
  text-align: center;
  width: 1020px;
}
.mCustomScrollBox {
  position: relative;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  outline: none;
  direction: ltr;
}
.mCSB_container {
  /* contains the original content */
  overflow: hidden;
  width: auto;
  height: auto;
}

.wrap_list_work_thumb {
  @include respond(tablet) {
    float: right;
    overflow: hidden;
    height: 645px;
    width: 165px;
    touch-action: pinch-zoom;
  }
}
.list_work_thumb {
  @include respond(tablet) {
    width: 144px;
  }
  @include respond(sp) {
    overflow: hidden;
    max-height: 2560px;
    transition: max-height 2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
}
.list_work_thumb.close {
  @include respond(sp) {
    max-height: 0;
  }
}
.list_work_thumb + .list_work_thumb {
  @include respond(tablet) {
    padding-top: 20px;
  }
  @include respond(sp) {
    padding-top: 30px;
  }
}
.list_work_thumb li {
  position: relative;
}
.list_work_thumb li + li {
  @include respond(tablet) {
    margin-top: 20px;
  }
  @include respond(sp) {
    margin-top: 30px;
  }
}
.img {
  overflow: hidden;
  text-align: center;
  @include respond(tablet) {
    width: 144px;
  }
}
.wrap_img_inview {
  display: block;
  font-size: 0;
  letter-spacing: 0;
  line-height: 0;
  overflow: hidden;
  position: relative;
  &::before,
  ::after {
    display: block;
    position: absolute;
    background-color: #f1f1f1;
    content: '';
    top: 0;
    transition: left 0.6s linear;
    z-index: 2;
  }
  &::before {
    height: 100%;
    left: 150%;
    width: 200%;
  }
  &::after {
    width: 100%;
    height: 100%;
    left: 100%;
    transform: rotate(75deg);
  }
}
.img img {
  width: 100%;
  transition: all 0.4s ease 0.3s;
  //   transform: translate3d(0px, 0px, 0px);
  visibility: visible;
}
.title {
  color: #ccc;
  font-size: 1.5rem;
  letter-spacing: 0.1em;
  line-height: 1em;
  padding: 10px 0 0 20px;
  //   transform: translate3d(0px, 0px, 0px);
  transition: all 1s;
  visibility: visible;
}
.img_hide .wrap_img_inview::before {
  left: -250%;
}
.img_inview.img_hide .wrap_img_inview::before,
.img_inview.img_hide .wrap_img_inview::after {
  transition: left 0s linear;
}
.img_inview.img_hide .wrap_img_inview::after {
  left: -300%;
}
.img_inview.img_hide .wrap_img_inview img {
  transition: all 0s ease 0s;
  //   transform: translate3d(-30px, 0px, 0px);
  visibility: hidden;
}
.img_inview.img_hide .title {
  opacity: 0;
  //   transform: translate3d(0px, 30px, 0px);
  transition: all 0s;
  visibility: hidden;
}
.box_more {
  position: relative;
  width: 100%;
  padding: 110px 0;
}
.title_more {
  position: absolute;
  top: 50%;
  left: 50%;
  letter-spacing: 0.1em;
  line-height: 1em;
  color: #ccc;
  font-size: 3.6rem;
  transform: translate(-50%, -50%);
  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 296px;
    height: 9px;
    margin-top: -3px;
    background-color: #643250;
    transform: translateX(-50%);
  }
}
.title_inner {
  position: relative;
}
.mCSB_scrollTools {
  @include respond(sp) {
    display: none !important;
  }
}
</style>
