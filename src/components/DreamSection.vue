<template>
  <article id="Dream" class="Section">
    <h2 class="Header"><img class="wow fadeIn" src="../assets/images/top/ttl_DreamMain.svg" alt="セカンドライフ"/></h2>
    <article class="First">
      <div class="container">
        <div class="Image wow fadeInRight">
          <img src="../assets/images/top/img_Dream.jpg" alt=""/>
        </div>
        <div class="Txt wow fadeInLeft">
          <h3><img src="../assets/images/top/ttl_Dream001.svg" alt=""/></h3>
          <p>椿崎リゾートでは、夢を持つ人をサポートするプロジェクトを立ち上げました。土地の無償提供(※)や仕入れ先のご相談、広告のサポートなど、アナタと一緒に夢を実現させるお手伝いを致します。１日１組限定のレストランや民宿、海で見つけた貝殻や、豊かな山の素材で作品を作る工房や雑貨屋さん。椿崎は田舎だけれど、田舎だから叶えられる夢があります。ぜひ一度お問い合わせください。<br />※各種条件がございます。詳細はお問い合わせください。</p>
        </div>
      </div>
      <a class="Btn wow fadeIn" href="/contact/?checked=周辺施設">出店についてのお問い合わせはこちら</a>
    </article>
    <div class="imgMap"><img src="../assets/images/top/img_Map.png" alt=""/></div>
    <div class="containerMap">
      <article id="Place" class="wow fadeIn">
        <h3><img src="../assets/images/top/ttl_Dream002.svg" alt="椿崎ここにあり"/></h3>
        <p>穴水町の中心部から車で約15分。椿崎リゾートは緑深い山と波静かな海に囲まれた場所にあります。穴水町は金沢市と能登半島を結ぶ能登里山街道の終点。平成25年に、通行料が全線無料となりますます便利に！能登の玄関口ともいえるのが穴水町です。能登空港からも車で１０分ほどという便利な立地。そして平成27年3月、ついに北陸新幹線が開業し、これまで4時間前後かかっていた金沢⇔東京間が2時間30分に大幅に短縮され、首都圏へのアクセスがより一層快適になりました。</p>
        <p class="route"><img src="../assets/images/top/img_MapRoute.png" alt=""/></p>
      </article>
      <article id="Management" class="wow fadeIn">
        <h3><img src="../assets/images/top/ttl_Dream003.svg" alt="管理してます"/></h3>
        <p>椿崎リゾートは、昭和46年に名相開発株式会社が開発したリゾート地です。当時から一貫して名相開発株式会社が管理しております。全国の「リゾート地」と呼ばれる場所は多数ありますが、実は管理事務所に常に人が常駐しているところは多くありません。何かあった時に管理者がいない不安。そんな思いはさせたくないと、名相開発株式会社では常にスタッフがいます。いざという時頼れる誰かがいる、という安心感は大きな違いです。</p>
        <table>
          <caption>管理会社案内</caption>
          <tbody>
            <tr>
              <th>商　号</th>
              <td>名相開発株式会社</td>
            </tr>
            <tr>
              <th>設　立</th>
              <td>昭和42年5月</td>
            </tr>
            <tr>
              <th>代表者</th>
              <td>代表取締役　深見朝子</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>1,000万円</td>
            </tr>
            <tr>
              <th>管理事務所所在地</th>
              <td>〒927-0007
                石川県鳳珠郡穴水町字岩車9-9-27
              </td>
            </tr>
            <tr>
              <th>TEL</th>
              <td>0768-56-1600</td>
            </tr>
            <tr>
              <th>FAX</th>
              <td>0768-56-1602</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>不動産業務一般、土地分譲、住宅販売、リゾート開発</td>
            </tr>
            <tr>
              <th>宅建番号</th>
              <td>石川県（1）3839号</td>
            </tr>
          </tbody>
        </table>
        <table>
          <caption>沿　革</caption>
          <tbody>
            <tr>
              <th>昭和46年</th>
              <td>椿崎リゾート第1期分譲開始<br />以降第2～5期順次分譲</td>
            </tr>
            <tr>
              <th>平成 2年</th>
              <td>椿崎リゾート第6期分譲開始</td>
            </tr>
            <tr>
              <th>平成 7年</th>
              <td>椿崎リゾート第7期分譲開始</td>
            </tr>
            <tr>
              <th>平成18年</th>
              <td>椿崎リゾート第8期分譲開始</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
    <a href="/contact/?checked=管理体制" class="Btn wow fadeIn">そのほか全てのお問い合わせはこちら</a>
  </article>
