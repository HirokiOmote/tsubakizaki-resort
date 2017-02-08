<template>
  <article class="SectionSecond">
    <h2 class="Header"><img src="../assets/images/top/ttl_SecondMain.svg" alt="セカンドライフ"/></h2>
    <article class="containerFirst">
      <h3><img src="../assets/images/top/ttl_Second001.svg" alt=""/></h3>
      <p>椿崎リゾートには年代も出身もさまざまな住人がいます。この地を気に入った理由を尋ねると、「リゾートとして開発した土地のため、昔からあるコミュニティに入る煩わしさがない」、「山も海も近いので、ガーデニング、畑での野菜づくり、釣りなど趣味三昧ができる」といった答えが返ってきました。リタイア後の田舎暮らし、のびのびと子育て、休日のリフレッシュ。暮らし方はそれぞれですが、皆さん自然豊かな椿崎リゾートで理想のスローライフを実践しています。</p>
    </article>
    <article class="container">
      <div class="image"><img src="../assets/images/top/img_Second001.jpg" alt=""/></div>
      <div class="txtCol">
        <header>
          <h2><img src="../assets/images/top/ttl_Second002.svg" alt=""/></h2>
          <p>移住歴10年　山崎義則・珠枝さん</p>
        </header>
        <p>定年後、22年間暮らした神奈川県から移住した山崎さん。海の近くで暮らしたい、大好きな釣りを思い切り楽しみたいという夢をかなえる場所を探してたどり着いたのが椿崎でした。「箱根や伊豆、下田、軽井沢など、思いつく別荘地はすべて見に行きましたが、ここは見学に行ったどの別荘地よりもきちんと管理されていて、管理事務所には人が常駐している。安心も元気で暮らせる大切な要素だと思います」。理想のセカンドライフ実現法は、気持ちが充実できる場所を見つけることでした。</p>
      </div>
    </article>
    <a class="Btn" href="">別荘についてのお問い合わせはこちら</a>
    <ul class="Slide">
      <li><img src="../assets/images/top/img_SecondSlide001.jpg" alt=""/></li>
      <li><img src="../assets/images/top/img_SecondSlide002.jpg" alt=""/></li>
      <li><img src="../assets/images/top/img_SecondSlide003.jpg" alt=""/></li>
      <li><img src="../assets/images/top/img_SecondSlide004.jpg" alt=""/></li>
      <li><img src="../assets/images/top/img_SecondSlide005.jpg" alt=""/></li>
      <li><img src="../assets/images/top/img_SecondSlide006.jpg" alt=""/></li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'SecondSection',
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/_mixin";

.Header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 710px;
  background: url("../assets/images/top/bg_Second002.png") left 0% bottom 0% repeat-x,
  url("../assets/images/top/bg_Second.jpg") left 50% bottom 50% no-repeat;

}

.SectionSecond {
  padding: 40px 0;
  @include media( md ) {
    padding-bottom: 80px;
  }
}

.containerFirst {
  @include container( 1050px );
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  p {
    margin-top: 2em;
    font-size: 1.5rem;
    line-height: 2.2;
  }
  @include media( md ) {

  }
}

.txtColFirst {
  padding: 0 15px;
  @include media( md ) {
    padding: 0 60px;
    width: 36.3%;
  }
  p {
    margin-top: 3rem;
    font-size: 1.4rem;
    line-height: 1.65;
    font-feature-settings: "palt" 1;
    text-align: justify;
    @include media( md ) {
      margin-top: 5rem;
    }
  }
}


.container {
  @include container( 1050px );
  margin-top: 4rem;
  padding: 0 15px;
  @include media( md ) {
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.image {
  margin: {
    left: -15px;
    right: -15px;
    bottom: 4rem;
  }
  text-align: center;
  @include media( md ) {
    margin: 0;
  }
}

.txtCol {
  @include media( md ) {
    padding: 0 0 0 65px;
    width: 52.6%;
  }
  header {
    p {
      margin-top: 1em;
      color: #f6958d;
    }
  }
  h2 {
    img {
      max-height: 14.08px;
      @include media( sm ) {
        max-height: none;
      }
    }
  }
  p {
    margin-top: 3rem;
    font-size: 1.4rem;
    line-height: 1.65;
    text-align: justify;
    @include media( md ) {
      margin-top: 5rem;
    }
  }
}

.Btn {
  @include BtnForm;
}

.Slide {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin-top: 20px;
  margin-bottom: 0;
  padding: 0;
  @include media( sm ) {
    flex-wrap: nowrap;
    margin-top: 40px;
  }
  li {
    width: calc( 100% / 3);
    @include media( sm ) {
      width: auto;
    }
  }
}
</style>
