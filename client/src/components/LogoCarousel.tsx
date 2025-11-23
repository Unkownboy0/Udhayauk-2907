import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { TechLogo } from "@shared/schema";

export function LogoCarousel() {
  const { data: logos, isLoading, error } = useQuery<TechLogo[]>({
    queryKey: ["/api/tech-logos"],
  });

  if (isLoading) {
    return (
      <section className="py-12 bg-background/50 border-y border-border" data-testid="section-logo-carousel">
        <div className="flex gap-12 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="flex-shrink-0 w-32 h-20" />
          ))}
        </div>
      </section>
    );
  }

  if (error || !logos) {
    return (
      <section className="py-12 bg-background/50 border-y border-border" data-testid="section-logo-carousel">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">Failed to load technology logos.</p>
        </div>
      </section>
    );
  }

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-12 bg-background/50 border-y border-border overflow-hidden" data-testid="section-logo-carousel">
      <div className="relative">
        <div className="flex gap-12 animate-scroll-left">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              data-testid={`logo-${logo.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
