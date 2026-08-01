import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Slogan from './components/Slogan';
import BookingCategories from './components/BookingCategories';
import Menus from './components/Menus';
import OurTeam from './components/OurTeam';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#21120f] text-white font-sans selection:bg-amber-500 selection:text-black">
      <Navbar />
      <Hero />
      <Slogan />
      <BookingCategories />
      <Menus />
      <OurTeam />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}