import ProjectCard from "./_components/project-card";
import { Input } from "@/components/ui/input";
import { SortDropDown } from "./_components/sort-dropdown";
import { NewProjectDialog } from "./_components/new-project-dialog";

export default function Home() {
  return (
    <main className="flex flex-col p-6 gap-6">
      <div className="flex justify-between">
        <div className="flex flex-1 gap-3 max-w-lg">
          <Input placeholder="Search by project name" />
          <SortDropDown />
        </div>
        <NewProjectDialog />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </main>
  );
}
