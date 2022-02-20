import Head from 'next/head'
import ProviderRedux from '../store'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }:any) {
  return (
    <ProviderRedux>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=optional" rel="stylesheet" />
        <title>LOJA</title>
      </Head>

      <Component {...pageProps} />
    </ProviderRedux>
  )
}