import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-4">Finally Understand Your SaaS Metrics.</h1>
        <p className="text-lg mb-6">
          Dashhound is the AI-powered dashboard that helps SaaS companies track, explain,
          and act on the metrics that matter most.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="text-lg px-6 py-3">Try Dashhound Free</Button>
          <Button variant="outline" className="text-lg px-6 py-3">View Sample Dashboard</Button>
        </div>
      </section>

      {/* ARRchie Section */}
      <section className="max-w-4xl mx-auto py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-4">Meet ARRchie: Your SaaS Sidekick</h2>
        <p className="text-gray-700 mb-6">
          ARRchie is your built-in AI assistant trained to help SaaS teams dig into their metrics.
          Ask ARRchie anything — from churn drivers to board prep summaries — and get instant insights.
        </p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>"Why is our churn rate going up?"</li>
          <li>"What should I be concerned about this month?"</li>
          <li>"Write a board-ready summary of our metrics."</li>
        </ul>
      </section>

      {/* BarkBoard Section */}
      <section className="max-w-4xl mx-auto py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-4">BarkBoard: AI-Powered Insight Feed</h2>
        <p className="text-gray-700">
          Let ARRchie do the thinking. BarkBoard highlights what's going well, what's concerning,
          and what needs your focus — backed by your actual SaaS metrics.
        </p>
      </section>

      {/* Metrics Section */}
      <section className="max-w-4xl mx-auto py-16 border-t border-gray-200">
        <h2 className="text-3xl font-semibold mb-4">Dashboards Built for SaaS</h2>
        <p className="text-gray-700 mb-4">
          Track, visualize, and benchmark the KPIs that matter:
        </p>
        <ul className="list-disc list-inside space-y-2 text-left">
          <li>ARR, New MRR, Expansion, Churn</li>
          <li>CAC, LTV, NRR, GRR</li>
          <li>Gross Margin & Cash Conversion Score</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section className="max-w-4xl mx-auto py-16 border-t border-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-4">Simple, Scalable Pricing</h2>
        <p className="text-gray-700 text-lg mb-4">
          $49 per user / month<br />
          or $499 per user / year
        </p>
        <p className="mb-6">No feature gates. No add-ons. Just full access to the smartest SaaS dashboard.</p>
        <Button className="text-lg px-6 py-3">Start Free – No Credit Card Needed</Button>
      </section>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto py-16 border-t border-gray-200 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Level Up Your SaaS Metrics?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="text-lg px-6 py-3">Start Free</Button>
          <Button variant="outline" className="text-lg px-6 py-3">Schedule a Demo</Button>
        </div>
      </section>
    </main>
  );
}
