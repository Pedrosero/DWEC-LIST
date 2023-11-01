function ElemLista({ song }) {
    return (
      <li className="elemLista"
      
      /*onClick={()=>{
        console.log('Clic en LI');
        onClicUser(user);
      }}*/
      >
      {song}
      <button className="delBut" >Eliminar</button>
        
      </li>
    )
  }
  export default ElemLista
  