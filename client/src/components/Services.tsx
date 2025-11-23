import { Shield, Code, Smartphone, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import type { Service } from "@shared/schema";

const iconMap = {
  shield: <Shield className="w-12 h-12 text-primary" />,
  code: <Code className="w-12 h-12 text-cyan" />,
  smartphone: <Smartphone className="w-12 h-12 text-primary" />,
  cpu: <Cpu className="w-12 h-12 text-cyan" />,
};

export function Services() {
  const { data: services, isLoading, error } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <section id="services" className="py-24 bg-background/50" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
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
      <section id="services" className="py-24 bg-background/50" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load services. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-24 bg-background/50" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="p-8 hover:scale-[1.02] transition-transform duration-300 hover-elevate border-card-border"
              data-testid={`card-service-${index}`}
            >
              <div className="mb-6">{iconMap[service.icon as keyof typeof iconMap]}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
