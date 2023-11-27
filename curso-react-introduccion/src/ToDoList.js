// Componente Lista de tareas
function ToDoList(props){
    return(
      <div>
        <h1>Lista de Tareas:</h1>
        <ul>
          {props.children} {/* Hace que aparezcan todos los componentes hijos */}
        </ul>
      </div>
    )
}

export { ToDoList };