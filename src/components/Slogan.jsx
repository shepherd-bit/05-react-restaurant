import { FaFire, FaPepperHot } from 'react-icons/fa';

// Import your image directly at the top if it's in src/assets
// OR use an absolute path string if it's in the public folder (e.g., "/grill-image.jpg")
import grillImage from '/grill-image.jpg'; 
import chefSignature from '/signature-icon.png'; 

const storyNarrative = [
  {
    icon: <FaFire className="text-amber-500 text-4xl mb-4" />,
    title: 'THE FLAME',
    subtitle: '100% Real Wood-Fired Perfection',
    text: 'Every cut is seasoned with perfection and slowly seared over an open, roaring flame to lock in the rich, natural, smoky juices. Our pitmasters control the heat continuously to ensure a rich outer crust and tender center in every single bite.',
  },
  {
    icon: <FaPepperHot className="text-red-500 text-4xl mb-4" />,
    title: 'THE SPICE',
    subtitle: 'Hand-Crafted Secret Rubs',
    text: 'We blend authentic, fiery passion using time-tested grilling techniques, artisan spice marinades, and the freshest ingredients sourced daily. It creates an unforgettable depth of flavor that lingers long after your last taste.',
  },
];

export default function Slogan() {
  return (
    <section
      id="slogan"
      className="relative min-h-[90vh] py-28 px-6 md:px-12 bg-white text-[#2d1b17] overflow-hidden"
    >
      {/* Pure CSS Animated Heat Distortion / Glow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-10 animate-heat-pulse">
        <div className="w-full h-full bg-gradient-to-tr from-amber-500/20 via-orange-300/10 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Expanded Headline Block */}
        <div className="w-full max-w-4xl text-center mb-20 animate-fade-in-up">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider leading-tight text-black flex flex-wrap justify-center gap-x-3 gap-y-1">
            <span>WHERE</span> <span>FLAVOR</span> <span>MEETS</span>
            <span className="text-amber-600 drop-shadow-[0_4px_12px_rgba(251,191,36,0.3)]">FIRE</span>
          </h3>
          <p className="text-lg md:text-xl text-[#2d1b17]/80 mt-5 font-medium tracking-tight">
            Our story is carved in smoke and seasoned with passion.
          </p>
        </div>

        {/* --- Multi-Card Narrative & Image Grid --- */}
        <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Side: Story Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6 animate-fade-in-up [animation-delay:200ms]">
            {storyNarrative.map((item, index) => (
              <div
                key={index}
                className="group relative bg-black/5 p-8 md:p-10 rounded-3xl border border-black/10 flex flex-col items-start gap-2 h-full
                           transition-all duration-300 ease-out
                           hover:-translate-y-1.5 hover:shadow-2xl hover:border-amber-400/30 hover:bg-black/10"
              >
                {/* Visual Accent Focus Glow on Hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none 
                                bg-amber-500/10 blur-xl"></div>
                
                {item.icon}
                <div className="flex flex-col gap-1 mb-2 relative z-10">
                  <h4 className="font-black text-2xl md:text-3xl text-black tracking-tight group-hover:text-amber-700 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                    {item.subtitle}
                  </span>
                </div>
                
                <p className="text-base md:text-lg text-[#2d1b17]/90 leading-relaxed font-medium relative z-10">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side: Standard Grill Image Container */}
          <div className="lg:col-span-6 flex items-center justify-center animate-fade-in-up [animation-delay:400ms]">
            <img 
              src={grillImage} 
              alt="Authentic Sizzle" 
              className="w-full h-full object-cover rounded-3xl drop-shadow-[0_15px_40px_rgba(0,0,0,0.3)] 
                         transition-transform duration-500 ease-out hover:scale-105"
            />
          </div>

        </div>

        {/* Call to Action & Signature Container */}
        <div className="relative z-30 flex flex-col items-center gap-6 mt-20 border-t border-black/10 pt-16 w-full max-w-3xl animate-fade-in-up [animation-delay:600ms]">
          <p className="text-xl md:text-2xl font-semibold italic text-black/80 tracking-tight text-center max-w-xl">
            "Experience the Sizzle, Taste the Story."
          </p>
          
          <div className="flex items-center gap-10">
            {/* CTA Button */}
            <button className="px-10 py-3.5 rounded-full bg-black text-white font-bold text-sm md:text-base tracking-wide 
                             hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl">
              SEE THE SIZZLE
            </button>
            
            {/* Standard Signature Image Container */}
            <div className="relative shrink-0 flex items-center justify-center">
              <img 
                src={chefSignature} 
                alt="Chef Signature" 
                className="h-14 w-auto object-contain" 
              />
            </div>
          </div>
        </div>

      </div>

      {/* Embedded Pure CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes heatPulse {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-heat-pulse {
          animation: heatPulse 6s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}