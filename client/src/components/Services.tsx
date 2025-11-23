import { Shield, Code, Smartphone, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import type { Service } from "@shared/schema";

const iconMap = {
  shield: <Shield className="w-12 h-12 text-red-500" />,
  code: <Code className="w-12 h-12 text-blue-500" />,
  smartphone: <Smartphone className="w-12 h-12 text-purple-500" />,
  cpu: <Cpu className="w-12 h-12 text-cyan-500" />,
};

const colorMap: Record<string, { bg: string; border: string }> = {
  shield: {
    bg: "bg-gradient-to-br from-red-900/20 to-red-800/10",
    border: "border-red-500/30",
  },
  code: {
    bg: "bg-gradient-to-br from-blue-900/20 to-blue-800/10",
    border: "border-blue-500/30",
  },
  smartphone: {
    bg: "bg-gradient-to-br from-purple-900/20 to-purple-800/10",
    border: "border-purple-500/30",
  },
  cpu: {
    bg: "bg-gradient-to-br from-cyan-900/20 to-cyan-800/10",
    border: "border-cyan-500/30",
  },
};

export function Services() {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <section id="services" className="py-12 sm:py-16 lg:py-24 bg-background/50" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-8">
                <Skeleton className="w-12 h-12 mb-6" />
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-24 w-full" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !services) {
    return (
      <section id="services" className="py-12 sm:py-16 lg:py-24 bg-background/50" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <p className="text-sm sm:text-base text-muted-foreground">Failed to load services. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-background/50" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">Services</h2>
          <div className="w-20 sm:w-32 h-1 bg-cyan mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 animate-in fade-in duration-700">
          {services.map((service, index) => {
            const colors = colorMap[service.icon as keyof typeof colorMap] || colorMap.shield;
            return (
              <Card
                key={service.id}
                className={`p-4 sm:p-6 lg:p-8 hover:scale-[1.02] transition-all duration-300 hover-elevate border ${colors.border} ${colors.bg} animate-in fade-in slide-in-from-bottom`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
                data-testid={`card-service-${index}`}
              >
                <div className="mb-4 sm:mb-6">{iconMap[service.icon as keyof typeof iconMap]}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-foreground">{service.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
