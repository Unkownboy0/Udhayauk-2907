import { useState, useEffect } from "react";
import { Code2, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
        // Fetch from multiple GitHub users - Unkownboy0 (with typo) and geetorus
        const urls = [
          "https://api.github.com/users/Unkownboy0/repos?sort=stars&per_page=20",
          "https://api.github.com/users/geetorus/repos?sort=stars&per_page=20"
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)));
        
        const data: GitHubProject[] = [];
        for (const response of responses) {
          if (!response.ok) {
            console.warn("GitHub API error:", response.status, response.statusText);
            continue;
          }
          const json = await response.json();
          // Check for GitHub API error messages
          if (Array.isArray(json)) {
            data.push(...json);
          }
        }

        // Filter projects with descriptions
        const filteredProjects = data.filter(
          (project: GitHubProject) => project.description && project.description.length > 0
        );

        // Remove duplicates by name
        const uniqueProjects = Array.from(
          new Map(filteredProjects.map(p => [p.name.toLowerCase(), p])).values()
        );

        // Sort by stars and take top 6
        const sortedProjects = uniqueProjects
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        
        setProjects(sortedProjects);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 gap-4 sm:gap-8">
          <div className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2">
            <Code2 className="w-5 h-5 text-cyan" />
            <span className="text-sm font-semibold">GitHub Projects</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">03+</h3>
              <p className="text-sm text-muted-foreground">Years Of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">70+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-primary">700+</h3>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {loading ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">Loading projects...</p>
            </div>
          ) : projects.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground">No projects found.</p>
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
                <Card className="p-4 sm:p-6 h-full hover:scale-[1.02] transition-all duration-300 hover-elevate border-border bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Github className="w-5 h-5 text-cyan flex-shrink-0" />
                      <h3 className="text-lg sm:text-xl font-bold text-foreground line-clamp-2 group-hover:text-cyan transition-colors">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/70 line-clamp-3 mb-4 leading-relaxed">
                    {project.description || "No description available"}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                      {project.language && (
                        <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded">
                          {project.language}
                        </span>
                      )}
                    </div>
                    {project.stargazers_count > 0 && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span>{project.stargazers_count}</span>
                      </div>
                    )}
                  </div>
                </Card>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
