import { useState,useEffect } from 'react';
import { SongList } from './components/SongList';
import NewSong from './components/NewSong'; // Cambié la importación a "import NewSong from..."
import { SongSave } from './components/SongSave';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SongType } from './hooks/Types';
import "./App.css";
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import React from 'react';

export function App() {
  // Obtenemos las canciones almacenadas o utilizamos un array inicial si no hay ninguna.
  const initialSongs: SongType[] = getSongs() || [
    { id: crypto.randomUUID(), text: 'Mi gran noche (Raphael)', listen: false },
    { id: crypto.randomUUID(), text: 'Otra canción (Miguel Bosé)', listen: false },
    { id: crypto.randomUUID(), text: 'Nochecilla (Jose Manuel)', listen: false },
  ];

  // Estado para almacenar las canciones.
  const [songs, setSongs] = useState(initialSongs);

  // Efecto que se ejecuta cuando cambia el estado 'songs'.
  useEffect(() => {
    // Llamamos a la función getSongs cada vez que cambia 'songs'.
    getSongs();
  }, [songs]);

  /**
   * Marca una canción como escuchada o no escuchada.
   * @param itemId id de la canción que se va a marcar.
   */
  const songComplete = (itemId: string) => {
    const updatedSongs = songs.map((song) =>
      song.id === itemId ? { ...song, listen: !song.listen } : song
    );
    setSongs(updatedSongs);
  };

  /**
   * Elimina una canción de la lista.
   * @param id id de la canción que se va a eliminar.
   */
  const deleteSong = (id: string) => {
    const filteredSongs = songs.filter((song) => song.id !== id);
    setSongs(filteredSongs);
  };

  /**
   * Agrega una nueva canción a la lista.
   * @param newSong Nueva canción que se va a agregar.
   */
  const addSong = (newSong: SongType) => {
    setSongs([...songs, newSong]);
  };

  /**
   * Guarda las canciones en el almacenamiento local.
   */
  function saveSongs() {
    localStorage.setItem('songs', JSON.stringify(songs));
  }

  /**
   * Obtiene las canciones almacenadas en el almacenamiento local.
   * @returns Un array de canciones o null si no hay ninguna.
   */
  function getSongs() {
    const storedData = localStorage.getItem('songs');
    return storedData ? JSON.parse(storedData) : null;
  }

  /**
   * Actualiza una canción en la lista.
   * @param alterSong Canción con los cambios que se van a aplicar.
   */
  function updateSong(alterSong: SongType) {
    const updatedSongs = [...songs];
    updatedSongs.forEach((song, index) => {
      if (song.id === alterSong.id) {
        updatedSongs[index].listen = alterSong.listen;
        updatedSongs[index].text = alterSong.text;
      }
    });
    setSongs(updatedSongs);
  }

  // Renderización del componente.
  return (
    
    <>
    <div className='app-container'>
      <div className="header-container">
        <img src="src/assets/loguillo.png" alt="Logo" className="loguillo" />
        <article>
          <h1>My MusickList✅</h1>
        </article>
      </div>
      {/* Componente para agregar nuevas canciones */}
      <NewSong onNewInput={addSong} />
      <div className='center-container'>
        {/* Componente que muestra la lista de canciones */}
        <SongList
          songs={songs}
          onDeleteSong={deleteSong}
          onSongComplete={songComplete}
          onUpdateSong={updateSong}
        />
      </div>
      <div>
        {/* Componente para guardar las canciones */}
        <SongSave onSaveSong={saveSongs} />
      </div>
      </div>
    </>
  );
}

export default App;