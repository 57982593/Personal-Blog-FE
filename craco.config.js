const CracoLessPlugin = require('craco-less')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },//自定义主题风格
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    module: {
      rules: [
        { sideEffects: false },
      ],
    },
    plugins: [
      // new BundleAnalyzerPlugin(),
    ],
  },
}
