import Header, {
  HeaderContent,
  HeaderDescription,
  HeaderTitle,
} from "@/components/molecules/header";
import MainContainer from "@/components/templates/main-container";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header className="pb-0 sm:pb-0">
        <HeaderContent>
          <HeaderTitle>Projects</HeaderTitle>
          <HeaderDescription>This is a mock project.</HeaderDescription>
          <Tabs>
            <TabsList variant="outline" className="grid w-full grid-cols-2">
              <TabsTrigger variant="outline" value="account">
                Account
              </TabsTrigger>
              <TabsTrigger variant="outline" value="password">
                Password
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </HeaderContent>
      </Header>
      <MainContainer>{children}</MainContainer>
    </>
  );
}
