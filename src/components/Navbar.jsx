import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll position for sticky glassmorphic header
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

  // GSAP Entrance Animation
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
        
        {/* Left: Navigation Pill Menu */}
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

        {/* Center: Chefhome Brand Logo Slot */}
        <div className="flex items-center justify-center">
          <a href="#home" className="hover:opacity-90 transition-opacity">
            <img 
              src="./Navbar-icons/chefhome-icon.png" 
              alt="Chefhome" 
              className="h-8 md:h-10 w-auto object-contain brightness-0 invert" 
            />
          </a>
        </div>

        {/* Right: Social Media Icons Container */}
        <div className="hidden sm:flex items-center gap-4 md:gap-5">
          
          {/* Facebook Icon Slot */}
          <a href="#" className="hover:scale-110 transition-transform">
            <img 
              src="./Navbar-icons/fb.png" 
              alt="Facebook" 
              className="w-5 h-5 object-contain brightness-0 invert" 
            />
          </a>

          {/* Twitter Icon Slot */}
          <a href="#" className="hover:scale-110 transition-transform">
            <img 
              src="./Navbar-icons/x.webp" 
              alt="Twitter" 
              className="w-5 h-5 object-contain brightness-0 invert" 
            />
          </a>

          {/* YouTube Icon Slot */}
          <a href="#" className="hover:scale-110 transition-transform">
            <img 
              src="./Navbar-icons/youtube.png" 
              alt="YouTube" 
              className="w-5 h-5 object-contain brightness-0 invert" 
            />
          </a>

          {/* LinkedIn Icon Slot */}
          <a href="#" className="hover:scale-110 transition-transform">
            <img 
              src="./Navbar-icons/In.png" 
              alt="LinkedIn" 
              className="w-5 h-5 object-contain brightness-0 invert" 
            />
          </a>

          {/* Instagram Icon Slot */}
          <a href="#" className="hover:scale-110 transition-transform">
            <img 
              src="./Navbar-icons/insta.webp" 
              alt="Instagram" 
              className="w-5 h-5 object-contain brightness-0 invert" 
            />
          </a>

        </div>

      </div>
    </header>
  );
}