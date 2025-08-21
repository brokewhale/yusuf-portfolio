import Head from 'next/head'
import { useEffect } from 'react'

const SEOAnalytics = () => {
  useEffect(() => {
    // Track page views and SEO metrics
    if (typeof window !== 'undefined') {
      // You can add Google Analytics, Google Tag Manager, or other analytics here
      console.log('SEO Analytics loaded for:', window.location.href)
    }
  }, [])

  return (
    <Head>
      {/* Google Search Console verification (replace with your verification code when ready) */}
      <meta
        name="google-site-verification"
        content="YOUR_VERIFICATION_CODE_HERE"
      />

      {/* Bing Webmaster Tools verification (replace with your verification code when ready) */}
      <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE_HERE" />

      {/* Additional meta tags for better SEO */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />

      {/* Rich snippets for skills */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Technical Skills',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'React.js Development',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Next.js Framework',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'TypeScript Programming',
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: 'Blockchain Development',
              },
              {
                '@type': 'ListItem',
                position: 5,
                name: 'Solutions Engineering',
              },
              {
                '@type': 'ListItem',
                position: 6,
                name: 'Technical Support Engineering',
              },
              {
                '@type': 'ListItem',
                position: 7,
                name: 'Developer Relations',
              },
              {
                '@type': 'ListItem',
                position: 8,
                name: 'Customer Support & Community Building',
              },
              {
                '@type': 'ListItem',
                position: 9,
                name: 'API Support & Documentation',
              },
              {
                '@type': 'ListItem',
                position: 10,
                name: 'Technical Writing',
              },
            ],
          }),
        }}
      />

      {/* Performance monitoring script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js');
              });
            }
            
            // Web Vitals monitoring
            function getCLS(onReport) {
              new PerformanceObserver((entryList) => {
                for (const entry of entryList.getEntries()) {
                  if (!entry.hadRecentInput) {
                    onReport(entry.value);
                  }
                }
              }).observe({type: 'layout-shift', buffered: true});
            }
            
            // Track Core Web Vitals for SEO
            getCLS(console.log);
          `,
        }}
      />
    </Head>
  )
}

export default SEOAnalytics
