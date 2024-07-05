"use client";

import { ButtonHTMLAttributes, FC, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "react-hot-toast";
import { Loader2, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

interface SignOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SignOutButton: FC<SignOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState<boolean>(false);
  return (
    <Button
      {...props}
      variant="ghost"
      onClick={async () => {
        setIsSigningOut(true);
        try {
          await signOut();
        } catch (error) {
          toast.error("Couldn't sign out");
        } finally {
          setIsSigningOut(false);
        }
      }}
    >
      {isSigningOut ? (
        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
      ) : (
        <LogOut className="w-5 h-5" />
      )}
    </Button>
  );
};

export default SignOutButton;
