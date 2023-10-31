import { MarkerPin01, User01 } from "@/app/_components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <User01 />
            <span className="text-secondary-foreground">{owner}</span>
          </div>
          <div className="flex gap-2">
            <MarkerPin01 />
            <span className="text-secondary-foreground">{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
