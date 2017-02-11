<template>
  <article id="Blog">
    <header class="wow fadeIn">
        <h2><img src="../assets/images/top/ttl_Blog.svg" alt="椿崎だより"/></h2>
    </header>
    <div class="container wow fadeIn">
      <post v-for="post in posts" :post="post"></post>
    </div>
  </article>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Post from './Post';
import WPURL from '../wp_url';

const rootURL = WPURL;
const postsURL = `${WPURL}wp-json/wp/v2/posts?_embed`;

Vue.use(VueAxios, axios);

export default {
  name: 'BlogSection',
  components: {
    Post,
  },

  mounted() {
    this.getPosts();
  },

  data() {
    return {
      posts: [],
      home_url: rootURL,
    };
  },

  methods: {
    getPosts() {
      Vue.axios.get(postsURL).then((response) => {
        this.posts = response.data;
      });
    },
  },
};


</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/mixin";

article {
  margin: -3px 0 0;
  padding-bottom: 10px;
  background-color: #fff;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 286px;
  line-height: 0;
  text-align: center;
  background: url("../assets/images/top/bg_Blog001.jpg") right 9999px top 50% no-repeat,
              url("../assets/images/top/bg_Blog002.png") left calc( 50% + 145px ) top 20% no-repeat;
  overflow: hidden;
  @include media( sm ) {
      background-position: right calc( 50% + 560px ) top 50%, left calc( 50% + 219px ) top 20% ;
  }
}

h2 {
    margin: 0;
}

.container {
  max-width: 1020px;
  margin: 0 auto 70px;
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
}
</style>
