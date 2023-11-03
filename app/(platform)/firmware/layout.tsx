import Header from "../_components/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="z-0 flex flex-1 flex-col xl:overflow-auto">
      <Header>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Firmware</h1>
          <p className="text-base text-muted-foreground">
            Manage all firmware in this platform here.
          </p>
        </div>
      </Header>
      {children}
    </div>
  );
}
