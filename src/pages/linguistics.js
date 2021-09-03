import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "./mystyles.scss"

const LinguisticsPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">
     <div class="content">

	<h3>言語学</h3>

	<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>

      <StaticImage
        alt="In Koror"
        src="../images/s-6255.JPG"
	width={960}
      />

</div>

<p>
言語学は言語を通して人とは何たるかを探る学問です。今のところ、言語を操ることができるのは人類だけです。動植物は様々な形でコミュニケーションを取りますが、複雑な言語コミュニケーションを取って集団生活を送ることができているのは人類に限られます。
</p>
<p>
近代言語学の始祖はフェルディナン・ド・ソシュール（Ferdinan De Saussure）といわれています。ソシュールは言語を以下の3つに分けました。
</p>
<ul>
<li>ラング（Langue）</li>
<li>パロール（Parole）</li>
<li>ランガージュ（Language）</li>
</ul>

<p>
  そのうえで言語学が対象とするのはLangueだとしました。
</p>
<p>
  言語学の主な分野としては比較言語学、対照言語学、記述言語学、音声学、音韻論、意味論、生成文法などに分かれます。言語の発生の起源に関しては1866年にパリ言語学協会が言語の起源に関する討論を禁止し、答えることのできない問題とみなしたため、あまり議論はされていませんでしたが、霊長類学や言語学でもトマセロなどはそうした議論を行うなど、従来の流れが見直されてきています。
</p>

<h4>言語学の入門書</h4>
<Link to="#general">言語学一般</Link>
<br />
<Link to="#phonetics">音声学</Link>
<br />
<Link to="comparative_linguistics">比較言語学</Link>

<h5 id="general">言語学一般</h5>

	<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>

<Link to="https://www.amazon.co.jp/gp/product/4327378224/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4327378224&linkCode=as2&tag=dai5986-22&linkId=ea87025496c598b0512993f7808a45c0"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4327378224&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link><br />
<Link to="https://www.amazon.co.jp/gp/product/4327378224/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4327378224&linkCode=as2&tag=dai5986-22&linkId=083460375905e58a6e6dca55fe05516e">新訳 ソシュール 一般言語学講義</Link>
</div>

<p>なんといってもソシュールが言語学の研究対象はLangueとすべし、と述べた講義録は外せません。しかしこの講義録がまた読みにくい。ソシュールの思想を知るには、手引きとなる解説書を読むのが一番です。</p>


	<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>

<Link to="https://www.amazon.co.jp/gp/product/4327376914/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4327376914&linkCode=as2&tag=dai5986-22&linkId=9e57dba84732d288663525bad6987349"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4327376914&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link><br />
<Link to="https://www.amazon.co.jp/gp/product/4327376914/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4327376914&linkCode=as2&tag=dai5986-22&linkId=b76efffe98172af7e9eb6d35f13602d3">ソシュールのすべて―言語学でいちばん大切なこと</Link><br /><br />
<Link to="https://www.amazon.co.jp/gp/product/B00UTD8EGA/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00UTD8EGA&linkCode=as2&tag=dai5986-22&linkId=363b8d5dadc9247dfad2699e06e062df"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B00UTD8EGA&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link><br />
<Link to="https://www.amazon.co.jp/gp/product/B00UTD8EGA/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00UTD8EGA&linkCode=as2&tag=dai5986-22&linkId=574b4b759d60ef1b15cf2de3bb7fce09">ソシュールと言語学　コトバはなぜ通じるのか (講談社現代新書)</Link>
</div>


<hr />
<ol>
  <li><Link to="https://amzn.to/3AKxdp7">言語学を学ぶ人のために</Link></li>
  <li><Link to="https://amzn.to/3iKyshU">言語人類学を学ぶ人のために</Link></li>
  <li><Link to="https://amzn.to/3fZxkoS">応用社会言語学を学ぶ人のために</Link></li>
  <li><Link to="https://amzn.to/37EiuPN">生成文法を学ぶ人のために</Link></li>
</ol>

<p>
  ずいぶん古い本で時代を追えてはいないですが、基本的なところは抑えてあるので学ぶとよいと思います。私は『<Link to="https://amzn.to/3iKyshU">言語人類学を学ぶ人のために</Link>』が一番好きですが、言語人類学の勢いは今はほとんどなくなってしまいました。面白い学問なのでもっと広まってほしいと願っています。
</p>
<hr />
<h5 id="phonetics">音声学</h5>
<p><Link to="https://amzn.to/3iL8MBx">小泉保（2003）『音声学入門』大学書林</Link></p>

