import Header from "../_components/header";
import NavBar from "../_components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-1 flex-col xl:overflow-auto z-0">
      <NavBar />
      <Header />
      {children}
    </div>
  );
}
