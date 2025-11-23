import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import type { TimelineEvent } from "@shared/schema";

export function Timeline() {
  const { data: events, isLoading, error } = useQuery<TimelineEvent[]>({
    queryKey: ["/api/timeline"],
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-background/50" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Time Line</h2>
            <p className="text-muted-foreground">Short description about the talk or the awareness programs</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-8">
                <Skeleton className="w-16 h-16 rounded-full" />
                <Skeleton className="h-24 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !events) {
    return (
      <section className="py-24 bg-background/50" data-testid="section-timeline">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load timeline events.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-background/50" data-testid="section-timeline">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Time Line</h2>
          <p className="text-muted-foreground">Short description about the talk or the awareness programs</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary hidden lg:block" />

          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.number}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                data-testid={`timeline-event-${index}`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <Card className="p-6 inline-block hover-elevate border-card-border">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-1">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.participants}</p>
                  </Card>
                </div>

                {/* Number Badge */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold relative z-10">
                  {event.number}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
