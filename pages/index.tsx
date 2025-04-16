import { BuilderComponent, builder } from '@builder.io/react'
import Head from 'next/head'

// Initialize Builder with your public API key
builder.init('a10a5490d2084e809b7c91b58101858c')

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashhound – Understand Your SaaS Metrics</title>
        <meta name="description" content="AI-powered dashboards and insights for SaaS companies" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Full-page Builder content */}
      <BuilderComponent model="page" />
    </>
  )
}
