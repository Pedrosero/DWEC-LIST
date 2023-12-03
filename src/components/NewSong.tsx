import React, { useRef, KeyboardEvent } from "react";
import {SongType } from "../hooks/Types";


interface NewSongProps{
  onNewInput: (song: SongType) => void,
}
/**
 * Componente funcional para la entrada de una nueva canción.
 *
 * @component
 * @param {object} props - Propiedades del componente.
 * @param {function} props.onNewInput - Función llamada al introducir una nueva canción.
 * @returns {JSX.Element} - Elemento JSX que representa la entrada de una nueva canción.
 */
const NewSong: React.FC<NewSongProps> = ({ onNewInput }) => {
  // Referencia al elemento de entrada de texto
  const inputText = useRef<HTMLInputElement>(null);

  /**
   * Maneja el evento de pulsación de tecla en la entrada de texto.
   *
   * @param {KeyboardEvent<HTMLInputElement>} event - Evento de pulsación de tecla.
   */
  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputText.current!.value.length > 0) {
      // Llama a la función proporcionada cuando se presiona Enter con texto válido
      onNewInput({
        id: crypto.randomUUID(),
        listen: false,
        text: inputText.current!.value,
      });
      // Limpia el valor de la entrada de texto
      inputText.current!.value = '';
      console.log("INTRO DADO");
    }
  };

  return (
    <div className='center-container'>
      {/* Etiqueta para indicar al usuario que introduzca una canción */}
      <span className='tituloInTarea'>Introduce una canción: </span>
      {/* Entrada de texto para introducir la nueva canción */}
      <input
        placeholder="ej: Canción(Artista)"
        className="inputTarea"
        type="text"
        ref={inputText}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default NewSong;
