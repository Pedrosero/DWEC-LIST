
export function SongList(){
    <ul className='Lista'>
      {songs.map((song) => (
        <ElemLista song={song} time="2"  key={song} />
      ))}
    </ul>
}