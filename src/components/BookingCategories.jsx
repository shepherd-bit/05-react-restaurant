import { FaUtensils, FaUsers, FaLeaf } from 'react-icons/fa';

// Category Data Structure with contextual details & badges
const bookingCategories = [
  {
    id: 'table',
    badge: 'VIP Experience',
    icon: <FaUtensils className="text-4xl text-amber-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />,
    title: 'THE BEST TABLE IN TOWN',
    description:
      'Experience premier dining with tailored seating options. Perfect for intimate dinners, family gatherings, or food enthusiasts seeking the absolute best culinary spot.',
    buttonText: 'Reserve Table',
  },
  {
    id: 'corporate',
    badge: 'Group Packages',
    icon: <FaUsers className="text-4xl text-amber-600 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />,
    title: 'IDEAL FOR COMPANIES',
    description:
      'Host your corporate events, casual team hangouts, or company milestones with us. We offer flexible packages designed to accommodate groups of any size.',
    buttonText: 'Inquire Corporate',
  },
  {
    id: 'fresh',
    badge: 'Farm to Table',
    icon: <FaLeaf className="text-4xl text-amber-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />,
    title: 'DAILY FRESH PRODUCTS',
    description:
      'Quality you can taste in every single bite. Our menu relies completely on premium, fresh ingredients delivered daily from trusted local farms and suppliers.',
    buttonText: 'Explore Sourcing',
  },
];

export default function BookingCategories() {
  return (
    <section
      id="booking-categories"
      className="relative py-24 px-6 md:px-12 bg-neutral-50/50 text-[#2d1b17] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {bookingCategories.map((category, index) => (
            <div
              key={category.id}
              style={{ animationDelay: `${index * 150}ms` }}
              className="group relative bg-white rounded-3xl p-8 md:p-10 border border-neutral-200/80 
                         flex flex-col justify-between items-center text-center
                         transition-all duration-500 ease-out animate-fade-in-up
                         hover:-translate-y-3 hover:shadow-2xl hover:border-amber-500/40 hover:bg-white"
            >
              {/* Interactive Edge Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-b from-amber-500/10 via-transparent to-transparent blur-xl"></div>

              {/* Top Content Group */}
              <div className="flex flex-col items-center w-full relative z-10">
                
                {/* Micro-Pill Badge */}
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100/70 text-amber-800 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                  {category.badge}
                </span>

                {/* Floating Icon Container */}
                <div className="w-20 h-20 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 animate-float shadow-sm border border-amber-100 group-hover:bg-amber-100 group-hover:shadow-md transition-all duration-300">
                  {category.icon}
                </div>

                {/* Title */}
                <h3 className="font-black text-xl md:text-2xl text-black tracking-wide uppercase mb-4 group-hover:text-amber-700 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                  {category.description}
                </p>
              </div>

              {/* Interactive Action Button */}
              <div className="w-full mt-8 relative z-10">
                <button className="w-full py-3.5 px-6 rounded-2xl bg-[#2d1b17] text-white font-bold text-sm tracking-wide uppercase
                                   transition-all duration-300 ease-out
                                   hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-600/30 active:scale-95">
                  {category.buttonText}
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Embedded Pure CSS Micro-Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatIdle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease-out forwards;
        }

        .animate-float {
          animation: floatIdle 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}