import { useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

const FavIconProvider = ({ children }: { children: JSX.Element }) => {
  const { colorMode } = useColorMode()
  return (
    <>
      <Head>
        <link
          rel="icon"
          href={
            colorMode === 'dark' ? '/favicon.ico' : '/favicon-lightmode.ico'
          }
        />
        <link rel="manifest" href="/manifest.json" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      {children}
    </>
  )
}

export default FavIconProvider
