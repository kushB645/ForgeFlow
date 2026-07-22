import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import Workspace from "./pages/Workspace/Workspace";
import NewPost from "./pages/Newpost/NewPost";
import CustomPost from "./pages/Custompost/CustomPost";
import ContentLibrary from "./pages/ContentLibrary/ContentLibrary";
import Schedule from "./pages/Schedule/Schedule";
import Settings from "./pages/Setting/Settings";

function App() {
  return (
    <div className="min-h-screen bg-[#0B1220]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-64 min-h-screen overflow-y-auto px-8 py-8">
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
  );
}

export default App;