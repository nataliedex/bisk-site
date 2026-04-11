import { CheckCostsButton } from "../pricing-modal";

const CTA_LABEL = "Check My Costs";
const CTA_SECONDARY = "Book a Call";
const CTA_SECONDARY_HREF = `mailto:info@joinbisk.com?subject=${encodeURIComponent("Book a Call — Bisk")}&body=${encodeURIComponent("Hi Bisk,\n\nI'd like to book a call to learn more about your pricing and how Bisk works for med spas.\n\nName:\nCompany:\nBest phone number:\nBest time to reach me:")}`;

export default function V1Page() {
  return (
    <div className="flex flex-col">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
          <a href="/v1" className="text-xl font-bold tracking-tight text-gray-900">
            Bisk
          </a>
          <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 items-center gap-7 text-sm font-medium text-gray-600">
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#estimate-savings" className="hover:text-gray-900 transition-colors">Estimate savings</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <CheckCostsButton className="border border-gray-200 text-gray-800 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer">
              Become a founding member
            </CheckCostsButton>
            <button className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-500 text-lg tracking-tighter leading-none" aria-label="More">
              &middot;&middot;&middot;
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-16 pb-16 sm:pt-20 md:pt-24 sm:pb-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Group purchasing organization for med spas</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1]">
            The negotiating power of a health system, built for your med spa.
          </h1>
          <p className="mt-5 text-[15px] text-gray-500 max-w-xl mx-auto leading-relaxed">
            Bisk GPO pools the purchasing volume of independent med spas to negotiate better rates with leading compounding pharmacies.
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
          <p className="mt-4 text-xs text-gray-400">No contracts &middot; Free pricing analysis &middot; No disruption to your workflow</p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 w-full"><div className="border-t border-gray-100" /></div>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">How it works</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Three steps to better pricing</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {[
              {
                step: "01",
                title: "Share your current costs",
                description: "Tell us what you\u2019re paying per medication. It takes under a minute and there\u2019s no obligation to move forward.",
              },
              {
                step: "02",
                title: "We benchmark your pricing",
                description: "We compare every line item against our network contracts and show you exactly where margin is being left on the table.",
              },
              {
                step: "03",
                title: "Access better rates",
                description: "Start purchasing through Bisk\u2019s negotiated contracts at your own pace. Same medications, same quality \u2014 better economics.",
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

      {/* Feature Callout — Trust Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 leading-tight">
            Large-scale pharmacy partners.
            <br />
            Without the large-scale medical practice.
          </h2>
          <div className="mt-6 text-[15px] text-gray-500 leading-relaxed space-y-4 max-w-2xl mx-auto text-left">
            <p>
              Bisk works with the largest, most established compounding pharmacies in the country {"\u2014"} the same partners trusted by major telehealth platforms. These are high-volume, widely recognized names in the compounding space.
            </p>
            <p>
              When you join Bisk, your purchasing volume is combined with every other member, giving us the leverage to negotiate better rates on your behalf.
            </p>
          </div>
        </div>
      </section>

      {/* Why Bisk */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Why Bisk</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Built for med spa economics</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">Every feature is designed around what independent med spas actually need {"\u2014"} not a generic GPO layered onto a hospital supply chain.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Collective bargaining power",
                description: "Independent med spas can\u2019t move pricing on their own. As a network, we negotiate rates that no single practice could access independently.",
              },
              {
                title: "Full margin visibility",
                description: "See exactly what you pay, what you charge, and what you keep \u2014 per medication, per month.",
              },
              {
                title: "Built for GLP-1s and aesthetics",
                description: "Semaglutide, Tirzepatide, peptides, topicals \u2014 Bisk is purpose-built for the medications you actually buy.",
              },
              {
                title: "Flexible adoption",
                description: "Switch at your own pace. Use Bisk where it makes sense \u2014 no minimums, no forced consolidation.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-7 border border-gray-100">
                <h3 className="text-[15px] font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Estimator — Reframed */}
      <section id="estimate-savings" className="py-14 sm:py-20 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">See what collective bargaining could save you.</h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">Enter your current medication costs and we{"\u2019"}ll show you where Bisk may be able to improve your pricing. We{"\u2019"}ll follow up with a real analysis.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CheckCostsButton className="w-full sm:w-auto bg-gray-900 text-white rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-800 transition-colors text-center cursor-pointer">
              {CTA_LABEL}
            </CheckCostsButton>
            <a href={CTA_SECONDARY_HREF}
              className="w-full sm:w-auto border border-gray-200 text-gray-700 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-50 transition-colors text-center">
              {CTA_SECONDARY}
            </a>
          </div>
          <p className="mt-3 text-[11px] text-gray-400 max-w-md mx-auto">This is not an instant estimate {"\u2014"} we review each submission and provide a custom comparison based on your current vendors and volume.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Questions</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Frequently asked</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What is Bisk?",
                a: "Bisk is a group purchasing organization (GPO) for med spas. We pool the purchasing volume of independent practices to negotiate better rates with compounding pharmacies.",
              },
              {
                q: "Which pharmacies do you work with?",
                a: "We partner with established, high-volume compounding pharmacies \u2014 the same ones used by the largest telehealth platforms in the country. We do not disclose specific partners publicly, but we\u2019re happy to discuss this on a call.",
              },
              {
                q: "Do I have to switch pharmacies?",
                a: "No. Bisk is flexible \u2014 you can use our negotiated rates where it makes sense and keep your current vendors for everything else. There are no minimums or forced consolidation.",
              },
              {
                q: "Is there a contract or commitment?",
                a: "No long-term contracts. You can start or stop using Bisk at any time.",
              },
              {
                q: "How much can I save?",
                a: "It depends on your current vendors, volume, and the medications you purchase. We provide a custom comparison based on your actual costs \u2014 we don\u2019t make blanket savings claims.",
              },
              {
                q: "How does Bisk make money?",
                a: "Bisk charges a small, transparent per-script fee. We do not mark up pharmacy pricing or take hidden margins.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-gray-100 pb-5">
                <h3 className="text-sm font-semibold text-gray-900">{item.q}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Better pricing starts with better leverage.
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
            Share your current costs and see how Bisk{"\u2019"}s network contracts compare. No pressure, no obligation to move forward.
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
          <p className="mt-4 text-xs text-gray-500">Free analysis. No contracts. No obligation.</p>
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
