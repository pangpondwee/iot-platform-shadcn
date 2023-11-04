"use client";
import { Button } from "@/components/ui/button";
import SideBar from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Menu } from "lucide-react";

export default function HamburgerBar() {
  const [open, setOpen] = useState(false);
  const handleClickLink = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="h-screen w-80" side="left">
        <SideBar handleClickLink={handleClickLink} />
      </SheetContent>
    </Sheet>
  );
}
