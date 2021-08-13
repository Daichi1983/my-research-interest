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
<p>
言語学の主な分野としては比較言語学、対照言語学、記述言語学、音声学、音韻論、意味論、生成文法などに分かれます。言語の発生の起源に関しては1866年にパリ言語学協会が言語の起源に関する討論を禁止し、答えることのできない問題とみなしたため、あまり議論はされていませんでしたが、霊長類学や言語学でもトマセロなどはそうした議論を行うなど、従来の流れが見直されてきています。
</p>

<h4>言語学の入門書</h4>
<ol>
<li><Link to="https://amzn.to/3AKxdp7">言語学を学ぶ人のために</Link></li>
<li><Link to="https://amzn.to/3iKyshU">言語人類学を学ぶ人のために</Link></li>
<li><Link to="https://amzn.to/3fZxkoS">応用社会言語学を学ぶ人のために</Link></li>
<li><Link to="https://amzn.to/37EiuPN">生成文法を学ぶ人のために</Link></li>
</ol>

<p>
  ずいぶん古い本で時代を追えてはいないですが、基本的なところは抑えてあるので学ぶとよいと思います。私は言語人類学を学ぶ人のためにが一番好きですが、言語人類学の勢いは今はほとんどなくなってしまいました。面白い学問なのでもっと広まってほしいと願っています。
</p>
     </div>
    </Layout>
  )
}

export default AboutPage