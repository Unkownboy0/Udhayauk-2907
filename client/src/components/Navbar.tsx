import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2" data-testid="link-logo">
            <Moon className="w-6 h-6 text-foreground" />
            <span className="font-bold text-lg">Karthithehacker</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors" data-testid="link-home">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors" data-testid="link-about">
              About Me
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors" data-testid="link-services">
              Services
            </a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors" data-testid="link-courses">
              Courses
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors" data-testid="link-portfolio">
              Portfolio
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors" data-testid="link-testimonials">
              Testimonials
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button
              className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-6"
              data-testid="button-blogs"
            >
              Blogs | Write-ups
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
