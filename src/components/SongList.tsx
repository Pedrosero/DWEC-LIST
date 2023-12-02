import React, { useEffect, useState } from 'react';
import { SongItem } from './SongItem';
import { SongType } from '../hooks/Types';

interface SongListProps {
  songs: SongType[];
  onSongComplete: (itemId: string) => void;
  onDeleteSong: (id: string) => void;
  onUpdateSong:(song: SongType) => void;
}

export const SongList: React.FC<SongListProps> = ({ songs, onSongComplete, onDeleteSong, onUpdateSong }) => {
  const[searchTerm, setSearchTerm] = useState<string>('');

  const filteredSongs = songs.filter((song)=>
    song.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() =>{
    console.log(`Render SongList x${songs.length}`);
  });
  
  function  changeSong(alterSong:SongType){
    onUpdateSong(alterSong);
  }
  return (
    <div>
      <span className='tituloInTarea'>Busca una canción: </span>
      <input
        type='text'
        placeholder='Buscar canciones...'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
      />
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