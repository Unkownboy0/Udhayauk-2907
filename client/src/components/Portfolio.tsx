import { useState, useEffect } from "react";
import { Code2, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GitHubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

export function Portfolio() {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Unkownboy0/repos?sort=stars&per_page=12");
        const data = await response.json();
        const filteredProjects = data.filter((project: GitHubProject) => project.description);
        setProjects(filteredProjects.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch GitHub projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-background" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2">
            <Code2 className="w-5 h-5 text-cyan" />
            <span className="text-sm font-semibold">GitHub Projects</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">10</h3>
              <p className="text-sm text-muted-foreground">Years Of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">70+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">1000+</h3>
              <p className="text-sm text-muted-foreground">Happy Client/Students</p>
            </div>
          </div>

          <Button 
            variant="default" 
            className="rounded-full bg-cyan hover:bg-cyan/90 text-background"
            size="sm"
          >
            ✓ Project Done
          </Button>
        </div>

        {/* Portfolio Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-cyan mx-auto" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          ) : (
            projects.map((project) => (
              <a
                key={project.id}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
                data-testid={`card-portfolio-${project.id}`}
              >
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
