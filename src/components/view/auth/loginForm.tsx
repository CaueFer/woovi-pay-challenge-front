import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router";
import { type ComponentPropsWithoutRef, useState } from "react";

import { toast } from "sonner";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SpinnerSvg from "@/components/svg/spinner";
import { PinInput } from "@/components/ui/pinInput";

import { cn } from "@/lib/utils";
import { post } from "@/lib/helpers/fetch.helper";
import { jwtCookiekey } from "@/lib/defaultConstants";

export function LoginForm({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCookie] = useCookies([jwtCookiekey]);

  const [logged, setLogged] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const handleLogin = (formData: FormData) => {
    setLogged(false);
    setisLoading(true);

    const username = formData.get("username");
    const pin = formData.get("pin");

    post("/auth/login", {
      username,
      pin,
    })
      .then(async (res: Response) => {
        const data = await res.json();

        if (res.ok) {
          toast(data.message, { position: "bottom-right" });

          setLogged(true);

          setCookie("jwt-token", data.token as string);

          setTimeout(() => {
            setisLoading(false);

            navigate("/account");
          }, 1500);
        }

        if (res.status >= 400) {
          toast.error(data.detail || data.error);
        }
      })
      .catch((err: Error) => {
        console.error(err);

        setLogged(false);
      })
      .finally(() => setisLoading(false));
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form action={handleLogin}>
        <div className="flex flex-col gap-6">
          <p className="text-center text-sm">
            Dont't have an account?
            <Link to="/signup" className="underline underline-offset-4 ml-2">
              Sign Up
            </Link>
          </p>
          <div className="flex flex-col gap-6">
            {/* USERNAME */}
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Your beauty username..."
                required
                className="autofill:bg-background"
                disabled={logged}
              />
            </div>

            {/* PIN */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="pin">Pin</Label>
              <PinInput id="pin" name="pin" required disabled={logged} />
            </div>

            <Button type="submit" className="w-full">
              {isLoading ? (
                <>
                  <SpinnerSvg /> Loading...
                </>
              ) : (
                "Login"
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
