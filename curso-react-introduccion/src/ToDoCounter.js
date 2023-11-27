// Componente contador de tareas
function ToDoCounter(props){
    return(
      <h1>Completaste {props.completed} de {props.total} tareas</h1>
    )
}

// export default ToDoCounter;
export { ToDoCounter }