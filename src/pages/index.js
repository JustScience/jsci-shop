import * as React from "react"
import ProductContext from '../context/ProductContext'
import Layout from '../components/Layout'
import HomepageCollectionsGrid from '../components/HomepageCollectionsGrid'
import FeaturedProducts from "../components/FeaturedProducts"

const IndexPage = () => {
  const {collections} = React.useContext(ProductContext)

  return (
    <Layout>
      <HomepageCollectionsGrid collections={collections} />
      {/* {!!collections.find(collection => collection.title === "Featured" ) && */}
        <FeaturedProducts />      
      {/* } */}
    </Layout>
  )
}

export default IndexPage
