"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {
  HomeLine,
  Modem01,
  FolderCode,
  Archive,
  Users01,
  Settings01,
} from "@/app/_components/icons";
import Logo from "@/app/_components/logo";
import Link from "next/link";

const topItems = [
  { label: "Home", href: "/home", icon: <HomeLine /> },
  { label: "Devices", href: "/devices", icon: <Modem01 /> },
  { label: "Firmware", href: "firmware", icon: <FolderCode /> },
];
const projectItems = ["Dog track", "Dog track 2", "Dog track 3"];
const bottomItems = [
  {
    label: "Account management",
    href: "account-management",
    icon: <Users01 />,
  },
  {
    label: "Archived projects",
    href: "archived-projects",
    icon: <Archive />,
  },
  { label: "Settings", href: "settings", icon: <Settings01 /> },
];

type SideBarProps = {
  handleClickLink?: () => void;
};

export default function SideBar({ handleClickLink }: SideBarProps) {
  return (
    <nav className="flex h-full w-full flex-col gap-6">
      <div className="pl-6 pr-6">
        <Logo />
      </div>
      <div className="flex h-full flex-col gap-6 self-stretch">
        <div className="flex flex-col gap-1 self-stretch border-b pb-6 pl-4 pr-4">
          {topItems.map((item) => (
            <NavItem
              href={item.href}
              label={item.label}
              icon={item.icon}
              key={item.label}
              onClick={handleClickLink}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1 pl-4 pr-4 ">
          {projectItems.map((item) => (
            <NavItem
              href={"/project"}
              label={item}
              icon={<HomeLine />}
              key={item}
              onClick={handleClickLink}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-6">
        <div className="flex flex-col gap-1 self-stretch border-t pl-4 pr-4 pt-6">
          {bottomItems.map((item) => (
            <NavItem
              href={item.href}
              label={item.label}
              icon={item.icon}
              key={item.label}
              onClick={handleClickLink}
            />
          ))}
        </div>
        <div className="flex items-center gap-4 border-t pl-4 pr-4 pt-6">
          <Avatar>
            <AvatarImage
              src="https://knotch.com/wp-content/uploads/2023/03/Image.png"
              alt="profile"
            />
            <AvatarFallback>OR</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Olivia Rhye</p>
            <p className="text-sm text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

type NavItemProps = {
  label: string;
  icon: React.ReactNode;
  href: string;
  onClick?: () => void;
};

function NavItem({ label, icon, href, onClick }: NavItemProps) {
  return (
    <Button
      variant="ghost"
      className="flex flex-1 items-center justify-start gap-2 rounded-md px-3 py-2 text-muted-foreground"
      onClick={onClick}
      asChild
    >
      <Link
        href={href}
        className="flex flex-1 items-center justify-start gap-3"
      >
        {icon}
        <div className="text-base font-semibold">{label}</div>
      </Link>
    </Button>
  );
}
