import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 70px;
  padding-right: 25px;
  border-radius: 4px;
  width: 100%;
  position: relative;
  margin-bottom: 25px;

  @media only screen and (max-width: 400px) {
    height: 48px;
    padding-left: 52px;
    margin-bottom: 16px;
  }


  &:before {
    content: "";
    position: absolute;
    top: 18px;
    left: 25px;
    width: 26px;
    height: 26px;
    border: 1px solid hsl(233, 14%, 35%);
    border-radius: 100%;
  }

  @media only screen and (max-width: 400px) {
    &:before {
      top: 12px;
      left: 20px;
      width: 20px;
      height: 20px;
    } 
  }
`
const TodoForm = styled.form``;

const TodoInput = styled.input`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  outline: 0;
  border: none;
  color: inherit;
  background-color: inherit;
  font-size: inherit;
  font-family: inherit;
`

const AddTodo = ({ theme, value, handleInput, addTodoItem }) => {
  return (
    <Wrapper theme={theme}>
      <TodoForm onSubmit={event => addTodoItem(event, value)}>
        <TodoInput placeholder="Create a new todo..." value={value} onChange={handleInput}/>
      </TodoForm>
    </Wrapper>
  )
}

export default AddTodo