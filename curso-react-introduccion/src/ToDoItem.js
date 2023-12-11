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
      <span 
        className="check-icon"
        onClick={props.onCompleted}
      >
        <img src={checkIcon} alt="" />
      </span>

      <span 
        className="checked-icon"
        onClick={props.noCompleted}
      >
        <img src={checkedIcon} alt="" />
      </span>
      <h3>{props.text}</h3>
        <span 
          onClick={props.deleteTask}
        >
          <img src={deleteIcon} alt="" />
        </span>
    </div>
  );
}

export { ToDoItem };