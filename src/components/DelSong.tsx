import { useRef } from "react";
import { EliminarBotonProps } from "../hooks/Types";
import '..App.tsx'
 

export function DelSong({onDeleteSong}: EliminarBotonProps){

    const deleteSong = (id)
    return(
        <input 
                className="botonEliminar"
                type='button'
                value={"Eliminar"}
                onClick={()=>{
                        onDeleteSong(song.id)
                    }}
// onDelete={() =>}
              />
    )
}