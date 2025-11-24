import { Button } from "@/components/ui/button";
import { SiMedium, SiLinkedin, SiYoutube, SiInstagram, SiKalilinux, SiAndroid, SiLinux, SiPython, SiDocker, SiGit, SiBurpsuite } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { Shield, Terminal, Code2, Zap, Lock, Cpu, Skull, Wrench } from "lucide-react";
import profileImage from "@assets/WhatsApp_Image_2025-11-20_at_20.06.59_13b777e6-removebg-preview_1763908015110.png";

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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center min-h-screen lg:min-h-auto">
          {/* Left Column - Text */}
          <div className="flex flex-col justify-center items-center lg:items-start lg:pr-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="w-full mb-3 sm:mb-4 md:mb-6">
              <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-center lg:text-left">
                👋 Hi, I'm <span className="font-semibold text-[#00f7fa]">Udhayakumar V</span>
              </p>
            </div>

            <div className="relative w-full text-center lg:text-left mb-3 sm:mb-4 md:mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-snug sm:leading-tight break-words">
                Emerging Security Researcher & Ethical Hacker
              </h1>
              {/* Animated underline */}
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-24 sm:w-28 md:w-32 lg:w-40 h-5 sm:h-6 md:h-7 lg:h-8"
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

            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground text-center lg:text-left mb-3 sm:mb-4 md:mb-6 max-w-full lg:max-w-2xl">CEO & Founder of Geetorus Cybersecurity in Erode, India. I specialize in ethical hacking, securing web and mobile platforms, developing security tools, and providing cyber awareness through workshops and seminars. My focus is to find vulnerabilities, prevent attacks, and build a safer digital pace.</p>

            <div className="w-full">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 text-center lg:text-left">Follow me</p>
              <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 md:gap-3 flex-wrap">
                <a
                  href="https://medium.com/geetorus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-1.5 sm:p-2 rounded-lg transition-all"
                  data-testid="link-medium"
                >
                  <SiMedium className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </a>
                <a
                  href="https://github.com/Unkownboy0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-1.5 sm:p-2 rounded-lg transition-all"
                  data-testid="link-github"
                >
                  <SiGit className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </a>
                <a
                  href="https://x.com/geetorus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-1.5 sm:p-2 rounded-lg transition-all"
                  data-testid="link-twitter"
                >
                  <FaXTwitter className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </a>
                <a
                  href="https://instagram.com/_geetorus_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-1.5 sm:p-2 rounded-lg transition-all"
                  data-testid="link-instagram"
                >
                  <SiInstagram className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/udhaya-uk-27a2402b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-elevate active-elevate-2 p-1.5 sm:p-2 rounded-lg transition-all"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />
                </a>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 md:mt-6 justify-center lg:justify-start w-full">
              <Button
                className="bg-[#93eaedbf] text-[#000000] font-semibold rounded-full px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-xs sm:text-sm md:text-lg whitespace-nowrap"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Udhayakumar_Resume.pdf';
                  link.download = 'Udhayakumar_Resume.pdf';
                  link.click();
                }}
                data-testid="button-download-resume"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image with Floating Icons */}
          <div className="relative w-full flex justify-center items-center lg:mt-0 mt-4 sm:mt-6">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem]">
              {/* Profile Image */}
              <div className="relative w-full h-full">
                <img
                  src={profileImage}
                  alt="Udhayakumar Profile"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Floating Tech Icons - Dark Gray Backgrounds - Hacking & Security Tools - 40x40 */}
              {/* Top Right - Cyber Security */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float hover:shadow-green-500/50">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              
              {/* Top Left - Kali Linux */}
              <div className="absolute -top-2 -left-6 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-100 hover:shadow-red-600/50">
                <SiKalilinux className="w-5 h-5 text-red-600" />
              </div>
              
              {/* Left Top - Burp Suite */}
              <div className="absolute top-1/4 -left-6 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-150 hover:shadow-orange-500/50">
                <div className="w-5 h-5 bg-orange-500 rounded text-white flex items-center justify-center text-xs font-bold">B</div>
              </div>
              
              {/* Left Bottom - Metasploit */}
              <div className="absolute bottom-1/3 -left-6 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-300 hover:shadow-blue-500/50">
                <Skull className="w-5 h-5 text-blue-500" />
              </div>
              
              {/* Bottom Left - Wifite */}
              <div className="absolute -bottom-3 left-1/4 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-200 hover:shadow-purple-500/50">
                <Wrench className="w-5 h-5 text-purple-500" />
              </div>
              
              {/* Bottom Right - Android */}
              <div className="absolute -bottom-3 right-1/4 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-400 hover:shadow-green-500/50">
                <SiAndroid className="w-5 h-5 text-green-500" />
              </div>
              
              {/* Right Bottom - Firefox */}
              <div className="absolute bottom-1/4 -right-6 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-350 hover:shadow-orange-500/50">
                <div className="w-5 h-5 text-orange-500 flex items-center justify-center font-bold text-xs">F</div>
              </div>
              
              {/* Right Top - Arch Linux */}
              <div className="absolute top-1/3 -right-6 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-250 hover:shadow-cyan-500/50">
                <SiLinux className="w-5 h-5 text-cyan-400" />
              </div>
              
              {/* Top Center - Hashcat */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-150 hover:shadow-pink-500/50">
                <Terminal className="w-5 h-5 text-pink-500" />
              </div>
              
              {/* John the Ripper */}
              <div className="absolute top-0 -right-8 w-10 h-10 bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg animate-float delay-500 hover:shadow-yellow-500/50">
                <Code2 className="w-5 h-5 text-yellow-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
