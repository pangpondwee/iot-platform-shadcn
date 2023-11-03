import { ModeToggle } from "@/components/mode-toggle";
import HamburgerBar from "./hamburger-bar";
import Image from "next/image";
import Logo from "@/app/_components/logo";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 flex p-3 justify-between border-b xl:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex gap-4">
        <HamburgerBar />
        <Logo />
      </div>
      <ModeToggle />
    </div>
  );
}
