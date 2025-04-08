'use client';

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Navbar />
      <header className="bg-black py-12  text-center">
        <h1 className="text-white text-3xl sm:text-5xl font-bold">Privacy Policy</h1>
      </header>

      <main className="flex-grow max-w-4xl mx-auto ">
        <div className="bg-zinc-900 rounded-lg p-6 md:p-8 text-gray-300">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">1. Overview</h2>
            <p className="mb-4">
              This Privacy Policy outlines how INCORPORIGHT INC., operating under the
              brand name CorpRite ("CorpRite", "we", or "us"), collects, uses,
              stores, and protects personal information and other data provided by
              users ("you") through our website (www.corprite.co), any subdomain
              (e.g., company.corprite.co), or any related services (collectively, the
              "Platform").
            </p>
            <p>
              This Privacy Policy applies to all users of the Platform, including
              those accessing via white-labeled instances provided by authorized
              partners ("Partners"). It should be read together with our Terms of
              Use.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">2. Types of Data We Collect</h2>
            <p className="mb-4">We collect the following types of data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Account Information:</strong> name, email address, company name, job title, and account credentials</li>
              <li><strong className="text-white">Business Data:</strong> uploaded corporate documents, cap tables, stock options, share issuances, board resolutions, and legal templates</li>
              <li><strong className="text-white">Usage Data:</strong> login timestamps, IP addresses, browser information, device data, pages visited, and session behavior</li>
              <li><strong className="text-white">Partner Data:</strong> in white-labeled instances, data collected through the Partner-branded portal, including linked client accounts</li>
              <li><strong className="text-white">Payment Information:</strong> processed by third-party providers (e.g., Stripe); we do not store full credit card details</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Data</h2>
            <p className="mb-4">We use collected data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and maintain access to the Platform</li>
              <li>To customize user experience based on usage and role</li>
              <li>To process transactions and manage subscriptions</li>
              <li>To communicate with you, including support, updates, and legal notices</li>
              <li>To analyze usage trends and improve performance</li>
              <li>To ensure platform security and prevent fraud or abuse</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">4. Data Access and Sharing</h2>
            <p className="mb-4">We may share your data:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With trusted service providers for functions like hosting, analytics, and payments (e.g., AWS, Stripe)</li>
              <li>With your Partner (if applicable), who may have admin rights over your account</li>
              <li>With legal or regulatory authorities if required by law or to enforce our rights</li>
              <li>With affiliated entities in the case of a merger, acquisition, or asset sale</li>
            </ul>
            <p className="mt-4">We do <strong className="text-white">not</strong> sell your personal information.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">5. Data Storage and Security</h2>
            <p className="mb-4">
              Your data is stored using secure cloud infrastructure located in Canada
              or the United States. We employ industry-standard security measures,
              including encryption, access controls, and regular backups.
            </p>
            <p>
              However, no method of transmission over the Internet or method of
              electronic storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal information, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">6. Data Confidentiality in White-Labeled Instances</h2>
            <p className="mb-4">
              When you access the Platform through a white-labeled Partner portal,
              your data remains confidential. CorpRite acts as the underlying service
              provider and will only access or process your data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To fulfill its obligations under the Terms of Use</li>
              <li>To provide support and resolve technical issues</li>
              <li>When required by law</li>
            </ul>
            <p className="mt-4">
              The Partner may access certain administrative functions and view usage
              activity for accounts they manage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">7. Your Rights and Choices</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access or update your personal information at any time</li>
              <li>Delete your account (subject to any contractual obligations with a Partner)</li>
              <li>Withdraw consent for non-essential communications</li>
              <li>Request a copy of the data we hold about you</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact support@corprite.co.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">8. Cookies and Tracking</h2>
            <p className="mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Keep users logged in and manage sessions</li>
              <li>Analyze traffic and usage patterns</li>
              <li>Improve site performance and personalize content</li>
            </ul>
            <p className="mt-4">
              You may adjust your browser settings to block or delete cookies, but
              doing so may limit functionality of the Platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">9. Children's Privacy</h2>
            <p>
              The Platform is not directed at individuals under 18 years of age. We do
              not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Material changes will be
              communicated through the Platform or via email. Your continued use of
              the Platform after updates constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">11. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or our data
              practices, contact:
            </p>
            <div className="mt-4 ">
              <p className="font-semibold text-white">CorpRite (Incorporight Inc.)</p>
              <p>mail@incorporight.com</p>
              <p>Toronto, Ontario, Canada</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;