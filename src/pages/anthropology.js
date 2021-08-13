import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "./mystyles.scss"

const AboutPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">
     <div class="content">
	<h3>文化人類学</h3>



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
        src="../images/s-1399.JPG"
	width={960}
      />

</div>



	<p>
文化人類学（Anthropology）は民族学（Ethnology）とも呼ばれ、人々の暮らしの営みを通じて人とは何たるかを探る学問です。今のところ、文化といわれるものを持つのは人類だけです（一部の霊長類で文化らしきものがあるとも言われてはいますが）。人類は文化を有するからこそ、赤道直下から極地まで生息範囲を広げることができました。
	</p>
	<p>
文化人類学の大きなターニングポイントは以下の2冊の本によるといわれています。
	</p>
	<ol>
		<li>
		<Link to ="https://amzn.to/3AEBJ8l">マリノフスキー（2010）『西太平洋の遠洋航海者』 講談社学術文庫</Link>
		</li>
		<li>
		<Link to="https://amzn.to/3mevx3d">ラドクリフ＝ブラウン（2002）『未開社会における構造と機能』新泉社</Link>
		</li>
	</ol>
	<p>
		この2冊は初めて、フィールドワーク（現地調査）をもとにした民族誌（人々の暮らしを描いた研究報告）だったからです。どちらも原書は1922年に出版されています。この時から、相手の社会に入って自ら暮らしながら見るという参与観察という方法が確立しました。
	</p>
	<p>
		文化人類学は社会人類学、経済人類学、生態人類学、心理人類学、認識人類学、象徴人類学、医療人類学、開発人類学といった様々な分野に分かれています。
	</p>
	<p>
		日本は伝統的に東南アジア研究も強いですが、特筆すべきことは地理的な遠さにもかかわらずアフリカ研究が盛んなのも特徴です。人類学では人々の暮らし方が単純な社会のほうが当該要素を調べるのに都合がいいため、様々な要素（変数）のからむ都市部での暮らしより、単純な暮らしをしている人たちのところに行く傾向が多くあります。（近年はそうとは限っていません。）
	</p>
	<p>
		そのため、ある者はアフリカに行き、ある者は極北に行き、ある者はオセアニアに行きます。私はオセアニアに行きましたが、近年の動向を見る限り、オセアニア研究者はあまり増えていないようです。
	</p>
	<h4>
		文化人類学の入門書
	</h4>
	
	<hr />
	
	<p>
		<Link to="https://amzn.to/2VMNkTK">クライド・クラックホーン（1971）『人間のための鏡』サイマル出版会</Link>
	</p>
	<div 
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>
	<Link to="https://www.amazon.co.jp/gp/product/4377100661/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4377100661&linkCode=as2&tag=dai5986-22&linkId=1471c3cee3ae66fcce8600e48af5d8fb"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4377100661&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link>
	<Link to="https://www.amazon.co.jp/gp/product/4377100661/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4377100661&linkCode=as2&tag=dai5986-22&linkId=61dc2fd287814008c8ac0ac313346412">人間のための鏡―アメリカの文化人類学の世界的権威による古典的名著</Link>
	</div>
	
	<hr />
	
	<p>
		<Link to="https://amzn.to/3xH6E28">綾部恒雄（2006）『文化人類学20の理論』弘文堂</Link>
	</p>
	<div 
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>
	<Link to="https://www.amazon.co.jp/gp/product/4335561121/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4335561121&linkCode=as2&tag=dai5986-22&linkId=c6528b9dd66a896594b8205c978f707d"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4335561121&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=dai5986-22" /></Link>
	<Link to="https://www.amazon.co.jp/gp/product/4335561121/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4335561121&linkCode=as2&tag=dai5986-22&linkId=82c8ba54024dbb7978c9b88429db20df">文化人類学20の理論</Link>
	</div>

		
	<hr />

	<p>
		<Link to="https://amzn.to/3xH6E28">米山 俊直 (編集), 谷 泰（1991）『文化人類学を学ぶ人のために』世界思想社</Link>
	</p>
	<div 
		style={{
		// By using the same grid area for both, they are stacked on top of each other
		gridArea: "1/1",
		position: "relative",
		// This centers the other elements inside the hero component
		placeItems: "center",
		display: "grid",
		}}>
	<Link to="https://www.amazon.co.jp/%E6%96%87%E5%8C%96%E4%BA%BA%E9%A1%9E%E5%AD%A6%E3%82%92%E5%AD%A6%E3%81%B6%E4%BA%BA%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB-%E7%B1%B3%E5%B1%B1-%E4%BF%8A%E7%9B%B4/dp/4790703886?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E6%96%87%E5%8C%96%E4%BA%BA%E9%A1%9E%E5%AD%A6%E3%82%92%E5%AD%A6%E3%81%B6%E4%BA%BA%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AB&qid=1628854559&sr=8-1&linkCode=li3&tag=dai5986-22&linkId=023587bcd948e97d64cb4f36794b984f&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4790703886&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=dai5986-22&language=ja_JP" /></Link><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=dai5986-22&language=ja_JP&l=li3&o=9&a=4790703886" width="1" height="1" border="0" alt="" />
	<Link to="https://amzn.to/3xH6E28">文化人類学20の理論</Link>
	</div>

		
	<hr />

	<p>
		<Link to="https://amzn.to/3yIJ1aM">李 仁子 (編集), 金谷 美和 (編集), 佐藤 知久 (編集)（2008）『はじまりとしてのフィールドワーク―自分がひらく、世界がわかる』昭和堂</Link>
	</p>
	<div 
		style={{
		// By using the same grid area for both, they are stacked on top of each other
		gridArea: "1/1",
		position: "relative",
		// This centers the other elements inside the hero component
		placeItems: "center",
		display: "grid",
		}}>
	<Link to="https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%81%BE%E3%82%8A%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%83%AF%E3%83%BC%E3%82%AF%E2%80%95%E8%87%AA%E5%88%86%E3%81%8C%E3%81%B2%E3%82%89%E3%81%8F%E3%80%81%E4%B8%96%E7%95%8C%E3%81%8C%E3%82%8F%E3%81%8B%E3%82%8B-%E6%9D%8E-%E4%BB%81%E5%AD%90/dp/4812208173?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E3%81%AF%E3%81%98%E3%81%BE%E3%82%8A%E3%81%A8%E3%81%97%E3%81%A6%E3%81%AE%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB%E3%83%89%E3%83%AF%E3%83%BC%E3%82%AF&qid=1628855128&sr=8-1&linkCode=li3&tag=dai5986-22&linkId=3971dc216f5d0700a479e66d8e60bacf&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=4812208173&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=dai5986-22&language=ja_JP" /></Link><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=dai5986-22&language=ja_JP&l=li3&o=9&a=4812208173" width="1" height="1" border="0" alt="" />
	<Link to="https://amzn.to/3yIJ1aM">はじまりとしてのフィールドワーク―自分がひらく、世界がわかる</Link>
	</div>



			
	<hr />

	<p>
		<Link to="https://amzn.to/3ACqKwg">松村 圭一郎  (編集), 中川 理 (編集), 石井 美保 (編集)（2008）『文化人類学の思考法』世界思想社</Link>
	</p>
	<div 
		style={{
		// By using the same grid area for both, they are stacked on top of each other
		gridArea: "1/1",
		position: "relative",
		// This centers the other elements inside the hero component
		placeItems: "center",
		display: "grid",
		}}>
	<Link to="https://www.amazon.co.jp/%E6%96%87%E5%8C%96%E4%BA%BA%E9%A1%9E%E5%AD%A6%E3%81%AE%E6%80%9D%E8%80%83%E6%B3%95-%E6%9D%BE%E6%9D%91-%E5%9C%AD%E4%B8%80%E9%83%8E/dp/479071733X?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=%E6%96%87%E5%8C%96%E4%BA%BA%E9%A1%9E%E5%AD%A6%E3%81%AE%E6%80%9D%E8%80%83%E6%B3%95&qid=1628855356&sr=8-1&linkCode=li3&tag=dai5986-22&linkId=01efcdee8609e3e87e5291606e6f90dc&language=ja_JP&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=479071733X&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=dai5986-22&language=ja_JP" /></Link><img src="https://ir-jp.amazon-adsystem.com/e/ir?t=dai5986-22&language=ja_JP&l=li3&o=9&a=479071733X" width="1" height="1" border="0" alt=""  />
	<Link to="https://amzn.to/3ACqKwg">文化人類学の思考法</Link>
	</div>





     </div>
    </Layout>
  )
}

export default AboutPage