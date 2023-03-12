import { Header } from '@/src/components/Head'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head> 
        <Header />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
