import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin, User } from "lucide-react";

export default function ProjectCard({
  title,
  owner,
  location,
  loading,
}: {
  title?: string;
  owner?: string;
  location?: string;
  loading?: boolean;
}) {
  if (loading)
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-7 w-40 rounded-full" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 text-muted-foreground">
            <div className="flex gap-2">
              <Skeleton className="h-6 w-60 rounded-full" />
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-6 w-60 rounded-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  else {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 text-muted-foreground">
            <div className="flex gap-2">
              <User />
              <span>{owner}</span>
            </div>
            <div className="flex gap-2">
              <MapPin />
              <span>{location}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
