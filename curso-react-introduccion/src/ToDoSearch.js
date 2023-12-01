// Componoente para buscar tarea
function ToDoSearch(){
    return(
      <div className="cont-search">
        <input 
          type="search" 
          placeholder="Buscar Tarea" 
          id="search-task"
          onChange={(event) =>{
            console.log(event); // Evento
            console.log(event.target); // Elemento html - target

            // Obtenemos valor de input
            console.log(event.target.value);
          }}
        >
          
        </input>
      </div>
    )
}

export { ToDoSearch };  