import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { NavBar } from '@/src/components/NavBar'
import { Footer } from '@/src/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <NavBar />
      <Component {...pageProps} />
      <Footer/>
      
    </ChakraProvider>
  )
}
