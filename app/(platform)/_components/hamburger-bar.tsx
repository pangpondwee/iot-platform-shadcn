import { Menu02 } from "@/app/_components/icons";
import { Button } from "@/components/ui/button";
import SideBar from "./sidebar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function HamburgerBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
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
