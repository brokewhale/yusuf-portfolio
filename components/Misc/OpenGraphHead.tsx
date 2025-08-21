import Head from 'next/head'
import StructuredData from './StructuredData'
import SEOAnalytics from './SEOAnalytics'

const OpenGraphHead = () => {
  const siteUrl = 'https://yusufkehinde.dev'
  const title =
    'Yusuf Kehinde Hussein | Solutions Engineer & Frontend Developer | Technical Support Engineer | Developer Relations'
  const description =
    'Experienced Solutions Engineer, Frontend Developer, Technical Support Engineer, and Developer Relations expert specializing in React, Next.js, TypeScript, and Blockchain technology. 8+ years in tech solutions, customer support, community building, and crypto development.'
  const keywords =
    'Solutions Engineer, Frontend Developer, Technical Support Engineer, Developer Relations, DevRel, React Developer, Next.js, TypeScript, Blockchain Developer, Tech Support, Customer Support, Community Manager, Digital Identity, Web3, Crypto, JavaScript, AWS, Node.js, API Support, Documentation, Technical Writing'
  const ogImage = `${siteUrl}/og.png`

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Yusuf Kehinde Hussein" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Canonical URL */}
        <link rel="canonical" href={siteUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Yusuf Kehinde Hussein - Solutions Engineer & Frontend Developer"
        />
        <meta
          property="og:site_name"
          content="Yusuf Kehinde Hussein Portfolio"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="twitter:image:alt"
          content="Yusuf Kehinde Hussein Portfolio"
        />
        <meta name="twitter:creator" content="@0xKenny__" />

        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#319795" />
        <meta name="msapplication-TileColor" content="#319795" />
        <meta name="application-name" content="Yusuf Kehinde Portfolio" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//dev.to" />
      </Head>
      <StructuredData />
      <SEOAnalytics />
    </>
  )
}

export default OpenGraphHead
