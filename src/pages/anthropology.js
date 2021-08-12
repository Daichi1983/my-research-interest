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
	<p>
文化人類学（Anthropology）は民族学（Ethnology）とも呼ばれ、人々の暮らしの営みを通じて人とは何たるかを探る学問です。今のところ、文化といわれるものを持つのは人類だけです（一部の霊長類で文化らしきものがあるとも言われてはいますが）。人類は文化を有するからこそ、赤道直下から極地まで生息範囲を広げることができました。
</p>
<p>
文化人類学の大きなターニングポイントは以下の2冊の本によるといわれています。
</p>
<p>
マリノフスキー
西太平洋の遠洋航海者
</p>
<p>
この2冊は初めて、フィールドワーク（現地調査）をもとにした民族誌（人々の暮らしを描いた研究報告）だったからです。
</p>
<p>
文化人類学はざっと並べても以下のような分野に分かれています。
</p>

     </div>
    </Layout>
  )
}

export default AboutPage