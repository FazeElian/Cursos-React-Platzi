import './App.css';

// Importamos componentes desde la del archivo
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoSearch } from './ToDoSearch';
import { ButtonCreateToDo } from './ButtonCreateToDo';

function App() {
  return (
    <div className='App'>
      <ToDoCounter completed={3} total={5} />
      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      <ButtonCreateToDo />
    </div>
  );
}

export default App; 