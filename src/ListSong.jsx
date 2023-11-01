import { useRef, useState } from 'react';
import Input from './Input';
import ElemLista from './elemLista';

function ListSong() {
  const [songs, setSongs] = useState(['Muevelo(Paco)', 'Mi gran noche(Raphael)', 'AJSDHIASDB(nosequiern)']);//CON USESTATE LO MODIFICAMOS Y CON SETUSERS PASAMOS EL ARRAY MODIFICADO A USERS
  return (
    <>
    
    <Input 
      onNewInput={(inputText) =>{
        setSongs([...songs, inputText])
      }} 
    /> 
     
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
