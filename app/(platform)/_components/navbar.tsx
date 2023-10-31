import HamburgerBar from "./hamburger-bar";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex p-3 gap-4 border-b xl:hidden">
      <HamburgerBar />
      <Image src={"/logo.svg"} width={142} height={32} alt="logo" />
    </div>
  );
}
