import '../styles/reset.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { usePageView } from '@/hooks/usePageView'

export default function App({ Component, pageProps }: AppProps) {
  usePageView()

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
