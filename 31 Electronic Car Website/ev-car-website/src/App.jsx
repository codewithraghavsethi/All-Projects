import { useState } from "react";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "What do you want?" },
    { text1: "Indulge", text2: "What do you do?" },
    { text1: "Give in to", text2: "What do you need?" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  );
};

export default App;
