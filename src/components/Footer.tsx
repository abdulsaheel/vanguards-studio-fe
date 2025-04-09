import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container-xl px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display mb-4">vanguards.studio</h3>
            <p className="text-accent-1 max-w-md">
              Digital mastery. Brand-first thinking. We craft elegant websites,
              powerful applications, and smart systems for brands that dare to
              stand out.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/work" className="hover:text-accent-1 transition-colors">
                Work
              </Link>
              <Link
                to="/services"
                className="hover:text-accent-1 transition-colors"
              >
                Services
              </Link>
              <Link to="/about" className="hover:text-accent-1 transition-colors">
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-accent-1 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-1 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-1 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-1 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-2/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-1">
              © {new Date().getFullYear()} vanguards.studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-accent-1">
              <a
                href="/privacy"
                className="hover:text-accent-1 transition-colors"
              >
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-accent-1 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;