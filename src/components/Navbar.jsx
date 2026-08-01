import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
  }, { scope: navRef });

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-5 ${
        isScrolled
          ? 'bg-[#331f1c]/85 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Navigation Pill Menu */}
        <nav className="bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 flex items-center gap-4 text-xs md:text-sm font-medium tracking-wide">
          <a
            href="#home"
            className="bg-white text-[#331f1c] px-4 py-1 rounded-full font-semibold transition-transform hover:scale-105"
          >
            Home
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Testimonials
          </a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">
            About
          </a>
          <a href="#services" className="text-white/80 hover:text-white transition-colors">
            Services
          </a>
        </nav>

        {/* Center: Chefhome Logo Slot */}
        <div className="flex items-center justify-center">
          <a
            href="#home"
            className="text-2xl md:text-3xl font-serif italic font-bold tracking-wide text-white hover:text-amber-200 transition-colors cursor-pointer"
          >
            Chefhome
          </a>
        </div>

        {/* Right: Social Media Icons Container (White Filter) */}
        <div className="hidden sm:flex items-center gap-4 md:gap-5 brightness-0 invert opacity-90 hover:opacity-100 transition-opacity">
          <a href="#" className="hover:scale-110 transition-transform"></a>
          <a href="#" className="hover:scale-110 transition-transform"></a>
          <a href="#" className="hover:scale-110 transition-transform"></a>
          <a href="#" className="hover:scale-110 transition-transform"></a>
          <a href="#" className="hover:scale-110 transition-transform"></a>
        </div>

      </div>
    </header>
  );
}