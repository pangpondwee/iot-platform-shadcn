import { ModeToggle } from "@/components/mode-toggle";
import HamburgerBar from "./hamburger-bar";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 flex p-3 justify-between border-b xl:hidden bg-background/95 backdrop-blur-lg">
      <div className="flex gap-4">
        <HamburgerBar />
        <Image src={"/logo.svg"} width={142} height={32} alt="logo" />
      </div>
      <ModeToggle />
    </div>
  );
}
