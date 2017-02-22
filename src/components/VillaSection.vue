<template>
  <div id="Villa" class="SectionVilla">
    <article class="containerFirst">
      <div class="image wow fadeInRight"><img src="../assets/images/top/img_Villa001.jpg" alt=""/></div>
      <div class="txtColFirst wow fadeIn">
        <h2><img src="../assets/images/top/ttl_villa001.svg" alt=""/></h2>
        <p>耳を澄ますと、聞こえてくるのは波の音と鳥の囀り。時間がゆっくりと流れる感覚。なぜか感じる、懐かしい匂い・音・気配。都会では忘れていた心の充足感を体感できる、そんな場所。椿崎の別荘でのんびり過ごす贅沢は、きっと貴方を癒すでしょう。</p>
      </div>
    </article>
    <article class="container">
      <div class="image wow fadeInLeft"><img src="../assets/images/top/img_Villa002.jpg" alt=""/></div>
      <div class="txtCol wow fadeIn">
        <header>
          <h2><img src="../assets/images/top/ttl_villa002.svg" alt=""/></h2>
          <p>別荘歴10年　川端美代江さん</p>
        </header>
        <p>社会人になって初めての赴任地も、夫との出会いも能登だったいう川端さん。金沢に移り住み、夫婦共に教師として第一線で働く中で、「退職後は新しい土地で暮らしたい」という思いが生まれ、退職5年前、椿崎に土地を購入しました。「キャンピングカーで日本中を旅しようとか海外に行こうとかいろいろ検討しましたが、釣りをしたいという夫の希望があったことと、何より椿崎から見る海景色の素晴らしさに惹かれて決めました」。</p>
      </div>
    </article>
    <article class="container">
      <div class="image wow fadeInLeft"><img src="../assets/images/top/img_Villa003.jpg" alt=""/></div>
      <div class="txtCol wow fadeIn">
        <header>
          <h2><img src="../assets/images/top/ttl_villa003.svg" alt=""/></h2>
          <p>別荘歴20年　座間建一さん</p>
        </header>
        <p>東京で軽トラック1台から商売を始め、腕利きの職人として休む間も惜しんで働いていた座間さん。そんな日々の中でも毎年夏だけは休みを取り、3人の子ども達と遊びに来ていた場所が能登でした。夫妻はともに神奈川県の出身。それぞれに実家はあるものの、子ども達が自然の中でのびのびと遊べる〝ふるさと〟をつくってあげたいと能登に別荘を持つことを決意。海と山に囲まれた椿崎の環境が気に入り、穴水湾が見渡せる高台にログハウスを建築しました。</p>
      </div>
    </article>
    <article class="container">
      <div class="image wow fadeInLeft"><img src="../assets/images/top/img_Villa004.jpg" alt=""/></div>
      <div class="txtCol wow fadeIn">
        <h2><img src="../assets/images/top/ttl_villa004.svg" alt=""/></h2>
        <p>敷地内には温泉も湧き出しており、区画によっては自宅で毎日湯を楽しむことも可能。海を見下ろす岸壁につくられた岩組みの露天風呂と屋根付きの足湯は休日や週末に住人だけが使える施設。コミュニケーションの場としても利用されており、町内会の会合や趣味の会などが足湯で行われることもあります。 </p>
      </div>
    </article>
    <a class="Btn" href="/contact/?checked=分譲地">別荘についてのお問い合わせはこちら</a>
  </div>
</template>

<script>
export default {
  name: 'VillaSection',
};


</script>

<style src="animate-scss/animate.css" scoped></style>
<style lang="scss" scoped>
@import "../assets/stylesheets/mixin";

.SectionVilla {
  padding: 40px 0;
  @include media( md ) {
    padding-bottom: 40px;
  }
}

.containerFirst {
  @include container( 1200px );
  padding: 0 15px;
  margin-top: 4rem;
  h2 {
    text-align: center;
  }
  @include media( md ) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    h2 {
      text-align: left;
    }
  }
}

.txtColFirst {
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

</style>
