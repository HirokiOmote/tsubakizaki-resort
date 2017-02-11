<template>
  <article>
      <a v-bind:href="post.link">
        <div class="Thumbnail">
            <img v-bind:src="getThumbnail" alt="">
        </div>
        <header>
            <ul class="Category">
              <li v-for="term in terms" :term="term">
                {{ term.name }}
              </li>
            </ul>
            <h3 class="title">{{ post.title.rendered }}</h3>
            <p class="blog-post-meta">{{ date }}</p>
        </header>
        <p class="Btn">記事を読む</p>
      </a>
  </article>
</template>

<script>
export default {
  name: 'Post',

  props: {
    post: {
      type: Object,
      default() {
        return {
          id: 0,
          slug: '',
          date: '',
          link: '',
          title: { rendered: '' },
          content: { rendered: '' },
          _embedded: '',
        };
      },
    },
  },

  mounted() {
    this.getTerms();
    this.getTerms();
  },

  data() {
    return {
      terms: [],
    };
  },

  methods: {
    getTerms() {
      const terms = this.post._embedded['wp:term'][0];
      this.terms = terms;
    },
  },
  computed: {
    /* eslint no-underscore-dangle: ["error", { "allow": ["_embedded"] }] */
    getThumbnail() {
      if (this.post.featured_media !== 0) {
        const thumbnailHtml = this.post._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url;
        return thumbnailHtml;
      }
      const initThumbnail = '../assets/images/common/thumbnail.png';
      return initThumbnail;
    },
    date() {
      const date = new Date(this.post.date);
      const y = date.getFullYear();
      const m = date.getMonth() + 1;
      const d = date.getDate();
      return `${y}.${m}.${d}`;
    },
  },
};

</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/mixin";

article {
  width: calc( 100% / 2 - 5px);
  margin-top: 30px;
  &:not(:nth-child(odd)) {
      margin-left: 10px;
  }
  @include media( sm ) {
      width: calc( 100% / 3 - 40px);
      margin: 60px 20px;
      &:not(:nth-child(odd)) {
          margin-left: 20px;
      }
  }
}

a {
  display: block;
  color: inherit;
  text-decoration: none;
  opacity: 1.0;
  transition: all 0.2s linear;
  &:hover {
    opacity: .8;
  }
}

.Thumbnail {
  text-align: center;
}

.Title {
  font-size: 1.5rem;
}

.Category {
  margin: 1rem 0 .5rem;
  padding: 0;
  font-size: 1.2rem;
  list-style: none;
  li {
      display: inline-flex;
      margin: .5em .7em 0 0;
      padding: .4em;
      color: #666;
      font-size: 1rem;
      border: 1px solid #ccc;
      @include media( md ) {
          font-size: 1.15rem;
      }
  }
}

.Btn {
  display: block;
  color: #333;
  font: {
      size: 1.4rem;
      weight: bold;
  }
  text-align: center;
  text-decoration: none;
  border: 1px solid #666;
  line-height: 1.5;
}
</style>
