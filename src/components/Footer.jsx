// =========================================================================
// !!! PLACE YOUR CHEFHOME LOGO PNG PATH HERE !!!
// Point this to your logo image file in the public folder (e.g., "/logo.png")
// =========================================================================
const LOGO_PATH = "./Navbar-icons/chefhome-icon.png";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-12 select-none">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* 3-Column Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 items-start">
          
          {/* Column 1: Logo PNG Slot & Brand Bio */}
          <div className="flex flex-col items-start">
            <div className="h-12 mb-6 flex items-center">
              <img
                src={LOGO_PATH}
                alt="Chefhome"
                className="h-full w-auto object-contain"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed font-normal">
              Bringing premium culinary creations and an unmatched open-flame dining
              experience straight to your neighborhood. Dedicated to taste, quality
              ingredients, and memorable gatherings since day one.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="font-extrabold text-base tracking-tight uppercase text-white mb-4">
              Contact us
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              Have a question, hosting an event, or wanting to book a large party? Reach
              out to our hospitality team anytime.
            </p>
            <div className="flex flex-col gap-1 text-sm font-bold text-white">
              <a
                href="tel:6041557557"
                className="hover:text-amber-500 transition-colors"
              >
                (604) 155-7557
              </a>
              <a
                href="mailto:exploration@travel.com"
                className="hover:text-amber-500 transition-colors"
              >
                exploration@travel.com
              </a>
            </div>
          </div>

          {/* Column 3: Address */}
          <div className="flex flex-col items-start">
            <h3 className="font-extrabold text-base tracking-tight uppercase text-white mb-4">
              Address
            </h3>
            <address className="not-italic text-neutral-400 text-sm leading-relaxed">
              304 North Cardinal St. <br />
              Dorchester Center, MA <br />
              02124
            </address>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-neutral-800 pt-8 flex justify-center">
          {/* Copyright Note */}
          <p className="text-neutral-500 text-xs text-center font-medium">
            © Copyright Shepherd-bit
          </p>
        </div>

      </div>
    </footer>
  );
}