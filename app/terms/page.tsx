import PageTitle from "@/app/components/PageTitle";

export default function TermsOfServicePage() {
  return (
    <>
      <PageTitle
        badge="Legal Information"
        title="Terms of Service"
        subtitle="These Terms govern the use of this website and services provided by Vladyslav Lykhenko."
      />

      <div className="container max-w-4xl py-16 lg:py-24">

        <p className="text-gray-500 mb-10">
          Last updated: April 17, 2026
        </p>

        {/* 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">1. Overview</h2>
          <p className="text-gray-700">
            These Terms of Service (“Terms”) govern your use of this website and services provided by Vladyslav Lykhenko.
            By accessing this website, you agree to these Terms.
          </p>
        </section>

        {/* 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">2. Services</h2>
          <p className="text-gray-700 mb-3">
            The services provided include, but are not limited to:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>WordPress speed optimization</li>
            <li>Bug fixing and technical support</li>
            <li>Website performance improvements</li>
            <li>Migration to Next.js</li>
          </ul>
        </section>

        {/* 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">3. Use of Website</h2>
          <p className="text-gray-700">
            You agree to use this website only for lawful purposes.
            You must not misuse, attempt to disrupt, or damage the website or its functionality.
          </p>
        </section>

        {/* 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">4. No Guarantees</h2>
          <p className="text-gray-700">
            While all services are performed professionally, no guarantee is given for specific results such as
            search engine rankings, conversion rates, or third-party platform performance.
          </p>
        </section>

        {/* 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">5. Payments</h2>
          <p className="text-gray-700">
            Payment terms are agreed individually before the start of any project.
            Work may be paused or stopped in case of non-payment.
          </p>
        </section>

        {/* 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">6. Third-Party Services</h2>
          <p className="text-gray-700">
            Some services may depend on third-party platforms such as hosting providers,
            analytics tools, or advertising platforms.
            We are not responsible for their performance or availability.
          </p>
        </section>

        {/* 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">7. Intellectual Property</h2>
          <p className="text-gray-700">
            All content on this website, including text, design, and code, is protected by intellectual property laws.
            You may not copy or reuse content without permission.
          </p>
        </section>

        {/* 8 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
          <p className="text-gray-700">
            We are not liable for any indirect, incidental, or consequential damages resulting from the use of this website or services.
          </p>
        </section>

        {/* 9 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
          <p className="text-gray-700">
            We reserve the right to update these Terms at any time.
            Continued use of the website means acceptance of updated Terms.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="text-xl font-semibold mb-3">10. Contact</h2>
          <p className="text-gray-700">
            If you have any questions about these Terms, contact:
            <br />
            <strong>hello@lihenko.com.ua</strong>
          </p>
        </section>

      </div>
    </>
  );
}