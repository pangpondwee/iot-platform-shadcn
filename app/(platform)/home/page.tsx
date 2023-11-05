"use client";
import ProjectCard from "./_components/project-card";
import { SearchInput } from "@/components/ui/input";
import { SortDropDown } from "./_components/sort-dropdown";
import { Suspense } from "react";
import LoadingSkeleton from "./_components/loading-skeleton";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchProject } from "@/app/_api/fetchProject";

export default function Home() {
  const { data: projectData } = useSuspenseQuery({
    queryKey: ["projectData"],
    queryFn: fetchProject,
  });
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
        <Suspense fallback={<LoadingSkeleton />}>
          {projectData?.map(
            (project: { name: string; owner: string; location: string }) => (
              <ProjectCard
                key={project.name}
                title={project.name}
                owner={project.owner}
                location={project.location}
              />
            ),
          )}
        </Suspense>
      </div>
    </main>
  );
}