</template>

<script>
export default {
  name: 'DreamSection',
};
</script>

<style lang="scss" scoped>
@import "../assets/stylesheets/mixin";

.Section {
  position: relative;
  padding-bottom: 60px;
  overflow: hidden;
  z-index: 10;
  background-color: #fff;
  @include media( md ) {
    margin-bottom: -5px;
    padding-bottom: 90px;
  }
}

.Header {
  margin: 0;
  padding: 100px 30px 100px;
  text-align: center;
  background: $bgColor url("../assets/images/top/bg_Dream.png") 60% 41% no-repeat;
  background-size: 159%;
  @include media( sm ) {
    padding: 192px 0 232px;
    background-size: auto;
    background-position: 46% 48%;
  }
}

.container {
  @include container;
  position: relative;
  padding: 0 15px;
  min-height: 530px;
}

.First {
  background-color: $bgColor;
}

.Image {
  margin: 0 -15px;
  @include media( md ) {
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1050px;
    margin: 0;
  }
}

.Txt {
  h3 {
    margin-top: 4rem;
    text-align: center;
    @include media( md ) {
      margin-top: 0;
    }
  }
  p {
    margin-top: 3rem;
    font-size: 1.4rem;
    line-height: 1.65;
    text-align: justify;
  }
  @include media( md ) {
    width: 50%;
    // max-width: 470px;
    padding: 0 68px;
  }
}

.Btn {
  @include BtnForm;
}

.imgMap {
  display: none;
  @include media( lg ) {
    display: block;
    text-align: center;
    img {
      width: 100%;
    }
  }
}

.containerMap {
  @include container;
  @include media( md ) {
    display: flex;
    justify-content: center;
    margin-top: 86px;
  }
  article {
    padding: 40px 15px 0;
    @include media( sm ) {
      padding: {
        left: 30px;
        right: 30px;
      }
    }
    @include media( md ) {
      width: 50%;
      max-width: 480px;
      padding-top: 0;
    }
    @include media( lg ) {
      max-width: 580px;
      padding: 0 70px;
    }
  }
  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    &::before {
      content: "";
      display: block;
      width: 21px;
      height: 28px;
      margin-right: 10px;
      background: url("../assets/images/top/img_Mappin.png") no-repeat;
      background-size: 21px;
    }
    img {
      height: 17px;
    }
    @include media( sm ) {
      img {
        height: 21px;
      }
      &::before {
        width: 30px;
        height: 40px;
        background-size: 100%;
      }
    }
    @include media( md ) {
      justify-content: flex-start;
      img {
        height: auto;
      }
      &::before {
        width: 42px;
        height: 56px;
        background-size: auto;
      }
    }
  }
  p {
    margin-top: 3rem;
    font-size: 1.4rem;
    line-height: 1.65;
    text-align: justify;
    @include media( md ) {
      font-size: 1.5rem;
    }
  }
  .route {
    text-align: center;
  }
  table {
    width: 100%;
    margin: 3rem auto 0;
    // margin-top: 3rem;
    font-size: 1.2rem;
    table-layout: fixed;
    @include media( md ) {
      font-size: 1.3rem;
    }
  }
  tbody {
    vertical-align: top;
  }
  caption {
    padding: 2em 0;
    caption-side: top;
    color: inherit;
    font-weight: 600;
    text-align: center;
    @include media( sm ) {
      text-align: left;
    }
  }
  tr {
    display: flex;
  }
  th,td {
    text-align: left;
    padding: {
      top: .2em;
      bottom: .2em;
    }
    line-height: 1.3;
  }
  th {
    min-width: 11em;
    padding-right: 1.5em;
    font-weight: normal;
    display: table-cell;
  }
  td {
    width: calc( 100% - 11em );
  }
}
</style>
