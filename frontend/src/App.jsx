import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage/LandingPage";
import AboutPage from "./pages/About/AboutPage";
import WhyForgeFlowPage from "./pages/WhyForgeFlow/WhyForgeFlowPage";
import HowItWorksPage from "./pages/HowItWorks/HowItWorksPage";
import PricingPage from "./pages/Pricing/PricingPage";
import ContactPage from "./pages/Contact/ContactPage";
import Workspace from "./pages/Workspace/Workspace";
import NewPost from "./pages/Newpost/NewPost";
import CustomPost from "./pages/Custompost/CustomPost";
import ContentLibrary from "./pages/ContentLibrary/ContentLibrary";
import Schedule from "./pages/Schedule/Schedule";
import Settings from "./pages/Setting/Settings";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const publicRoutes = [
    "/",
    "/about",
    "/why",
    "/why-how",
    "/how-it-works",
    "/pricing",
    "/contact",
    "/login",
    "/register",
  ];

  const hideSidebar = publicRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#0B1220]">
      <ScrollToTop />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#101827",
            color: "#fff",
            border: "1px solid #1e293b",
          },
        }}
      />
      
      {!hideSidebar && (
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}

      <main
        className={
          hideSidebar
            ? "min-h-screen"
            : "min-h-screen overflow-y-auto px-4 py-6 sm:px-6 sm:py-8 lg:ml-64 lg:px-8 lg:py-8"
        }
      >
        {!hideSidebar && (
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="mb-6 rounded-xl border border-slate-800 bg-[#101827] p-3 text-slate-300 transition hover:border-cyan-500/40 hover:text-cyan-400 lg:hidden"
          >
            ☰
          </button>
        )}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why" element={<WhyForgeFlowPage />} />
          <Route path="/why-how" element={<WhyForgeFlowPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route
            path="/workspace"
            element={
              <ProtectedRoute>
                <Workspace />
              </ProtectedRoute>
            }
          />

          <Route
            path="/new-post"
            element={
              <ProtectedRoute>
                <NewPost />
              </ProtectedRoute>
            }
          />

          <Route
            path="/new-post/:postId"
            element={
              <ProtectedRoute>
                <NewPost />
              </ProtectedRoute>
            }
          />

          <Route
            path="/custom-post"
            element={
              <ProtectedRoute>
                <CustomPost />
              </ProtectedRoute>
            }
          />

          <Route
            path="/content-library"
            element={
              <ProtectedRoute>
                <ContentLibrary />
              </ProtectedRoute>
            }
          />

          <Route
            path="/schedule"
            element={
              <ProtectedRoute>
                <Schedule />
              </ProtectedRoute>
            }
          />

          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
