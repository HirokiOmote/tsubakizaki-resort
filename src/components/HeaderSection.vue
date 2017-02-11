<template>
  <header class="headerTop wow fadeIn">
    <div class="container">
      <h1 class="wow fadeInUp"><img src="../assets/images/top/ttl_header.svg" alt="椿崎リゾート"/></h1>
      <p class="wow fadeInDown"><img src="../assets/images/top/txt_header.svg" alt=""/></p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/mixin";

.headerTop {
  padding-bottom: 60px;
  text-align: center;
  background: url("../assets/images/top/bg_header.jpg") 50% 50% no-repeat;
  background-size: auto 200%;
  @include media( md ) {
    min-height: 800px;
    padding-bottom: 0;
    background-size: cover;
    background-attachment: fixed;
  }
  h1 {
    animation-delay: 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: {
      top: 0;
      bottom: 30px;
    }
    @include media( md ) {
      padding: 80px 0;
      min-height: 0;
    }
  }

  p {
    @include media( md ) {
      animation-delay: 1.5s;
      position: absolute;
      left: 55px;
      top: 80px;
    }
  }
}

.container {
  @include container;
  position: relative;
}
</style>