<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>


<Link to="https://www.amazon.co.jp/gp/product/4475018633/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4475018633&linkCode=as2&tag=dai5986-22&linkId=4b417f196968c9697aa96171a1faaddb"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4475018633&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link>
<p><Link to="https://amzn.to/3iL8MBx">改訂 音声学入門</Link></p>

        </div>

<hr />
<p><Link to="https://amzn.to/37KivBL">服部四郎（2006）『音声学』岩波書店</Link></p>
<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>


<Link to="https://www.amazon.co.jp/gp/product/4007303908/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4007303908&linkCode=as2&tag=dai5986-22&linkId=726fc8e59c96972697e4d2ad578bbdc0"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4007303908&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link>
<p><Link to="https://amzn.to/37KivBL">改訂 音声学入門</Link></p>
        </div>


<p>
  いずれも古典的名著ですが、小泉のほうは入門であるのに対して服部のほうはしっかりした音声学の書です。昔の学生は服部四郎の音声学についていた音源レコードを聴いて勉強したといいます。服部四郎の門下生は口に鉛筆を入れられて調音点を直されたとか。
</p>

<hr />
<h5 id="comparative_linguistics">比較言語学</h5>
<p><Link to="https://amzn.to/3BALRj5">高津春繁（1992）『比較言語学入門』岩波文庫</Link></p>

<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>


<Link to="https://www.amazon.co.jp/gp/product/4003367618/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4003367618&linkCode=as2&tag=dai5986-22&linkId=5bd1f95645100e1139e2aa01609a696b"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4003367618&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link>
<p><Link to="https://amzn.to/3BALRj5">比較言語学入門</Link></p>

        </div>
<p>
  古典ギリシャ語が専門だった著者による比較言語学入門書。古典ですが名著です。
</p>

<hr />
<p><Link to="https://amzn.to/3DHUx9d">吉田和彦（1996）『言葉を復元する―比較言語学の世界』三省堂</Link></p>
<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>


<Link to="https://www.amazon.co.jp/gp/product/4385357145/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4385357145&linkCode=as2&tag=dai5986-22&linkId=0451510508d0172ee8b5827d4405e005"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4385357145&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link>
<p><Link to="https://amzn.to/3DHUx9d">言葉を復元する―比較言語学の世界</Link></p>
        </div>


<p>
  古代ヒッタイト語を専門としていた著者による比較言語学の入門書。おおよその大事なことは書いてあります。言葉を復元する面白さが伝わる、良い本です。
</p>

<hr />

<p><Link to="https://amzn.to/38FOeVb">黒田龍之介（2011）『ことばは変わる ─ はじめての比較言語学』白水社</Link></p>
<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>


<Link to="https://www.amazon.co.jp/gp/product/4560085811/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4560085811&linkCode=as2&tag=dai5986-22&linkId=5ae915594e5c139b994a8252c6a9d48f"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4560085811&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link>
<p><Link to="https://amzn.to/38FOeVb">ことばは変わる ─ はじめての比較言語学</Link></p>
        </div>


<p>
  スラブ言語学を専門とする著者による比較言語学の入門書です。スラブ語の古典語といえば古教会スラブ語ですね。
</p>

<hr />

<p><Link to="https://www.amazon.co.jp/gp/product/B000J8V7WS/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B000J8V7WS&linkCode=as2&tag=dai5986-22&linkId=b883c931bcf6e376d9236ef3c46328bc">アントワヌ・メイエ、（1977）『史的言語学における比較の方法』みすず書房</Link></p>
<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>


<Link to="https://www.amazon.co.jp/gp/product/B000J8V7WS/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B000J8V7WS&linkCode=as2&tag=dai5986-22&linkId=bc4768fc7ec145387bd0514ba74a31f9"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=B000J8V7WS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link>
<p><Link to="https://www.amazon.co.jp/gp/product/B000J8V7WS/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B000J8V7WS&linkCode=as2&tag=dai5986-22&linkId=b883c931bcf6e376d9236ef3c46328bc">史的言語学における比較の方法</Link></p>
        </div>


<p>
  言わずと知れた古典的名著。翻訳者でもあり京都大学の教授だった泉井久之助は原著を4冊買い（3冊ダメにしたということ）、死ぬ間際の枕元にも置いてあったといいます。
</p>

<hr />

     </div>
    </Layout>
  )
}

export default LinguisticsPage