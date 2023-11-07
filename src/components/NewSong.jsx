import { useRef } from "react";

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
                  id: Uuid(),
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
    
    