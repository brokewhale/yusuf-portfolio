import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from 'config/theme'
import FavIconProvider from 'components/Misc/FavIconProvider'
import { poppins } from '../styles/fonts'

function MySite({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className={poppins.variable}>
      <AnimatePresence exitBeforeEnter>
        <ChakraProvider theme={theme}>
          <FavIconProvider>
            <Component {...pageProps} />
          </FavIconProvider>
        </ChakraProvider>
      </AnimatePresence>
    </div>
  )
}
export default MySite
