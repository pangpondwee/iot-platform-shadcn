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
          <h1 className="text-2xl font-semibold">Devices</h1>
          <p className="text-base text-muted-foreground">
            View and organize all your connected devices in one place.
          </p>
        </div>
        <NewDeviceDialog />
      </Header>
      {children}
    </div>
  );
}
