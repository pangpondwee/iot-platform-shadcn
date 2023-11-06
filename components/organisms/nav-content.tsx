"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Logo from "@/components/atoms/logo";
import Link from "next/link";
import {
  ArchiveIcon,
  FileCode,
  Home,
  HomeIcon,
  Router,
  Settings,
  Users,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";

const topItems = [
  { label: "Home", href: "/home", icon: <Home /> },
  { label: "Devices", href: "/devices", icon: <Router /> },
  { label: "Firmware", href: "firmware", icon: <FileCode /> },
];
const projectItems = [
  "Dog track",
  "Dog track 2",
  "Dog track 3",
  "Dog track 4",
  "Dog track 5",
  "Dog track 6",
  "Dog track 7",
  "Dog track 8",
];
const bottomItems = [
  {
    label: "Account management",
    href: "account-management",
    icon: <Users />,
  },
  {
    label: "Archived projects",
    href: "archived-projects",
    icon: <ArchiveIcon />,
  },
  { label: "Settings", href: "settings", icon: <Settings /> },
];

type SideBarProps = {
  handleClickLink?: () => void;
};

export default function NavContent({ handleClickLink }: SideBarProps) {
  return (
    <div className="flex h-full flex-1 flex-col gap-6">
      <div className="pl-6 pr-6">
        <Logo />
      </div>
      <div className="flex h-full flex-1 flex-col gap-6 overflow-hidden">
        <div className="flex flex-col gap-1 pl-4 pr-4">
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
        <Separator />
        <ScrollArea>
          <div className="flex flex-1 flex-col gap-1 pl-4 pr-4">
            {projectItems.map((item) => (
              <NavItem
                href={"/project"}
                label={item}
                icon={<HomeIcon />}
                key={item}
                onClick={handleClickLink}
              />
            ))}
          </div>
        </ScrollArea>
      </div>
      <Separator />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1 self-stretch pl-4 pr-4">
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
        <Separator />
        <div className="flex items-center gap-4 pl-4 pr-4">
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
    </div>
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
        <div className="text-base font-medium">{label}</div>
      </Link>
    </Button>
  );
}
