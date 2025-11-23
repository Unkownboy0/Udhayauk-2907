import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { BugReportLogo } from "@shared/schema";

export function BugReports() {
  const { data: companies, isLoading, error } = useQuery<BugReportLogo[]>({
    queryKey: ["/api/bug-reports"],
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-background/50 overflow-hidden" data-testid="section-bug-reports">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Bug Reports / Hall of Fame</h2>
          </div>
          <div className="flex gap-12 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className="flex-shrink-0 w-32 h-24" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !companies) {
    return (
      <section className="py-24 bg-background/50 overflow-hidden" data-testid="section-bug-reports">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load bug report logos.</p>
          </div>
        </div>
      </section>
    );
  }

  // Duplicate for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-24 bg-background/50 overflow-hidden" data-testid="section-bug-reports">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold mb-2">Bug Reports for Top Brands</h3>
        </div>

        {/* First Row - Scroll Left */}
        <div className="relative mb-8">
          <div className="flex gap-12 animate-scroll-left">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}-row1`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
                data-testid={`logo-company-${company.name.toLowerCase().replace(/\s+/g, '-')}-${index}`}
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Scroll Right */}
        <div className="relative">
          <div className="flex gap-12 animate-scroll-right">
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}-row2`}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
