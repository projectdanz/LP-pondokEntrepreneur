import "./App.css";
import HeaderSeaction from "./pages/seactions/HeaderSeaction";
import HeroSeaction from "./pages/seactions/HeroSeaction";
import ProblemSeaction from "./pages/seactions/ProblemSeaction";
import SoluctionSeaction from "./pages/seactions/SoluctionSeaction";

function App() {
  return (
    <div className="flex flex-col">
      <HeaderSeaction />
      <HeroSeaction />
      <ProblemSeaction />
      <SoluctionSeaction />
    </div>
  );
}

export default App;
