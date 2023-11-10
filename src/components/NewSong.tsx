import { useRef } from "react";
//import { v4 as uuidv4 } from 'uuid';
import { NewSongProps } from "../hooks/Types";


function NewSong({onNewInput}: NewSongProps){
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
    
    