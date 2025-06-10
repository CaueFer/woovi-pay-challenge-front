import { Outlet } from "react-router";

import { Toaster } from "./components/ui/sonner";

import "./App.css";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <>
      <CookiesProvider>
        <div className="relative min-w-screen min-h-screen overflow-y-auto antialiased ">
          <Outlet />
          <Toaster />
        </div>
      </CookiesProvider>
    </>
  );
}

export default App;
