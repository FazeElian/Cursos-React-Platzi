import React from "react";

// Componoente para buscar tarea
function ToDoSearch({
  taskValue, 
  setTaskValue,
}) {
  return(
    <div className="cont-search">
      <input 
        type="search" 
        placeholder="Buscar Tarea" 
        id="search-task"
        value={taskValue}
        onChange={(event) =>{
          // console.log("Has escrito en la barra de búsqueda");
          // console.log(event); // Evento
          // console.log(event.target); // Elemento html - target

          // Obtenemos valor de input
          // console.log(event.target.value);

          // Se está guardando constantemente el nuevo valor
          setTaskValue(event.target.value);
        }}
      >
        
      </input>
    </div>
  )
}

export { ToDoSearch };  