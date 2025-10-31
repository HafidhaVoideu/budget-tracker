import { ReactNode } from "react";
import Logo from "@/components/Logo";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default AuthLayout;
