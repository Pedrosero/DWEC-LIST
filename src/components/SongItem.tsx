import React, { useEffect, useRef, useState } from 'react';
import { SongType } from '../hooks/Types';
import TrashIcon from './assets/icons/trash.svg';

/**
 * Propiedades del componente SongItem.
 *
 * @interface
 * @property {SongType} song - Objeto que representa la canción.
 * @property {(itemId: string) => void} onSongComplete - Función llamada al completar la canción.
 * @property {(id: string) => void} onDeleteSong - Función llamada al eliminar la canción.
 * @property {(song: SongType) => void} onUpdateSong - Función llamada al actualizar la información de la canción.
 */
interface SongItemProps {
  song: SongType;
  onSongComplete: (itemId: string) => void;
  onDeleteSong: (id: string) => void;
  onUpdateSong: (song: SongType) => void;

}

/**
 * Componente funcional para representar un elemento de la lista de canciones.
 *
 * @component
 * @param {SongItemProps} props - Propiedades del componente.
 * @returns {JSX.Element} - Elemento JSX que representa un elemento de la lista de canciones.
 */
export const SongItem: React.FC<SongItemProps> = ({ song, onSongComplete, onDeleteSong, onUpdateSong}) => {
  // Estado para manejar la visibilidad del modal (actualmente no utilizado en el código)
  const [, setShowModal] = useState(false);

  // Referencia al elemento de entrada de texto para la edición
  const songEditText = useRef<HTMLInputElement>(null);

  // Efecto secundario para imprimir un mensaje en la consola al renderizar el componente
  useEffect(() => {
    console.log(`Render SongItem: ${song.text}`);
  });

  /**
   * Función para iniciar la edición de la canción.
   * No implementado al final
   */
  function startEditSong() {
    setShowModal(true);
  }

  /**
   * Función para cerrar la edición de la canción.
   */
  function closeEditSong() {
    setShowModal(false);
  }

  /**
   * Función para editar el texto de la canción y llamar a onUpdateSong.
   */
  function SongTextEdit() {
    onUpdateSong({
      id: song.id,
      listen: song.listen,
      text: songEditText.current!.value,
    });
    closeEditSong();
  }

  

  return (
    <li>
      <div className='container-list'>
        {/* Checkbox para marcar la canción como completada */}
        <input
          className='check'
          type="checkbox"
          checked={song.listen}
          onChange={() => onSongComplete(song.id)}
        />

        {/* Texto de la canción con estilo condicional basado en el estado de escucha */}
        <span style={{ textDecoration: song.listen ? 'line-through' : 'none' }}>
          {song.text}
        </span>

        {/* Botón para eliminar la canción */}
        <input
          className="buttonDelete"
          type="button"
          value={"Eliminar"}
          onClick={() => {
            onDeleteSong(song.id);
          }}
        />

        {/* Entrada de texto para editar la canción */}
        <input
          type='text'
          className='form-change'
          ref={songEditText}
          defaultValue={song.text}
        />

        {/* Botón para guardar la edición de la canción */}
        <input 
        type='button' 
        className='buttonEdit'
        value={"Editar"} 
        onClick={SongTextEdit}
        />

      </div>
    </li>
    
  );
};
