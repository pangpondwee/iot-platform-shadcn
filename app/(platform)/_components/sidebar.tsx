"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Ghost, ImportIcon } from "lucide-react";
import Image from "next/image";
import {
  HomeLine,
  Modem01,
  FolderCode,
  Archive,
  Users01,
  Settings01,
} from "@/app/_components/icons";

const topItems = [
  { label: "Home", icon: <HomeLine /> },
  { label: "Devices", icon: <Modem01 /> },
  { label: "Firmware", icon: <FolderCode /> },
];
const projectItems = ["Dog track", "Dog track 2", "Dog track 3"];
const bottomItems = [
  { label: "Account management", icon: <Users01 /> },
  { label: "Archived projects", icon: <Archive /> },
  { label: "Settings", icon: <Settings01 /> },
];

export default function SideBar() {
  return (
    <nav className="flex flex-col w-full h-full gap-6">
      <div className="pl-6 pr-6">
        <Image src="/logo.svg" width={142} height={32} alt="logo" />
      </div>
      <div className="flex flex-col gap-6 h-full self-stretch">
        <div className="flex flex-col pl-4 pr-4 pb-6 gap-1 self-stretch border-b">
          {topItems.map((item) => (
            <NavItem label={item.label} icon={item.icon} key={item.label} />
          ))}
        </div>
        <div className="flex flex-col pl-4 pr-4 gap-1 ">
          {projectItems.map((item) => (
            <NavItem label={item} icon={<HomeLine />} key={item} />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-6">
        <div className="flex flex-col pt-6 pl-4 pr-4 gap-1 self-stretch border-t">
          {bottomItems.map((item) => (
            <NavItem label={item.label} icon={item.icon} key={item.label} />
          ))}
        </div>
        <div className="flex items-center pt-6 pl-4 pr-4 gap-4 border-t">
          <Avatar>
            <AvatarImage src="https://knotch.com/wp-content/uploads/2023/03/Image.png" />
            <AvatarFallback>OR</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Olivia Rhye</p>
            <p className="text-sm text-secondary-foreground">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

type NavItemProps = {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
};

function NavItem({ label, icon, active = false }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      className="flex flex-1 px-3 py-2 rounded-md justify-start items-center gap-2"
    >
      <div className="flex flex-1 justify-start items-center gap-3">
        {icon}
        <div className="text-base font-semibold text-secondary-foreground">
          {label}
        </div>
      </div>
    </Button>
  );
}
