import { ReactNode } from "react";
import SideBar from "./_components/sidebar";
import NavBar from "./_components/navbar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex xl:h-screen">
      <div className="hidden w-72 border-r pt-8 xl:flex">
        <SideBar />
      </div>
      <main className="flex flex-1 flex-col">
        <NavBar />
        {children}
      </main>
    </div>
  );
}
