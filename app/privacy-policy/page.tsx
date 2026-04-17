import PageTitle from "@/app/components/PageTitle";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageTitle
        badge="Legal Information"
        title="Privacy Policy"
        subtitle="This website complies with the General Data Protection Regulation (GDPR)."
    />
      <div className="container max-w-4xl py-16 lg:py-24">


        <p className="text-gray-500 mb-10">
          Last updated: April 17, 2026
        </p>


        {/* 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">1. Data Controller</h2>
          <p className="text-gray-700 mb-3">
            The data controller is:
          </p>
          <p className="text-gray-700">
            <strong>Vladyslav Lykhenko</strong><br />
            Email: hello@lihenko.com.ua
          </p>
        </section>

        {/* 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">2. Data We Collect</h2>

          <h3 className="font-medium mb-2">Information you provide:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Name</li>
            <li>Email</li>
            <li>Message content</li>
          </ul>

          <h3 className="font-medium mb-2">Automatically collected:</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>IP address</li>
            <li>Browser & device data</li>
            <li>Usage data</li>
          </ul>

          <p className="text-gray-700">
            Collected via: Google Analytics, Google Ads
          </p>
        </section>

        {/* 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">3. Legal Basis for Processing</h2>
          <p className="text-gray-700 mb-3">
            We process your data based on:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Consent (cookies, analytics, marketing)</li>
            <li>Legitimate interest (basic website functionality)</li>
          </ul>
        </section>

        {/* 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">4. Cookies & Tracking</h2>
          <p className="text-gray-700 mb-3">
            We use cookies only after your consent via a cookie banner.
          </p>

          <p className="text-gray-700 mb-2">Types of cookies:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Essential (always active)</li>
            <li>Analytics (optional)</li>
            <li>Marketing (optional)</li>
          </ul>
        </section>

        {/* 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">5. Your GDPR Rights</h2>
          <p className="text-gray-700 mb-3">
            You have the right to:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Access your data</li>
            <li>Request deletion</li>
            <li>Request correction</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <p className="text-gray-700 mt-4">
            Contact: hello@lihenko.com.ua
          </p>
        </section>

        {/* 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">6. Data Retention</h2>
          <p className="text-gray-700">
            We store data only as long as necessary.
          </p>
        </section>

        {/* 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">7. Third-Party Services</h2>
          <p className="text-gray-700 mb-3">
            We may share data with:
          </p>

          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Google Analytics</li>
            <li>Google Ads</li>
            <li>Meta Ads</li>
          </ul>
        </section>

        {/* 8 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">8. Data Transfers</h2>
          <p className="text-gray-700">
            Data may be transferred outside the EU with safeguards in place.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="text-xl font-semibold mb-3">9. Updates</h2>
          <p className="text-gray-700">
            We may update this policy at any time.
          </p>
        </section>

      </div>
    </>
  );
}