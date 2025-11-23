import {
  type PortfolioItem,
  type Service,
  type Testimonial,
  type TimelineEvent,
  type Course,
  type TechLogo,
  type Stats,
  type BugReportLogo,
  type ContactForm,
  type ContactFormInsert,
} from "@shared/schema";

export interface IStorage {
  // Portfolio
  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]>;
  
  // Services
  getServices(): Promise<Service[]>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  
  // Timeline
  getTimelineEvents(): Promise<TimelineEvent[]>;
  
  // Courses
  getCourses(): Promise<Course[]>;
  
  // Tech Logos
  getTechLogos(): Promise<TechLogo[]>;
  
  // Bug Report Logos
  getBugReportLogos(): Promise<BugReportLogo[]>;
  
  // Stats
  getStats(): Promise<Stats>;
  
  // Contact Forms
  createContactForm(data: ContactFormInsert): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
}

export class MemStorage implements IStorage {
  private portfolioItems: PortfolioItem[];
  private services: Service[];
  private testimonials: Testimonial[];
  private timelineEvents: TimelineEvent[];
  private courses: Course[];
  private techLogos: TechLogo[];
  private bugReportLogos: BugReportLogo[];
  private stats: Stats;
  private contactForms: ContactForm[];

  constructor() {
    // Initialize Portfolio Items
    this.portfolioItems = [
      {
        id: "1",
        title: "HackerFi",
        description: "WiFi penetration testing tool with advanced capabilities",
        image: "https://karthithehacker.com/assets/9-CaIACm3I.gif",
        category: "hardware tool",
        link: "https://api.whatsapp.com/send/?phone=%2B918270913635&text=Can%20I%20get%20more%20details%20about%20the%20HackerFi?",
      },
      {
        id: "2",
        title: "PicoDucky",
        description: "USB Rubber Ducky alternative for HID attacks",
        image: "https://karthithehacker.com/assets/11-DZxF6neC.gif",
        category: "hardware tool",
        link: "https://api.whatsapp.com/send/?phone=%2B918270913635&text=Can%20I%20get%20more%20details%20about%20the%20PicoDucky?",
      },
      {
        id: "3",
        title: "SpyBot",
        description: "Reconnaissance robot for security testing",
        image: "https://karthithehacker.com/assets/12-c9-0P8xY.gif",
        category: "hardware tool",
        link: "https://api.whatsapp.com/send/?phone=%2B918270913635&text=Can%20I%20get%20more%20details%20about%20the%20SpyBot?",
      },
    ];

    // Initialize Services
    this.services = [
      {
        id: "1",
        title: "Web Security",
        description: "As a cybersecurity researcher, I specialize in Web VAPT (Vulnerability Assessment and Penetration Testing), focusing on uncovering and addressing vulnerabilities in web applications to protect against cyber threats. Most of my discoveries involve CVEs and server-side bugs.",
        icon: "shield",
      },
      {
        id: "2",
        title: "Cyber Security Tool Development",
        description: "Cybersecurity tool development, I create tools for open-source communities, corporate environments, and clients, aiming to secure applications and support red teaming efforts. Check out my GitHub for open-source projects and explore my contributions to the cybersecurity ecosystem.",
        icon: "code",
      },
      {
        id: "3",
        title: "Mobile App Pentesting",
        description: "Mobile app penetration testing is one of my specialties and a personal favorite. I've successfully identified significant vulnerabilities, including a notable bug in Android OS that earned me a $5,000 reward from the Android team in 2020.",
        icon: "smartphone",
      },
      {
        id: "4",
        title: "Robotics and IoT",
        description: "Developing futuristic robots and smart systems with IoT is one of my core skills. I'm not only focused on innovation but also on security, ensuring these systems are built to withstand cyber threats. As both a developer and an IoT penetration tester, I'm dedicated to creating secure IoT products that meet the demands of the future.",
        icon: "cpu",
      },
    ];

    // Initialize Testimonials
    this.testimonials = [
      {
        id: "1",
        name: "Arjun Singh",
        image: "https://i.ibb.co/k8TmS87/testimonial-img-1.webp",
        rating: 5,
        text: "Udhayakumar's web penetration testing workshop completely changed my perspective on cybersecurity. His hands-on approach to vulnerability discovery and ethical hacking made complex concepts incredibly easy to understand. I've already identified critical vulnerabilities in our company's infrastructure and helped secure our applications. Highly recommended!",
      },
      {
        id: "2",
        name: "Priya Sharma",
        image: "https://i.ibb.co/tDgWr8Y/testimonial-img-2.webp",
        rating: 5,
        text: "As a student with zero hacking experience, I was nervous about Geetorus's cybersecurity training. But Udhayakumar's teaching style is exceptional! The practical labs on Kali Linux, Metasploit, and penetration testing tools have given me real-world skills. I now feel confident pursuing a career in cybersecurity. Thank you for inspiring me!",
      },
      {
        id: "3",
        name: "Rajesh Kumar",
        image: "https://i.ibb.co/p1J6Zvj/testimonial-img-3.webp",
        rating: 5,
        text: "Working with Udhayakumar on our application security audit was eye-opening. His ability to identify critical vulnerabilities and propose effective mitigation strategies saved us from potential breaches. The detailed reporting and consultancy provided by Geetorus is professional and thorough. A true expert in the field!",
      },
      {
        id: "4",
        name: "Neha Patel",
        image: "https://i.ibb.co/ydpv23W/testimonial-img-4.webp",
        rating: 5,
        text: "I attended Udhayakumar's cybersecurity awareness program at our college, and it was transformative. He explained real-world cyber threats, attack vectors, and defense mechanisms in such an engaging way. Over 700 students have benefited from his workshops, and I'm proud to be one of them. Geetorus is doing incredible work!",
      },
    ];

    // Initialize Timeline Events
    this.timelineEvents = [
      {
        id: "1",
        number: "01",
        title: "Rota-TechX Hackathon",
        date: "April 12,13, 2025",
        participants: "20 Teams",
      },
      {
        id: "2",
        number: "02",
        title: "Crescent University FDP Program",
        date: "April 10, 2025",
        participants: "30+ Staffs",
      },
      {
        id: "3",
        number: "03",
        title: "St. Joseph's Institute of Technology",
        date: "March 19,20, 2025",
        participants: "50+ students",
      },
      {
        id: "4",
        number: "04",
        title: "PSG College Srishti 2K24",
        date: "October 5, 2024",
        participants: "100+ students",
      },
      {
        id: "5",
        number: "05",
        title: "Sri Venkateswaraa College of Technology",
        date: "August 21, 2024",
        participants: "100+ students",
      },
    ];

    // Initialize Courses
    this.courses = [
      {
        id: "1",
        title: "Application Security",
        image: "https://i.ibb.co/khwtHK0/appsec.webp",
        link: "https://api.whatsapp.com/send/?phone=%2B918270913635&text=HI%20karthik%20i%20need%20your%20Course&type=phone_number&app_absent=0",
      },
      {
        id: "2",
        title: "Bug Bounty",
        image: "https://i.ibb.co/vkzQjz6/capbb.webp",
        link: "https://api.whatsapp.com/send/?phone=%2B918270913635&text=HI%20karthik%20i%20need%20your%20Course&type=phone_number&app_absent=0",
      },
      {
        id: "3",
        title: "Cyber Crime Investigation",
        image: "https://i.ibb.co/442phJg/CCI.webp",
        link: "https://api.whatsapp.com/send/?phone=%2B918270913635&text=HI%20karthik%20i%20need%20your%20Course&type=phone_number&app_absent=0",
      },
      {
        id: "4",
        title: "Cappricio Notify",
        image: "https://i.ibb.co/RQP2tKB/capp-notify.webp",
        link: "https://api.whatsapp.com/send/?phone=%2B918270913635&text=HI%20karthik%20i%20need%20your%20Course&type=phone_number&app_absent=0",
      },
    ];

    // Initialize Tech Logos
    this.techLogos = [
      { id: "1", name: "Bugcrowd", image: "https://logos.bugcrowdusercontent.com/logos/ef74/d1fa/62a5b64c/3809e0af42850a579f02c3434743e3ca_bugcrowd__1_.png" },
      { id: "2", name: "Android", image: "https://i.ibb.co/KVcjnQZ/android.png" },
      { id: "3", name: "Burp Suite", image: "https://i.ibb.co/pdPr0dg/burpsuite.webp" },
      { id: "4", name: "HackerOne", image: "https://i.ibb.co/pdDb8DN/h1.png" },
      { id: "5", name: "Cappricio", image: "https://i.ibb.co/YdP7zz9/cappriciosec.png" },
      { id: "6", name: "Metasploit", image: "https://i.ibb.co/Pg85dfc/image-3.png" },
      { id: "7", name: "Nmap", image: "https://i.ibb.co/KFrrgyP/image-5.png" },
      { id: "8", name: "JADX", image: "https://i.ibb.co/4Y33zzJ/jadx.png" },
      { id: "9", name: "John the Ripper", image: "https://i.ibb.co/JR1dN2z/john-the-ripper.webp" },
      { id: "10", name: "Raspberry Pi", image: "https://i.ibb.co/6wT35TN/ras.png" },
      { id: "11", name: "Kali Linux", image: "https://i.ibb.co/wr0n33C/kali-1.webp" },
    ];

    // Initialize Bug Report Logos
    this.bugReportLogos = [
      { id: "1", name: "Android", image: "https://i.ibb.co/z5kJ977/android.webp" },
      { id: "2", name: "Apple", image: "https://i.ibb.co/5hN7hjx/apple.webp" },
      { id: "3", name: "BBC", image: "https://i.ibb.co/VLwQCWf/bbc.webp" },
      { id: "4", name: "Cambridge University", image: "https://i.ibb.co/9v2sbWY/cambridge-university.webp" },
      { id: "5", name: "Ferrari", image: "https://i.ibb.co/GFPT1q1/ferrari.webp" },
      { id: "6", name: "Google", image: "https://i.ibb.co/V2n5mgp/google.webp" },
      { id: "7", name: "Indian Government", image: "https://i.ibb.co/THJD7Ws/indian-gov.webp" },
      { id: "8", name: "Inflectra", image: "https://i.ibb.co/GW0HmB1/inflectra-white.webp" },
      { id: "9", name: "Lenovo", image: "https://i.ibb.co/9c6c7CN/lenovo.webp" },
      { id: "10", name: "LetsBuild", image: "https://i.ibb.co/LpfCttq/letsbuild.webp" },
      { id: "11", name: "Meta", image: "https://i.ibb.co/2kNJzY6/meta.webp" },
      { id: "12", name: "Microsoft", image: "https://i.ibb.co/RgkPGkv/microsoft.webp" },
      { id: "13", name: "Nokia", image: "https://i.ibb.co/Rh5QV9V/nokia.webp" },
      { id: "14", name: "Red Bull", image: "https://i.ibb.co/ZLN2yHT/redbull.webp" },
      { id: "15", name: "Snapchat", image: "https://i.ibb.co/7rxQZcW/snapchat.webp" },
      { id: "16", name: "TVH", image: "https://i.ibb.co/Qcj0dPF/tvh.webp" },
      { id: "17", name: "UK Government", image: "https://i.ibb.co/92vP5h3/uk-gov.webp" },
      { id: "18", name: "Visma", image: "https://i.ibb.co/17k5LG4/visma.webp" },
      { id: "19", name: "Wageningen", image: "https://i.ibb.co/F8NVNdh/wageningen.webp" },
      { id: "20", name: "LG", image: "https://i.ibb.co/tXHXpbb/lg.webp" },
    ];

    // Initialize Stats
    this.stats = {
      experience: "10+",
      projects: "70+",
      completed: "1000+",
      clients: "1000+",
    };

    // Initialize Contact Forms
    this.contactForms = [];
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return this.portfolioItems;
  }

  async getPortfolioItemsByCategory(category: string): Promise<PortfolioItem[]> {
    return this.portfolioItems.filter((item) => item.category === category);
  }

  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }

  async getTimelineEvents(): Promise<TimelineEvent[]> {
    return this.timelineEvents;
  }

  async getCourses(): Promise<Course[]> {
    return this.courses;
  }

  async getTechLogos(): Promise<TechLogo[]> {
    return this.techLogos;
  }

  async getBugReportLogos(): Promise<BugReportLogo[]> {
    return this.bugReportLogos;
  }

  async getStats(): Promise<Stats> {
    return this.stats;
  }

  async createContactForm(data: ContactFormInsert): Promise<ContactForm> {
    const form: ContactForm = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString(),
    };
    this.contactForms.push(form);
    return form;
  }

  async getContactForms(): Promise<ContactForm[]> {
    return this.contactForms;
  }
}

export const storage = new MemStorage();
