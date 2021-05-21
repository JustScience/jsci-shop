require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "jsci-shop",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.GATSBY_SHOPIFY_STORE_NAME,
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-optional-chaining",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_GOOGLE_TRACKING_ID,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    // "gatsby-plugin-react-helmet",
    // "gatsby-plugin-sitemap",
    // "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
