<template>
  <div v-for="post in posts">
    <post :post="post"></post>
  </div>
</template>

<script>
import './Post';

export default {
  name: 'HeaderSection',
  components: {
    Post,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/mixin";

</style>
