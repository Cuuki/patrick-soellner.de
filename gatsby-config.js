module.exports = {
  siteMetadata: {
    title: 'Patrick Söllner',
    nickname: 'Cuuki',
    tagline: `Hi there I'm Patrick! Nice to meet you and welcome to my portfolio page.`,
    description: `I'm an experienced and passionate web developer specialising in frontend technologies. My personal focus lies on React and E-Commerce.`,
    author: '@PatrickSllner',
    social: {
      github: 'https://github.com/Cuuki',
      twitter: 'https://twitter.com/PatrickSllner',
      xing: 'https://www.xing.com/profile/Patrick_Soellner/',
      linkedIn: 'https://www.linkedin.com/in/patrick-s%C3%B6llner-8360a1184/',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: false,
          failOnError: false,
        },
      },
    },
  ],
};
