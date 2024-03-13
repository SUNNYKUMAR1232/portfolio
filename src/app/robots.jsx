export default function robots() {
    const baseurl="https://portfolio.sunnyhubs.com/"
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: `${baseurl}sitemap.xml`,
    }
  }