import { MarkerPin01, User01 } from "@/app/_components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({
  title,
  owner,
  location,
}: {
  title: string;
  owner: string;
  location: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 text-muted-foreground">
          <div className="flex gap-2">
            <User01 />
            <span>{owner}</span>
          </div>
          <div className="flex gap-2">
            <MarkerPin01 />
            <span>{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
