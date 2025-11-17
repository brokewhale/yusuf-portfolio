import '../polyfills/react-dom-render-shim'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from 'config/theme'
import FavIconProvider from 'components/Misc/FavIconProvider'
import { poppins } from '../styles/fonts'

function MySite({ Component, pageProps }: AppProps): ReactElement {
  return (
    <div className={poppins.variable}>
      <AnimatePresence mode="wait" initial={false}>
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
