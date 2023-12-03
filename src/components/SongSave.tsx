
// Definición de las propiedades del componente SongSave
export interface SongSaveProps {
  onSaveSong: () => void; // Función llamada al hacer clic en el botón "Guardar"
}

// Componente funcional SongSave
export function SongSave({ onSaveSong }: SongSaveProps) {
  return (
    <div>
      {/* Botón para guardar canciones */}
      <input
        type="button"
        className="buttonSave"
        value={"Guardar"}
        onClick={onSaveSong} 
      />
    </div>
  );
}
