import { useRef } from "react";

export function Meter({onNewInput}){
  const inputText = useRef();
    return(
        <input 
          placeholder="ej: Canción(Artista)"
          className="inputTarea"
          type="text"
          ref={inputText} 
            onKeyUp={(event) => {
              if (event.key=='Enter'){
                //users.push("Nuevo")
                //setUsers([...users, 'nuevoooo'])//IMPORTANTE PARA MODIFICAR ARRAYS DINÁMICAMENTE
                onNewInput(
                   inputText.current.value
                );
                inputText.current.value = ''
                console.log("INTRO DADO");
              }
            }
          }
        />
    )
    }
    
    export default Meter
    
    