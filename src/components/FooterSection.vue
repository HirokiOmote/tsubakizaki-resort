<template>
  <footer>
      <p data-aos="fade">©︎Tsubakizaki Resort. All Right Reserved.</p>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection',
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/_mixin";

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  text-align: center;
  background: #fff url("../assets/images/top/bg_Footer.jpg") 50% 50% no-repeat;
  p {
    margin: 0;
    font-size: 1.2rem;
  }
  @include media( lg ) {
    background-size: cover;
    font-size: 1.4rem;
  }
}
</style>
