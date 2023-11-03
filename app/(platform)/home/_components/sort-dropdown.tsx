"use client";
import { ChevronDown, SwitchVertical01 } from "@/app/_components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export function SortDropDown() {
  const [sort, setSort] = useState("ascending");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button className="hidden gap-2 sm:flex" variant="outline">
            <SwitchVertical01 />
            Sort
            <ChevronDown />
          </Button>
          <Button className="sm:hidden" variant="outline" size="icon">
            <SwitchVertical01 />
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
          <DropdownMenuRadioItem value="ascending">
            A to Z
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="descending">
            Z to A
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="newest">
            Newest to oldest
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="oldest">
            Oldest to newest
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
