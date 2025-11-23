import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/LogoCarousel";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { BugReports } from "@/components/BugReports";
import { Courses } from "@/components/Courses";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <About />
      <Services />
      <Portfolio />
      <BugReports />
      <Courses />
      <Timeline />
      <Testimonials />
      <Footer />
    </div>
  );
}
