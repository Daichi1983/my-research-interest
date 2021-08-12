import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "./mystyles.scss"

const AboutPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">
     <div class="content">

	<h3>言語学</h3>
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

     </div>
    </Layout>
  )
}

export default AboutPage