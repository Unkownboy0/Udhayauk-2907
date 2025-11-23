import { z } from "zod";

// Portfolio Item
export const portfolioItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  image: z.string(),
  category: z.enum(["hardware tool", "social engineering tool", "osint", "web security tool"]),
  link: z.string().optional(),
});

export type PortfolioItem = z.infer<typeof portfolioItemSchema>;

// Service
export const serviceSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

export type Service = z.infer<typeof serviceSchema>;

// Testimonial
export const testimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  rating: z.number().min(1).max(5),
  text: z.string(),
});

export type Testimonial = z.infer<typeof testimonialSchema>;

// Timeline Event
export const timelineEventSchema = z.object({
  id: z.string(),
  number: z.string(),
  title: z.string(),
  date: z.string(),
  participants: z.string(),
});

export type TimelineEvent = z.infer<typeof timelineEventSchema>;

// Course
export const courseSchema = z.object({
  id: z.string(),
  title: z.string(),
  image: z.string(),
  link: z.string(),
});

export type Course = z.infer<typeof courseSchema>;

// Tech Logo for carousel
export const techLogoSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
});

export type TechLogo = z.infer<typeof techLogoSchema>;

// Stats
export const statsSchema = z.object({
  experience: z.string(),
  projects: z.string(),
  completed: z.string(),
  clients: z.string(),
});

export type Stats = z.infer<typeof statsSchema>;

// Bug Report Company Logo
export const bugReportLogoSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
});

export type BugReportLogo = z.infer<typeof bugReportLogoSchema>;
