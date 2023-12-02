import React, { useRef, KeyboardEvent } from "react";
import { NewSongProps } from "../hooks/Types";

const NewSong: React.FC<NewSongProps> = ({ onNewInput }) => {
  const inputText = useRef<HTMLInputElement>(null);
    return(
        <input 
          placeholder="ej: Canción(Artista)"
          className="inputTarea"
          type="text"
          ref={inputText}
            onKeyUp={(event) => {
              if (event.key =='Enter' && inputText.current!.value.length>0){
                //users.push("Nuevo")
                //setUsers([...users, 'nuevoooo'])//IMPORTANTE PARA MODIFICAR ARRAYS DINÁMICAMENTE
                onNewInput({
                  id: crypto.randomUUID(),
                  listen: false,
                  text: inputText.current!.value,
                });
                inputText.current!.value = ''
                console.log("INTRO DADO");
              }
            }
          }
        />
    )
    }
    
    export default NewSong
    
    