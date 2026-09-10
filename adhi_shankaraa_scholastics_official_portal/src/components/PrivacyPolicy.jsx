import { useEffect } from 'react';
import Icon from './Icon.jsx';
import Reveal from './Reveal.jsx';

const LAST_UPDATED = '10 September 2026';

const PAGE_TITLE = 'Privacy Policy — Adhi Shankaraa Scholastics';
const PAGE_DESCRIPTION =
  'Privacy Policy for the Adhi Shankaraa Scholastics website and the IDPS Students and IDPS Teachers mobile applications — what information is and is not collected, how it is used, and the choices available to you.';

/* Shared type styles, kept close to the rest of the site. */
const h2 =
  'font-headline-md text-headline-md text-primary font-bold tracking-tight mb-space-sm scroll-mt-24';
const h3 = 'font-headline-sm text-[18px] text-primary font-bold mb-space-2xs mt-space-md';
const p = 'font-body-md text-body-md text-on-surface leading-relaxed mb-space-sm';
const ul =
  'list-disc pl-space-lg flex flex-col gap-space-2xs font-body-md text-body-md text-on-surface leading-relaxed mb-space-sm';
const section = 'mb-space-2xl';

export default function PrivacyPolicy() {
  // Reflect the page in the tab title + meta description while it is open,
  // then restore the site-level values when the visitor navigates away.
  useEffect(() => {
    const previousTitle = document.title;
    const descEl = document.querySelector('meta[name="description"]');
    const previousDescription = descEl ? descEl.getAttribute('content') : null;

    document.title = PAGE_TITLE;
    if (descEl) descEl.setAttribute('content', PAGE_DESCRIPTION);
    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      if (descEl && previousDescription !== null) {
        descEl.setAttribute('content', previousDescription);
      }
    };
  }, []);

  return (
    <main id="top" className="w-full pt-20 bg-surface overflow-x-clip">
      <section className="w-full py-space-2xl lg:py-space-3xl bg-surface">
        <div className="shell">
          <div className="max-w-3xl">
            {/* Header block */}
            <Reveal as="div" className="mb-space-xl">
              <a
                href="#top"
                className="inline-flex items-center gap-space-3xs font-label-md text-label-md text-primary hover:text-secondary transition-colors mb-space-md"
              >
                <Icon name="arrow_back" className="text-[18px] text-secondary" />
                <span>Back to home</span>
              </a>
              <div className="flex items-center gap-space-2xs mb-space-2xs">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest font-bold">
                  Legal
                </span>
              </div>
              <h1 className="font-display-md text-display-md text-primary tracking-tight mb-space-xs text-balance">
                Privacy Policy
              </h1>
              <p className="font-label-md text-label-md text-on-surface-variant">
                Last updated: {LAST_UPDATED}
              </p>
            </Reveal>

            {/* 1. Introduction */}
            <div className={section}>
              <h2 className={h2}>1. Introduction</h2>
              <p className={p}>
                Adhi Shankaraa Scholastics (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;)
                respects the privacy of everyone who uses our website and the mobile applications we
                provide. This Privacy Policy explains, in plain language, what information we do and
                do not collect, how any information is handled, and the choices available to you.
              </p>
              <p className={p}>We provide two mobile applications:</p>
              <ul className={ul}>
                <li>
                  <strong>IDPS Students</strong> — for the students of International Delhi Public
                  School (IDPS).
                </li>
                <li>
                  <strong>IDPS Teachers</strong> — for the teachers and staff of International Delhi
                  Public School (IDPS).
                </li>
              </ul>
              <p className={p}>
                They are published as two separate applications so that each group has an app suited
                to its role. Both are intended for the IDPS community and are not general-purpose
                apps for other schools or institutions.
              </p>
              <p className={p}>
                If you have any questions about this policy, please contact us using the details in
                section 16.
              </p>
            </div>

            {/* 2. Scope */}
            <div className={section}>
              <h2 className={h2}>2. Scope of this policy</h2>
              <p className={p}>This policy applies to:</p>
              <ul className={ul}>
                <li>the Adhi Shankaraa Scholastics website; and</li>
                <li>
                  the <strong>IDPS Students</strong> and <strong>IDPS Teachers</strong> mobile
                  applications.
                </li>
              </ul>
              <p className={p}>It does not cover:</p>
              <ul className={ul}>
                <li>
                  the practices of International Delhi Public School itself, or any website, system,
                  or communication operated by the school;
                </li>
                <li>
                  the app stores through which the applications are distributed (for example Google
                  Play or the Apple App Store), which handle certain information under their own
                  privacy policies;
                </li>
                <li>your mobile device&rsquo;s operating system or your network provider; or</li>
                <li>any third-party website or service that we link to.</li>
              </ul>
            </div>

            {/* 3. IDPS Students */}
            <div className={section}>
              <h2 className={h2}>3. IDPS Students application</h2>
              <p className={p}>
                The <strong>IDPS Students</strong> app is provided for students of IDPS.
              </p>
              <p className={p}>
                The app is designed so that it does <strong>not</strong> collect, store, sell, or
                share personal information about students with us or with third parties. We do not ask
                students to create an account with us, and we do not operate a server that receives
                personal data from the app.
              </p>
              <p className={p}>
                Any information shown in the app is used only on the device to provide the
                app&rsquo;s features.
              </p>
            </div>

            {/* 4. IDPS Teachers */}
            <div className={section}>
              <h2 className={h2}>4. IDPS Teachers application</h2>
              <p className={p}>
                The <strong>IDPS Teachers</strong> app is provided for teachers and staff of IDPS.
              </p>
              <p className={p}>
                As with the students&rsquo; app, it is designed so that it does <strong>not</strong>{' '}
                collect, store, sell, or share personal information with us or with third parties. We
                do not require teachers to register an account with us, and we do not operate a
                server that receives personal data from the app.
              </p>
            </div>

            {/* 5. Information we collect */}
            <div className={section}>
              <h2 className={h2}>5. Information we collect</h2>
              <h3 className={h3}>From the mobile applications</h3>
              <p className={p}>
                We do not collect personal information through the IDPS Students or IDPS Teachers
                apps. We do not use analytics, advertising, or tracking tools inside the apps, and
                the apps are not designed to transmit personal data to us.
              </p>
              <h3 className={h3}>From the website</h3>
              <p className={p}>We collect information only when you choose to send it to us:</p>
              <ul className={ul}>
                <li>
                  <strong>Enquiry form.</strong> If you fill in the contact form on our website, we
                  receive the name, email address, phone number, enquiry type, and message that you
                  enter, so that we can respond to you. This message is delivered to us by email
                  through a third-party form-delivery service (see section 9). We do not store
                  website enquiries in a separate database; they reach us as email.
                </li>
                <li>
                  <strong>Basic technical information.</strong> As with most websites, when your
                  browser loads our pages it automatically sends standard information such as your IP
                  address and browser type to the services that deliver the site (our hosting
                  provider and the providers described in section 9). We do not use this information
                  to identify you and we do not combine it into user profiles.
                </li>
              </ul>
              <p className={p}>
                We do not knowingly collect any other personal information through the website.
              </p>
            </div>

            {/* 6. Information we do not collect */}
            <div className={section}>
              <h2 className={h2}>6. Information we do not collect</h2>
              <p className={p}>
                To be clear, across the website and both apps we do <strong>not</strong>:
              </p>
              <ul className={ul}>
                <li>sell, rent, or trade personal information to anyone;</li>
                <li>use advertising or marketing SDKs, or show third-party ads;</li>
                <li>
                  use analytics products (such as Google Analytics) to profile visitors or users;
                </li>
                <li>use tracking cookies or similar cross-site tracking technologies;</li>
                <li>build advertising or behavioural profiles;</li>
                <li>collect precise location data;</li>
                <li>access your contacts, photos, messages, or files for our own purposes; or</li>
                <li>ask children to provide personal information in order to use the apps.</li>
              </ul>
            </div>

            {/* 7. How information is used */}
            <div className={section}>
              <h2 className={h2}>7. How information is used</h2>
              <p className={p}>
                Where we do receive information, we use it only for the purpose for which you
                provided it:
              </p>
              <ul className={ul}>
                <li>to reply to an enquiry you send through the website contact form;</li>
                <li>to operate, maintain, and secure the website and applications; and</li>
                <li>to comply with the law if we are ever legally required to do so.</li>
              </ul>
              <p className={p}>
                We do not use your information for advertising, profiling, or automated
                decision-making.
              </p>
            </div>

            {/* 8. Storage and retention */}
            <div className={section}>
              <h2 className={h2}>8. Data storage and retention</h2>
              <ul className={ul}>
                <li>
                  <strong>Website enquiries</strong> are received as email and kept in our email
                  account for as long as needed to deal with your enquiry and for a reasonable
                  period afterwards for our records. You may ask us to delete your enquiry
                  correspondence at any time (see section 13).
                </li>
                <li>
                  <strong>The applications</strong> do not send personal data to us, so we hold no
                  app user database and have nothing from the apps to retain on our servers.
                </li>
                <li>
                  Any content or settings held by an app remain on your own device and are removed
                  when you uninstall the app, unless your device or platform keeps its own backups
                  outside our control.
                </li>
              </ul>
            </div>

            {/* 9. Third-party services */}
            <div className={section}>
              <h2 className={h2}>9. Third-party services</h2>
              <p className={p}>We keep third-party services to a minimum. The ones we use are:</p>
              <ul className={ul}>
                <li>
                  <strong>Form-delivery service (EmailJS).</strong> Our website contact form uses
                  EmailJS to deliver your message to our email inbox. The information you type into
                  the form passes through EmailJS for that delivery. Please see EmailJS&rsquo;s own
                  privacy policy for details of how it handles data.
                </li>
                <li>
                  <strong>Web fonts and images (Google).</strong> Our website loads fonts and some
                  images hosted by Google. When your browser requests these files, Google receives
                  standard request information such as your IP address. This is used to serve the
                  files and is subject to Google&rsquo;s privacy policy.
                </li>
                <li>
                  <strong>Website hosting.</strong> Our website is served by a hosting provider that
                  processes standard server logs in order to deliver and protect the site.
                </li>
              </ul>
              <p className={p}>
                We do not use payment processors, advertising networks, analytics providers, or
                social-media tracking pixels. The mobile applications are distributed through app
                stores (such as Google Play and the Apple App Store); those stores may collect
                installation, device, and diagnostic information under their own policies, which we
                do not control.
              </p>
            </div>

            {/* 10. Analytics and tracking */}
            <div className={section}>
              <h2 className={h2}>10. Analytics and tracking</h2>
              <p className={p}>
                We do not use website or in-app analytics, and we do not use tracking technologies to
                monitor your activity across other sites or apps.
              </p>
            </div>

            {/* 11. Cookies */}
            <div className={section}>
              <h2 className={h2}>11. Cookies</h2>
              <p className={p}>
                Our website does not set its own cookies and does not use cookies for tracking or
                advertising. Some third-party resources described in section 9 may set cookies of
                their own when your browser contacts them; you can control cookies through your
                browser settings.
              </p>
            </div>

            {/* 12. Children's / student privacy */}
            <div className={section}>
              <h2 className={h2}>12. Children&rsquo;s and student privacy</h2>
              <p className={p}>
                The <strong>IDPS Students</strong> app is used by school students, who may be
                children. We have designed the apps so that they do not collect personal information
                from students or any other users. We do not ask students to provide personal details
                to us, and we do not create accounts for students on our systems.
              </p>
              <p className={p}>
                Decisions about which students and staff use the apps, and any information the school
                itself handles, are the responsibility of International Delhi Public School. If you
                are a parent or guardian with a question about your child&rsquo;s use of an app,
                please contact the school, or contact us using the details below and we will help
                where we can.
              </p>
            </div>

            {/* 13. Your rights */}
            <div className={section}>
              <h2 className={h2}>13. Your rights</h2>
              <p className={p}>
                Because we hold very little information about you, there is usually little for us to
                act on. Where we do hold information you have sent us (for example a contact-form
                enquiry), you may ask us to:
              </p>
              <ul className={ul}>
                <li>confirm what we hold;</li>
                <li>correct it if it is wrong; or</li>
                <li>delete it.</li>
              </ul>
              <p className={p}>
                To make a request, contact us using the details in section 16. We may need to
                confirm your identity before acting on a request. If you are not satisfied with our
                response, you may be able to raise a complaint with the data-protection authority in
                your country.
              </p>
            </div>

            {/* 14. Data security */}
            <div className={section}>
              <h2 className={h2}>14. Data security</h2>
              <p className={p}>
                We take reasonable steps to protect the limited information we handle, including
                using access-controlled email accounts and established service providers. No method
                of transmission or storage is completely secure, so we cannot guarantee absolute
                security, but we work to keep your information safe.
              </p>
            </div>

            {/* 15. Changes */}
            <div className={section}>
              <h2 className={h2}>15. Changes to this Privacy Policy</h2>
              <p className={p}>
                We may update this policy from time to time, for example if we add a feature or
                change a service provider. When we do, we will change the &ldquo;Last updated&rdquo;
                date at the top of this page, and if the changes are significant we will make that
                clear on our website. Please review this page from time to time.
              </p>
            </div>

            {/* 16. Contact */}
            <div className={section}>
              <h2 className={h2}>16. Contact us</h2>
              <p className={p}>
                If you have any questions or requests about this Privacy Policy or your information,
                please contact us:
              </p>
              <div className="bg-surface-container-low border border-secondary/30 rounded-xl p-space-lg flex flex-col gap-space-2xs">
                <p className="font-headline-sm text-[16px] text-primary font-bold">
                  Adhi Shankaraa Scholastics
                </p>
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  AREPALLI ROAD, PONNAPALLI (V), CHERUKUPALLI (M), BAPATLA (DT),
                  <br />
                  Andhra Pradesh, India – PIN 522309
                </p>
                <a
                  className="inline-flex items-center gap-space-2xs font-body-md text-body-md text-primary hover:text-secondary transition-colors break-all"
                  href="mailto:adhishankaraascholasticswork@gmail.com"
                >
                  <Icon name="mail" className="text-[18px] text-secondary shrink-0" />
                  <span>adhishankaraascholasticswork@gmail.com</span>
                </a>
                <a
                  className="inline-flex items-center gap-space-2xs font-body-md text-body-md text-primary hover:text-secondary transition-colors"
                  href="tel:+918639783930"
                >
                  <Icon name="call" className="text-[18px] text-secondary shrink-0" />
                  <span>+91 86397 83930</span>
                </a>
              </div>
            </div>

            <Reveal as="div" variant="fade" className="pt-space-md border-t border-outline-variant/40">
              <a
                href="#top"
                className="inline-flex items-center gap-space-3xs font-label-md text-label-md text-primary hover:text-secondary transition-colors"
              >
                <Icon name="arrow_back" className="text-[18px] text-secondary" />
                <span>Back to home</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
