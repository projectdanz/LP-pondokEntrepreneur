import "./App.css";
import HeaderSeaction from "./pages/seactions/HeaderSeaction";
import HeroSeaction from "./pages/seactions/HeroSeaction";
import ProblemSeaction from "./pages/seactions/ProblemSeaction";
import SoluctionSeaction from "./pages/seactions/SoluctionSeaction"; // Added import for SoluctionSeaction
import YourGetSection from "./pages/seactions/YourGetSection";
import FAQSeaction from "./pages/seactions/FAQSeaction";
import CTASeaction from "./pages/seactions/CTASeaction";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="flex flex-col">
      <HeaderSeaction />
      <HeroSeaction />
      <ProblemSeaction />
      <SoluctionSeaction />
      <YourGetSection />
      <CTASeaction />
      <FAQSeaction />
      <Footer />
    </div>
  );
}

export default App;
