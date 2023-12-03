export interface SongType{
    id: string,
    listen: boolean,
    text: string,
}




export interface SongItemProps{
    SongItem : SongType,
    onListenChange: (song: SongType) => void,
}

