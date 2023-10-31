import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-between items-center p-6 border-b bg-background/95 backdrop-blur-lg">
      <h1 className="text-2xl font-semibold">Welcome back, Olivia Rhye</h1>
      <ModeToggle />
    </header>
  );
}
