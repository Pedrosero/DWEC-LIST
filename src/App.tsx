import React, { useState,useEffect } from 'react';
import {SongSave} from './components/SongSave';
import { SongList } from './components/SongList';
import NewSong from './components/NewSong'; // Cambié la importación a "import NewSong from..."
import 'bootstrap/dist/css/bootstrap.min.css';
import { SongType } from './hooks/Types';
import "./App.css";
import { useDrag, useDrop, DndProvider } from 'react-dnd';

export function App() {
  const initialSongs: SongType[] = getSongs() || [
    { id: crypto.randomUUID(), text: 'Mi gran noche (Raphael)', listen: false },
    { id: crypto.randomUUID(), text: 'Otra canción (Miguel Bosé)', listen: false },
    { id: crypto.randomUUID(), text: 'Nochecilla (Jose Manuel)', listen: false },
  ];

  const [songs, setSongs] = useState(initialSongs);

  useEffect(() => {
    getSongs();
  }, [songs]);


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

  function saveSongs() {
    localStorage.setItem('songs', JSON.stringify(songs));
  }

  function getSongs() {
    const storedData = localStorage.getItem('songs');
    return storedData ? JSON.parse(storedData) : null;
  }

  function updateSong(alterSong: SongType){
    const updatedSongs = [...songs];
      updatedSongs.forEach((song, index)=>{
        if (song.id === alterSong.id) {
          updatedSongs[index].listen = alterSong.listen;
          updatedSongs[index].text = alterSong.text;
        }
      });
      setSongs(updatedSongs);
  }
  
  return (
    <>
      <article>
        <h1>My SongList✅</h1>
      </article>
        <NewSong onNewInput={addSong} />
      <div className='center-container'>
        <SongList songs={songs} 
        onDeleteSong={deleteSong} 
        onSongComplete={songComplete} 
        onUpdateSong={updateSong}
        />
      </div>
      <div>
      <SongSave onSaveSong={saveSongs}/>
      </div>
    </>
  );
}
export default App;