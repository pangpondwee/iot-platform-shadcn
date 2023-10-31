import { Menu02 } from "@/app/_components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideBar from "./sidebar";

export default function HamburgerBar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <Menu02 />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-80 h-screen" side="left">
        <SideBar />
      </SheetContent>
    </Sheet>
  );
}
