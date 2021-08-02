module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My landing page",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Nunito Sans:ital,wght@0,400;0,700;1,400;1,700;"],
        display: "swap",
      },
    },
  ],
};
