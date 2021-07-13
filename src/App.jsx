import React, { useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { ThemeContext } from './context/ThemeContext.jsx';
import styled from 'styled-components'
import ThemeController from './components/ThemeController.jsx';
import GlobalStyles from './styles/Global';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import TodoListItem from './components/TodoListItem.jsx';
import TodoFooter from './components/TodoFooter.jsx';

const Container = styled.section`
  position: relative;
  z-index: 1000;
  padding-top: 55px;
  max-width: 545px;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    padding-top: 33px;
  }
`

function App() {
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = useState('');
  const [todoItems, setTodoItems] = useState([
    {
      id: nanoid(),
      text: "Complete online JavaScript course",
      completed: true
    },
    {
      id: nanoid(),
      text: "Jog around the park 3x",
      completed: false
    },
    {
      id: nanoid(),
      text: "10 minutes meditation",
      completed: false
    },
    {
      id: nanoid(),
      text: "Read for 1 hour",
      completed: false
    },
    {
      id: nanoid(),
      text: "Pick up groceries",
      completed: false
    },
    {
      id: nanoid(),
      text: "Complete Todo App on Frontend Mentor",
      completed: false
    },
  ])

  const [page, setPage] = useState('all')
  let shadowTodoItems;

  if (page === 'all') {
    shadowTodoItems = todoItems;
  }

  if (page === 'active') {
    shadowTodoItems = todoItems.filter(todoItem => todoItem.completed === false);
  }

  if (page === 'completed') {
    shadowTodoItems = todoItems.filter(todoItem => todoItem.completed === true);
  }


  const changePage = prop => {
    setPage(prop);
  }


  const handleInput = event => {
    setValue(event.target.value);
  }

  const addTodoItem = (event, value) => {
    event.preventDefault();
    const newTodoItem = { id: nanoid(), text: value, completed: false };
    setTodoItems([...todoItems, newTodoItem]);
    setValue('');
  }

  const handleCheck = id => {
    const updatedTodoItems = todoItems.map(todoItem => {
      if (id === todoItem.id) {
        return {...todoItem, completed: !todoItem.completed }
      }
      return todoItem;
    })
    setTodoItems(updatedTodoItems);
  }

  const deleteTodoItem = id => {
    const remainingTodoItems = todoItems.filter(todoItem => id !== todoItem.id)
    setTodoItems(remainingTodoItems);
  }

  let todoItemsLeft = todoItems.filter(todoItem => todoItem.completed === false)

  const clearCompletedTodoItems = () => {
    let uncompletedTodoItems = todoItems.filter(todoItem => todoItem.completed === false);
    setTodoItems(uncompletedTodoItems);
  }


  return (
    <>
      <GlobalStyles theme={theme}/>
      <Container>
        <ThemeController />
        <AddTodo theme={theme} value={value} handleInput={handleInput} addTodoItem={addTodoItem}/>
        <TodoList theme={theme}>
          {
            shadowTodoItems.map(todoItem => (
              <TodoListItem key={todoItem.id} id={todoItem.id} theme={theme} text={todoItem.text} completed={todoItem.completed} handleCheck={handleCheck} deleteTodoItem={deleteTodoItem} />
            ))
          }
          <TodoFooter theme={theme} todoItemsLeft={todoItemsLeft.length} clearCompletedTodoItems={clearCompletedTodoItems} changePage={changePage} page={page}/>
        </TodoList>
      </Container>
    </>
  );
}

export default App;