import HamburgerBar from "./hamburger-bar";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 flex p-3 gap-4 border-b xl:hidden  bg-background/95 backdrop-blur-lg">
      <HamburgerBar />
      <Image src={"/logo.svg"} width={142} height={32} alt="logo" />
    </div>
  );
}
