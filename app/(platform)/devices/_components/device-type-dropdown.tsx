"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function DeviceTypeDropDown() {
  const options = [
    { label: "Standalone", value: "standalone" },
    { label: "Gateway", value: "gateway" },
    { label: "Node", value: "node" },
  ];
  const [deviceType, setDeviceType] = useState("standalone");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="w-36 justify-between gap-2" variant="outline">
          {options.find((option) => option.value === deviceType)?.label}
          <ChevronDown width={20} height={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={deviceType}
          onValueChange={setDeviceType}
        >
          {options.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              {option.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
