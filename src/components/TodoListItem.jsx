import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import CheckMark from '../assets/svgs/icon-check.svg'
import CrossIcon from '../assets/svgs/icon-cross.svg'


const TodoCheck = styled.input`
  display: none;
`

const TodoMarker = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 20px;
  width: 25px;
  height: 26px;
  border-radius: 100%;
  border: transparent;
  overflow: hidden;
  background: hsl(233, 14%, 35%);
  transition: background .1s;
  cursor: pointer;

  @media only screen and (max-width: 400px) {
    margin-right: 12px;
    width: 20px;
    height: 21px;
  }

  &:hover {
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }

  ${TodoCheck}:checked + & {
    background: url(${CheckMark}) center center no-repeat, linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%)) !important;
  }

  ${TodoCheck}:checked + & {
    &::before {
      background: transparent;
    }
  }

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    border-radius: inherit;
    border: transparent;
    background: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };

    ${TodoCheck}:checked + & {
      background: transparent;
    }
  }

  @media only screen and (max-width: 400px) {
    &::before {
      width: 18px;
      height: 18px;
    }
  }
`

const TodoInstruction = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover ${TodoMarker} {
    background: linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
  }
`

const TodoItemDelete = styled.a`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .2s;
  opacity: 0;
  visibility: hidden;
`

const TodoItem = styled.div`
  background-color: ${props => props.theme === "light" ? "hsl(0, 0%, 98%)" : "hsl(235, 24%, 19%)" };
  padding: 20px 25px;
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color:  ${props => props.theme === "light" ? "hsl(233, 11%, 84%)" : "#393a4b" };
  border-bottom-style: solid;
  color: inherit;
  cursor: pointer;

  &:hover ${TodoItemDelete} {
    opacity: 1;
    visibility: visible;
  }

  @media only screen and (max-width: 400px) {
    padding: 16px 18px;
  }
`

const TodoItemCrossImage = styled.img`
  @media only screen and (max-width: 400px) {
    width: 12px;
    height: 12px;
  }
`

const strikethrough = keyframes`
  from {
		transform: scaleX(0);
	}
	to {
		transform: scaleX(1);
	}
`;

const TodoText = styled.p`
  ${({ completed }) =>
    completed &&
    css`
      color: ${props => props.theme === "light" ? "hsl(233, 11%, 84%)" : "hsl(233, 14%, 35%)" };
      display: inline-block;
      position: relative;
      transition: all .5s linear;
      

      &:after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 0.5px;
        margin-top: -0.6em;
        background: ${props => props.theme === "light" ? "hsl(233, 11%, 84%)" : "hsl(233, 14%, 35%)" };;
        transform-origin: center left;
        animation: ${strikethrough} .5s linear;
        transition: transform .5s linear;
      }
    `
  }
`


const TodoListItem = ({ id, theme, text, completed, handleCheck, deleteTodoItem }) => {
  return (
    <TodoItem theme={theme} role="note">
      
      <TodoInstruction role="region">
        <TodoCheck type="checkbox" id={`todo-item-${id}`} checked={completed} ariaChecked={completed} onChange={() => handleCheck(id)}/>
        <TodoMarker htmlFor={`todo-item-${id}`} theme={theme} role="switch" ariaLabelledBy={`todo-item-${id}`} />
        <TodoText theme={theme} completed={completed} onClick={() => handleCheck(id)} role="region">{text}</TodoText>
      </TodoInstruction>
      <TodoItemDelete onClick={() => deleteTodoItem(id)} role="button">
        <TodoItemCrossImage src={CrossIcon} alt="Delete Item" />
      </TodoItemDelete>

    </TodoItem>
  )
}

export default TodoListItem