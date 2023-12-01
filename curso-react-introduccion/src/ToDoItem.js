// Iconos
import checkIcon from "./check-icon.png";
import checkedIcon from "./checked-icon.png";
import deleteIcon from "./delete-icon.png";

// Componente Item de Tarea
function ToDoItem(props){
  return(
    // Se utiliza {` `} para añadir clases dinámicas, item-task-completed es la clase
    // que va a añadir solo si la propiedad completed = true
    <div className={`item-task ${props.completed && "item-task-completed"}`}>
      <span className="check-icon"><img src={checkIcon} alt=""></img></span>
      <span className="checked-icon"><img src={checkedIcon} alt=""></img></span>
      <h3>{props.text}</h3>
      <span><img src={deleteIcon} alt=""></img></span>
    </div>
  );
}

export { ToDoItem };