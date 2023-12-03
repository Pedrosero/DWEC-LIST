import React, { useEffect, useState } from 'react';
import { SongItem } from './SongItem';
import { SongType } from '../hooks/Types';

interface SongListProps {
  songs: SongType[];
  onSongComplete: (itemId: string) => void;
  onDeleteSong: (id: string) => void;
  onUpdateSong: (song: SongType) => void;
}

export const SongList: React.FC<SongListProps> = ({ songs, onSongComplete, onDeleteSong, onUpdateSong }) => {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Filtrar las canciones basándose en el término de búsqueda
  const filteredSongs = songs.filter((song) =>
    song.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Efecto secundario para imprimir un mensaje en la consola al renderizar el componente
  useEffect(() => {
    console.log(`Render SongList x${songs.length}`);
  });

  /**
   * Función para cambiar una canción mediante la llamada a onUpdateSong.
   *
   * @param {SongType} alterSong - Canción con datos actualizados.
   */
  function changeSong(alterSong: SongType) {
    onUpdateSong(alterSong);
  }

  return (
    <div className='contenido-container'>
      {/* Barra de búsqueda para filtrar las canciones */}
      <span className='tituloInTarea'>Busca una canción: </span>
      <input
        type='text'
        placeholder='Buscar canciones...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Lista de canciones filtradas */}
      <ul>
        {filteredSongs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            onSongComplete={onSongComplete}
            onDeleteSong={onDeleteSong}
            onUpdateSong={changeSong}
          />
        ))}
      </ul>
    </div>
  );
};
