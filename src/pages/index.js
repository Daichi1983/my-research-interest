import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import "./mystyles.scss"

const IndexPage = () => {
  return (
    <Layout pageTitle="私設 パラオ・太平洋研究室">

      <StaticImage
        alt="In Koror"
        src="../images/s-1755.JPG"
        width="800"
      />

      <p>パラオはコロール街中の光景。</p>

    </Layout>
  )
}

export default IndexPage 