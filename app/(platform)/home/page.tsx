"use client";
import { SearchInput } from "@/components/ui/input";
import { SortDropDown } from "./_components/sort-dropdown";
import { Suspense } from "react";
import { LoadingSkeleton } from "./_components/project-card-container";
import ProjectCardContainer from "./_components/project-card-container";

export default function Home() {
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
          <ProjectCardContainer />
        </Suspense>
      </div>
    </main>
  );
}
