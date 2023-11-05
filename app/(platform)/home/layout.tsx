import { Suspense } from "react";
import Header from "../_components/header";
import { NewProjectDialog } from "./_components/new-project-dialog";
import HomeSkeleton from "./_components/home-skeleton";

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
      <Suspense fallback={<HomeSkeleton />}>{children}</Suspense>
    </div>
  );
}
