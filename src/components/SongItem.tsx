import React from 'react';
import { SongType } from '../hooks/Types';

interface SongItemProps {
  song: SongType;
  onSongComplete: (itemId: string) => void;
  onDeleteSong: (id: string) => void;
}

export const SongItem: React.FC<SongItemProps> = ({ song, onSongComplete, onDeleteSong }) => {
  return (
    <li>
      <input
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
          onDeleteSong(song.id);
        }}
      />
    </li>
  );
};