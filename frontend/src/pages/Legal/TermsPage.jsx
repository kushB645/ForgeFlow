import { Link } from "react-router-dom";
import { FiFileText, FiCheckSquare, FiAlertCircle, FiShield, FiUserCheck, FiMail } from "react-icons/fi";
import PublicNavbar from "../../components/Navigation/PublicNavbar";
import PublicFooter from "../../components/Navigation/PublicFooter";

const TermsPage = () => {
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
              <FiFileText /> Terms of Service
            </span>
            <h1 className="mt-6 text-3xl sm:text-5xl font-black text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              Last updated: October 2026 • Effective immediately
            </p>
          </div>

          {/* Terms Content */}
          <div className="mt-12 space-y-10 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiCheckSquare className="text-cyan-400" /> 1. Acceptance of Terms
              </h2>
              <p className="text-slate-400">
                By creating an account or using ForgeFlow ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiShield className="text-cyan-400" /> 2. Description of the Service
              </h2>
              <p className="text-slate-400">
                ForgeFlow is a content workspace that provides tools to generate, draft, format, preview, and schedule posts for LinkedIn. The service allows you to connect your personal LinkedIn profile via OAuth to automate publishing on your schedule.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiUserCheck className="text-cyan-400" /> 3. Account Responsibilities
              </h2>
              <p className="text-slate-400">
                When you create an account, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Provide accurate registration information.</li>
                <li>Maintain the confidentiality and security of your account credentials.</li>
                <li>Take sole responsibility for all activity that occurs under your account.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiAlertCircle className="text-cyan-400" /> 4. User Content & Acceptable Use
              </h2>
              <p className="text-slate-400">
                You retain complete ownership and intellectual property rights over any text, drafts, images, and content you produce or upload to ForgeFlow.
              </p>
              <p className="text-slate-400">
                You agree not to use ForgeFlow to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400">
                <li>Distribute spam, illegal, harmful, harassing, or defamatory content.</li>
                <li>Violate LinkedIn's User Agreement, Community Policies, or Terms of Service.</li>
                <li>Attempt to disrupt, reverse-engineer, or compromise the security of the ForgeFlow infrastructure.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiShield className="text-cyan-400" /> 5. Third-Party Integrations
              </h2>
              <p className="text-slate-400">
                ForgeFlow relies on third-party APIs, including LinkedIn's official OAuth and posting APIs and Google Gemini AI. We are not responsible for downtime, API policy modifications, or rate limits imposed by these external providers.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiAlertCircle className="text-cyan-400" /> 6. Disclaimer of Warranties
              </h2>
              <p className="text-slate-400">
                ForgeFlow is provided on an "AS IS" and "AS AVAILABLE" basis. While we strive for high dispatch reliability, we make no guarantees that the Service will be uninterrupted, error-free, or meet every individual expectation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiCheckSquare className="text-cyan-400" /> 7. Account Termination
              </h2>
              <p className="text-slate-400">
                You are free to stop using ForgeFlow at any time. You can permanently delete your account and all associated drafts in your Settings page. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-800 pt-8">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FiMail className="text-cyan-400" /> 8. Contact Information
              </h2>
              <p className="text-slate-400">
                If you have questions regarding these Terms of Service, please reach out via{" "}
                <a href="mailto:support@forgeflow.app" className="text-cyan-400 hover:underline">
                  support@forgeflow.app
                </a>{" "}
                or our{" "}
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

export default TermsPage;

