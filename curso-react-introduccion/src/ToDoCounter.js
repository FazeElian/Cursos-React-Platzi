// Componente contador de tareas
function ToDoCounter({ completed, total })  {
    return(
      // <h1 style={styles}>Completaste {completed} de {total} tareas</h1>
      <div className="title-tasks">
        Completaste {completed} de {total} tareas
      </div>
    )
}   


// Dar estilos creando un objeto
// const styles = {
//   fontSize: "24px",
//   textAlign: "center",
//   margin: "0",
//   padding: "48px",
// }

// export default ToDoCounter;
export { ToDoCounter }