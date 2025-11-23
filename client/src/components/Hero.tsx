import { Button } from "@/components/ui/button";
import { SiMedium, SiLinkedin, SiYoutube, SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { HandIcon } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
      data-testid="section-hero"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="flex items-center gap-2">
              <HandIcon className="w-8 h-8 text-cyan" />
              <span className="text-lg text-muted-foreground">
                Hi, I'm <span className="text-cyan font-semibold">Karthikeyan V</span>
              </span>
            </div>

            <div className="relative inline-block">
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
                Cybersecurity
                <br />
                Researcher and
                <br />
                Investigator
              </h1>
              {/* Animated underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-8"
                viewBox="0 0 375 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M374.5 27.0001C157 -28 15 18.1795 6.0003 21.5006C-4.49975 28.5 2.00033 32.5007 8.0003 33.5006C14.0003 34.5004 165.5 -10.9999 374.5 27.0001Z"
                  fill="#00CED1"
                />
              </svg>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              CEO of Cappricio Securities, a cybersecurity firm in Chennai, India. I specialize in ethical hacking,
              securing platforms like Android OS, Google, and Microsoft from vulnerabilities and threats.
            </p>

            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow me</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://medium.com/@karthithehacker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-medium"
                >
                  <SiMedium className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/karthithehacker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-twitter"
                >
                  <FaXTwitter className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com/karthi_the_hacker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-instagram"
                >
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/karthikeyan--v/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://youtube.com/@karthi_the_hacker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-2 rounded-lg transition-all"
                  data-testid="link-youtube"
                >
                  <SiYoutube className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                data-testid="button-roadmaps"
              >
                Roadmaps
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/api/resume';
                  link.download = 'Karthikeyan_V_Resume.pdf';
                  link.click();
                }}
                data-testid="button-download-resume"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image with Floating Icons */}
          <div className="relative flex justify-center items-center animate-in fade-in slide-in-from-right duration-700 delay-300">
            <div className="relative">
              {/* Profile Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-cyan/20 flex items-center justify-center">
                  <div className="w-full h-full bg-muted/10 rounded-full" />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float">
                <div className="w-8 h-8 bg-primary/20 rounded-lg" />
              </div>
              <div className="absolute top-1/4 -left-6 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-100">
                <div className="w-7 h-7 bg-cyan/20 rounded-lg" />
              </div>
              <div className="absolute bottom-1/4 -right-8 w-14 h-14 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-200">
                <div className="w-7 h-7 bg-primary/20 rounded-lg" />
              </div>
              <div className="absolute -bottom-6 left-1/4 w-16 h-16 bg-card border border-border rounded-2xl flex items-center justify-center shadow-lg animate-float delay-300">
                <div className="w-8 h-8 bg-cyan/20 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
