import * as React from "react"
import ProductContext from '../context/ProductContext'
import Layout from '../components/Layout'
import HomepageCollectionsGrid from '../components/HomepageCollectionsGrid'

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext)

  return (
    <Layout>
      <HomepageCollectionsGrid collections={collections} />
    </Layout>
  )
}

export default IndexPage
