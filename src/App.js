import { useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Dive Into", text2: "What You Love" },
    { text1: "Indulge", text2: "Your Passions" },
    { text1: "Give In To", text2: "Your Passions" },
  ];
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
}

export default App;
