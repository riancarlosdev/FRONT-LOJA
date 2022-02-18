import Head from 'next/head'
import ProviderRedux from '../store'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }:any) {
  return (
    <ProviderRedux>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=optional" rel="stylesheet" />
        <title>Loja SYNNE BIJU</title>
      </Head>

      <Component {...pageProps} />
    </ProviderRedux>
  )
}
