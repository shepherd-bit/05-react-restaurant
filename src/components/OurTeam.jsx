import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

// 15 Team Members Data with exact image paths
const teamMembers = [
  { id: 1, name: 'Nicole Hall', role: 'Executive Head Chef', image: './our-team/team-member-1.webp' },
  { id: 2, name: 'Leo Smith', role: 'Master Pitmaster', image: './our-team/team-member-2.avif' },
  { id: 3, name: 'Kimberly Jackson', role: 'Head Mixologist', image: './our-team/team-member-3.jpg' },
  { id: 4, name: 'Michael Stewart', role: 'Sous Chef', image: './our-team/team-member-4.jpg' },
  { id: 5, name: 'Samantha Reed', role: 'Pastry Chef', image: './our-team/team-member-5.jpg' },
  { id: 6, name: 'David Miller', role: 'Sommelier', image: './our-team/team-member-6.jpg' },
  { id: 7, name: 'Elena Rostova', role: 'General Manager', image: './our-team/team-member-7.jpg' },
  { id: 8, name: 'Marcus Vance', role: 'Senior Grill Artisan', image: './our-team/team-member-8.jpg' },
  { id: 9, name: 'Chloe Bennett', role: 'Floor Supervisor', image: './our-team/team-member-9.jpg' },
  { id: 10, name: 'Julian Thorne', role: 'Lead Bartender', image: './our-team/team-member-10.jpg' },
  { id: 11, name: 'Amara Okafor', role: 'Prep Specialist', image: './our-team/team-member-11.PNG' },
  { id: 12, name: 'Carlos Mendez', role: 'Asado Pitmaster', image: './our-team/team-member-12.jpg' },
  { id: 13, name: 'Sophie Laurent', role: 'VIP Hostess', image: './our-team/team-member-13.avif' },
  { id: 14, name: 'Lucas Wright', role: 'Artisan Bread Baker', image: './our-team/team-member-14.jpg' },
  { id: 15, name: 'Isabella Garcia', role: 'VIP Event Coordinator', image: './our-team/team-member-15.avif' },
];

export default function OurTeam() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // Duplicate team list to guarantee seamless end-to-end tiling
  const infiniteList = [...teamMembers, ...teamMembers];

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // Unstoppable infinite linear marquee tween
      gsap.to(track, {
        xPercent: -50,
        ease: 'none',
        duration: 105, 
        repeat: -1,
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="our-team" ref={containerRef} className="pt-28 pb-10 bg-[#fdfbf7] text-[#2d1b17] overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl">
          <span className="text-amber-600 font-extrabold uppercase tracking-widest text-sm">
            Craftsmen of Sizzle
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mt-2">
            OUR TEAM
          </h2>
          <p className="text-neutral-600 text-base md:text-lg mt-3 font-medium">
            Meet the culinary experts dedicated to crafting your dining experience.
          </p>
        </div>

        {/* GSAP Marquee Container (Hover Pause Removed) */}
        <div className="w-full overflow-hidden py-6">
          <div ref={trackRef} className="flex gap-8 w-max">
            {infiniteList.map((member, idx) => (
              <div
                key={`${member.id}-${idx}`}
                className="group shrink-0 w-[280px] md:w-[310px] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-3"
              >
                {/* Large Card Frame */}
                <div className="relative w-full h-[400px] md:h-[430px] rounded-3xl overflow-hidden shadow-xl border border-black/10 bg-white group-hover:border-amber-500 group-hover:shadow-2xl group-hover:shadow-amber-500/20 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Member Details */}
                <div className="mt-5 flex flex-col items-center">
                  <h3 className="font-black text-xl md:text-2xl uppercase tracking-tight text-black group-hover:text-amber-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm font-bold text-amber-600 uppercase tracking-widest mt-1">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-3 mt-3">
                    <span className="w-8 h-8 rounded-full bg-black/5 hover:bg-amber-500 hover:text-white flex items-center justify-center text-xs transition-colors">
                      <FaFacebookF />
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/5 hover:bg-amber-500 hover:text-white flex items-center justify-center text-xs transition-colors">
                      <FaInstagram />
                    </span>
                    <span className="w-8 h-8 rounded-full bg-black/5 hover:bg-amber-500 hover:text-white flex items-center justify-center text-xs transition-colors">
                      <FaTwitter />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}