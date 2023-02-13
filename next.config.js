// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   trailingSlash:true
// }
// module.exports = nextConfig
const repo = 'change-me-to-your-repo'

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}


module.exports={
  reactStrictMode:true,
  trailingSlash:true,
  assetPrefix: assetPrefix,
  basePath: basePath,
   images: {
    loader: 'imgix',
    path: 'the "domain" of your Imigix source',
  },
}
