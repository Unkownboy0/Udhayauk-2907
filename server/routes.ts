import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { readFileSync } from "fs";
import { join } from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Portfolio endpoints
  app.get("/api/portfolio", async (req, res) => {
    try {
      const items = await storage.getPortfolioItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio items" });
    }
  });

  app.get("/api/portfolio/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const items = await storage.getPortfolioItemsByCategory(category);
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch portfolio items by category" });
    }
  });

  // Services endpoint
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  // Testimonials endpoint
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Timeline endpoint
  app.get("/api/timeline", async (req, res) => {
    try {
      const events = await storage.getTimelineEvents();
      res.json(events);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch timeline events" });
    }
  });

  // Courses endpoint
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await storage.getCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch courses" });
    }
  });

  // Tech Logos endpoint
  app.get("/api/tech-logos", async (req, res) => {
    try {
      const logos = await storage.getTechLogos();
      res.json(logos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tech logos" });
    }
  });

  // Bug Report Logos endpoint
  app.get("/api/bug-reports", async (req, res) => {
    try {
      const logos = await storage.getBugReportLogos();
      res.json(logos);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bug report logos" });
    }
  });

  // Stats endpoint
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch stats" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    try {
      const resumeContent = `UDHAYAKUMAR
Cybersecurity Researcher & Investigator
Chennai, India
Phone: +91-827-091-3635
Email: contact@udhayakumar.com

PROFESSIONAL SUMMARY
CEO of Cappricio Securities, specializing in cybersecurity research and penetration testing.
Published researcher with focus on web security, mobile app vulnerabilities, and IoT security.

EXPERTISE
- Web Vulnerability Assessment & Penetration Testing (VAPT)
- Mobile App Security Testing (iOS & Android)
- IoT & Robotics Security
- Cybersecurity Tool Development
- Android OS Security Research
- Server-Side Bug Hunting

ACHIEVEMENTS
- 10+ Years of Professional Experience
- 70+ Active Security Projects
- 1000+ Security Vulnerabilities Discovered
- 1000+ Students & Professionals Trained
- Multiple CVE Discoveries in Major Tech Companies
- \$5,000 Android OS Bug Bounty Award (2020)
- Featured in Google Hall of Fame

RECOGNITION & CERTIFICATIONS
- Google Security Researcher Hall of Fame
- Android Security Research Contributor
- Microsoft Security Researcher Program
- Published Cybersecurity Researcher
- CEO - Cappricio Securities

TOOLS & TECHNOLOGIES
- Burp Suite | Metasploit | Nmap | Wireshark
- JADX | IDA Pro | Frida | Charles Proxy
- Android Studio | Xcode | Python | JavaScript
- Docker | Kubernetes | Linux | Windows

EDUCATION & TRAINING
- Advanced Penetration Testing Training
- Mobile Application Security Specialist
- IoT Security Certification
- Cybercrime Investigation Specialist

LANGUAGES
- English (Fluent)
- Tamil (Native)

FOLLOW ME
GitHub: github.com/udhayakumar
Twitter: @udhayakumar
LinkedIn: linkedin.com/in/udhayakumar/
Medium: medium.com/@udhayakumar
YouTube: youtube.com/@udhayakumar
Instagram: instagram.com/udhayakumar`;
      
      res.setHeader("Content-Type", "text/plain");
      res.setHeader("Content-Disposition", "attachment; filename=Udhayakumar_Resume.txt");
      res.send(resumeContent);
    } catch (error) {
      res.status(500).json({ error: "Failed to download resume" });
    }
  });

  // Export portfolio as JSON
  app.get("/api/export/portfolio", async (req, res) => {
    try {
      const portfolioItems = await storage.getPortfolioItems();
      res.setHeader("Content-Type", "application/json");
      res.setHeader("Content-Disposition", "attachment; filename=portfolio.json");
      res.json(portfolioItems);
    } catch (error) {
      res.status(500).json({ error: "Failed to export portfolio" });
    }
  });

  // Contact Form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const data = req.body;
      const contact = await storage.createContactForm(data);
      res.json(contact);
    } catch (error) {
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
