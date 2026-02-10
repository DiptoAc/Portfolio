"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navItems = [
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Certifications", href: "#certifications", id: "certifications" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // 1. Handle Scroll Background Change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. ScrollSpy Logic: Detect which section is on screen
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Triggers when section is near the top
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-gray-950/80 backdrop-blur-md border-b border-slate-800/50 shadow-sm shadow-blue-900/10" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Stupido
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 transition-colors font-medium text-sm lg:text-base ${
                  activeSection === item.id ? "text-blue-400" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* 3. The "Light Up" sliding effect */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-500/10 rounded-lg border border-blue-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  >
                    {/* Subtle glow dot at the bottom */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                  </motion.div>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button (unchanged) */}
          <button className="md:hidden text-gray-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Updated with active state) */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 bg-gray-900 border border-slate-800 rounded-lg px-2"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-3 px-4 rounded-md transition-colors font-medium ${
                  activeSection === item.id ? "bg-blue-500/10 text-blue-400" : "text-gray-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </nav>
    </header>
  );
}