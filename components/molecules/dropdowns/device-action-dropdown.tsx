"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MinusCircle, MoreVertical, Pencil, Trash2 } from "lucide-react";

export function ActionDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="pl-2.5 pr-2.5" variant="ghost">
          <MoreVertical width={20} height={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem className="gap-2 font-medium">
          <Pencil width={16} height={16} />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 font-medium">
          <MinusCircle width={16} height={16} />
          Mark as unavailable
        </DropdownMenuItem>
        <DropdownMenuItem className="gap-2 font-medium text-destructive focus:text-destructive">
          <Trash2 width={16} height={16} />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
