import React from "react";
import "./EmojiCard.css"


export function EmojiCard({ emoji = {} }) {
  return (
    <div className="emojiCardContainer">
      <span className="emoji">{emoji.char}</span>
      <h4>{emoji.name}</h4>
      <code>{emoji.codes}</code>
    </div>
  )
}
