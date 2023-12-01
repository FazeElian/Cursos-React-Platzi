// Componente Item de Tarea
function ToDoItem(props){
    return(
      <li>
        <span>V</span>
        <h3>{props.text}</h3>
        <span>X</span>
      </li>
    );
}

export { ToDoItem };