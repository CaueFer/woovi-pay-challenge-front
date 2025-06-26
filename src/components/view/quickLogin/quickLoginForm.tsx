import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export const QuickLoginForm = () => {
  return (
    <div className="flex flex-col gap-6 text-sm">
      <div className="grid gap-2">
        <Label htmlFor="username">Username</Label>
        <Input
          id="username"
          name="username"
          type="text"
          value="Test User"
          required
          className="autofill:bg-background"
          readOnly
          disabled
        />
      </div>
    </div>
  );
};
