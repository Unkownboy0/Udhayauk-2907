import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@lib/queryClient";
import type { ContactFormInsert } from "@shared/schema";

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    courseInterest: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormInsert) => {
      return apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Your message has been sent. We'll get back to you soon!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        courseInterest: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background/50"
      data-testid="section-contact"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Interested in our courses or have questions? Fill out the form below
            and we'll get back to you soon.
          </p>
        </div>

        <Card className="p-8 lg:p-12 border-card-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  data-testid="label-name"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
                  placeholder="Your name"
                  data-testid="input-name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  data-testid="label-email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
                  placeholder="your@email.com"
                  data-testid="input-email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                  data-testid="label-phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
                  placeholder="+91 XXXX XXXX XX"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <label
                  htmlFor="courseInterest"
                  className="block text-sm font-medium mb-2"
                  data-testid="label-course"
                >
                  Course Interest
                </label>
                <select
                  id="courseInterest"
                  name="courseInterest"
                  value={formData.courseInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
                  data-testid="select-course"
                >
                  <option value="">Select a course</option>
                  <option value="Application Security">
                    Application Security
                  </option>
                  <option value="Bug Bounty">Bug Bounty</option>
                  <option value="Cyber Crime Investigation">
                    Cyber Crime Investigation
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
                data-testid="label-subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition"
                placeholder="What is this about?"
                data-testid="input-subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                data-testid="label-message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition resize-none"
                placeholder="Tell us more..."
                data-testid="textarea-message"
              />
            </div>

            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium transition"
              data-testid="button-submit-contact"
            >
              {mutation.isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
