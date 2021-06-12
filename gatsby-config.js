module.exports = {
  siteMetadata: {
    title: "Ezraweb 2",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Major Mono Display`,
          `Open Sans`
        ],
        display: 'swap'
      }
    }
  ],
};
