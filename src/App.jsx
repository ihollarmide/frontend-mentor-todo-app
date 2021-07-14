import React, { useContext, useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { nanoid } from 'nanoid';
import { ThemeContext } from './context/ThemeContext.jsx';
import styled from 'styled-components'
import ThemeController from './components/ThemeController.jsx';
import GlobalStyles from './styles/Global';
import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import TodoListItem from './components/TodoListItem.jsx';
import TodoFooter from './components/TodoFooter.jsx';
import Info from './components/Info.jsx';

const ListContainer = styled.div`
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${props => props.theme === "light" ? "0px 35px 50px -15px rgba(194, 195, 214, 0.5)" : "0px 35px 50px -15px rgba(0, 0, 0, 0.5)" };

  @media only screen and (max-width: 600px) {
    overflow: unset;
  }
`;

const Container = styled.main`
  position: relative;
  z-index: 1000;
  padding-top: 48px;
  max-width: 545px;
  margin: 0 auto;

  @media only screen and (max-width: 600px) {
    padding-top: 33px;
  }
`


function App() {
  // Access theme variable from Glocal ThemeContext
  const { theme } = useContext(ThemeContext);

  // Input Value Controller
  const [value, setValue] = useState('');

  // Handle Input on input field
  const handleInput = event => {
    setValue(event.target.value);
  }

  // Todo Items Variable and Updater
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

  // Filter and Filter's setter
  const [filter, setFilter] = useState('All');


  // Filtered Todo Items to render based on the current/active filter selected
  let filteredTodoItems;
  if (filter === 'All') {
    filteredTodoItems = todoItems;
    console.log(filteredTodoItems.length);
  }

  if (filter === 'Active') {
    filteredTodoItems = todoItems.filter(todoItem => todoItem.completed === false);
    console.log(filteredTodoItems.length);
  }

  if (filter === 'Completed') {
    filteredTodoItems = todoItems.filter(todoItem => todoItem.completed === true);
    console.log(filteredTodoItems.length);
  }

  // Filter Setter function
  const activateFilter = filter => {
    setFilter(filter);
  }

  // Add Todo Items ---> Takes two arguments: event and value.
  // Value is what the user typed into the input field
  const addTodoItem = (event, value) => {

    // Prevents Default Behaviour
    event.preventDefault();

    // Create a new object with the text as the value
    const newTodoItem = { id: nanoid(), text: value, completed: false };

    // Spread the current todoItems objects and add the new Todo Item into an array
    // Set it as the new Todo Items Array
    setTodoItems([...todoItems, newTodoItem]);

    // Reset the value of the input field to empty
    setValue('');
  }

  // Handle TodoItem Check ---> Takes the id argument, the id here is the specific id of the todo item
  const handleCheck = id => {
    
    // Map through the old todoItems Array
    // Identify the todoItem checked by checking if the id of the current todoitem being mapped/looped  matched the id passed
    // Spread the other values in the clicked todoItem object and set the "completed" key value to the opposite of the current "completed" key value.
    // That is, if it's currently false, it is set to true, and if it's currently true, it is set to false.
    // Return the new todoItem object

    // Assign the result of the old todoItems Array to a new todoItems Array Variable
    
    const updatedTodoItems = todoItems.map(todoItem => {
      if (id === todoItem.id) {
        return {...todoItem, completed: !todoItem.completed }
      }
      return todoItem;
    })

    // Update todoItems with the new todoItems Array
    setTodoItems(updatedTodoItems);
  }

 
  // Delete Todo Items ---> Takes id argument
  const deleteTodoItem = id => {

    // Filter through the array of todoItems by removing the item that matched the id passed and returning only the items that don't match the id
    // Assign the new array to a new todoItems variable
    const remainingTodoItems = todoItems.filter(todoItem => id !== todoItem.id)

    // Update todoItems with the new todoItems variable
    setTodoItems(remainingTodoItems);
  }

  // Filter through todo items to return a new array with only uncompleted (completed === false) todo Items array
  let todoItemsLeft = todoItems.filter(todoItem => todoItem.completed === false)


  // Clear Completed todo Items
  const clearCompletedTodoItems = () => {
    // Filter through todo items to return a new array with only uncompleted (completed === false) todo Items array
    //  Assign the new return array to a new todoItems variable
    let uncompletedTodoItems = todoItems.filter(todoItem => todoItem.completed === false);
     

    // Update todoItems with the new todoItems variable
    setTodoItems(uncompletedTodoItems);
  }


  // Handles the dragging of the todoItems and updating of the todoItems array to reflect the new ordering ---> Takes in result as the argument.
  // Result includes details about what the updated state should be after the move/drag action.
  const handleOnDragEnd = result => {
    // Return if dragged out of the defined container
    if (!result.destination) return;

    // Create a copy of the todoItems array
    const items = Array.from(todoItems);


    // Use the result.source.index value to find the item from the new array and remove it using the splice method
    // That result is destructured, so there is a new object of reorderedItem that is the dragged item
    // Use the result.destination.index to add that item back into the array, but at it’s new location, again using splice
    const [ reorderedItem ] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    

    // Update todoItems with the new reordered todoItems variable
    setTodoItems(items);
  }


  return (
    <>
      <GlobalStyles theme={theme}/>
      <Container>
        <ThemeController />
        <AddTodo theme={theme} value={value} handleInput={handleInput} addTodoItem={addTodoItem}/>

        <ListContainer theme={theme}>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TodoList theme={theme}>
                    {
                      filteredTodoItems.map((todoItem, index) => (
                        <Draggable key={todoItem.id} draggableId={todoItem.id} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} role="list-item">
                              <TodoListItem id={todoItem.id} theme={theme} text={todoItem.text} completed={todoItem.completed} handleCheck={handleCheck} deleteTodoItem={deleteTodoItem}/>
                            </div>
                            
                          )}
                        </Draggable>
                      ))
                    }
                    {provided.placeholder}
                  </TodoList>
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <TodoFooter theme={theme} todoItemsLeft={todoItemsLeft.length} clearCompletedTodoItems={clearCompletedTodoItems} activateFilter={activateFilter} filter={filter}/>
        </ListContainer>
        <Info theme={theme}/>
      </Container>
    </>
  );
}

export default App;