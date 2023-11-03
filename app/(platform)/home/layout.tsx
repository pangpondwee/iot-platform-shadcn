import Header from "../_components/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="z-0 flex flex-1 flex-col xl:overflow-auto">
      <Header>
        <h1 className="text-2xl font-semibold">Welcome, Olivia Rhye</h1>
      </Header>
      {children}
    </div>
  );
}
