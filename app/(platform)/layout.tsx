import { ReactNode } from "react";
import SideBar from "./_components/sidebar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="w-72 pt-8 hidden border-r lg:flex">
        <SideBar />
      </div>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
