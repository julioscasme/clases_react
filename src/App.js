import logo from './platzi.webp';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItems } from './TodoItems';
import { CreateTodoButton } from './CreateTodoButton';
import Toast from 'react-bootstrap/Toast';
import React from 'react';
import Card from 'react-bootstrap/Card';



const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el curso de React', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'Ver doramass bien apapachados <3', completed: true},
  { text: 'Usar estados derivados', completed: true},
  { text: 'Hacer que el marcador este por defecto en la dosis', completed: true},
]


function App() {
  const [todos, setTodos] = React.useState(defaultTodos); //Captura los valores del array
                                                          
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter( (todo) => { return todo.text.toLowerCase().includes(searchValue.toLowerCase())} );

  //Para completar un TOdo
  const onCompleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  //Para eliminar un TOdo
  const onDeleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1) ;
    setTodos(newTodos);
  };

  return (
    <>
<div
  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
>
  
<Card style={{ width: '30rem'}}>
      <Card.Body>
        <Card.Title> 
          <TodoCounter completed={completedTodos} total={totalTodos}/> </Card.Title>
        <Card.Text>

        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

      <TodoList >
        {searchedTodos.map(todo => (
          <TodoItems key={todo.text} text={todo.text} completed={todo.completed}
          onCompleted={ () => onCompleteTodo(todo.text)} 
          onDelete={ () => onDeleteTodo(todo.text)} 
          />
          ))}
      </TodoList>

        </Card.Text>
      </Card.Body>

      <CreateTodoButton />
    </Card>


    
</div>
    </>
  );
}

export default App;
