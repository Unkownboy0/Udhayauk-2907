import { useRef, useEffect } from "react";
import img1 from "@assets/WhatsApp Image 2025-11-23 at 09.01.52_8dd2ad07_1763919092167.jpg";
import img2 from "@assets/WhatsApp Image 2025-11-23 at 09.01.50_677e26e3_1763919092168.jpg";
import img3 from "@assets/WhatsApp Image 2025-11-23 at 09.01.51_658a1992_1763919092168.jpg";
import img4 from "@assets/WhatsApp Image 2025-11-23 at 09.01.52_af4eafe9_1763919092168.jpg";
import img5 from "@assets/WhatsApp Image 2025-11-23 at 09.01.52_c9f9f11e_1763919092168.jpg";
import img6 from "@assets/WhatsApp Image 2025-11-23 at 09.01.47_8c67b1dd_1763919092169.jpg";
import img7 from "@assets/WhatsApp Image 2025-11-23 at 09.01.46_d5abb596_1763919092169.jpg";
import img8 from "@assets/WhatsApp Image 2025-11-23 at 09.01.47_c89f59d6_1763919092169.jpg";
import img9 from "@assets/WhatsApp Image 2025-11-23 at 09.01.45_4f09c130_1763919092169.jpg";
import img10 from "@assets/WhatsApp Image 2025-11-23 at 09.01.45_5cc0e4c2_1763919092170.jpg";
import img11 from "@assets/WhatsApp Image 2025-11-23 at 09.00.31_18d2b99a_1763919092170.jpg";
import img12 from "@assets/WhatsApp Image 2025-11-23 at 09.00.35_3a8ba709_1763919092170.jpg";
import img13 from "@assets/WhatsApp Image 2025-11-23 at 08.43.00_56b7d20f_1763919092170.jpg";
import img14 from "@assets/WhatsApp Image 2025-11-23 at 08.42.46_bd21e372_1763919092170.jpg";
import img15 from "@assets/WhatsApp Image 2025-11-23 at 08.42.46_db7b27c1_1763919092171.jpg";

const achievements = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15
];

export function Achievements() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const scrollSpeed = 2; // pixels per frame

    const autoScroll = () => {
      const totalWidth = container.scrollWidth / 2; // Half because we duplicate content
      
      scrollAmount += scrollSpeed;
      
      // Reset scroll when reaching halfway (seamless loop)
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }

      container.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(autoScroll, 30); // 30ms for smooth scrolling

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="achievements" className="py-12 sm:py-16 lg:py-24 bg-background/50" data-testid="section-achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold">Achievements & Speaking Events</h2>
          <div className="w-20 sm:w-32 h-1 bg-cyan mx-auto mt-4" />
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>
          
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-4 sm:gap-6"
            style={{ scrollBehavior: "auto" }}
            data-testid="carousel-achievements"
          >
            {/* First set of images */}
            {achievements.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-48 sm:h-56 rounded-lg overflow-hidden bg-card border border-border/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer group"
                data-testid={`achievement-card-${index}`}
              >
                <img
                  src={image}
                  alt={`Achievement ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {achievements.map((image, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80 h-48 sm:h-56 rounded-lg overflow-hidden bg-card border border-border/50 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 cursor-pointer group"
                data-testid={`achievement-card-dup-${index}`}
              >
                <img
                  src={image}
                  alt={`Achievement ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Gradient fade effects */}
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        <p className="text-center text-xs sm:text-sm text-muted-foreground mt-8">
          Hover over images to zoom in and view achievements from my speaking events and workshops across India
        </p>
      </div>
    </section>
  );
}
