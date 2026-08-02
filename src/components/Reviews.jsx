import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// =========================================================================
// !!! PLACE YOUR 3 REVIEWER IMAGE PATHS HERE !!!
// Point these to your image files in the public folder (e.g., "/reviews/review-1.jpg")
// =========================================================================
const reviewImages = {
  reviewer1: "./reviewers/review-1.avif",
  reviewer2: "./reviewers/review-2.avif",
  reviewer3: "./reviewers/review-3.avif",
};

const reviewsData = [
  {
    id: 1,
    name: "Thomas Simmons",
    tag: "VIP Foodie",
    rating: 5,
    image: reviewImages.reviewer1,
    text: "An unforgettable dining experience with perfectly grilled steaks, delicious cocktails, and exceptional service—highly recommend!",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    tag: "Verified Guest",
    rating: 5,
    image: reviewImages.reviewer2,
    text: "The atmosphere is unmatched and the farm-to-table freshness shines through in every bite. Easily the best dining spot in town.",
  },
  {
    id: 3,
    name: "Marcus Sterling",
    tag: "Local Critic",
    rating: 5,
    image: reviewImages.reviewer3,
    text: "Impeccable attention to detail from the head chef down to the table service. The Ribeye Steak was cooked to absolute perfection.",
  },
];

export default function Reviews() {
  const containerRef = useRef(null);
  const cardsRef = useRef(null);

  // Entrance stagger animation using GSAP
  useGSAP(
    () => {
      if (!cardsRef.current) return;
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="reviews"
      ref={containerRef}
      className="py-15 bg-[#fdfbf7] text-[#2d1b17] overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl">
          <span className="text-amber-600 font-extrabold uppercase tracking-widest text-sm">
            Guest Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black mt-2">
            WHAT PEOPLE SAY ABOUT US
          </h2>
        </div>

        {/* 3 Review Cards Grid - Spread across the screen */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch"
        >
          {reviewsData.map((review) => (
            <div
              key={review.id}
              className="group relative bg-white rounded-3xl p-8 border border-black/10 shadow-lg hover:shadow-2xl hover:border-amber-500 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Floating Quote Icon Watermark */}
              <FaQuoteLeft className="absolute top-6 right-6 text-neutral-100 group-hover:text-amber-100 text-5xl transition-colors duration-300 pointer-events-none" />

              <div>
                {/* Header: Avatar, Name & Badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500 shadow-md bg-neutral-200 shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-extrabold text-lg tracking-tight text-black uppercase">
                      {review.name}
                    </h3>
                    <span className="self-start px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 mt-1">
                      {review.tag}
                    </span>
                  </div>
                </div>

                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500 text-sm">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="text-neutral-700 font-medium text-base md:text-lg leading-relaxed italic relative z-10">
                  "{review.text}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}