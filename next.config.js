const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: 'linaria/loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    )

    return config
  },
})
