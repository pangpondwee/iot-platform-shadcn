"use client";
import { Menu02 } from "@/app/_components/icons";
import { Button } from "@/components/ui/button";
import SideBar from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export default function HamburgerBar() {
  const [open, setOpen] = useState(false);
  const handleClickLink = () => {
    setOpen(!open);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu02 />
        </Button>
      </SheetTrigger>
      <SheetContent className="h-screen w-80" side="left">
        <SideBar handleClickLink={handleClickLink} />
      </SheetContent>
    </Sheet>
  );
}
