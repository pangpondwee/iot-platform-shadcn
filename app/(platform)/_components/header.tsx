import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex w-full justify-between border-b p-6">
      {children}
    </header>
  );
}
