"use client";

import { useState } from "react";

// =============================================
// DATA TYPES
// =============================================

interface MedicationLine {
  name: string;
  unit: string;
  price: string;
  qty: string;
}

interface SubmissionPayload {
  contact: {
    name: string;
    company: string;
    email: string;
    phone: string;
  };
  medications: {
    name: string;
    unit: string;
    unitPrice: number;
    monthlyQty: number;
  }[];
  submittedAt: string;
}

// =============================================
// TEMPLATE GENERATORS
// =============================================

/**
 * Generates a branded HTML email template for the pricing submission.
 * Uses inline styles and table layout for maximum email client compatibility.
 * This HTML is intended to be sent via a transactional email service (Resend, SendGrid, etc.).
 */
function buildHtmlEmail(payload: SubmissionPayload): string {
  const { contact, medications, submittedAt } = payload;
  const timestamp = new Date(submittedAt).toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" });

  const medsRows = medications.map((m) =>
    `<tr>
      <td style="padding:8px 12px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111">${m.name}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111;text-align:right">$${m.unitPrice.toFixed(2)} / ${m.unit}</td>
      <td style="padding:8px 12px;border-bottom:1px solid #f3f4f6;font-size:14px;color:#111;text-align:right">${m.monthlyQty}</td>
    </tr>`
  ).join("");

  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#ffffff">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;padding:32px 24px">
  <tr><td>
    <div style="padding-bottom:16px;border-bottom:2px solid #111;margin-bottom:24px">
      <span style="font-size:20px;font-weight:700;color:#111;letter-spacing:-0.5px">Bisk</span>
      <span style="font-size:13px;color:#9ca3af;margin-left:12px">Pricing Submission</span>
    </div>

    <div style="margin-bottom:24px">
      <div style="font-size:14px;font-weight:600;color:#111;margin-bottom:12px">Contact Information</div>
      <table cellpadding="0" cellspacing="0" style="width:100%">
        <tr>
          <td style="padding:4px 0;width:100px;font-size:12px;color:#9ca3af;vertical-align:top">Name</td>
          <td style="padding:4px 0;font-size:14px;color:#111;font-weight:500">${contact.name}</td>
        </tr>
        ${contact.company ? `<tr>
          <td style="padding:4px 0;width:100px;font-size:12px;color:#9ca3af;vertical-align:top">Company</td>
          <td style="padding:4px 0;font-size:14px;color:#111;font-weight:500">${contact.company}</td>
        </tr>` : ""}
        <tr>
          <td style="padding:4px 0;width:100px;font-size:12px;color:#9ca3af;vertical-align:top">Email</td>
          <td style="padding:4px 0;font-size:14px;color:#111"><a href="mailto:${contact.email}" style="color:#4f46e5;text-decoration:none">${contact.email}</a></td>
        </tr>
        ${contact.phone ? `<tr>
          <td style="padding:4px 0;width:100px;font-size:12px;color:#9ca3af;vertical-align:top">Phone</td>
          <td style="padding:4px 0;font-size:14px;color:#111">${contact.phone}</td>
        </tr>` : ""}
      </table>
    </div>

    <div style="margin-bottom:24px">
      <div style="font-size:14px;font-weight:600;color:#111;margin-bottom:12px">Current Medication Pricing</div>
      <table cellpadding="0" cellspacing="0" style="width:100%;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        <tr style="background:#f9fafb">
          <th style="padding:8px 12px;text-align:left;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e5e7eb">Medication</th>
          <th style="padding:8px 12px;text-align:right;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e5e7eb">Unit Price</th>
          <th style="padding:8px 12px;text-align:right;font-size:11px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid #e5e7eb">Monthly Qty</th>
        </tr>
        ${medsRows}
      </table>
    </div>

    <div style="padding-top:16px;border-top:1px solid #e5e7eb;font-size:11px;color:#9ca3af">
      This pricing submission was generated via joinbisk.com &middot; ${timestamp}
    </div>
  </td></tr>
</table>
</body></html>`;
}

/**
 * Generates a plain-text version of the pricing submission.
 * Used as the mailto: body fallback.
 * NOTE: mailto: links only support plain text — they cannot render HTML.
 */
function buildPlainTextEmail(payload: SubmissionPayload): string {
  const { contact, medications } = payload;

  const medsLines = medications.map((m) =>
    `\u2022 ${m.name} \u2014 $${m.unitPrice.toFixed(2)} / ${m.unit} \u2014 Qty ${m.monthlyQty} monthly`
  ).join("\n");

  return [
    "Bisk Pricing Submission",
    "",
    "Practice Details",
    `Name: ${contact.name}`,
    contact.company ? `Company: ${contact.company}` : null,
    `Email: ${contact.email}`,
    contact.phone ? `Phone: ${contact.phone}` : null,
    "",
    "Submitted Pricing",
    medsLines,
    "",
    "Submitted via joinbisk.com",
  ].filter((line) => line !== null).join("\n");
}

// =============================================
// SUBMISSION LOGIC
// =============================================

/**
 * Submits the pricing intake form.
 *
 * Current MVP: opens mailto with plain-text body + opens HTML preview in new tab.
 *
 * TODO: Replace mailto fallback with backend API call:
 *
 *   const res = await fetch("/api/submit-pricing", {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify({
 *       ...payload,
 *       emailHtml: buildHtmlEmail(payload),
 *       emailText: buildPlainTextEmail(payload),
 *     }),
 *   });
 *
 * The API endpoint would then:
 *   1. Store the submission in the database
 *   2. Send the branded HTML email to info@joinbisk.com via Resend/SendGrid
 *   3. Send a confirmation email to the submitter
 *   4. Return success/failure
 *
 * Resend example (server-side):
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "Bisk <notifications@joinbisk.com>",
 *     to: "info@joinbisk.com",
 *     subject: `Pricing Submission — ${payload.contact.company || payload.contact.name}`,
 *     html: emailHtml,
 *     text: emailText,
 *     replyTo: payload.contact.email,
 *   });
 */
async function submitPricing(payload: SubmissionPayload): Promise<void> {
  const plainEmail = buildPlainTextEmail(payload);

  // MVP: Open a single mailto draft with plain-text body.
  // mailto: can only reliably create a plain-text email draft in the user's mail client.
  // The branded HTML memo (buildHtmlEmail) is reserved for future backend email sending
  // via Resend/SendGrid — it cannot be rendered through mailto:.
  const subject = `Bisk Pricing Submission \u2014 ${payload.contact.company || payload.contact.name}`;
  const mailto = `mailto:info@joinbisk.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(plainEmail)}`;
  window.location.href = mailto;
}

// =============================================
// FORM CONSTANTS
// =============================================

const UNITS = ["vial", "tube", "capsule", "tablet", "bottle", "syringe", "kit"];

const DEFAULT_MEDICATIONS: MedicationLine[] = [
  { name: "Semaglutide", unit: "vial", price: "", qty: "" },
  { name: "Tirzepatide", unit: "vial", price: "", qty: "" },
  { name: "Tretinoin Cream", unit: "tube", price: "", qty: "" },
  { name: "NAD+ Nasal Spray", unit: "bottle", price: "", qty: "" },
  { name: "Glutathione", unit: "vial", price: "", qty: "" },
];

const inputClass = "w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow";

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// =============================================
// MODAL COMPONENT
// =============================================

export function PricingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [lines, setLines] = useState<MedicationLine[]>(DEFAULT_MEDICATIONS.map((m) => ({ ...m })));
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function updateLine(idx: number, field: keyof MedicationLine, value: string) {
    setLines((prev) => { const next = [...prev]; next[idx] = { ...next[idx], [field]: value }; return next; });
  }
  function removeLine(idx: number) { setLines((prev) => prev.filter((_, i) => i !== idx)); }
  function addLine() { setLines((prev) => [...prev, { name: "", unit: "vial", price: "", qty: "" }]); }

  function reset() {
    setLines(DEFAULT_MEDICATIONS.map((m) => ({ ...m })));
    setName(""); setCompany(""); setEmail(""); setPhone("");
    setSubmitting(false);
  }

  function handleClose() { onClose(); setTimeout(reset, 300); }

  // Build structured payload from form state
  function buildPayload(): SubmissionPayload {
    const filledMeds = lines
      .filter((l) => l.name.trim() && l.price && parseFloat(l.price) > 0)
      .map((l) => ({
        name: l.name.trim(),
        unit: l.unit,
        unitPrice: parseFloat(l.price),
        monthlyQty: parseInt(l.qty) || 1,
      }));

    return {
      contact: { name: name.trim(), company: company.trim(), email: email.trim(), phone },
      medications: filledMeds,
      submittedAt: new Date().toISOString(),
    };
  }

  const filledLines = lines.filter((l) => l.name.trim() && l.price && parseFloat(l.price) > 0);
  const canSubmit = filledLines.length > 0 && name.trim() && email.trim();

  async function handleSubmit() {
    if (!canSubmit || submitting) return;
    setSubmitting(true);
    // Opens one mailto draft. We cannot detect if the user actually sends it,
    // so we close the modal without showing a misleading success message.
    const payload = buildPayload();
    await submitPricing(payload);
    handleClose();
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-gray-100">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Enter your current medication pricing</h2>
                  <p className="mt-1 text-sm text-gray-500">We{"\u2019"}ll review your pricing and follow up with a custom comparison.</p>
                </div>
                <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none p-1 -mt-1">&times;</button>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-5 space-y-5">
              {/* Medication rows */}
              <div>
                <div className="grid grid-cols-[1fr_70px_90px_70px_28px] sm:grid-cols-[1fr_90px_110px_90px_28px] gap-2 mb-2">
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Medication</span>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Unit</span>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider text-right">Price / unit</span>
                  <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider text-right">Mo. qty</span>
                  <span />
                </div>

                <div className="space-y-2">
                  {lines.map((line, idx) => (
                    <div key={idx} className="grid grid-cols-[1fr_70px_90px_70px_28px] sm:grid-cols-[1fr_90px_110px_90px_28px] gap-2 items-center">
                      <input type="text" value={line.name} onChange={(e) => updateLine(idx, "name", e.target.value)}
                        placeholder="Medication name"
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow" />
                      <select value={line.unit} onChange={(e) => updateLine(idx, "unit", e.target.value)}
                        className="border border-gray-200 rounded-lg px-2 py-2 text-sm text-gray-700 focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none">
                        {UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
                      </select>
                      <div className="relative">
                        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm">$</span>
                        <input type="number" step="0.01" min="0" value={line.price} onChange={(e) => updateLine(idx, "price", e.target.value)}
                          placeholder="0.00"
                          className="w-full border border-gray-200 rounded-lg pl-6 pr-2 py-2 text-sm text-right focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow" />
                      </div>
                      <input type="number" min="1" value={line.qty} onChange={(e) => updateLine(idx, "qty", e.target.value)}
                        placeholder="1"
                        className="w-full border border-gray-200 rounded-lg px-2 py-2 text-sm text-right focus:ring-2 focus:ring-gray-900 focus:border-gray-900 outline-none transition-shadow" />
                      <button onClick={() => removeLine(idx)}
                        className="text-gray-300 hover:text-red-500 text-lg leading-none transition-colors text-center" title="Remove">&times;</button>
                    </div>
                  ))}
                </div>

                <button onClick={addLine} className="mt-3 text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors">
                  + Add medication
                </button>
              </div>

              <div className="border-t border-gray-100" />

              {/* Contact fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Name <span className="text-red-400">*</span></label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Company</label>
                  <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Practice or company name" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Email <span className="text-red-400">*</span></label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@yourmedspa.com" className={inputClass} />
                </div>
                <div>
                  <label className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Phone</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(formatPhone(e.target.value))} placeholder="(555) 555-5555" className={inputClass} />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="px-6 sm:px-8 py-5 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button onClick={handleSubmit} disabled={!canSubmit || submitting}
                  className="w-full sm:w-auto bg-gray-900 text-white rounded-lg px-8 py-3.5 text-[15px] font-semibold hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors text-center">
                  {submitting ? "Submitting..." : "Submit Pricing"}
                </button>
                <button onClick={handleClose}
                  className="w-full sm:w-auto text-sm text-gray-500 hover:text-gray-700 transition-colors text-center py-2">
                  Cancel
                </button>
              </div>
              <p className="mt-3 text-xs text-gray-400">A member of our team will review this and reach out.</p>
            </div>
      </div>
    </div>
  );
}

// =============================================
// BUTTON WRAPPER
// =============================================

export function CheckCostsButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className={className}>{children}</button>
      <PricingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
