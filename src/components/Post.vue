<template>
  <article>
      <div class="Thumbnail">
          <img src="#" alt=""/>
      </div>
      <header>
          <ul class="Category">

          </ul>
          <h3 class="title"></h3>
          <p className="blog-post-meta"></p>
      </header>
      <a href="" class="Btn">記事を読む</a>
  </article>
</template>

<script>
export default {
  name: 'Post',
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

.news {

}

.old {

}

.sale {

}
</style>
