import { useState } from 'react'
import NewSong from './components/NewSong';
//import ElemLista from './elemLista';
import 'bootstrap/dist/css/bootstrap.min.css'
//import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid con un alias
import { DelSong } from './components/DelSong';

import './App.css'
import { SongType } from './hooks/Types';
import "./App.css";
import { useDrag, useDrop, DndProvider } from 'react-dnd';

export function App() {
  const initialSongs: SongType[] = [
    {id: crypto.randomUUID(), text: 'Mi gran noche (Raphael)', listen:false}, 
    {id: crypto.randomUUID(), text: 'Otra canción (Miguel Bosé)', listen:false}, 
    {id: crypto.randomUUID(), text: 'Nochecilla (Jose Manuel)', listen:false},
  ]
    
  const [songs, setSongs] = useState(initialSongs);//CON USESTATE LO MODIFICAMOS Y CON SETUSERS PASAMOS EL ARRAY MODIFICADO A USERS
  
  const songComplete = (itemId: string) => {
    const updatedSongs = songs.map((song) =>
      song.id === itemId ? { ...song, listen: !song.listen } : song
    );
    setSongs(updatedSongs);
  };

  const DeleteSong = (id: string) => {
    const filteredSongs = songs.filter(song => song.id !==id)
    setSongs(filteredSongs)
  }


  return (
    <>
      <article>
        <h1>My SongList✅</h1>
      </article>

      
      <div>
      <span className='tituloInTarea'>Introduce una canción: </span>
      <NewSong 
      onNewInput={(inputText) =>{
        setSongs([...songs, inputText])
      }}/>
      </div> 


      <div>
      <ul>
          {songs.map((song) => (
            <li key={song.id}>
              <input
                type="checkbox"
                checked={song.listen}
                onChange={() => songComplete(song.id)}
              />
              <span style={{ textDecoration: song.listen ? 'line-through' : 'none' }}>
                {song.text}
              </span>
              <input
                className="botonEliminar"
                type='button'
                value={"Eliminar"}
                    onClick={()=>{
                        DeleteSong(song.id)
                    }}
// onDelete={() =>}
              />
            </li>
          ))}
        </ul>
    </div>
    <div>
    
    </div>
    </>
  );
}
export default App
