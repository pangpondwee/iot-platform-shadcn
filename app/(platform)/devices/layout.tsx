import MainContainer from "@/components/templates/main-container";
import Header, {
  HeaderContent,
  HeaderDescription,
  HeaderTitle,
} from "../../../components/molecules/header";
import { NewDeviceDialog } from "../../../components/organisms/dialogs/new-device-dialog";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header>
        <HeaderContent>
          <HeaderTitle>Devices</HeaderTitle>
          <HeaderDescription>
            View and organize all your connected devices in one place.
          </HeaderDescription>
        </HeaderContent>
        <NewDeviceDialog />
      </Header>
      <MainContainer className="max-w-full overflow-auto">
        {children}
      </MainContainer>
    </>
  );
}
