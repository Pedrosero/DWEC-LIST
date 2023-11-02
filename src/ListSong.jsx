import { useRef, useState } from 'react';
import Input from './Input';
import ElemLista from './elemLista';

function ListSong() {
  return (
    <> 
    <ul className='Lista'>
      {songs.map((song) => (
        <ElemLista song={song} time="2" 
        
        key={song} 
        />
      ))}
    </ul>
    </>
  );
}
export default ListSong
