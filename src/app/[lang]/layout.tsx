import type { Metadata } from 'next'


import type { I18nLangAsyncProps, I18nLangKeys } from '@/i18n'
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from 'next/script'
import { Footer, LastUpdated, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head, Search } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { CustomFooter } from '@/components/CustomFooter'
import { useServerLocale } from '@/hooks'
import LocaleToggle from '@/widgets/locale-toggle'
import ThemeToggle from '@/widgets/theme-toggle'

import { getDictionary, getDirection } from '../_dictionaries/get-dictionary'
import { ThemeProvider } from './_components/ThemeProvider'
import './styles/index.css'
import Image from 'next/image'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  metadataBase: new URL('https://effective-cursor.vercel.app'),
  icons: '/img/favicon.svg',
} satisfies Metadata

const repo = 'https://github.com/Cyronlee/effective-cursor'

const CustomBanner = async ({ lang }: I18nLangAsyncProps) => {
  const { t } = await useServerLocale(lang)
  return (
    <Banner
      storageKey="starter-banner"
    >
      <div className="flex justify-center items-center gap-1">
        { t('banner.title') }
        {' '}
        <a
          className="max-sm:hidden text-warning hover:underline"
          target="_blank"
          href={repo}
        >
          { t('banner.more') }
        </a>
      </div>
    </Banner>
  )
}


const CustomNavbar = async ({ lang }: I18nLangAsyncProps) => {
  const { t } = await useServerLocale(lang)
  return (
    <Navbar
      logo={(
        <div className="flex items-center gap-2">
          <Image src="/img/favicon.svg" alt="logo" width={24} height={24} />
          <span>{ t('systemTitle') }</span>
        </div>
      )}
      logoLink={`/${lang}`}
      projectLink={repo}
    >
      <>
        <LocaleToggle className="max-md:hidden" />
        <ThemeToggle className="max-md:hidden" />
      </>

    </Navbar>
  )
}

const BaiduTrack = () => {
  return (
    <>
      <Script strategy="afterInteractive">
        {`
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?d5ad5e04e6af914c01767926567602be";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `}
      </Script>
    </>
  )
}


// interface Props {
//   children: ReactNode
//   params: Promise<{ lang: I18nLangKeys }>
// }

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const getterParams = await params

  const { lang } = getterParams as { lang: I18nLangKeys }

  const dictionary = await getDictionary(lang)
  const pageMap = await getPageMap(lang)

  const title = 'Effective Cursor'
  const description = 'AI-assisted programming best practices'

  const { t } = await useServerLocale(lang)

  return (
    <html
      // Not required, but good for SEO
      lang={lang}
      // Required to be set
      // dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      dir={getDirection(lang)}
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* <title>{asPath !== '/' ? `${normalizePagesResult.title} - ${title}` : title}</title> */}
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://effective-cursor.cyron.space" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://effective-cursor.cyron.space/img/favicon.png" />
        <meta property="og:site_name" content={title} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://effective-cursor.cyron.space" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://effective-cursor.cyron.space/img/favicon.png" />
        
        <link rel="canonical" href={repo} />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="starter-theme-provider"
          disableTransitionOnChange
        >
          <Layout
            copyPageButton={true}
            // banner={
            //   <CustomBanner lang={lang} />
            // }
            navbar={
              <CustomNavbar lang={lang} />
            }
            lastUpdated={(
              <LastUpdated>
                { t('lastUpdated') }
              </LastUpdated>
            )}
            editLink={null}
            docsRepositoryBase="https://github.com/Cyronlee/effective-cursor"
            footer={(
              <Footer className="bg-background py-5!">
                <CustomFooter />
              </Footer>
            )}
            search={(
              <Search
                placeholder={t('search.placeholder')}
                emptyResult={t('search.noResults')}
                errorText={t('search.errorText')}
                loading={t('search.loading')}
              />
            )}
            i18n={[
              { locale: 'en', name: 'English' },
              { locale: 'zh', name: '简体中文' },
            ]}
            toc={{
              backToTop: t('backToTop'),
              title: t('pageTitle'),
            }}
            pageMap={pageMap}
            feedback={{ content: '' }}
          // ... Your additional layout options
          >
            {children}
          </Layout>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-5M8NECM2LJ" />
      <Analytics />
      <BaiduTrack />
    </html>
  )
}
