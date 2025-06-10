import { Link, Outlet } from "react-router";

import { Banana } from "lucide-react";

export const AuthLayout = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center  min-h-screen min-w-screen ">
      <Link to="/" className="flex flex-col items-center gap-2 font-medium">
        <div className="flex h-8 w-8 items-center justify-center rounded-md">
          <Banana className="size-6" />
        </div>
        <span className="sr-only">Bananapay Logo</span>
      </Link>
      <h1 className="text-xl font-bold">Welcome to BananaPay</h1>
      <Outlet />
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary  ">
        Made by <Link to="https://c-dev.netlify.app">c-dev</Link>
      </div>
    </div>
  );
};
