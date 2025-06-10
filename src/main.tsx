import { StrictMode, Suspense } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";

import { LoadingPage } from "./components/view/loadingPage";

import { AppRouter } from "./Router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
