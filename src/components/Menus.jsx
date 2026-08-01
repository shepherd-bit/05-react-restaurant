import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// =========================================================================
// !!! PLACE YOUR IMAGE PATHS HERE !!!
// Point these to your image files in the public folder (e.g., "/steaks.jpg")
// =========================================================================
const menuImages = {
  steaks: "./menu/stake1.jpg",
  chicken: "./menu/chicken.jpg",
  drinks: "./menu/drinks.jpg",
  specialty: "./menu/specialty-drinks.jpg",
};

// Menu Data Categories
const menuCategories = [
  {
    id: 'steaks',
    title: 'STEAKS',
    categoryTag: 'Steaks',
    image: menuImages.steaks,
    badge: 'Chef Favorite',
    items: [
      { name: 'Ribeye Steak', price: '$12' },
      { name: 'New York Strip', price: '$14' },
      { name: 'Filet Mignon', price: '$20', popular: true },
      { name: 'T-Bone Steak', price: '$22' },
      { name: 'Porterhouse Steak', price: '$17' },
    ],
  },
  {
    id: 'chicken',
    title: 'CHICKEN DISHES',
    categoryTag: 'Chicken',
    image: menuImages.chicken,
    badge: 'Popular',
    items: [
      { name: 'BBQ Wings', price: '$11' },
      { name: 'Honey Garlic Chicken Wings', price: '$19', popular: true },
      { name: 'Chicken Skewer with Vegetables', price: '$12' },
      { name: 'Lemon Herb Chicken Breasts', price: '$14' },
      { name: 'Spicy Marinated Chicken Thighs', price: '$11' },
    ],
  },
  {
    id: 'drinks',
    title: 'DRINKS',
    categoryTag: 'Drinks',
    image: menuImages.drinks,
    items: [
      { name: 'Classic Mojito', price: '$10' },
      { name: 'Classic Margarita', price: '$11' },
      { name: 'Pina Colada', price: '$13', popular: true },
      { name: 'Tequila Shots', price: '$10' },
      { name: 'Kraft Beer', price: '$12' },
    ],
  },
  {
    id: 'specialty',
    title: 'SPECIALTY DRINKS',
    categoryTag: 'Drinks',
    image: menuImages.specialty,
    badge: 'House Craft',
    items: [
      { name: 'Mint Lemonade', price: '$10' },
      { name: 'Orange & Ginger Fresh Juice', price: '$11' },
      { name: 'Ginger Ale', price: '$13' },
      { name: 'Strawberry Smoothie', price: '$10' },
      { name: 'Alcoholic Punch', price: '$12', popular: true },
    ],
  },
];

const filterTabs = ['All', 'Steaks', 'Chicken', 'Drinks'];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('All');

  // Filter categories based on active tab
  const filteredCategories = menuCategories.filter(
    (cat) => activeTab === 'All' || cat.categoryTag === activeTab
  );

  return (
    <section id="menu" className="py-28 px-6 md:px-12 bg-white text-[#2d1b17]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-amber-600 font-extrabold uppercase tracking-widest text-sm">
            Flavors of the Flame
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mt-2">
            OUR CRAFTED MENU
          </h2>
          <p className="text-neutral-600 text-base md:text-lg mt-3 font-medium">
            Savor the sizzle in every category
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 py-2.5 rounded-full font-bold text-sm tracking-wide transition-all duration-300 ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-neutral-600 bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-[#2d1b17] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <motion.div
          layout
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="group relative rounded-3xl overflow-hidden min-h-[380px] p-8 md:p-10 flex flex-col justify-between shadow-xl border border-black/10 cursor-pointer"
              >
                {/* Background Image Container with Hover Zoom */}
                <div className="absolute inset-0 z-0 bg-neutral-900 overflow-hidden">
                  <motion.img
                    src={category.image}
                    alt={category.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full object-cover opacity-100 group-hover:opacity-110 transition-opacity duration-300"
                  />
                  {/* Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/40" />
                </div>

                {/* Card Top: Badge & Title */}
                <div className="relative z-10 flex items-start justify-between mb-6">
                  <h3 className="font-black text-2xl md:text-3xl text-white uppercase tracking-wider">
                    {category.title}
                  </h3>
                  {category.badge && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-black shadow-lg">
                      {category.badge}
                    </span>
                  )}
                </div>

                {/* Card Body: Interactive Dish Items List */}
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: { transition: { staggerChildren: 0.08 } },
                  }}
                  className="relative z-10 flex flex-col gap-2.5"
                >
                  {category.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      className="group/item flex items-center justify-between p-2 rounded-xl transition-colors duration-200 hover:bg-white/10"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-sm md:text-base font-semibold text-neutral-200 group-hover/item:text-white transition-colors">
                          {item.name}
                        </span>
                        {item.popular && (
                          <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                        )}
                      </div>
                      <span className="font-bold text-sm md:text-base text-amber-400">
                        {item.price}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}