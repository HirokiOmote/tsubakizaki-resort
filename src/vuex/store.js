import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import WPURL from './mutation-types';

Vue.use(Vuex, VueAxios, axios);

const state = {
  posts: [],
};

function getPosts() {
  axios.get(`${WPURL}/wp-json/wp/v2/posts`).then((response) => {
    state.posts = response.data;
    return state.posts;
    // console.log(response.data);
  });
}

const actions = getPosts();

// eslint-disable-next-lin
// const mutation = {
//   // state.posts = response.data,
// };

const getters = {
  // posts: getPost = state => state.posts,
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  // mutaition,
});
