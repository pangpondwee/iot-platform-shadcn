import ProjectCard from "./project-card";

const skeletonCount = 9;
const loadingSkeletons = Array.from(
  { length: skeletonCount },
  (_, index) => index + 1,
);

export default function LoadingSkeleton() {
  return loadingSkeletons.map((skeleton) => (
    <ProjectCard key={skeleton} loading={true} />
  ));
}
