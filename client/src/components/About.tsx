import { Clock, CheckCircle, Users, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/staticData";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    experience: parseInt(stats.experience),
    projects: parseInt(stats.projects),
    completed: parseInt(stats.completed),
    clients: parseInt(stats.clients),
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
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const targets = {
      experience: parseInt(stats.experience),
      projects: parseInt(stats.projects),
      completed: parseInt(stats.completed),
      clients: parseInt(stats.clients),
    };

    // Start from 0 for animation
    setCounts({
      experience: 0,
      projects: 0,
      completed: 0,
      clients: 0,
    });

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
  }, [isVisible]);

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
          <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all duration-500 transform animate-stat-card" style={{animationDelay: '0ms'}} data-testid="stat-experience">
            <Clock className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 text-primary animate-icon" />
            <div className="text-3xl sm:text-5xl font-extrabold text-primary mb-1 sm:mb-2">{counts ? String(counts.experience).padStart(2, '0') : '00'}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Years of Experience</div>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all duration-500 transform animate-stat-card" style={{animationDelay: '100ms'}} data-testid="stat-projects">
            <Briefcase className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 text-cyan animate-icon" />
            <div className="text-3xl sm:text-5xl font-extrabold text-cyan mb-1 sm:mb-2">{counts ? counts.projects : 0}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">In Time Projects</div>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all duration-500 transform animate-stat-card" style={{animationDelay: '200ms'}} data-testid="stat-completed">
            <CheckCircle className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 text-primary animate-icon" />
            <div className="text-3xl sm:text-5xl font-extrabold text-primary mb-1 sm:mb-2">{counts ? counts.completed : 0}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</div>
          </div>

          <div className="text-center p-4 sm:p-6 rounded-xl bg-card border border-card-border hover-elevate transition-all duration-500 transform animate-stat-card" style={{animationDelay: '300ms'}} data-testid="stat-clients">
            <Users className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 sm:mb-4 text-cyan animate-icon" />
            <div className="text-3xl sm:text-5xl font-extrabold text-cyan mb-1 sm:mb-2">{counts ? counts.clients : 0}+</div>
            <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Happy Clients/Students</div>
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-4xl mx-auto text-center animate-in fade-in duration-700 space-y-4">
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            I'm <strong className="text-foreground font-semibold">Udhayakumar</strong>, a Cybersecurity Researcher, Investigator, and Educator based in Erode, India. 
            I lead <strong className="text-primary font-semibold">Geetorus</strong>, a cybersecurity consulting firm focused on discovering vulnerabilities, preventing cyber attacks, and 
            strengthening digital systems across multiple platforms including web, mobile, networks, and cloud environments. 
            My work revolves around securing organizations and users from real-world threats through proactive defense and continuous research.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            With hands-on experience in ethical hacking, penetration testing, and digital forensics, 
            I design and develop custom security tools and implement modern protection strategies for businesses and individuals. 
            I believe that cybersecurity is not just about fixing weaknesses—it's about building systems that can withstand evolving threats.
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Alongside my consulting work, I have trained over <strong className="text-cyan font-semibold">700+ students</strong> across India through workshops, seminars,  
            and cyber awareness programs. I focus on practical skill development, helping the next generation of cybersecurity 
            professionals prepare for real-world challenges. My mission is to secure digital experiences and empower others to 
            become protectors of the cyber world.
          </p>
        </div>
      </div>
    </section>
  );
}
