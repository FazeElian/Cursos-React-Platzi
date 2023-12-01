// Componente botón para crear Tarea
function ButtonCreateToDo(){
    return(
      <button className="btn-create" 
      onClick={ 
        (event) => {
          console.log(event);
          console.log(event.target);
        }
      }>
        Crear Tarea
      </button>
    )
}

export { ButtonCreateToDo };