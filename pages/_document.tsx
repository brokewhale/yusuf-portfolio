import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preload critical resources for LCP optimization */}
          <link rel="preload" href="/avatar-dark.png" as="image" />
          <link rel="preload" href="/avatar-light.png" as="image" />
          {/* Critical CSS will be inlined by Next.js font system */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
