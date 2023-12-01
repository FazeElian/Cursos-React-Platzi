import './App.css';
import React from 'react';

// Importamos componentes desde la del archivo
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoSearch } from './ToDoSearch';
import { ButtonCreateToDo } from './ButtonCreateToDo';

// Lista de Tareas
const defaultToDos = [
  { text: "Leer 30 min", completed: true },
  { text: "Ser Senior", completed: false },
  { text: "Ser ingeniero de Software", completed: false },
  { text: "Aprender JavaScript", completed: true }
];

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
        {/* Crea un arreglo a partir del arreglo inicial con el método map */}
        {defaultToDos.map(toDo => (
          // Utilizamos la propiedad Key para identificar de forma única cada objeto del arreglo
          <ToDoItem key={toDo.text} text={toDo.text} completed={toDo.completed} /> 
        ))}
      </ToDoList>

      <ButtonCreateToDo />
    </React.Fragment>
  );
}

export default App; 