module.exports = {
  siteMetadata: {
    title: `Gatsby Weather App`,
  },
  plugins: [

    {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: 'fe47a6d34e9626d891450e74018b5e71',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },

    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: '0a00ff66b283de7fe8bcad57d8fd9d1f',
        latitude: '43.09',
        longitude: '-84.99',
        exclude: ['minutely']
      },
    }

  ]
}; 