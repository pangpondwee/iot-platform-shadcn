import { SearchInput } from "@/components/ui/input";
import { SortDropDown } from "../../../components/molecules/project-sort-dropdown";
import ProjectCard from "../../../components/molecules/project-card";
import { fetchProject } from "@/app/_api/fetchProject";

type project = {
  _id: string;
  name: string;
  owner: string;
  location: string;
  imgUrl: string;
};

export default async function Home() {
  const data = await fetchProject();
  console.log(data);
  return (
    <>
      <div className="flex justify-between gap-3">
        <SearchInput
          className="sm:w-[400px]"
          placeholder="Search by project name"
        />
        <SortDropDown />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {(data as project[]).map((project) => (
          <ProjectCard
            key={project._id}
            title={project.name}
            owner={project.owner}
            location={project.location}
          />
        ))}
      </div>
    </>
  );
}
