import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListSong from './ListSong'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <article>
        <h1>✅My SongList✅</h1>
      </article>
      <div>
      <span className='tituloInTarea'>Introduce una canción: </span>
      <ListSong /> 
      </div>
    </>
  )
}
export default App
