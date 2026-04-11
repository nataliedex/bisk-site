'use client';

import { useState } from 'react';
import { CheckCostsButton, PricingModal } from '../pricing-modal';

const CTA_LABEL = 'Check My Costs';
const CTA_SECONDARY_HREF = `mailto:info@joinbisk.com?subject=${encodeURIComponent('Book a Call — Bisk')}&body=${encodeURIComponent('Hi Bisk,\n\nI\'d like to book a call to learn more about your pricing and how Bisk works for med spas.\n\nName:\nCompany:\nBest phone number:\nBest time to reach me:')}`;

// ── FAQ Accordion Item ────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors"
      >
        {q}
        <span
          className="ml-4 flex-shrink-0 text-gray-400 transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 4v10M4 9h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-4 text-sm text-gray-500 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function V2Page() {
  const [navModalOpen, setNavModalOpen] = useState(false);

  const faqs = [
    {
      q: 'When will Bisk launch?',
      a: 'Not yet — we\'re in the founding member phase, aggregating demand from independent med spas before we go to pharmacies to negotiate. When you join, you\'ll be notified as soon as rates are secured and ready.',
    },
    {
      q: 'What does "founding member" actually mean?',
      a: 'It means you\'re in before we go live. You help us build the network by sharing your current rates, you get access first, and you see the negotiated rates before anyone else.',
    },
    {
      q: 'Am I committing to buy anything by joining?',
      a: 'No. Joining is free and non-binding. You only purchase if the rates we negotiate beat what you\'re paying today.',
    },
    {
      q: 'Which pharmacies will you work with?',
      a: 'We will secure pricing agreements with large scale U.S.-based FDA-licensed drug manufacturers. We\'re targeting the same high-volume compounding pharmacies trusted by major telehealth platforms.',
    },
    {
      q: 'How does Bisk make money?',
      a: 'Bisk operates on a shared savings model — we earn a portion of the savings we help you unlock, so our incentives are fully aligned with yours. You only benefit when we deliver, which means we\'re always working to get you the best rates possible.',
    },
  ];

  return (
    <div className="flex flex-col">

      <PricingModal open={navModalOpen} onClose={() => setNavModalOpen(false)} />

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
          <div className="flex-1">
            <a href="/v2" className="text-xl font-bold tracking-tight text-gray-900">Bisk</a>
          </div>
          <div className="hidden sm:flex items-center gap-7 text-sm font-medium text-gray-600">
            <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it works</a>
            <a href="#estimate-savings" className="hover:text-gray-900 transition-colors">Estimate savings</a>
            <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          </div>
          <div className="flex-1 flex justify-end">
            <button
              onClick={() => setNavModalOpen(true)}
              className="border border-gray-200 text-gray-800 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-20 pb-20 sm:pt-28 sm:pb-28">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
            Launching soon
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-5">
            The negotiating power of a{' '}
            <em className="not-italic text-emerald-700">health system,</em>{' '}
            built for your med spa.
          </h1>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-xl mx-auto mb-8">
            Independent med spas pay retail rates for compounding medications. Bisk is changing
            that by building a group purchasing organization to give practices the collective
            leverage to negotiate rates they couldn&apos;t access on their own.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CheckCostsButton className="w-full sm:w-auto bg-gray-900 text-white rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-800 transition-colors text-center cursor-pointer">
              Join the founding group — it&apos;s free
            </CheckCostsButton>
            <a
              href="mailto:info@joinbisk.com?subject=Book%20a%20Call%20—%20Bisk"
              className="w-full sm:w-auto border border-gray-200 text-gray-700 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Book a call
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            No purchase commitment · No fees to join · You only buy if we beat your current pricing
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 w-full"><div className="border-t border-gray-100" /></div>

      {/* ── Savings Estimate ── */}
      <section className="py-16 sm:py-24 bg-[#f5f2ec]">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            What founding members could save
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            15–20% less on the medications<br className="hidden sm:block" /> you&apos;re already buying.
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-xl mb-8">
            For a typical practice with two prescribers, that&apos;s real margin added to your bottom
            line — every month, with no change to patient pricing or programs.
          </p>

          {/* Savings block */}
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100">
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1">
                Estimated annual savings — 2-prescriber practice
              </p>
              <p className="text-4xl font-bold text-emerald-700 tracking-tight">$43,396 – $57,862</p>
              <p className="text-xs text-gray-400 mt-1">15–20% savings on ~$289,000 prior annual spend</p>
            </div>

            <div className="px-6 py-5">
              {/* Before / After comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-red-600 mb-3">
                    Before — current supplier
                  </p>
                  {[
                    ['GLP-1 / weight loss', '$11,900/mo'],
                    ['BHRT / hormones', '$4,791/mo'],
                    ['IV therapy', '$4,327/mo'],
                    ['Peptides / other', '$3,091/mo'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-xs text-gray-500 py-1 border-b border-gray-50">
                      <span>{label}</span><span>{val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm font-semibold text-gray-900 pt-2">
                    <span>Monthly total</span><span className="text-red-600">$24,109/mo</span>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700 mb-3">
                    After — with Bisk
                  </p>
                  {[
                    ['GLP-1 / weight loss', '$9,818/mo'],
                    ['BHRT / hormones', '$3,953/mo'],
                    ['IV therapy', '$3,570/mo'],
                    ['Peptides / other', '$2,550/mo'],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between text-xs text-gray-500 py-1 border-b border-gray-50">
                      <span>{label}</span><span>{val}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-sm font-semibold text-gray-900 pt-2">
                    <span>Monthly total</span><span className="text-emerald-700">$19,890/mo</span>
                  </div>
                </div>
              </div>

              {/* Bar chart */}
              <div className="space-y-2 mb-6">
                {[
                  { label: 'Before', val: '$289,309/yr', w: '100%', bg: 'bg-red-300', text: 'text-red-900' },
                  { label: 'After', val: '$238,680/yr', w: '82%', bg: 'bg-emerald-400', text: 'text-emerald-900' },
                  { label: 'Savings', val: '$50,629/yr', w: '17%', bg: 'bg-amber-300', text: 'text-amber-900' },
                ].map(({ label, val, w, bg, text }) => (
                  <div key={label} className="flex items-center gap-3 text-xs">
                    <span className="w-12 text-right text-gray-400 flex-shrink-0">{label}</span>
                    <div className="flex-1 h-5 bg-stone-100 rounded-sm overflow-hidden">
                      <div className={`h-full ${bg} rounded-sm flex items-center pl-2`} style={{ width: w }}>
                        <span className={`text-[11px] font-medium ${text} whitespace-nowrap`}>{val}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Category cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                {[
                  { label: 'GLP-1 / weight loss', amt: '$24,990', color: 'text-emerald-700' },
                  { label: 'BHRT / hormones', amt: '$10,061', color: 'text-blue-700' },
                  { label: 'IV therapy', amt: '$9,087', color: 'text-amber-700' },
                  { label: 'Peptides / other', amt: '$6,491', color: 'text-red-700' },
                ].map(({ label, amt, color }) => (
                  <div key={label} className="border border-gray-100 rounded-xl p-3">
                    <p className={`text-[10px] font-semibold ${color} mb-1`}>{label}</p>
                    <p className="text-xl font-bold text-gray-900 leading-none">{amt}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">saved / year</p>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-gray-400 leading-relaxed border-t border-gray-100 pt-3">
                Estimates based on a practice with 2 prescribers and ~104 compoundable patients/month.
                "Before" = current wholesale cost to practice. "After" = projected cost through Bisk's
                negotiated contracts. Savings range reflects 15–20% discount band. Actual savings depend
                on your current vendors and volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 w-full"><div className="border-t border-gray-100" /></div>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-12">
            Simple by design.<br />Powerful by numbers.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                n: '01',
                title: 'Join as a founding member',
                body: 'Express your interest — no money, no obligation. Just your commitment to purchase through Bisk if we can beat what you\'re paying today.',
              },
              {
                n: '02',
                title: 'We negotiate on your behalf',
                body: 'Once we\'ve aggregated enough demand, we take that volume to the top compounding pharmacies and secure rates no single practice could achieve alone.',
              },
              {
                n: '03',
                title: 'You decide when you see the rate',
                body: 'We come back with the number. If it beats your current pricing, you\'re in. If not, you walk away — no strings, no pressure.',
              },
            ].map(({ n, title, body }) => (
              <div key={n}>
                <p className="text-4xl font-bold text-gray-200 tabular-nums mb-3">{n}</p>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 w-full"><div className="border-t border-gray-100" /></div>

      {/* ── Why Join Now ── */}
      <section className="py-16 sm:py-24 bg-[#eeeae1]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Why join now
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-5">
            The biggest pharmacies give their best rates<br className="hidden sm:block" />
            to the biggest buyers. Until now, that wasn&apos;t you.
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed max-w-xl mb-10">
            Big players in healthcare have always negotiated better prices through volume and collective buying power.
            Independent med spas have had neither. Bisk GPO changes that.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 2L11.5 7H16.5L12.5 10.5L14 15.5L9 12.5L4 15.5L5.5 10.5L1.5 7H6.5L9 2Z"
                      stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Be first, get the best rates',
                body: 'Founding members help build the network. The earlier you\'re in, the more leverage we bring when we negotiate.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="6" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 6V5a3 3 0 016 0v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    <circle cx="9" cy="11" r="1.5" fill="currentColor" />
                  </svg>
                ),
                title: 'Purpose-built for med spas',
                body: 'GLP-1s, peptides, aesthetics, and more — curated specifically for med spa practices, not general healthcare.',
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M6 9l2.5 2.5L12 6.5" stroke="currentColor" strokeWidth="1.2"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
                title: 'Zero risk to join',
                body: `No fee, no contract, no obligation to purchase until you've seen the negotiated rate and decided it works.`,
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="bg-white border border-gray-100 rounded-2xl p-6">
                <div className="w-9 h-9 rounded-xl bg-stone-100 flex items-center justify-center text-gray-500 mb-4">
                  {icon}
                </div>
                <h3 className="text-[15px] font-semibold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}See what collective bargaining could save you.
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 w-full"><div className="border-t border-gray-100" /></div>

      {/* ── Estimate Savings ── */}
      <section id="estimate-savings" className="py-14 sm:py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">See what collective bargaining could save you.</h2>
          <p className="mt-3 text-gray-500 max-w-lg mx-auto">Enter your current medication costs and we&apos;ll show you where Bisk may be able to improve your pricing. We&apos;ll follow up with a real analysis.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <CheckCostsButton className="w-full sm:w-auto bg-gray-900 text-white rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-800 transition-colors text-center cursor-pointer">
              {CTA_LABEL}
            </CheckCostsButton>
            <a
              href={CTA_SECONDARY_HREF}
              className="w-full sm:w-auto border border-gray-200 text-gray-700 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Book a Call
            </a>
          </div>
          <p className="mt-3 text-[11px] text-gray-400 max-w-md mx-auto">This is not an instant estimate — we review each submission and provide a custom comparison based on your current vendors and volume.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 w-full"><div className="border-t border-gray-100" /></div>

      {/* ── FAQ ── */}
      <section id="faq" className="py-16 sm:py-24 bg-[#eeeae1]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-8">Questions</h2>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-20 bg-[#1e1c18] text-center">
        <div className="max-w-xl mx-auto px-6">
          <p className="text-[10px] font-semibold text-stone-600 uppercase tracking-widest mb-4">
            Join the founding group
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-100 leading-tight mb-5">
            Better pricing starts with<br />better leverage.
          </h2>
          <p className="text-[15px] text-stone-500 leading-relaxed max-w-sm mx-auto mb-8">
            Independent med spas negotiating together. Join free — no purchase commitment until
            you&apos;ve seen the rate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <CheckCostsButton className="w-full sm:w-auto bg-stone-100 text-stone-900 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-white transition-colors text-center cursor-pointer">
              Sign up
            </CheckCostsButton>
            <a
              href="mailto:info@joinbisk.com?subject=Book%20a%20Call%20—%20Bisk"
              className="w-full sm:w-auto border border-stone-700 text-stone-400 rounded-lg px-8 py-4 text-[15px] font-semibold hover:bg-stone-800 transition-colors text-center"
            >
              Book a call
            </a>
          </div>
          <p className="mt-4 text-xs text-stone-600">
            Free to join · No obligation · You decide if the rates are worth it
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm font-bold text-gray-900">Bisk</span>
            <span className="text-sm text-gray-400">© 2026</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="mailto:info@joinbisk.com" className="hover:text-gray-600 transition-colors">
              info@joinbisk.com
            </a>
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
