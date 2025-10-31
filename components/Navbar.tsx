"use client";
import Link from "next/link";
import Logo from "./Logo";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { UserButton } from "@clerk/nextjs";

import ThemeSwitchBtn from "./ThemeSwitcherBtn";
import { useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Menu } from "lucide-react";

const items = [
  { label: "Dashboard", link: "/" },
  { label: "Transactions", link: "/transactions" },
  { label: "Manage", link: "/manage" },
];

function Navbar() {
  return (
    <>
      <DesktopNavbar />

      <MobileNavbar />
    </>
  );
}

export default Navbar;

function MobileNavbar() {
  const [open, setIsOpen] = useState(false);

  return (
    <div className=" bg-background border-separate block md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={open} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[400px] sm:w-[540px ]" side="left">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>

            <Logo />

            <div className="flex flex-col  gap-1 pt-4">
              {items.map((item) => (
                <NavbarItem
                  key={item.label}
                  link={item.link}
                  label={item.label}
                  callback={() => setIsOpen((prev) => !prev)}
                ></NavbarItem>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex h-20 min-h-[60px] items-center gap-x-4 ">
          <Logo isMobile />
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitchBtn></ThemeSwitchBtn>

          <UserButton />
        </div>
      </nav>
    </div>
  );
}

function DesktopNavbar() {
  return (
    <div className=" hidden border-separate border-b bg-background md:block">
      <nav className=" container flex items-center justify-between px-8 gap-4">
        <div className=" flex items-center h-20 min-h-[60px]  gap-x-4">
          <Logo />
        </div>
        <div className="h-full flex">
          {items.map((item) => (
            <NavbarItem
              key={item.label}
              link={item.link}
              label={item.label}
            ></NavbarItem>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeSwitchBtn></ThemeSwitchBtn>
          <UserButton />
        </div>
      </nav>
    </div>
  );
}

function NavbarItem({
  link,
  label,
  callback,
}: {
  link: string;
  label: string;
  callback?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === link;
  return (
    <div className="relative flex items-center">
      <Link
        onClick={() => {
          callback && callback();
        }}
        href={link}
        className={cn(
          buttonVariants({
            variant: "ghost",
          }),
          " w-full justify-start text-lg text-muted-foreground hover:text-foreground",

          isActive && "text-foreground"
        )}
      >
        {label}

        {isActive && (
          <div className="absolute -bottom-0.5 left-1/2 hidden h-0.5 w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block "></div>
        )}
      </Link>
    </div>
  );
}
