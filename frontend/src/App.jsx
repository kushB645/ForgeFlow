import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

import Workspace from "./pages/Workspace/Workspace";
import NewPost from "./pages/Newpost/NewPost";
import CustomPost from "./pages/Custompost/CustomPost";
import ContentLibrary from "./pages/ContentLibrary/ContentLibrary";
import Schedule from "./pages/Schedule/Schedule";
import Settings from "./pages/Setting/Settings";

function App() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64 flex min-h-screen flex-col">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto px-6 py-4">
          <Routes>
            <Route path="/" element={<Navigate to="/workspace" replace />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/custom-post" element={<CustomPost />} />
            <Route path="/content-library" element={<ContentLibrary />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;