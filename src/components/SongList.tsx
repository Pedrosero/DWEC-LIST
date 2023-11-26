import React from 'react';
import { SongItem } from './SongItem';
import { SongType } from '../hooks/Types';

interface SongListProps {
  songs: SongType[];
  onSongComplete: (itemId: string) => void;
  onDeleteSong: (id: string) => void;
}

export const SongList: React.FC<SongListProps> = ({ songs, onSongComplete, onDeleteSong }) => {
  return (
    <div>
      <ul>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            onSongComplete={onSongComplete}
            onDeleteSong={onDeleteSong}
          />
        ))}
      </ul>
    </div>
  );
};