import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import type { PortfolioItem } from "@shared/schema";

export function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const { data: portfolioItems, isLoading, error } = useQuery<PortfolioItem[]>({
    queryKey: ["/api/portfolio"],
  });

  const categories = ["all", "hardware tool", "social engineering tool", "osint", "web security tool"];

  const filteredItems = !portfolioItems ? [] : activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  if (isLoading) {
    return (
      <section id="portfolio" className="py-24 bg-background" data-testid="section-portfolio">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Portfolio</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <Skeleton className="aspect-video w-full" />
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="portfolio" className="py-24 bg-background" data-testid="section-portfolio">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load portfolio items.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-24 bg-background" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Portfolio</h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full justify-start flex-wrap h-auto gap-2 bg-transparent mb-12" data-testid="tabs-portfolio-filter">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-2 capitalize"
                data-testid={`tab-${category.replace(/\s+/g, '-')}`}
              >
                {category === "all" ? "All Projects" : category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              data-testid={`card-portfolio-${item.id}`}
            >
              <Card className="overflow-hidden hover:scale-[1.02] transition-all duration-300 border-card-border hover-elevate">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
