import Head from 'next/head'
import Container_component from '../components/container'
import Footer_component from '../layouts/5-footer'
import ProviderRedux from '../store'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }:any) {
  return (
    <ProviderRedux>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=optional" rel="stylesheet" />
        <title>LOJA</title>
      </Head>

      <Component {...pageProps} />

      <Container_component background='bg-4'>
        <Footer_component />
      </Container_component>
    </ProviderRedux>
  )
}