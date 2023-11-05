import { useSuspenseQuery } from "@tanstack/react-query";
import ProjectCard from "./project-card";

const skeletonCount = 3;
const loadingSkeletons = Array.from(
  { length: skeletonCount },
  (_, index) => index + 1,
);

function mockApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          _id: "654505149fdd5b233c3c35c2",
          name: "Boat track 2",
          owner: "Withawat T",
          location: "Bangkok",
          imgUrl: "sadaddasdasdliscliisclasCASFsPAOfhas",
        },
        {
          _id: "6547495608e26a89b5a62f33",
          name: "Boat track 1",
          owner: "Anan",
          location: "Songkhla",
          imgUrl: "sadaddasdasdliscliisclasCAS22FsPAOfhas",
        },
      ]);
    }, 5000);
  });
}

type project = {
  _id: string;
  name: string;
  owner: string;
  location: string;
  imgUrl: string;
};

export default function ProjectCardContainer() {
  const { data: projectData } = useSuspenseQuery({
    queryKey: ["projectData"],
    queryFn: mockApi,
  });
  return (
    <>
      {(projectData as project[]).map((project) => (
        <ProjectCard
          key={project._id}
          title={project.name}
          owner={project.owner}
          location={project.location}
        />
      ))}
    </>
  );
}

export function LoadingSkeleton() {
  return loadingSkeletons.map((skeleton) => (
    <ProjectCard key={skeleton} loading={true} />
  ));
}
