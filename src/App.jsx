import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Input from './Input';
import ElemLista from './elemLista';


import './App.css'

function App() {
  const [songs, setSongs] = useState(['Muevelo(Paco)', 'Mi gran noche(Raphael)', 'AJSDHIASDB(nosequiern)']);//CON USESTATE LO MODIFICAMOS Y CON SETUSERS PASAMOS EL ARRAY MODIFICADO A USERS
     
  return (
    <>
      <article>
        <h1>✅My SongList✅</h1>
      </article>
      <div>
      <span className='tituloInTarea'>Introduce una canción: </span>
      <Input 
      onNewInput={(inputText) =>{
        setSongs([...songs, inputText])
      }}></Input>
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
