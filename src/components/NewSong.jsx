import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewSong({onNewInput}){
  const inputText = useRef();
    return(
        <input 
          placeholder="ej: Canción(Artista)"
          className="inputTarea"
          type="text"
          ref={inputText} 
            onKeyUp={(event) => {
              if (event.key =='Enter'){
                //users.push("Nuevo")
                //setUsers([...users, 'nuevoooo'])//IMPORTANTE PARA MODIFICAR ARRAYS DINÁMICAMENTE
                onNewInput({
                  id: uuidv4(),
                  done: false,
                  text: inputText.current.value,
                });
                inputText.current.value = ''
                console.log("INTRO DADO");
              }
            }
          }
        />
    )
    }
    
    export default NewSong
    
    