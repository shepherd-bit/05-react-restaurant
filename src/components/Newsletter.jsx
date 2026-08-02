import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPaperPlane, FaCheck, FaCopy } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success'
  const [copied, setCopied] = useState(false);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const formRef = useRef(null);

  // Scroll Entrance Animation
  useGSAP(
    () => {
      if (!contentRef.current) return;

      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    },
    { scope: containerRef }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || status === 'loading') return;

    setStatus('loading');

    // Simulate API call delay
    setTimeout(() => {
      setStatus('success');
      gsap.fromTo(
        '.success-box',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }
      );
    }, 1200);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('GRILL20');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="newsletter"
      ref={containerRef}
      className="py-24 bg-[#140b09] text-white relative overflow-hidden select-none"
    >
      {/* Subtle Warm Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient from-amber-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        <div ref={contentRef} className="w-full flex flex-col items-center">
          
          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white mb-4">
            Subscribe to our newsletters <br />
            <span className="text-[#a85c40]">and receive a 20% discount</span>
          </h2>

          {/* Subtitle */}
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mb-10 font-medium leading-relaxed">
            Join our culinary community today. Stay updated with our latest seasonal menus,
            exclusive recipes, and special event invitations sent directly to your inbox.
          </p>

          {/* Dynamic Form / Success Card */}
          {status !== 'success' ? (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="w-full max-w-xl relative flex items-center bg-white rounded-full p-2 shadow-2xl transition-all duration-300 focus-within:ring-4 focus-within:ring-amber-500/50"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full bg-transparent px-6 py-3 text-neutral-900 text-base font-medium placeholder-neutral-400 focus:outline-none"
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="shrink-0 bg-[#3b231c] hover:bg-[#4a2e25] text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2 shadow-md active:scale-95 disabled:opacity-75"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Subscribe
                    <FaPaperPlane className="text-xs" />
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Success Coupon Reveal */
            <div className="success-box w-full max-w-lg bg-[#21130e] border border-amber-600/40 rounded-3xl p-6 shadow-2xl flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center text-xl">
                <FaCheck />
              </div>

              <div>
                <h3 className="text-xl font-extrabold uppercase text-white">
                  Welcome to the Club!
                </h3>
                <p className="text-sm text-neutral-400 mt-1">
                  Use your exclusive 20% discount code at checkout:
                </p>
              </div>

              {/* Promo Code Copy Bar */}
              <div className="flex items-center gap-3 bg-black/40 border border-neutral-700/60 rounded-xl px-5 py-2.5 mt-2">
                <span className="font-mono text-xl font-black text-amber-500 tracking-widest">
                  GRILL20
                </span>
                <button
                  onClick={handleCopyCode}
                  className="ml-2 text-xs font-bold uppercase bg-amber-600 hover:bg-amber-500 text-black px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  {copied ? <FaCheck /> : <FaCopy />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}