import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "../mystyles.scss"

const BooksPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">
     <div class="content">


<h3>太平洋の風景</h3>

    <h4 id="guam">
        グアム
    </h4>

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
        alt="In guam"
        src="../../images/s-1884.JPG"
	width={960}
      />

	<p>ウマタック湾</p>

      <StaticImage
        alt="In guam"
        src="../../images/s-1880.JPG"
	width={960}
      />

	<p>グアム最高峰タロフォフォ山</p>


    <StaticImage
        alt="In guam"
        src="../../images/s-1905.JPG"
	width={960}
      />
      <StaticImage
        alt="In guam"
        src="../../images/s-1906.JPG"
	width={960}
      />

	<p>チャモロビレッジの様子</p>

	</div>
</div>
    </Layout>
  )
}

export default BooksPage