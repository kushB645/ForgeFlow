import { useEffect, useState } from "react";

import {
  FiUser,
  FiCpu,
  FiBell,
  FiMoon,
  FiShield,
} from "react-icons/fi";

import toast from "react-hot-toast";

import ProfileCard from "./ProfileCard";
import IntegrationCard from "./IntegrationCard";
import SettingCard from "./SettingCard";

import {
  getLinkedInAccount,
  disconnectLinkedIn,
} from "../../services/linkedin.service";

const Settings = () => {
  const [linkedin, setLinkedin] = useState({
    connected: false,
    account: null,
  });

  const [loadingLinkedIn, setLoadingLinkedIn] = useState(true);

  const fetchLinkedInAccount = async () => {
    try {
      setLoadingLinkedIn(true);

      const data = await getLinkedInAccount();

      setLinkedin(data);
    } catch (error) {
      console.log("LinkedIn status error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load LinkedIn account"
      );
    } finally {
      setLoadingLinkedIn(false);
    }
  };

  useEffect(() => {
    fetchLinkedInAccount();
  }, []);

  const handleConnectLinkedIn = () => {
    window.location.href =
      `${import.meta.env.VITE_API_URL}/linkedin/connect`;
  };

  const handleDisconnectLinkedIn = async () => {
    try {
      await disconnectLinkedIn();

      setLinkedin({
        connected: false,
        account: null,
      });

      toast.success("LinkedIn account disconnected");
    } catch (error) {
      console.log("Disconnect error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to disconnect LinkedIn"
      );
    }
  };

  return (
    <section className="space-y-8">
      {/* Hero */}
      <div>
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
          Preferences
        </span>

        <h1 className="mt-5 text-5xl font-bold text-white">
          Settings
        </h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-400">
          Manage your account, AI preferences, integrations and
          workspace settings.
        </p>
      </div>

      {/* Profile */}
      <ProfileCard />

      {/* Settings Grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">

        {/* LinkedIn */}
        <IntegrationCard
          connected={linkedin.connected}
          account={linkedin.account}
          loading={loadingLinkedIn}
          onConnect={handleConnectLinkedIn}
          onDisconnect={handleDisconnectLinkedIn}
        />

        {/* AI */}
        <SettingCard
          icon={<FiCpu />}
          title="AI Preferences"
          description="Configure your AI generation settings."
          items={[
            "Gemini AI",
            "Professional Tone",
            "Medium Creativity",
            "Medium Post Length",
          ]}
          buttonText="Configure AI"
        />

        {/* Notifications */}
        <SettingCard
          icon={<FiBell />}
          title="Notifications"
          description="Choose when ForgeFlow should notify you."
          items={[
            "Publishing Success",
            "Publishing Failure",
            "Weekly Summary",
            "AI Suggestions",
          ]}
          buttonText="Manage Notifications"
        />

        {/* Appearance */}
        <SettingCard
          icon={<FiMoon />}
          title="Appearance"
          description="Personalize your workspace."
          items={[
            "Dark Theme",
            "Cyan Accent",
            "Smooth Animations",
            "Comfortable Layout",
          ]}
          buttonText="Customize"
        />

        {/* Security */}
        <SettingCard
          icon={<FiShield />}
          title="Security"
          description="Protect your account and data."
          items={[
            "Change Password",
            "Two-Factor Authentication",
            "Login Sessions",
            "Export Account Data",
          ]}
          buttonText="Security Settings"
        />

        {/* Account */}
        <SettingCard
          icon={<FiUser />}
          title="Account"
          description="Manage your personal information."
          items={[
            "Update Email",
            "Change Username",
            "Language",
            "Timezone",
          ]}
          buttonText="Edit Account"
        />
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="text-xl font-bold text-red-400">
          Danger Zone
        </h2>

        <p className="mt-2 text-slate-400">
          These actions cannot be undone.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="rounded-xl border border-red-500/30 px-5 py-3 text-red-400 transition hover:bg-red-500/10">
            Delete All Drafts
          </button>

          <button className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500">
            Delete Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default Settings;