import { useNavigate } from "react-router";
import { Banana, Github } from "lucide-react";

import { Button } from "../ui/button";

export const LinksCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-center items-center gap-2 mt-4">
      <Button variant="default" onClick={() => navigate("login")}>
        <Banana /> Go to Challenge
      </Button>
      <Button variant="outline">
        <Github /> Challenge Repo
      </Button>
    </div>
  );
};
