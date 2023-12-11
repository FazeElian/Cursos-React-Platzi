// Componente contador de tareas
function ToDoCounter({ completed, total })  {
    return(
        total === completed ?
          <>
            <div className="title-tasks">
              Completaste {completed} de {total} tareas
            </div>

            <div className="title-all-tasks-completed">
              Has completado todas las tareas!
            </div>
          </>
        :

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