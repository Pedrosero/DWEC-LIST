import React, { useState } from 'react';
import { SongList } from './components/SongList';
import NewSong from './components/NewSong'; // Cambié la importación a "import NewSong from..."
import 'bootstrap/dist/css/bootstrap.min.css';
import { SongType } from './hooks/Types';

export function App() {
  const initialSongs: SongType[] = [
    { id: crypto.randomUUID(), text: 'Mi gran noche (Raphael)', listen: false },
    { id: crypto.randomUUID(), text: 'Otra canción (Miguel Bosé)', listen: false },
    { id: crypto.randomUUID(), text: 'Nochecilla (Jose Manuel)', listen: false },
  ];

  const [songs, setSongs] = useState(initialSongs);

  const songComplete = (itemId: string) => {
    const updatedSongs = songs.map((song) =>
      song.id === itemId ? { ...song, listen: !song.listen } : song
    );
    setSongs(updatedSongs);
  };

  const deleteSong = (id: string) => {
    const filteredSongs = songs.filter((song) => song.id !== id);
    setSongs(filteredSongs);
  };

  const addSong = (newSong: SongType) => {
    setSongs([...songs, newSong]);
  };

  return (
    <>
      <article>
        <h1>✅My SongList✅</h1>
      </article>
      <div className='center-container'>
        <span className='tituloInTarea'>Introduce una canción: </span>
        <NewSong onNewInput={addSong} />
      </div>
      <div className='center-container'>
        <SongList songs={songs} 
        onSongComplete={songComplete} 
        onDeleteSong={deleteSong} 
        />
      </div>
    </>
  );
}
export default App;
