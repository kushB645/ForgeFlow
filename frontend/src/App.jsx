import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";

import Workspace from "./pages/Workspace/Workspace";
import NewPost from "./pages/Newpost/NewPost";
import CustomPost from "./pages/Custompost/CustomPost";
import ContentLibrary from "./pages/ContentLibrary/ContentLibrary";
import Schedule from "./pages/Schedule/Schedule";
import Settings from "./pages/Setting/Settings";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  const location = useLocation();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const hideSidebar = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-[#0B1220]">
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
          <Route path="/" element={<Navigate to="/login" replace />} />

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
