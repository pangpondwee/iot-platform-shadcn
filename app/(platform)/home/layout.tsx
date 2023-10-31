import Header from "../_components/header";
import NavBar from "../_components/navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-1 flex-col overflow-auto z-10">
      {/* <NavBar /> bug*/}
      <Header />
      {children}
    </div>
  );
}
