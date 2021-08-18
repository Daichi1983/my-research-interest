import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "../mystyles.scss"

const AboutPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">
     <div class="content">
     <h3>太平洋関連書籍</h3>

<hr />
<ol>
  <li>儀礼のセミオティクス</li>
  <li>生成される平和の民族史</li>
  <li>オセアニア芸術. レッド・ウェーヴの個と集合</li>
  
</ol>

<hr />

      
     </div>
    </Layout>
  )
}

export default AboutPage