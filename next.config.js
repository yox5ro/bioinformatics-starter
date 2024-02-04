const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})
 
module.exports = withNextra({
  images: {
    unoptimized: true
  },
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES ? '/bioinformatics-starter' : '',
})
 
// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })