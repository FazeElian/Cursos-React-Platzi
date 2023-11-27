import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCount completed={2} total={5} />
      {/* <TodoCount completed={4} total={5} /> */}
      <ToDoItem />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edita el archivo <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://platzi.com/reactjs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function ToDoItem(){
  return(
    <li>
      <span>V</span>
      <h3>Tarea Ejemplo</h3>
      <span>X</span>
    </li>
  );
}

function TodoCount(props){
  return(
    <h1>Completaste {props.completed} de {props.total} tareas</h1>
  )
}

export default App; 