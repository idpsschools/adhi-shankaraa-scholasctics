import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';
import { IMG } from '../data/societyData.js';

const inputClass =
  'w-full bg-surface px-space-md py-space-sm rounded border border-outline-variant/60 font-body-md text-body-md text-on-surface transition-colors focus:outline-none focus:border-primary focus:ring-2 focus:ring-secondary/30 disabled:opacity-60 disabled:cursor-not-allowed';

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const emailjsConfigured = Boolean(EMAILJS.serviceId && EMAILJS.templateId && EMAILJS.publicKey);

export default function Contact() {
  // 'idle' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Honeypot — real users never fill a hidden field; bots do.
    if (form.elements.company && form.elements.company.value) return;

    if (!emailjsConfigured) {
      setStatus('error');
      setErrorMsg(
        'The enquiry form is not configured yet. Please email the corporate office directly, or try again later.',
      );
      // Helpful hint for whoever is running the site.
      console.warn(
        '[Contact] EmailJS is not configured. Set VITE_EMAILJS_SERVICE_ID, ' +
          'VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in .env and restart the dev server.',
      );
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, {
        publicKey: EMAILJS.publicKey,
      });
      form.reset();
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        (err && (err.text || err.message)) ||
          'Something went wrong while sending your message. Please try again in a moment.',
      );
      console.error('[Contact] EmailJS sendForm failed:', err);
    }
  };

  const sending = status === 'sending';

  return (
    <section className="w-full py-space-3xl lg:py-space-4xl bg-surface relative" id="contact">
      <div className="shell">
        {/* Section Eyebrow & Headline */}
        <Reveal as="div" className="flex flex-col items-start max-w-3xl mb-space-2xl">
          <div className="flex items-center gap-space-2xs mb-space-2xs">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">
              Communications &amp; Inquiries
            </span>
          </div>
          <h2 className="font-display-md text-display-md text-primary tracking-tight text-balance">Get in Touch</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-2xs">
            Connect directly with corporate governance or administrative staff at our Associated Institution
            campus.
          </p>
        </Reveal>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Left Column: Verified Addresses & Registry Data */}
          <Reveal as="div" className="lg:col-span-5 flex flex-col gap-space-md">
            {/* Society Office Address Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-secondary/30 shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs text-primary">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-secondary/40 bg-primary flex items-center justify-center">
                  <img alt="Society Seal" className="w-full h-full object-contain" src={IMG.societySeal} />
                </div>
                <span className="font-headline-sm text-[18px] text-primary font-bold">
                  Registered Corporate Office
                </span>
              </div>
              <div className="flex flex-col gap-space-3xs pl-space-md border-l-2 border-secondary">
                <p className="font-headline-sm text-[16px] text-primary font-bold">
                  Adhi Shankaraa Scholastics
                </p>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  4-128, Ponnapalli, Cherukupalli,
                  <br />
                  Bapatla District, Andhra Pradesh – 522259, India
                </p>
                <span className="font-label-sm text-label-sm text-secondary font-semibold mt-space-2xs">
                  Societies Registration No. 464 of 2006
                </span>
              </div>
            </div>

            {/* School Campus Location Card */}
            <div className="bg-surface-container-lowest p-space-lg rounded-xl border border-secondary/30 shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs text-primary">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 border border-secondary/40 bg-surface-container-lowest flex items-center justify-center p-0.5">
                  <img alt="IDPS Logo" className="w-full h-full object-contain" src={IMG.contactSchoolLogo} />
                </div>
                <span className="font-headline-sm text-[18px] text-primary font-bold">
                  Affiliated School Campus Location
                </span>
              </div>
              <div className="flex flex-col gap-space-3xs pl-space-md border-l-2 border-secondary">
                <p className="font-headline-sm text-[16px] text-primary font-bold">
                  International Delhi Public School, Cherukupalli
                </p>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  Ponnappalli, Cherukupalli,
                  <br />
                  Andhra Pradesh – 522259, India
                </p>
                <span className="font-label-sm text-label-sm text-secondary font-semibold mt-space-2xs">
                  CBSE Affiliation No. 130739
                </span>
              </div>
            </div>

            {/* Official Office Hours Note */}
            <div className="bg-surface-container-low border border-outline-variant/40 p-space-md rounded-xl flex items-center gap-space-sm text-on-surface">
              <Icon name="schedule" className="text-[24px] text-secondary shrink-0" />
              <div className="flex flex-col">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider font-semibold">
                  Administrative Hours
                </span>
                <p className="font-body-sm text-body-sm text-on-surface font-medium">
                  Office hours: Monday to Saturday, 9:00 AM to 5:00 PM IST.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Enquiry Form */}
          <Reveal as="div" variant="fade" delay={120} className="lg:col-span-7">
            <div className="bg-surface-container-lowest p-space-lg sm:p-space-xl rounded-xl border border-secondary/30 shadow-md">
              <div className="mb-space-lg">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">
                  Communication Channel
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mt-space-3xs font-bold">
                  Corporate &amp; Enquiry
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-3xs">
                  Please complete the form below. Inquiries are reviewed directly by the executive
                  administration.
                </p>
              </div>
              <form
                className="flex flex-col gap-space-md"
                id="society-enquiry-form"
                onSubmit={handleSubmit}
              >
                {/* Honeypot: visually hidden, off-screen, not focusable — spam bots fill it. */}
                <div aria-hidden="true" className="hidden">
                  <label htmlFor="company">Company (leave this field empty)</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Full Name Field */}
                <div className="flex flex-col gap-space-3xs">
                  <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="fullname">
                    Full Name <span className="text-error">*</span>
                  </label>
                  <input
                    className={inputClass}
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your full name"
                    required
                    type="text"
                    disabled={sending}
                  />
                </div>

                {/* Two-Column Fields: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-space-3xs">
                    <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="email">
                      Email Address <span className="text-error">*</span>
                    </label>
                    <input
                      className={inputClass}
                      id="email"
                      name="email"
                      placeholder="name@example.com"
                      required
                      type="email"
                      disabled={sending}
                    />
                  </div>
                  <div className="flex flex-col gap-space-3xs">
                    <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="phone">
                      Phone Number <span className="text-error">*</span>
                    </label>
                    <input
                      className={inputClass}
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                      disabled={sending}
                    />
                  </div>
                </div>

                {/* Inquiry Type Select */}
                <div className="flex flex-col gap-space-3xs">
                  <label
                    className="font-label-md text-label-md text-primary font-semibold"
                    htmlFor="inquiry_type"
                  >
                    Inquiry Type <span className="text-error">*</span>
                  </label>
                  <select
                    className={inputClass}
                    id="inquiry_type"
                    name="inquiry_type"
                    required
                    defaultValue=""
                    disabled={sending}
                  >
                    <option disabled value="">
                      Select an inquiry nature...
                    </option>
                    <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                    <option value="School Admissions">School Admissions (IDPS Cherukupalli)</option>
                    <option value="Academic Collaboration">Academic Collaboration</option>
                    <option value="Other">Other Institutional Matter</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="flex flex-col gap-space-3xs">
                  <label className="font-label-md text-label-md text-primary font-semibold" htmlFor="message">
                    Your Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    className={`${inputClass} resize-y`}
                    id="message"
                    name="message"
                    placeholder="Provide detailed information regarding your inquiry..."
                    required
                    rows="4"
                    disabled={sending}
                  ></textarea>
                </div>

                {/* Submit Button & Reassurance */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm pt-space-xs">
                  <button
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs bg-primary text-on-primary font-label-md text-label-md px-space-xl py-space-sm rounded-md shadow-md hover:bg-primary-container hover:-translate-y-0.5 border border-secondary/40 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-primary"
                    type="submit"
                    disabled={sending}
                  >
                    <span>{sending ? 'Sending…' : 'Send Enquiry'}</span>
                    <Icon
                      name={sending ? 'progress_activity' : 'send'}
                      className={`text-[18px] text-secondary-container${sending ? ' animate-spin' : ''}`}
                    />
                  </button>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Your message is delivered directly to the corporate executive office.
                  </p>
                </div>

                {/* Success Notification */}
                <div
                  className={`${status === 'success' ? '' : 'hidden'} mt-space-xs p-space-sm bg-surface-container rounded-lg border border-secondary/40 text-primary flex items-center gap-space-xs`}
                  id="enquiry-success-msg"
                  role="status"
                  aria-live="polite"
                >
                  <Icon name="check_circle" className="text-secondary text-[20px] shrink-0" />
                  <span className="font-body-sm text-body-sm font-semibold">
                    Thank you. Your message has been received by the Adhi Shankaraa Scholastics
                    secretariat.
                  </span>
                </div>

                {/* Error Notification */}
                <div
                  className={`${status === 'error' ? '' : 'hidden'} mt-space-xs p-space-sm bg-error-container rounded-lg border border-error/40 text-error flex items-center gap-space-xs`}
                  id="enquiry-error-msg"
                  role="alert"
                  aria-live="assertive"
                >
                  <Icon name="error" className="text-error text-[20px] shrink-0" />
                  <span className="font-body-sm text-body-sm font-semibold">
                    {errorMsg || 'Your message could not be sent. Please try again.'}
                  </span>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
