// Componente contador de tareas
function ToDoCounter({ completed, total })  {
    return(
      <h1>Completaste {completed} de {total} tareas</h1>
    )
}

// export default ToDoCounter;
export { ToDoCounter }