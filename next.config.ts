import createWithNextra from 'nextra'

const withNextra = createWithNextra({
  defaultShowCopyCode: true,
  unstable_shouldAddLocaleToLinks: true,
})


/**
 * @type {import("next").NextConfig}
 */
export default withNextra({
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  cleanDistDir: true,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  async redirects() {
    return [
      // default locale (zh) 无前缀访问
      {
        source: '/docs/3-cursor-rules/:path*',
        destination: '/docs/3-agent-harness/:path*',
        permanent: true,
      },
      // 带 locale 前缀访问
      {
        source: '/zh/docs/3-cursor-rules/:path*',
        destination: '/zh/docs/3-agent-harness/:path*',
        permanent: true,
      },
      {
        source: '/en/docs/3-cursor-rules/:path*',
        destination: '/en/docs/3-agent-harness/:path*',
        permanent: true,
      },
    ]
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },
})
