import { Clock, CheckCircle, Users, Briefcase } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Stats } from "@shared/schema";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    completed: 0,
    clients: 0,
  });

  const { data: stats, isLoading, error } = useQuery<Stats>({
    queryKey: ["/api/stats"],
  });

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || !stats) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      experience: parseInt(stats.experience),
      projects: parseInt(stats.projects),
      completed: parseInt(stats.completed),
      clients: parseInt(stats.clients),
    };

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        experience: Math.floor(targets.experience * progress),
        projects: Math.floor(targets.projects * progress),
        completed: Math.floor(targets.completed * progress),
        clients: Math.floor(targets.clients * progress),
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(targets);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible, stats]);

  if (isLoading) {
    return (
      <section id="about" className="py-12 sm:py-16 lg:py-24 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">About me</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center p-6">
                <Skeleton className="w-12 h-12 mx-auto mb-4" />
                <Skeleton className="h-12 w-24 mx-auto mb-2" />
                <Skeleton className="h-4 w-32 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !stats) {
    return (
      <section id="about" className="py-12 sm:py-16 lg:py-24 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <p className="text-sm sm:text-base text-muted-foreground">Failed to load stats.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-background" data-testid="section-about" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4">
            About me
            <svg
              className="inline-block ml-2 sm:ml-4 w-12 sm:w-16 h-6 sm:h-8"
              viewBox="0 0 100 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15C20 5 40 8 60 12C80 16 95 10 95 10"
                stroke="#00CED1"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all duration-500 transform" data-testid="stat-experience">
            <Clock className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 text-primary" />
            <div className="text-3xl sm:text-5xl font-extrabold text-primary mb-1 sm:mb-2">{isVisible ? counts.experience : 0}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Years of Experience</div>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all duration-500 transform" data-testid="stat-projects">
            <Briefcase className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 text-cyan" />
            <div className="text-3xl sm:text-5xl font-extrabold text-cyan mb-1 sm:mb-2">{isVisible ? counts.projects : 0}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">In Time Projects</div>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all duration-500 transform" data-testid="stat-completed">
            <CheckCircle className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 text-primary" />
            <div className="text-3xl sm:text-5xl font-extrabold text-primary mb-1 sm:mb-2">{isVisible ? counts.completed : 0}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</div>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all duration-500 transform" data-testid="stat-clients">
            <Users className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 text-cyan" />
            <div className="text-3xl sm:text-5xl font-extrabold text-cyan mb-1 sm:mb-2">{isVisible ? counts.clients : 0}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Happy Clients/Students</div>
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto text-center animate-in fade-in duration-700">
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            I'm Karthikeyan, a <span className="text-foreground font-semibold">Cybersecurity Researcher, Investigator, and Educator</span> based in Chennai, India. 
            I lead <span className="text-primary font-semibold">Cappricio Securities</span>, a cybersecurity consulting firm focused on discovering and 
            securing vulnerabilities across various platforms. With hands-on experience securing major platforms like Android OS, Google, Microsoft, Facebook, 
            Snapchat, and Upwork, my mission extends beyond just finding weaknesses—I work to fortify these systems against potential cyber threats.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed mt-4 sm:mt-6">
            In addition to my consulting work, I have trained over <span className="text-cyan font-semibold">25,000 students</span> across India, 
            equipping the next generation with practical cybersecurity skills and knowledge to tackle real-world challenges. My goal is to make your 
            digital experience safe from malicious actors and empower others to do the same.
          </p>
        </div>
      </div>
    </section>
  );
}
