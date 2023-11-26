import React, { useRef, KeyboardEvent } from "react";
import { NewSongProps } from "../hooks/Types";

const NewSong: React.FC<NewSongProps> = ({ onNewInput }) => {
  const inputText = useRef<HTMLInputElement>(null);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputText.current!.value.length > 0) {
      onNewInput({
        id: crypto.randomUUID(),
        listen: false,
        text: inputText.current!.value,
      });
      inputText.current!.value = '';
      console.log("INTRO DADO");
    }
  };

  return (
    <input
      placeholder="ej: Canción(Artista)"
      className="inputTarea"
      type="text"
      ref={inputText}
      onKeyUp={handleKeyUp}
    />
  );
};

export default NewSong;