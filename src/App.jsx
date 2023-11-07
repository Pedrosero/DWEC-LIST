import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NewSong from './components/NewSong';
import ElemLista from './elemLista';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid'; // Importa la función v4 de uuid con un alias


import './App.css'

function App() {
  const [songs, setSongs] = useState([
    {id: uuidv4(), text: 'Mi gran noche (Raphael)', done:false}, 
    {id: uuidv4(), text: 'Otra canción (Miguel Bosé)', done:false}, 
    {id: uuidv4(), text: 'Nochecilla (Jose Manuel)', done:false},
  ]);//CON USESTATE LO MODIFICAMOS Y CON SETUSERS PASAMOS EL ARRAY MODIFICADO A USERS
     
  return (
    <>
    
      <article>
        <h1>✅My SongList✅</h1>
      </article>

      
      <div>
      <span className='tituloInTarea'>Introduce una canción: </span>
      
      <NewSong 
      onNewInput={(inputText) =>{
        setSongs([...songs, inputText])
      }}/>
      
      </div>   
      <div>
      <ul className='Lista'>
      {songs.map((song) => (
        <ElemLista song={song} time="2" 
        key={song} 
        />
      ))}
    </ul>
    </div>
    </>
  )
}
export default App
