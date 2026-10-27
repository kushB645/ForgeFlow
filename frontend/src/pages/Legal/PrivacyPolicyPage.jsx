import { Link } from "react-router-dom";
import { FiShield, FiLock, FiEye, FiCheckCircle, FiTrash2, FiMail } from "react-icons/fi";
import PublicNavbar from "../../components/Navigation/PublicNavbar";
import PublicFooter from "../../components/Navigation/PublicFooter";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#080D18] text-white selection:bg-cyan-500/30 selection:text-cyan-200">
      <PublicNavbar />

      <main className="relative pt-28 sm:pt-36 pb-20 overflow-hidden">
        {/* Glow ambient background */}
        <div className="pointer-events-none absolute left-1/2 top-10 -z-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          {/* Header */}
          <div className="text-center pb-12 border-b border-slate-800">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-300">
              <FiShield /> Privacy Policy
            </span>
            <h1 className="mt-6 text-3xl sm:text-5xl font-black text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              Last updated: October 2026 • Effective immediately
            </p>
          </div>

          {/* Policy Content */}
          <div className="mt-12 space-y-10 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiLock className="text-cyan-400" /> 1. Overview & Commitment
              </h2>
              <p className="text-slate-400">
                ForgeFlow ("we", "our", or "the Service") is an independent workspace designed to help developers and creators draft, format, preview, and schedule content for LinkedIn. We believe privacy is a fundamental right. We do not sell your personal information, and we only collect data necessary to provide and operate the service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiEye className="text-cyan-400" /> 2. Information We Collect
              </h2>
              <div className="space-y-3 text-slate-400">
                <p>
                  <strong className="text-white">Account Information:</strong> When you register an account, we collect your name, email address, and a securely hashed password.
                </p>
                <p>
                  <strong className="text-white">LinkedIn OAuth Data:</strong> When you choose to connect your LinkedIn profile, we receive your authorized OAuth tokens, your public profile identifier, and your name as provided by LinkedIn's official API. We never see or store your LinkedIn password.
                </p>
                <p>
                  <strong className="text-white">Content & Drafts:</strong> We store the post content, titles, hashtags, images, and scheduling timestamps that you create inside ForgeFlow so you can access, edit, and publish them.
                </p>
                <p>
                  <strong className="text-white">AI Prompts:</strong> When you use the AI Post Generator, your topic prompt and instructions are transmitted to the Google Gemini API to generate post drafts.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiCheckCircle className="text-cyan-400" /> 3. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>To authenticate your login and secure your account.</li>
                <li>To save, retrieve, and manage your drafts in the Content Library.</li>
                <li>To deliver your scheduled posts directly to LinkedIn at your specified date and time.</li>
                <li>To generate requested post suggestions via Gemini AI based on your settings.</li>
                <li>To send operational updates (such as post publishing confirmation or failure notices).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiShield className="text-cyan-400" /> 4. LinkedIn API & Permissions
              </h2>
              <p className="text-slate-400">
                ForgeFlow connects with LinkedIn exclusively through LinkedIn's official Developer OAuth API. We only request permissions necessary to share content on your behalf (such as <code className="text-cyan-300 bg-slate-900 px-1.5 py-0.5 rounded text-xs">w_member_social</code>). We do not read your private LinkedIn messages, your contacts list, or your personal browsing history.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiTrash2 className="text-cyan-400" /> 5. Data Retention & Your Rights
              </h2>
              <p className="text-slate-400">
                You retain full ownership of all content you create on ForgeFlow. You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Edit or delete any post or draft at any time from your Content Library.</li>
                <li>Disconnect your LinkedIn account at any moment with one click in your Settings.</li>
                <li>Permanently delete your entire account and all associated posts directly from the Settings page.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiLock className="text-cyan-400" /> 6. Security
              </h2>
              <p className="text-slate-400">
                We implement industry-standard security safeguards including bcrypt password hashing, encrypted HTTPS connections, and secure session management. While no digital service is 100% immune, we maintain diligent safeguards to protect your data.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-800 pt-8">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiMail className="text-cyan-400" /> 7. Contact Us
              </h2>
              <p className="text-slate-400">
                If you have questions about this Privacy Policy or your data, please contact us at{" "}
                <a href="mailto:support@forgeflow.app" className="text-cyan-400 hover:underline">
                  support@forgeflow.app
                </a>{" "}
                or visit our{" "}
                <Link to="/contact" className="text-cyan-400 hover:underline">
                  Contact Page
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default PrivacyPolicyPage;

