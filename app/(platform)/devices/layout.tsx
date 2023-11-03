import Header from "../_components/header";
import { NewDeviceDialog } from "./_components/new-device-dialog";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="z-0 flex flex-1 flex-col xl:overflow-auto">
      <Header>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold sm:text-3xl">Devices</h1>
          <p className="text-base text-muted-foreground">
            View and manage all devices in this platform.
          </p>
        </div>
        <NewDeviceDialog />
      </Header>
      {children}
    </div>
  );
}
