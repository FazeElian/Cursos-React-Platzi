// Componente Lista de tareas
function ToDoList(props){
    return(
      <div className="cont-list-tasks">
        {props.children} {/* Hace que aparezcan todos los componentes hijos */}
      </div>
    )
}

export { ToDoList };