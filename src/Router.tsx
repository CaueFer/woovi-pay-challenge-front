import { Route, Routes } from "react-router";

import App from "./App";

import { Home } from "./pages/home";
import { AuthLayout } from "./pages/authLayout";
import { NotFoundPage } from "./pages/notFoundPage";
import { LoginForm } from "./components/view/auth/loginForm";
import { SignupForm } from "./components/view/auth/signForm";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* Rotas principais */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignupForm />} />
        </Route>

        {/* <Route path="account" element={<Account />} /> */}
      </Route>

      {/* fallback 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
