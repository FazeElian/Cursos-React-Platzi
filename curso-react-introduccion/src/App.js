import React from 'react';

// Estilos de App
import "./App.css";

// Importamos componentes desde la del archivo
import { ToDoCounter } from './ToDoCounter';
import { ToDoItem } from './ToDoItem';
import { ToDoList } from './ToDoList';
import { ToDoSearch } from './ToDoSearch';
import { ButtonCreateToDo } from './ButtonCreateToDo';

// Lista de Tareas por defecto
// const defaultTasks = [
//   { text: "Leer 30 min", completed: false },
//   { text: "Ser Senior", completed: false },
//   { text: "Ser ingeniero de Software", completed: false },
//   { text: "MESSI", completed: false },
//   { text: "Aprender JavaScript", completed: false }
// ];

// localStorage.setItem("Tareas_v1", JSON.parse(defaultTasks));
// localStorage.removeItem("Tareas_v1");

// Custom Hook para controlar todo lo que tenga que ver con Local Storage
function useLocalStorage (itemName, initialValue) {
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  // Si no hay tareas en el arreglo de tareas
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue)); // Va a guardar el array vacío al local storage
    parsedItem = initialValue; // Será un string vacío 
  } else{ // Sino si habían items, va a transformarlo a string
    parsedItem = JSON.parse(localStorageItem);
  }
  
  // Creación de nuestro propio estado para custom hook
  const [item, setItem] = React.useState(parsedItem);

  // Función para actualizar estado de tareas de local storage
  const saveItem = (newItem) => { // Envúa nuevo array de tareas y los actualiza
    localStorage.setItem(itemName, JSON.stringify(newItem));

    // Guardamos nuevas tareas
    setItem(newItem);
  };

  // Actualiza custom hook y local storage
  return [item, saveItem];
}

function App() {
  // Estado inicial de Local Storage
  // let parsedTasks = JSON.parse(localStorageTasks);

  // Creamos un estado y otro para cambiarlo
  // Además le damos un valor default = ""
  const [searchValue, setSearchValue] = React.useState("");

  // Verificamos que sí está recibiendo y actualizando el nuevo valor de búsqueda
  // console.log("Los usuarios buscan tareas de " + searchValue)

  // Nuevo estado de Taeas
  const [tasks, saveTasks] = useLocalStorage("Tareas_v1", []); // Enviamos al estado tareas de local storage

  // Contar cuántas tareas cumplen el estado = completed true
  // La doble negación: "!!" va a convertir el valor a booleano
  const completedTasks = tasks.filter(
    task => !!task.completed
  ).length;
  const totalTasks = tasks.length;

  // Estados derivados de búsqueda a partir de la lista de tareas
  const searchedTasks = tasks.filter(
    // Por cada Tarea verificar si incluye un valor desde el valor de input de búsqueda en su text
    (task) => {
      // Lowarcase permite mostrar valores que sean buscados van a ser convertidos a minúsculas
      const taskText = task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return taskText.includes(searchText);
    }
  );

  // Función para actualizar estado 
  const onCompleted = (text) => {
    // Tenemos un array inicial y creamos una copia con "..."
    const newTasks = [...tasks];
    
    // Buscamos la tarea a cambiar su estado por medio de la función de arrays
    // findIndex ()
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );

    newTasks[taskIndex].completed = true; // Cambia estado a verdadero
    saveTasks(newTasks);
  };

  // Función para actualizar estado a no completado 
  const noCompleted = (text) => {
    // Tenemos un array inicial y creamos una copia con "..."
    const newTasks = [...tasks];
    
    // Buscamos la tarea a cambiar su estado por medio de la función de arrays
    // findIndex ()
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );

    newTasks[taskIndex].completed = false; // Cambia estado a falso
    saveTasks(newTasks);
  };

  // Función para eliminar tarea
  const deleteTask = (text) => {
    // Tenemos un array inicial y creamos una copia con "..."
    const newTasks = [...tasks];
    
    // Buscamos la tarea a cambiar su estado por medio de la función de arrays
    // findIndex ()
    const taskIndex = newTasks.findIndex(
      (task) => task.text === text
    );

    newTasks.splice(taskIndex, 1); // Eliminamos 1 elemento con splice()
    saveTasks(newTasks);
  };

  return (
    //Recibe un elemento que encapsula a todos los componentes
    <>
      <div className="app-tasks">
        <div className="cont-create">
          <ButtonCreateToDo />
        </div>
        <div className="cont-tasks">
          {/* Propiedades de componente */}
          <ToDoCounter completed={completedTasks} total={totalTasks} />

          {/* Podemos renderizar el mismo componente con distinta información */}
          {/* <ToDoCounter completed={3} total={5} />
          <ToDoCounter completed={4} total={5} /> */}
          <ToDoSearch 
            // Enviamos estadoa a componente
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />

          <ToDoList>
            {/* Crea un arreglo a partir del arreglo inicial con el método map */}
            {searchedTasks.map(task => (
              // Utilizamos la propiedad Key para identificar de forma única cada objeto del arreglo
              <ToDoItem 
                key={task.text} 
                text={task.text} 
                noCompleted={() => noCompleted(task.text)}
                completed={task.completed} 
                onCompleted={() => onCompleted(task.text)}
                deleteTask={() => deleteTask(task.text)}
              /> 
            ))}
          </ToDoList>
        </div>
      </div>
    </>
  );
}

export default App; 