import Header from "./components/Header";
import Hero from "./components/Hero";
import RoomsTeaser from "./components/RoomsTeaser";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div data-screen-label="01 Главная" className="newspaper-sheet">
      <Header current="home" />
      <main>
        <Hero />
        <RoomsTeaser />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
