import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar while scrolling
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Show navbar when scrolling stops (after 150ms of no scroll)
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 150);

      setScrollTimeout(timeout);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-center">
            <a href="#home" onClick={closeMenu} className="text-foreground hover:text-cyan transition-colors font-medium" data-testid="link-home">
              Home
            </a>
            <a href="#about" onClick={closeMenu} className="text-foreground hover:text-cyan transition-colors font-medium underline" data-testid="link-about">
              About Me
            </a>
            <a href="#services" onClick={closeMenu} className="text-foreground hover:text-cyan transition-colors font-medium" data-testid="link-services">
              Services
            </a>
            <a href="#portfolio" onClick={closeMenu} className="text-foreground hover:text-cyan transition-colors font-medium" data-testid="link-portfolio">
              Portfolio
            </a>
            <a href="#testimonials" onClick={closeMenu} className="text-foreground hover:text-cyan transition-colors font-medium" data-testid="link-testimonials">
              Testimonials
            </a>
            <a href="#contact" onClick={closeMenu} className="text-foreground hover:text-cyan transition-colors font-medium" data-testid="link-contact">
              Contact
            </a>
          </div>

          {/* Mobile Hamburger Menu - visible only on small screens */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-full"
              data-testid="button-hamburger"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/90 backdrop-blur-lg border-b border-border/50 py-4 space-y-2" data-testid="mobile-menu">
            <a href="#home" onClick={closeMenu} className="block px-6 py-2 text-foreground hover:text-cyan hover:bg-background transition-colors font-medium" data-testid="mobile-link-home">
              Home
            </a>
            <a href="#about" onClick={closeMenu} className="block px-6 py-2 text-foreground hover:text-cyan hover:bg-background transition-colors font-medium" data-testid="mobile-link-about">
              About Me
            </a>
            <a href="#services" onClick={closeMenu} className="block px-6 py-2 text-foreground hover:text-cyan hover:bg-background transition-colors font-medium" data-testid="mobile-link-services">
              Services
            </a>
            <a href="#portfolio" onClick={closeMenu} className="block px-6 py-2 text-foreground hover:text-cyan hover:bg-background transition-colors font-medium" data-testid="mobile-link-portfolio">
              Portfolio
            </a>
            <a href="#testimonials" onClick={closeMenu} className="block px-6 py-2 text-foreground hover:text-cyan hover:bg-background transition-colors font-medium" data-testid="mobile-link-testimonials">
              Testimonials
            </a>
            <a href="#contact" onClick={closeMenu} className="block px-6 py-2 text-foreground hover:text-cyan hover:bg-background transition-colors font-medium" data-testid="mobile-link-contact">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
