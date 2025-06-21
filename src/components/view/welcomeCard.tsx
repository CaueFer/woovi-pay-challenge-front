import { Banana } from "lucide-react";
import { Link } from "react-router";

export const WelcomeCard = () => {
  return (
    <Link to="/" className="flex flex-col items-center gap-2 font-medium">
      <div className="flex h-8 w-8 items-center justify-center rounded-md">
        <Banana className="size-6" />
      </div>
      <span className="sr-only">Bananapay Logo</span>
      <h1 className="text-xl font-bold">Welcome to Banana Pay</h1>
    </Link>
  );
};
