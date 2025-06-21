import { Link, Outlet } from "react-router";

import { WelcomeCard } from "@/components/view/welcomeCard";

export const AuthLayout = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center  min-h-screen min-w-screen ">
      <WelcomeCard />

      <Outlet />

      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        Made by <Link to="https://c-dev.netlify.app">c-dev</Link>
      </div>
    </div>
  );
};
