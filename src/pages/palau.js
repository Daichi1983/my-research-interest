import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const PalauPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">
     <div class="content">

<div
         style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}>
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d425946.42549643357!2d134.5231330139865!3d7.31653083194911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1628684173401!5m2!1sja!2sjp" width="800" height="600" allowfullscreen="" loading="lazy"></iframe>
</div>

	<h3>パラオ共和国基礎データ</h3>
	<dl>
	<dt>面積</dt>
	<dd>488平方キロメートル（屋久島とほぼ同じ）</dd>

	<dt>人口</dt>
	<dd>18,008人（2019年、世界銀行）</dd>

	<dt>首都</dt>
	<dd>マルキョク（2006年10月、コロールより遷都）</dd>

	<dt>言語</dt>
	<dd>パラオ語、英語</dd>

	<dt>宗教</dt>
	<dd>キリスト教、モデクゲイ</dd>
	</dl>

	<p>出典：パラオ共和国（Republic of Palau）基礎データ<br />
	<Link to="https://www.mofa.go.jp/mofaj/area/palau/data.html">https://www.mofa.go.jp/mofaj/area/palau/data.html</Link>（2021年8月11日閲覧）</p>

</div>
    </Layout>
  )
}

export default PalauPage