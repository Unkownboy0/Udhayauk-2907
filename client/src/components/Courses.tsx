import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import type { Course } from "@shared/schema";

export function Courses() {
  const { data: courses, isLoading, error } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
  });

  if (isLoading) {
    return (
      <section id="courses" className="py-24 bg-background" data-testid="section-courses">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="aspect-video w-full" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !courses) {
    return (
      <section id="courses" className="py-24 bg-background" data-testid="section-courses">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load courses.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-24 bg-background" data-testid="section-courses">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-8">
          {courses?.map((course) => (
            <a
              key={course.id}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              data-testid={`card-course-${course.id}`}
            >
              <Card className="overflow-hidden hover:scale-[1.02] transition-all duration-300 border-card-border hover-elevate">
                <div className="aspect-video relative overflow-hidden">
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
