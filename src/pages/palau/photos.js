import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "../mystyles.scss"

const BooksPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">
     <div class="content">


<h3>パラオの風景</h3>

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
        src="../../images/s-1755.JPG"
	width={960}
      />

	<p>パラオ語で何かが書いてあります。</p>

      <StaticImage
        alt="In Koror"
        src="../../images/s-1758.JPG"
	width={960}
      />

	<p>裏側はこんな感じ。「あなたの子に毎日何か新しいことを教えましょう」。</p>


      <StaticImage
        alt="In Koror"
        src="../../images/s-1595.JPG"
	width={960}
      />

	<p>桟橋からイカが見えました。</p>

	</div>
</div>
    </Layout>
  )
}

export default BooksPage