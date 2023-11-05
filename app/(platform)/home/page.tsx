"use client";
import { SearchInput } from "@/components/ui/input";
import { SortDropDown } from "./_components/sort-dropdown";
import { useSuspenseQuery } from "@tanstack/react-query";
import ProjectCard from "./_components/project-card";
import { fetchProject } from "@/app/_api/fetchProject";

// function mockApi() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         {
//           _id: "654505149fdd5b233c3c35c2",
//           name: "Boat track 2",
//           owner: "Withawat T",
//           location: "Bangkok",
//           imgUrl: "sadaddasdasdliscliisclasCASFsPAOfhas",
//         },
//         {
//           _id: "6547495608e26a89b5a62f33",
//           name: "Boat track 1",
//           owner: "Anan",
//           location: "Songkhla",
//           imgUrl: "sadaddasdasdliscliisclasCAS22FsPAOfhas",
//         },
//       ]);
//     }, 5000);
//   });
// }

type project = {
  _id: string;
  name: string;
  owner: string;
  location: string;
  imgUrl: string;
};

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
        {(projectData as project[]).map((project) => (
          <ProjectCard
            key={project._id}
            title={project.name}
            owner={project.owner}
            location={project.location}
          />
        ))}
      </div>
    </main>
  );
}
