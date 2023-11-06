import { Suspense } from "react";
import Header from "../../../components/organisms/header";
import { NewProjectDialog } from "../../../components/dialogs/new-project-dialog";
import Loading from "./loading";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="z-0 flex flex-1 flex-col xl:overflow-auto">
      <Header>
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Welcome back, Olivia Rhye!</h1>
          <p className="text-base text-muted-foreground">
            Here's your active projects.
          </p>
        </div>
        <NewProjectDialog />
      </Header>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
