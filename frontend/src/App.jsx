import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="flex min-h-screen bg-[#0B1220]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <main className="p-6 text-white">
          <h1 className="text-3xl font-bold">
            Welcome to ForgeFlow 🚀
          </h1>
        </main>
      </div>
    </div>
  );
}

export default App;