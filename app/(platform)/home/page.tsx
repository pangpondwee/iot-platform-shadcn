"use client";
import ProjectCard from "./_components/project-card";
import { Input, SearchInput } from "@/components/ui/input";
import { SortDropDown } from "./_components/sort-dropdown";
import { NewProjectDialog } from "./_components/new-project-dialog";
import { useState } from "react";

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
  const [loading, setLoading] = useState(false);
  return (
    <main className="flex flex-col gap-6 p-6">
      <div className="flex justify-between gap-3">
        <SearchInput
          className="sm:w-[400px]"
          placeholder="Search by project name"
        />
        <SortDropDown />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {loading ? (
          <ProjectCard loading={loading} />
        ) : (
          projectData.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              owner={project.owner}
              location={project.location}
            />
          ))
        )}
      </div>
    </main>
  );
}
