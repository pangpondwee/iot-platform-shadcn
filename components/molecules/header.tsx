import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="flex w-full justify-between border-b p-4 sm:p-6">
      {children}
    </header>
  );
}

export function HeaderContent({ children }: HeaderProps) {
  return <div className="flex flex-col gap-2">{children}</div>;
}

export function HeaderTitle({ children }: HeaderProps) {
  return <h1 className="text-2xl font-semibold">{children}</h1>;
}

export function HeaderDescription({ children }: HeaderProps) {
  return <p className="text-base text-muted-foreground">{children}</p>;
}

export function HeaderActions({ children }: HeaderProps) {
  return <div className="flex gap-2">{children}</div>;
}
