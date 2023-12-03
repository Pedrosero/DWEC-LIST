export interface SongSaveProps{
    onSaveSong:() => void;
}
export function SongSave({onSaveSong}: SongSaveProps){
        return (
            <div>
                <input
                    type="button"
                    className="botonGuardar"
                    value={"Guardar"}
                    onClick={onSaveSong}
                />
            </div>
        );
    }
