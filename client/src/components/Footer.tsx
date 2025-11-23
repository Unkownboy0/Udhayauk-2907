import { SiMedium, SiLinkedin, SiYoutube, SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
            <p className="text-muted-foreground">
              Contact me for cybersecurity consultations, training, or collaborations
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-medium"
            >
              <SiMedium className="w-6 h-6" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-twitter"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-linkedin"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-youtube"
            >
              <SiYoutube className="w-6 h-6" />
            </a>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Udhayakumar - Cybersecurity Researcher. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
