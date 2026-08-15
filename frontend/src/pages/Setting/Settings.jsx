import { useEffect, useState } from "react";
import { FiUser, FiCpu, FiBell, FiMoon, FiShield, FiX } from "react-icons/fi";
import { deleteAccount } from "../../services/settings.service";
import toast from "react-hot-toast";
import { deleteAllDrafts } from "../../services/post.service";
import ProfileCard from "./ProfileCard";
import IntegrationCard from "./IntegrationCard";
import SettingCard from "./SettingCard";
import { changePassword } from "../../services/settings.service";
import {
  getLinkedInAccount,
  disconnectLinkedIn,
} from "../../services/linkedin.service";
import {
  updateAIPreferences,
  getAIPreferences,
  updateNotificationPreferences,
  getNotificationPreferences,
} from "../../services/settings.service";

const Settings = () => {
  const [linkedin, setLinkedin] = useState({
    connected: false,
    account: null,
  });

  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  const [aiPreferences, setAIPreferences] = useState({
    model: "Gemini AI",
    tone: "Professional",
    creativity: "Medium",
    length: "Medium",
  });

  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const [notificationPreferences, setNotificationPreferences] = useState({
    publishingSuccess: true,
    publishingFailure: true,
    weeklySummary: false,
    aiSuggestions: true,
  });

  const [savingNotifications, setSavingNotifications] = useState(false);

  const [savingAI, setSavingAI] = useState(false);

  const [isDeleteAccountOpen, setIsDeleteAccountOpen] = useState(false);

  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  const [deletingAccount, setDeletingAccount] = useState(false);

  const [loadingLinkedIn, setLoadingLinkedIn] = useState(true);

  const fetchLinkedInAccount = async () => {
    try {
      setLoadingLinkedIn(true);

      const data = await getLinkedInAccount();

      setLinkedin(data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to load LinkedIn account"
      );
    } finally {
      setLoadingLinkedIn(false);
    }
  };

  useEffect(() => {
    fetchLinkedInAccount();

    const fetchAIPreferences = async () => {
      try {
        const data = await getAIPreferences();

        setAIPreferences({
          model: data?.model || "Gemini AI",
          tone: data?.tone || "Professional",
          creativity: data?.creativity || "Medium",
          length: data?.length || "Medium",
        });
      } catch (error) {
        console.log("AI preferences error:", error);
      }
    };

    const fetchNotificationPreferences = async () => {
      try {
        const data = await getNotificationPreferences();

        setNotificationPreferences({
          publishingSuccess: data?.publishingSuccess ?? true,
          publishingFailure: data?.publishingFailure ?? true,
          weeklySummary: data?.weeklySummary ?? false,
          aiSuggestions: data?.aiSuggestions ?? true,
        });
      } catch (error) {
        console.log("Notification preferences error:", error);
      }
    };

    fetchAIPreferences();
    fetchNotificationPreferences();
  }, []);

  const handleConnectLinkedIn = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/linkedin/connect`;
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
      toast.error(
        error?.response?.data?.message || "Failed to disconnect LinkedIn"
      );
    }
  };

  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [changingPassword, setChangingPassword] = useState(false);

  const handlePasswordChange = (e) => {
    setPasswordData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    const { oldPassword, newPassword, confirmPassword } = passwordData;

    if (!oldPassword || !newPassword || !confirmPassword) {
      return toast.error("Please fill all password fields");
    }

    if (newPassword !== confirmPassword) {
      return toast.error("New passwords do not match");
    }

    if (
      !/[a-z]/.test(newPassword) ||
      !/[A-Z]/.test(newPassword) ||
      !/[0-9]/.test(newPassword) ||
      !/[^A-Za-z0-9]/.test(newPassword) ||
      newPassword.length < 8
    ) {
      return toast.error(
        "Password must contain 8+ characters, uppercase, lowercase, number and symbol"
      );
    }

    try {
      setChangingPassword(true);

      await changePassword({
        oldPassword,
        newPassword,
      });

      toast.success("Password changed successfully");

      setPasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      setIsPasswordOpen(false);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to change password"
      );
    } finally {
      setChangingPassword(false);
    }
  };

  const handleDeleteAllDrafts = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete ALL your drafts? This action cannot be undone."
    );

    if (!confirmed) return;

    try {
      await deleteAllDrafts();

      toast.success("All drafts deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete drafts");
    }
  };

  const handleDeleteAccount = async () => {
    if (deleteConfirmation !== "DELETE") {
      return toast.error("Please type DELETE to confirm");
    }

    try {
      setDeletingAccount(true);

      await deleteAccount();

      toast.success("Account deleted successfully");

      localStorage.clear();

      window.location.href = "/login";
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to delete account");
    } finally {
      setDeletingAccount(false);
    }
  };

  const handleSaveAIPreferences = async () => {
    try {
      setSavingAI(true);

      const data = await updateAIPreferences(aiPreferences);

      setAIPreferences(data);

      toast.success("AI preferences updated");

      setIsAIModalOpen(false);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to update AI preferences"
      );
    } finally {
      setSavingAI(false);
    }
  };

  const handleSaveNotificationPreferences = async () => {
    try {
      setSavingNotifications(true);

      const data = await updateNotificationPreferences(notificationPreferences);

      setNotificationPreferences(data);

      toast.success("Notification preferences updated");

      setIsNotificationModalOpen(false);
    } catch (error) {
      console.log("Notification preferences error:", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to update notification preferences"
      );
    } finally {
      setSavingNotifications(false);
    }
  };

  return (
    <section className="space-y-8">
      {/* Hero */}
      <div>
        <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-400">
          Preferences
        </span>

        <h1 className="mt-5 text-5xl font-bold text-white">Settings</h1>

        <p className="mt-3 max-w-2xl text-lg text-slate-400">
          Manage your account, AI preferences, integrations and workspace
          settings.
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
            aiPreferences.model,
            `${aiPreferences.tone} Tone`,
            `${aiPreferences.creativity} Creativity`,
            `${aiPreferences.length} Post Length`,
          ]}
          buttonText="Configure AI"
          onClick={() => setIsAIModalOpen(true)}
        />

        {/* Notifications */}
        <SettingCard
          icon={<FiBell />}
          title="Notifications"
          description="Choose when ForgeFlow should notify you."
          items={[
            notificationPreferences.publishingSuccess
              ? "Publishing Success • On"
              : "Publishing Success • Off",

            notificationPreferences.publishingFailure
              ? "Publishing Failure • On"
              : "Publishing Failure • Off",

            notificationPreferences.weeklySummary
              ? "Weekly Summary • On"
              : "Weekly Summary • Off",

            notificationPreferences.aiSuggestions
              ? "AI Suggestions • On"
              : "AI Suggestions • Off",
          ]}
          buttonText="Manage Notifications"
          onClick={() => setIsNotificationModalOpen(true)}
        />

        {/* Security */}
        {/* Security */}
        <SettingCard
          icon={<FiShield />}
          title="Security"
          description="Protect your account and data."
          items={[
            "Change Password",
            "Secure Authentication",
            "Account Protection",
          ]}
          buttonText="Change Password"
          onClick={() => setIsPasswordOpen(true)}
        />
      </div>

      {/* Danger Zone */}
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="text-xl font-bold text-red-400">Danger Zone</h2>

        <p className="mt-2 text-slate-400">These actions cannot be undone.</p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={handleDeleteAllDrafts}
            className="rounded-xl border border-red-500/30 px-5 py-3 text-red-400 transition hover:bg-red-500/10"
          >
            Delete All Drafts
          </button>

          <button
            onClick={() => {
              setDeleteConfirmation("");
              setIsDeleteAccountOpen(true);
            }}
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-500"
          >
            Delete Account
          </button>
        </div>
      </div>
      {isPasswordOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-700 bg-[#101827] p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Change Password
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Update your account password.
                </p>
              </div>

              <button
                onClick={() => setIsPasswordOpen(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleChangePassword} className="mt-6 space-y-5">
              {/* Current Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Current Password
                </label>

                <input
                  type="password"
                  name="oldPassword"
                  value={passwordData.oldPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter current password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                />
              </div>

              {/* New Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  New Password
                </label>

                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Enter new password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Confirm New Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Confirm new password"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsPasswordOpen(false)}
                  className="flex-1 rounded-xl border border-slate-700 px-4 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={changingPassword}
                  className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {changingPassword ? "Changing..." : "Change Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {isDeleteAccountOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-red-500/30 bg-[#101827] p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-red-400">Delete Account</h2>

            <p className="mt-3 leading-6 text-slate-400">
              This will permanently delete your account and all associated
              posts. This action cannot be undone.
            </p>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Type <span className="font-bold text-red-400">DELETE</span> to
                confirm
              </label>

              <input
                type="text"
                value={deleteConfirmation}
                onChange={(e) => setDeleteConfirmation(e.target.value)}
                placeholder="DELETE"
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-red-500"
              />
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setIsDeleteAccountOpen(false)}
                className="flex-1 rounded-xl border border-slate-700 px-4 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteAccount}
                disabled={deleteConfirmation !== "DELETE" || deletingAccount}
                className="flex-1 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {deletingAccount ? "Deleting..." : "Delete Account"}
              </button>
            </div>
          </div>
        </div>
      )}
      {isAIModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-[#101827] p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  AI Preferences
                </h2>

                <p className="mt-1 text-sm text-slate-400">
                  Configure how ForgeFlow generates your posts.
                </p>
              </div>

              <button
                onClick={() => setIsAIModalOpen(false)}
                className="text-2xl text-slate-500 transition hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Form */}
            <div className="mt-6 space-y-5">
              {/* Model */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  AI Model
                </label>

                <select
                  value={aiPreferences.model}
                  onChange={(e) =>
                    setAIPreferences((prev) => ({
                      ...prev,
                      model: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option>Gemini AI</option>
                </select>
              </div>

              {/* Tone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Tone
                </label>

                <select
                  value={aiPreferences.tone}
                  onChange={(e) =>
                    setAIPreferences((prev) => ({
                      ...prev,
                      tone: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option>Professional</option>
                  <option>Educational</option>
                  <option>Storytelling</option>
                  <option>Friendly</option>
                </select>
              </div>

              {/* Creativity */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Creativity
                </label>

                <select
                  value={aiPreferences.creativity}
                  onChange={(e) =>
                    setAIPreferences((prev) => ({
                      ...prev,
                      creativity: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              {/* Length */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Post Length
                </label>

                <select
                  value={aiPreferences.length}
                  onChange={(e) =>
                    setAIPreferences((prev) => ({
                      ...prev,
                      length: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option>Short</option>
                  <option>Medium</option>
                  <option>Long</option>
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setIsAIModalOpen(false)}
                className="flex-1 rounded-xl border border-slate-700 px-4 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveAIPreferences}
                disabled={savingAI}
                className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {savingAI ? "Saving..." : "Save Preferences"}
              </button>
            </div>
          </div>
        </div>
      )}
      {isNotificationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-2xl border border-slate-700 bg-[#101827] p-6 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Notifications</h2>

                <p className="mt-1 text-sm text-slate-400">
                  Choose which notifications ForgeFlow should send you.
                </p>
              </div>

              <button
                onClick={() => setIsNotificationModalOpen(false)}
                className="text-2xl text-slate-500 transition hover:text-white"
              >
                ×
              </button>
            </div>

            {/* Options */}
            <div className="mt-6 space-y-3">
              {/* Publishing Success */}
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-4 transition hover:border-cyan-500/30">
                <div>
                  <p className="font-medium text-white">Publishing Success</p>

                  <p className="mt-1 text-xs text-slate-500">
                    Notify me when a post is published successfully.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={notificationPreferences.publishingSuccess}
                  onChange={(e) =>
                    setNotificationPreferences((prev) => ({
                      ...prev,
                      publishingSuccess: e.target.checked,
                    }))
                  }
                  className="h-5 w-5 accent-cyan-500"
                />
              </label>

              {/* Publishing Failure */}
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-4 transition hover:border-cyan-500/30">
                <div>
                  <p className="font-medium text-white">Publishing Failure</p>

                  <p className="mt-1 text-xs text-slate-500">
                    Notify me when a post fails to publish.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={notificationPreferences.publishingFailure}
                  onChange={(e) =>
                    setNotificationPreferences((prev) => ({
                      ...prev,
                      publishingFailure: e.target.checked,
                    }))
                  }
                  className="h-5 w-5 accent-cyan-500"
                />
              </label>

              {/* Weekly Summary */}
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-4 transition hover:border-cyan-500/30">
                <div>
                  <p className="font-medium text-white">Weekly Summary</p>

                  <p className="mt-1 text-xs text-slate-500">
                    Receive a weekly summary of your ForgeFlow activity.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={notificationPreferences.weeklySummary}
                  onChange={(e) =>
                    setNotificationPreferences((prev) => ({
                      ...prev,
                      weeklySummary: e.target.checked,
                    }))
                  }
                  className="h-5 w-5 accent-cyan-500"
                />
              </label>

              {/* AI Suggestions */}
              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-4 transition hover:border-cyan-500/30">
                <div>
                  <p className="font-medium text-white">AI Suggestions</p>

                  <p className="mt-1 text-xs text-slate-500">
                    Receive AI-powered content suggestions.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={notificationPreferences.aiSuggestions}
                  onChange={(e) =>
                    setNotificationPreferences((prev) => ({
                      ...prev,
                      aiSuggestions: e.target.checked,
                    }))
                  }
                  className="h-5 w-5 accent-cyan-500"
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setIsNotificationModalOpen(false)}
                className="flex-1 rounded-xl border border-slate-700 px-4 py-3 font-semibold text-slate-300 transition hover:bg-slate-800"
              >
                Cancel
              </button>

              <button
                onClick={handleSaveNotificationPreferences}
                disabled={savingNotifications}
                className="flex-1 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {savingNotifications ? "Saving..." : "Save Preferences"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Settings;
