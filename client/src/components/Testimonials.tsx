import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import { testimonials } from "@/data/staticData";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-background" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Testimonials and Feedback</h2>
          <div className="w-32 h-1 bg-cyan mx-auto mt-4" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-12 border-l-4 border-l-primary hover-elevate">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2" data-testid={`text-testimonial-name-${currentIndex}`}>
                  {testimonials[currentIndex].name}
                </h3>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-testimonial-content-${currentIndex}`}>
                  {testimonials[currentIndex].text}
                </p>
              </div>
            </div>
          </Card>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-muted"
                }`}
                data-testid={`button-testimonial-dot-${index}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
