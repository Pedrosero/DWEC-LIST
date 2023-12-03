import React, { useEffect, useRef, useState } from 'react';
import { SongType } from '../hooks/Types';

interface SongItemProps {
  song: SongType;
  onSongComplete: (itemId: string) => void;
  onDeleteSong: (id: string) => void;
  onUpdateSong:(song:SongType) =>void;
  }



export const SongItem: React.FC<SongItemProps> = ({ song, onSongComplete, onDeleteSong, onUpdateSong }) => {
 const [, setShowModal]=useState(false);
 

 const songEditText=useRef<HTMLInputElement>(null);
 
 useEffect(()=> {
  console.log(`Render SongItem: ${song.text}`);
 });
 
 function startEditSong(){
  setShowModal(true);
 }

 function closeEditSong(){
  setShowModal(false);
 }

function SongTextEdit(){
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
      <input
      className='check'
        type="checkbox"
        checked={song.listen}
        onChange={() => onSongComplete(song.id)}
      />

      <span style={{ textDecoration: song.listen ? 'line-through' : 'none' }}>
        {song.text}
      </span>
        
      <input
        className="botonEliminar"
        type="button"
        value={"Eliminar"}
        onClick={() => {
          onDeleteSong(song.id)
        }}
      />
    <input
      type='text'
      className='form-change'
      ref={songEditText}
      defaultValue={song.text}
      />
    <button type='button' className='button-save' onClick={SongTextEdit}>
      Editar
    </button>
    </div>
    </li>
  );
};