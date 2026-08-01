import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaStar, FaCheckCircle, FaFire, FaPepperHot } from 'react-icons/fa';

// =========================================================================
// !!! PLACE YOUR IMAGE PATHS HERE !!!
// Place your actual images in your public folder (e.g., /grilled-composite.png)
// =========================================================================
const centralImage = "./hero-4-1.png"; 
const avatarImage = "./sara-khan.jpeg";   

export default function Hero() {
  const heroRef = useRef(null);
  const centralImageRef = useRef(null);
  const spicyBadgeRef = useRef(null); // Ref for new badge
  const leftBadgeRef = useRef(null);
  const rightBadgeRef = useRef(null);
  const countRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // --- 1. INTRO/ENTRY ANIMATIONS ---
    
    // Scale up and fade in Central Image from slightly below
    tl.fromTo(
      centralImageRef.current,
      { scale: 0.85, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'elastic.out(1, 0.75)' }
    );

    // Stagger slide-in the badges from their respective positions
    tl.fromTo(
        spicyBadgeRef.current,
        { opacity: 0, y: -20, x: -30 },
        { opacity: 1, y: 0, x: 0, duration: 0.8, ease: 'power3.out' },
        "-=1.2"
    )
    tl.fromTo(
      leftBadgeRef.current,
      { opacity: 0, x: -80, y: 20 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, ease: 'power3.out' },
      "-=1.1" // Significant overlap with main entry
    );

    tl.fromTo(
      rightBadgeRef.current,
      { opacity: 0, x: 80, y: 20 },
      { opacity: 1, x: 0, y: 0, duration: 1.2, ease: 'power3.out' },
      "-=1.0" // Starts right after left badge
    );

    // Fade in buttons
    tl.fromTo(
      ".hero-btn",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      "-=0.6"
    );

    // --- 2. COUNT-UP ANIMATION (Starts after main entry) ---
    const targetCount = 3000;
    const countObj = { val: 0 };

    gsap.to(countObj, {
      val: targetCount,
      duration: 3,
      delay: 1.3,
      ease: 'power4.out',
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.innerText = `${Math.floor(countObj.val / 1000)}k +`;
        }
      },
    });

    // --- 3. GENTLE IDLE FLOATING EFFECT (Continuous) ---
    
    // Central image floats slightly vertically
    gsap.to(centralImageRef.current, {
      y: -8,
      duration: 2.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Left badges (Spicy + Sara) float diagonally together
    gsap.to([leftBadgeRef.current, spicyBadgeRef.current], {
      y: -6,
      x: 6,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.5,
    });

    // Right badge floats in opposite diagonal motion
    gsap.to(rightBadgeRef.current, {
      y: -5,
      x: -4,
      duration: 2.8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col justify-center items-center text-white overflow-hidden"
    >
      {/* Background Glowing Embers Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-amber-600/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-red-900/30 rounded-full blur-3xl animate-pulse-fast"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-950/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Central Composite Image (Space left for your image) */}
        {/* Lower margin (mb-6) brings the badges closer */}
        <div ref={centralImageRef} className="relative z-10 w-full max-w-3xl lg:max-w-4xl mb-2 transform-gpu">
          {centralImage === "/path-to-your-images/hero-grilled.png" ? (
            <div className="w-full aspect-video flex items-center justify-center border-2 border-dashed border-white/20 rounded-2xl bg-black/20 backdrop-blur-xs">
              <p className="text-xl font-bold text-white/50 tracking-wide">Replace with "GRILLED" + Food Image</p>
            </div>
          ) : (
            <img 
              src={centralImage} 
              alt="Grilled Specialties" 
              className="w-full h-auto drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            />
          )}
        </div>

        {/* --- FLOATING OVERLAY BADGES --- */}
        {/* Negative top margin pulls the grid UPward. Reduced spacing between badges. */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 -mt-20 z-20 transform-gpu items-center px-4 md:px-10">
          
          {/* Left Side Container (For alignment) */}
          <div className="relative flex flex-col items-start gap-3 md:justify-self-start max-w-sm w-full">
            
            {/* NEW: Spicy Recommendation Badge */}
            <div
                ref={spicyBadgeRef}
                className="bg-[#422824]/90 backdrop-blur-md px-4 py-2.5 rounded-xl shadow-lg border border-white/10 flex items-center gap-2 transform-gpu hover:border-amber-500/30 transition-all duration-300"
            >
                <FaPepperHot className="text-amber-400 text-sm" />
                <span className="text-[11px] font-bold text-white tracking-wide uppercase">Spicy Recommendation</span>
            </div>

            {/* Testimonial Badge (Reduced padding: p-4) */}
            <div 
              ref={leftBadgeRef} 
              className="bg-[#3f2623]/95 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-white/10 flex flex-col sm:flex-row gap-4 w-full transform-gpu hover:border-amber-500/40 transition-all duration-300"
            >
              <div className="relative shrink-0 mt-1">
                <img src={avatarImage} alt="Sara Khan" className="w-14 h-14 rounded-xl object-cover border-2 border-amber-400/50" />
                <div className="absolute -bottom-1.5 -right-1.5 bg-emerald-500 text-white p-1 rounded-full text-[9px]">
                  <FaCheckCircle />
                </div>
              </div>
              <div className="flex flex-col gap-1 justify-center">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-bold text-sm md:text-base tracking-wide">Sara Khan</h4>
                  <div className="flex text-amber-400 text-[10px] gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1">Verified Gourmet Guest</span>
                <p className="text-[11px] md:text-xs text-white/80 leading-relaxed italic mt-0.5">
                  “The smokey flavor and tender wood-fired perfection made it an unforgettable dinner experience!”
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Right: Stats & Rating Badge (Reduced padding: p-5) */}
          <div 
            ref={rightBadgeRef} 
            className="md:justify-self-end bg-[#3f2623]/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/10 flex flex-col items-center max-w-xs w-full text-center transform-gpu hover:border-amber-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-1.5 mb-0.5">
              <FaFire className="text-amber-400 text-base" />
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">100% Charcoal Flame</span>
            </div>
            <p ref={countRef} className="text-3xl md:text-4xl font-extrabold text-amber-400 tracking-tight my-0.5">0k +</p>
            <p className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-white/80 mb-2">Happy Guests Served</p>
            <div className="w-full h-px bg-white/10 my-1.5"></div>
            <div className="flex items-center justify-between w-full pt-0.5 px-1.5 gap-2">
              <div className="flex items-center gap-0.5 text-amber-400 text-[10px]">
                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
              </div>
              <span className="text-[11px] font-bold text-white/90">4.9 / 5.0 Rating</span>
            </div>
            <p className="text-[10px] text-white/50 tracking-widest uppercase mt-2">EST. SINCE 1995</p>
          </div>

        </div>

        {/* CTA Buttons (Margin top ensures spacing below the overlay badges) */}
        <div className="flex items-center gap-5 mt-10 relative z-20">
          <button className="hero-btn group px-10 py-3 rounded-full bg-white text-[#331f1c] font-bold text-sm md:text-base tracking-wide hover:scale-105 hover:bg-amber-100 active:scale-95 transition-transform duration-300 shadow-xl">
            EXPLORE MENU
          </button>
          <button className="hero-btn group px-10 py-3 rounded-full bg-[#3f2623] text-white border border-white/15 font-bold text-sm md:text-base tracking-wide hover:bg-[#4d322d] hover:border-white/30 active:scale-95 transition-all duration-300 shadow-xl">
            VIEW PRICES
          </button>
        </div>

      </div>

      <style>{`
        @keyframes pulse-slow { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.3; } }
        @keyframes pulse-fast { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.4; } }
        .animate-pulse-slow { animation: pulse-slow 6s infinite ease-in-out; }
        .animate-pulse-fast { animation: pulse-fast 4s infinite ease-in-out; }
        .blur-xs { filter: blur(1.5px); }
      `}</style>
    </section>
  );
}