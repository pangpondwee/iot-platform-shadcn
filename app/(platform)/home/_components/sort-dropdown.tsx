"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, ChevronDown } from "lucide-react";
import { useState } from "react";

export function SortDropDown() {
  const [sort, setSort] = useState("ascending");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button className="hidden gap-2 sm:flex" variant="outline">
            <ArrowUpDown width={20} height={20} />
            Sort
            <ChevronDown width={20} height={20} />
          </Button>
          <Button className="sm:hidden" variant="outline" size="icon">
            <ArrowUpDown width={20} height={20} />
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
