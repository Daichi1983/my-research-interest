import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "./mystyles.scss"

const IndexPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">


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
        src="../images/s-1755.JPG"
	width={960}
      />
      <p>パラオはコロール街中の風景</p>

</div>


    </Layout>
  )
}

export default IndexPage 