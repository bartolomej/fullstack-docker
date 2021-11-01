import './App.css';
import { useEffect, useState } from "react";
import { getRandomEmoji } from "./api";
import { EmojiCard } from "./EmojiCard";

function App() {
  const [emoji, setEmoji] = useState();

  useEffect(() => {
    let interval = setInterval(async () => {
      setEmoji(await getRandomEmoji());
    }, 2000)
    return () => clearInterval(interval);
  }, [])

  return (
    <div className="appContainer">
      <EmojiCard emoji={emoji} />
    </div>
  );
}

export default App;
