import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashhound – Understand Your SaaS Metrics</title>
        <meta name="description" content="AI-powered dashboards and insights for SaaS companies" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* Header with logo */}
        <header className="w-full px-6 py-4 bg-white shadow-sm">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Dashhound logo" width={150} height={60} />
            </div>
            <button className="bg-black text-white px-5 py-2 rounded text-sm font-semibold">Start Free</button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto py-24 px-6">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Finally Understand Your SaaS Metrics.</h1>
          <p className="text-xl text-gray-700 mb-8">
            Dashhound is the AI-powered dashboard that helps SaaS companies track, explain,
            and act on the metrics that matter most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white text-lg px-6 py-3 rounded">
              Try Dashhound Free
            </button>
            <button className="border border-black text-black text-lg px-6 py-3 rounded">
              View Sample Dashboard
            </button>
          </div>
        </section>

        {/* Content Sections */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-16">
          {/* ARRchie */}
          <div className="bg-white shadow rounded-xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">Meet ARRchie: Your SaaS Sidekick</h2>
            <p className="text-gray-700 mb-6">
              ARRchie is your built-in AI assistant trained to help SaaS teams dig into their metrics.
              Ask ARRchie anything — from churn drivers to board prep summaries — and get instant insights.
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>"Why is our churn rate going up?"</li>
              <li>"What should I be concerned about this month?"</li>
              <li>"Write a board-ready summary of our metrics."</li>
            </ul>
          </div>

          {/* BarkBoard */}
          <div className="bg-white shadow rounded-xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">BarkBoard: AI-Powered Insight Feed</h2>
            <p className="text-gray-700">
              Let ARRchie do the thinking. BarkBoard highlights what's going well, what's concerning,
              and what needs your focus — backed by your actual SaaS metrics.
            </p>
          </div>

          {/* Metrics */}
          <div className="bg-white shadow rounded-xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">Dashboards Built for SaaS</h2>
            <p className="text-gray-700 mb-4">
              Track, visualize, and benchmark the KPIs that matter:
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>ARR, New MRR, Expansion, Churn</li>
              <li>CAC, LTV, NRR, GRR</li>
              <li>Gross Margin & Cash Conversion Score</li>
            </ul>
          </div>

          {/* Pricing */}
          <div className="bg-white shadow rounded-xl p-10 text-center border border-gray-200">
            <h2 className="text-3xl font-bold mb-4">Simple, Scalable Pricing</h2>
            <p className="text-gray-700 text-xl mb-2">
              $49 per user / month<br />or $499 per user / year
            </p>
            <p className="mb-6">No feature gates. No add-ons. Just full access to the smartest SaaS dashboard.</p>
            <button className="bg-black text-white text-lg px-6 py-3 rounded">
              Start Free – No Credit Card Needed
            </button>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Level Up Your SaaS Metrics?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white text-lg px-6 py-3 rounded">
              Start Free
            </button>
            <button className="border border-black text-black text-lg px-6 py-3 rounded">
              Schedule a Demo
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
