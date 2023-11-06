import MainContainer from "@/components/templates/main-container";
import Header, {
  HeaderContent,
  HeaderDescription,
  HeaderTitle,
} from "../../../components/molecules/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header>
        <HeaderContent>
          <HeaderTitle>Firmware</HeaderTitle>
          <HeaderDescription>
            Manage all firmware in this platform.
          </HeaderDescription>
        </HeaderContent>
      </Header>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
