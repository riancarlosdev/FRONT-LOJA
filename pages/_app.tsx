import ProviderRedux from '../store'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }:any) {
  return (
    <ProviderRedux>
      <Component {...pageProps} />
    </ProviderRedux>
  )
}
