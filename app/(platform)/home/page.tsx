import ProjectCard from "./_components/project-card";
import { Input } from "@/components/ui/input";
import { SortDropDown } from "./_components/sort-dropdown";
import { NewProjectDialog } from "./_components/new-project-dialog";

const projectData = [
  { title: "Dog track", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 2", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
  { title: "Dog track 3", owner: "Olivia Rhye", location: "New York" },
];

export default function Home() {
  return (
    <main className="flex flex-col p-6 gap-6">
      <div className="flex justify-between">
        <div className="flex flex-1 gap-3 md:max-w-lg">
          <Input placeholder="Search by project name" />
          <SortDropDown />
        </div>
        <NewProjectDialog />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projectData.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            owner={project.owner}
            location={project.location}
          />
        ))}
      </div>
    </main>
  );
}
