import { SiMedium, SiLinkedin, SiInstagram, SiGit } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
            <p className="text-muted-foreground">
              Contact me for cybersecurity consultations, training, or collaborations
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a
              href="https://medium.com/geetorus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-medium"
            >
              <SiMedium className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/Unkownboy0"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-github"
            >
              <SiGit className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/geetorus"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-twitter"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/_geetorus_"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-instagram"
            >
              <SiInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/udhaya-uk-27a2402b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-elevate active-elevate-2 p-3 rounded-lg transition-all"
              data-testid="link-footer-linkedin"
            >
              <SiLinkedin className="w-6 h-6" />
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
