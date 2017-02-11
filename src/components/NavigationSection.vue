<template>
  <nav class="wow fadeIn">
    <ul>
      <li><a href="/contact/"><img src="../assets/images/top/txt_nav001.svg" alt="お問い合わせ"/></a></li>
      <li><a href="#Blog" data-scroll><img src="../assets/images/top/txt_nav002.svg" alt="椿崎だより"/></a></li>
      <li><a href="#Management" data-scroll><img src="../assets/images/top/txt_nav003.svg" alt="管理してます"/></a></li>
      <li><a href="#Place" data-scroll><img src="../assets/images/top/txt_nav004.svg" alt="椿崎ここにあり"/></a></li>
      <li><a href="#" data-scroll><img src="../assets/images/top/img_logo.png" alt="椿崎リゾート"/></a></li>
      <li> </li>
      <!-- <li><a href="#" target="_blank"><img src="../assets/images/top/txt_nav005.svg" alt="民宿椿荘"/></a></li> -->
      <li><a href="#Dream" data-scroll><img src="../assets/images/top/txt_nav006.svg" alt="夢、叶えませんか？"/></a></li>
      <li><a href="#Second" data-scroll><img src="../assets/images/top/txt_nav007.svg" alt="セカンドライフ"/></a></li>
      <li><a href="#Villa" data-scroll><img src="../assets/images/top/txt_nav008.svg" alt="別荘でのんびり"/></a></li>
    </ul>
  </nav>
</template>

<script>
import smoothScroll from 'smooth-scroll';

export default {
  name: 'NavigationSection',

  mounted() {
    smoothScroll.init();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/mixin";

nav {
  display: none;
  @include media( md ) {
    @include container( 1000px );
    display: block;
    width: 100%;
    ul {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
      margin: 0 0 2em;
      padding: 0;
    }
    li {
      font-family: MaruminOld StdN R;
    }
  }
}
</style>
