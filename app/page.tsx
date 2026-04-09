import { CheckCostsButton } from "./pricing-modal";

const SAVINGS_DATA = [
  { medication: "Semaglutide", unit: "vial", before: 220, after: 165 },
  { medication: "Tirzepatide", unit: "vial", before: 290, after: 195 },
  { medication: "Tretinoin Cream", unit: "tube", before: 52, after: 35 },
  { medication: "NAD+ Nasal Spray", unit: "bottle", before: 135, after: 95 },
  { medication: "Glutathione", unit: "vial", before: 110, after: 72 },
];

const TESTIMONIALS = [
  {
    quote: "We were paying $220/vial for Semaglutide for over a year. Bisk found us $165 pricing in 48 hours \u2014 no workflow changes at all.",
    attribution: "Founder, Nashville Wellness Clinic",
  },
  {
    quote: "We reduced our GLP-1 costs by 30% and finally have visibility into our per-vial margins. The switch was completely seamless.",
    attribution: "Owner, Austin Med Spa",
  },
  {
    quote: "Before Bisk, we had no idea we were overpaying on five different medications. Now we save over $2,000/month.",
    attribution: "Operations Director, Scottsdale Aesthetics",
  },
];

function fmt(n: number) {
  return `$${n.toLocaleString("en-US")}`;
}

const CTA_LABEL = "Check My Costs";
const CTA_SECONDARY = "Book a Call";
const CTA_SECONDARY_HREF = "mailto:info@joinbisk.com?subject=Book%20a%20Call";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-bold tracking-tight text-gray-900">
            Bisk
          </a>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
              See Savings
            </a>
            <CheckCostsButton className="bg-gray-900 text-white rounded-lg px-5 py-2.5 text-sm font-semibold hover:bg-gray-800 transition-colors cursor-pointer">
              {CTA_LABEL}
            </CheckCostsButton>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-16 sm:pt-20 md:pt-24 sm:pb-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            Stop overpaying for compounded medications.
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-medium text-gray-400 tracking-tight">
            See exactly what you should be paying.
          </p>
          <p className="mt-4 text-[15px] text-gray-500 max-w-lg mx-auto leading-relaxed">
            Bisk connects you to vetted compounding pharmacies {"\u2014"} without changing how you operate.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CheckCostsButton className="w-full sm:w-auto bg-gray-900 text-white rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-800 transition-colors text-center cursor-pointer">
              {CTA_LABEL}
            </CheckCostsButton>
            <a href={CTA_SECONDARY_HREF}
              className="w-full sm:w-auto border border-gray-200 text-gray-700 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-50 transition-colors text-center">
              {CTA_SECONDARY}
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">No contracts required &middot; Free pricing analysis &middot; Fully vetted pharmacies</p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 w-full"><div className="border-t border-gray-100" /></div>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">How it works</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Three steps to better pricing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {[
              {
                step: "01",
                title: "Enter your current costs",
                description: "Tell us what you\u2019re paying per medication. It takes under a minute.",
              },
              {
                step: "02",
                title: "We benchmark your pricing",
                description: "We compare every line item against our pharmacy network and find where you\u2019re overpaying.",
              },
              {
                step: "03",
                title: "Switch with zero disruption",
                description: "Move to lower-cost sources at your pace. Same medications, same quality, better margins.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-3xl font-bold text-gray-200 tabular-nums">{item.step}</div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-[15px] text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Bisk */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Why Bisk</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built for med spa economics</h2>
            <p className="mt-3 text-gray-500">Transparent pricing. No hidden markups. No long-term contracts.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Negotiated pharmacy rates",
                description: "We aggregate purchasing power across dozens of med spas to negotiate costs you can\u2019t access alone.",
              },
              {
                title: "Every pharmacy is vetted",
                description: "Licensed, compliant, and quality-checked. We handle the diligence so you don\u2019t have to.",
              },
              {
                title: "One streamlined workflow",
                description: "Replace multiple pharmacy vendors with a single, reliable ordering process.",
              },
              {
                title: "Full margin visibility",
                description: "See exactly what you pay, what you charge, and what you keep \u2014 per medication, per month.",
              },
              {
                title: "Built for GLP-1s + aesthetics",
                description: "Semaglutide, Tirzepatide, peptides, topicals \u2014 not a generic GPO. Built for what you actually buy.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-7 border border-gray-100">
                <h3 className="text-[15px] font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Example */}
      <section id="pricing" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Example savings</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">The math speaks for itself</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">Based on real pharmacy network pricing, updated regularly.</p>
          </div>

          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Medication</th>
                  <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider hidden sm:table-cell">What you{"\u2019"}re likely paying</th>
                  <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">With Bisk</th>
                  <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">You Save</th>
                </tr>
              </thead>
              <tbody>
                {SAVINGS_DATA.map((row, idx) => {
                  const saved = row.before - row.after;
                  const pct = Math.round((saved / row.before) * 100);
                  return (
                    <tr key={row.medication} className={`border-b border-gray-100 ${idx % 2 === 1 ? "bg-gray-50/50" : ""}`}>
                      <td className="px-6 py-3.5">
                        <span className="text-sm font-medium text-gray-900">{row.medication}</span>
                        <span className="text-xs text-gray-400 ml-1.5">/ {row.unit}</span>
                      </td>
                      <td className="px-6 py-3.5 text-right text-sm text-gray-400 line-through hidden sm:table-cell">{fmt(row.before)}</td>
                      <td className="px-6 py-3.5 text-right text-sm font-semibold text-gray-900">{fmt(row.after)}</td>
                      <td className="px-6 py-3.5 text-right">
                        <span className="text-sm font-semibold text-emerald-600">{fmt(saved)}</span>
                        <span className="text-xs text-emerald-500 ml-1">({pct}%)</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-center text-sm text-gray-400">
            Med spas in our network save <span className="font-semibold text-gray-600">20{"\u2013"}40%</span> on their top medications.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-14 sm:py-20 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">See what you could be saving.</h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">Enter your current medication costs and we{"\u2019"}ll show you exactly where your margins can improve.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CheckCostsButton className="w-full sm:w-auto bg-gray-900 text-white rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-800 transition-colors text-center cursor-pointer">
              {CTA_LABEL}
            </CheckCostsButton>
            <a href={CTA_SECONDARY_HREF}
              className="w-full sm:w-auto border border-gray-200 text-gray-700 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-50 transition-colors text-center">
              {CTA_SECONDARY}
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-400">No contracts. No obligation.</p>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Trusted by operators</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Used by growing med spas</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-7 border border-gray-100">
                <p className="text-[15px] text-gray-700 leading-relaxed">{"\u201C"}{t.quote}{"\u201D"}</p>
                <p className="mt-3 text-sm font-medium text-gray-400">{t.attribution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            See exactly what you{"\u2019"}re overpaying.
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
            Enter your current costs and we{"\u2019"}ll benchmark you against our pharmacy network.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CheckCostsButton className="w-full sm:w-auto bg-white text-gray-900 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-100 transition-colors text-center cursor-pointer">
              {CTA_LABEL}
            </CheckCostsButton>
            <a href={CTA_SECONDARY_HREF}
              className="w-full sm:w-auto border border-gray-600 text-gray-300 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-800 transition-colors text-center">
              {CTA_SECONDARY}
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">Free analysis. No obligation.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold text-gray-900">Bisk</span>
              <span className="text-sm text-gray-400">&copy; 2026</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="mailto:info@joinbisk.com" className="hover:text-gray-600 transition-colors">info@joinbisk.com</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
