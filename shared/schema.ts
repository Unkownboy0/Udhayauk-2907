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

// Contact Form
export const contactFormSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(5, "Phone must be at least 5 characters"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  courseInterest: z.string().optional(),
  createdAt: z.string().optional(),
});

export const contactFormInsertSchema = contactFormSchema.omit({ id: true, createdAt: true });
export type ContactForm = z.infer<typeof contactFormSchema>;
export type ContactFormInsert = z.infer<typeof contactFormInsertSchema>;

// Blog Post
export const blogPostSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  excerpt: z.string(),
  author: z.string(),
  image: z.string().optional(),
  tags: z.array(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type BlogPost = z.infer<typeof blogPostSchema>;
