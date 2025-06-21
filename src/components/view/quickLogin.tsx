import { KeyRound } from "lucide-react";

export const QuickLogin = () => {
  return (
    <div className="group absolute top-0 right-[-210px] p-4 hover:-translate-y-2 transition-all duration-400">
      <div className="flex justify-center items-center rounded-full size-10 bg-accent-foreground cursor-pointer">
        <KeyRound className="text-white size-5" />
      </div>
      <p className="text-md mt-1">
        Quick Login
        <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-400 ml-1">
          (for tests)
        </span>
      </p>
    </div>
  );
};
