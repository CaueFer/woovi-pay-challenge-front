import { Outlet } from "react-router";

import { Toaster } from "./components/ui/sonner";
import "./App.css";

function App() {
  return (
    <>
      <div className="relative min-w-screen min-h-screen overflow-y-auto">
        <Outlet />
        <Toaster />
      </div>
    </>
  );
}

export default App;
