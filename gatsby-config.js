module.exports = {
    siteMetadata: {
        title: "Steven Ray Byrd",
        titleTemplate: "%s | Steven Ray Byrd",
        description:
          "Steven Ray Byrd - Actor for hire in Albuquerque and Santa Fe, New Mexico.",
        url: "https://localhost:8000", // No trailing slash allowed!
        image: "/images/banner.jpg", // Path to your image you placed in the 'static' folder
        author: "Steven Ray Byrd",
      },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: "./src/images/",
        },
        __key: "images",
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Steven Ray Byrd`,
        short_name: `steven-ray-byrd`,
        description: `Steven Ray Byrd - Actor for hire in Albuquerque and Santa Fe, New Mexico.`,
        lang: `en`,
        icon: `src/images/icon.png`,
        theme_color_in_head: false,
        start_url: `/`,
        background_color: `#1d1d1d`,
        theme_color: `#603cba`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-react-helmet",
  ],
};
