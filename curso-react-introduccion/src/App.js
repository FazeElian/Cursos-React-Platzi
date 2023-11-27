import './App.css';
import React from 'react';

// Importamos componentes desde la del archivo
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoSearch } from './ToDoSearch';
import { ButtonCreateToDo } from './ButtonCreateToDo';

function App() {
  return (
    //Recibe un elemento que encapsula a todos los componentes
    <React.Fragment>
      {/* Propiedades de componente */}
      <ToDoCounter completed={2} total={5} />

      {/* Podemos renderizar el mismo componente con distinta información */}
      {/* <ToDoCounter completed={3} total={5} />
      <ToDoCounter completed={4} total={5} /> */}
      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      <ButtonCreateToDo />
    </React.Fragment>
  );
}

export default App; 