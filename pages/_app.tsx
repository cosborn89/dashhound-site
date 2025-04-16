import '../styles/globals.css'
import type { AppProps } from 'next/app'
import builder from '@builder.io/react'

// Initialize Builder.io with your public API key
builder.init('a10a5490d2084e809b7c91b58101858c')

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
