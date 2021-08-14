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


  <h3 id="okinawa">
    沖縄
  </h3>

  　<h4 id="naha">
      那覇
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
            src="../../images/s-9805.JPG"
          width={960}
          />
<p>今はなき初代牧志公設市場</p>

        <StaticImage
            alt="In guam"
            src="../../images/s-9155.JPG"
          width={960}
          />


  <p>中の様子</p>

  <StaticImage
            alt="In guam"
            src="../../images/s-9171.JPG"
          width={960}
          />

  <p>今はなき那覇バスターミナル</p>

        </div>

        <h4 id="aguni">
          粟国島
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
            src="../../images/s-9278.JPG"
          width={960}
          />
          <p>粟国港のようす</p>

        <StaticImage
            alt="In guam"
            src="../../images/s-9330.JPG"
          width={960}
          />

          <p>島内にある鍾乳洞</p>

  <StaticImage
            alt="In guam"
            src="../../images/s-9548.JPG"
          width={960}
          />

         <p>映画「ナビィの恋」でロケ地となった海岸（らしい）</p>



	</div>
</div>
    </Layout>
  )
}

export default BooksPage